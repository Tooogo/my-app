// import { promises } from "dns";
// import { routing } from "../../i18n/routing"
// import { useLocale, useTranslations } from 'next-intl';
import client from "../../lib/mongodb";
import { MongoProfile } from "./type"
const DATABASE = "DATABASE_TEST1"
const COLLECTION = "COLLECTION_TEST1"
import { ObjectId } from 'mongodb'

function getDatabase() {
  return client.db(DATABASE);
}

function getCollection() {
  return getDatabase().collection<MongoProfile>(COLLECTION);
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
