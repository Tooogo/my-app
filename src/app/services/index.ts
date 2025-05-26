// import { promises } from "dns";
// import { routing } from "../../i18n/routing"
// import { useLocale, useTranslations } from 'next-intl';
import client from "../../lib/mongodb";
import { AdminProfile } from "./AdminUsertypes";
import { MongoProfile } from "./type"
const DATABASE = "DATABASE_TEST1"
const COLLECTION = "COLLECTION_TEST1"
const AdminCollection = "Admin_User"
import { ObjectId } from 'mongodb'
import argon2 from 'argon2';
import { createSession } from "@/lib/session";
import { getSession } from "@/lib/session";

function getDatabase() {
  return client.db(DATABASE);
}

function getCollection() {
  return getDatabase().collection<MongoProfile>(COLLECTION);
}

function getAdminCollection() {
  return getDatabase().collection(AdminCollection);
}

// locale に応じたプロフィールを取得する関数
export async function getProfiles(locale: string): Promise<MongoProfile[]> {
  return await getCollection().find({ locale }).toArray() as MongoProfile[];
}

export async function getProfileById(id: string): Promise<MongoProfile> {
  return await getCollection().findOne({ _id: new ObjectId(id) }) as MongoProfile;
}

// locale に応じた1件のプロフィールを取得する関数
export async function getProfile(locale: string, id: string): Promise<MongoProfile | null> {
  const profiles = await getProfiles(locale);  // profilesの取得
  console.log(profiles)
  return profiles.find(profile => profile._id.toString() === id) || null;  // _idで検索して一致するものを返す
}

export async function getProfileWithNameAndID(locale: string): Promise<{ _id: ObjectId, name: string }[]> {
  return await getCollection()
    .find({ locale: locale })
    .project({ _id: 1, name: 1 })
    .toArray() as { _id: ObjectId, name: string }[];
}


export async function WritingDataToMongoDB(data: MongoProfile): Promise<{ insertedId: string }> {
  const { name, locale, hobby, area, club, part_time_job } = data;

  const collection = await getCollection();
  const result = await collection.insertOne({ name, locale, hobby, area, club, part_time_job });

  return { insertedId: result.insertedId.toString() };
}





export async function Authenticator(data: AdminProfile): Promise<"OK" | "Invalid credentials"> {
  //  ログイン画面で入力されたデータを受け取る
  const { email, pass } = data;
  const collection = getAdminCollection();
  const user = await collection.findOne({ email });

  console.log("Login attempt:", { email, pass }); // デバッグ用
  console.log("User found in DB:", user); // デバッグ用

  if (!user || !user.pass) {
    console.log("Authentication failed: Invalid credentials"); // デバッグ用
    return "Invalid credentials";
  }

  // ハッシュ化されたパスワードと比較
  const isValid = await argon2.verify(user.pass, pass);
  if (!isValid) {
    console.log("Authentication failed: Invalid credentials"); // デバッグ用
    return "Invalid credentials";
  }


  await createSession(user._id.toString());
  console.log("Authentication successful: OK"); // デバッグ用
  return "OK";
}

export async function RegisterAdminUser(data: AdminProfile): Promise<{ insertedId: string }> {
  const { username, email, pass } = data;
  const collection = getAdminCollection();

  // メールアドレスの重複チェック
  const existingUser = await collection.findOne({ email });
  if (existingUser) {
    throw new Error("このメールアドレスは既に登録されています");
  }

  // パスワードを Argon2 でハッシュ化
  const hashedPassword = await argon2.hash(pass);

  // ユーザー情報を保存
  const result = await collection.insertOne({
    username,
    email,
    pass: hashedPassword,  // ハッシュ化したパスワードを保存
  });

  return { insertedId: result.insertedId.toString() };
}

export async function getCurrentAdminProfile(): Promise<AdminProfile | null> {
  const session = await getSession();
  if (!session || typeof session.userId !== 'string') return null;

  const collection = getAdminCollection();
  const user = await collection.findOne({ _id: new ObjectId(session.userId) });

  if (!user) return null;

  return {
    _id: user._id.toString(),
    username: user.username,
    email: user.email,
    pass: user.pass
  };
}

export async function updateUserInMongoDB(id: string, data: MongoProfile): Promise<{ modifiedCount: number }> {
  const { name, locale, hobby, area, club, part_time_job } = data;


  const collection = await getCollection();
  const updateData = {
    name: name,
    locale: locale,
    hobby: hobby,
    area: area,
    club: club,
    part_time_job: part_time_job,

  };

  const result = await collection.updateOne({ _id: new ObjectId(id) }, { $set: updateData });
  return { modifiedCount: result.modifiedCount };
}

export async function updateAdminInMongoDB(id: string, data: AdminProfile): Promise<{ modifiedCount: number }> {
  const { username, email, pass } = data;

  const collection = await getAdminCollection();
  const updateData = {
    username: username,
    pass: pass,
    email: email,
  };

  const result = await collection.updateOne(
    { _id: new ObjectId(id) },
    { $set: updateData }
  );

  return { modifiedCount: result.modifiedCount };
}