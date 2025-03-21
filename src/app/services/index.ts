import client from "../../lib/mongodb";
import { MongoProfile } from "./User"
const DATABASE = "UserManagement"
const COLLECTION = "UserList"
import { ObjectId } from 'mongodb'
import argon2 from 'argon2'

function getDatabase() {
  return client.db(DATABASE);
}

function getCollection() {
  return getDatabase().collection<MongoProfile>(COLLECTION);
}

export async function WritingDataToMongoDB(data: MongoProfile): Promise<{ insertedId: string } | null> {
  try {
    const { name, locale, email, pass } = data;

    if (!pass) {
      throw new Error("Password is required");
    }

    //const hashedPassword = await argon2.hash(pass);
    const collection = getCollection();

    const result = await collection.insertOne({ name, locale, email, pass });

    if (!result.acknowledged) {
      throw new Error("Insert operation failed");
    }

    console.log("Successfully inserted:", result.insertedId.toString());
    return { insertedId: result.insertedId.toString() };
  } catch (error) {
    console.error("Error inserting data:", error);
    return null;
  }
}



export async function handler(data: MongoProfile): Promise<boolean> {
  const { email, pass } = data;

  if (!email || !pass) {
    throw new Error("Email and password are required");
  }

  const collection = getCollection();
  const user = await collection.findOne({ email });

  if (!user) {
    return false; // ユーザーが見つからない場合
  }

  const isValid = await argon2.verify(user.pass, pass);
  return isValid;
}



export async function updateUserInMongoDB(id: string, data: MongoProfile): Promise<{ modifiedCount: number }> {
  const { name, locale, email, pass } = data;

  const collection = await getCollection();
  const updateData = {
    name: name,
    locale: locale,
    email: email,
    pass: pass,
  };

  const result = await collection.updateOne({ _id: new ObjectId(id) }, { $set: updateData });
  return { modifiedCount: result.modifiedCount };
}




export async function getProfileWithNameAndID(locale: string): Promise<{ _id: ObjectId, name: string }[]> {
  return await getCollection()
    .find({ locale: locale })
    .project({ _id: 1, name: 1 })
    .toArray() as { _id: ObjectId, name: string }[];
}



export async function getProfiles(locale: string): Promise<MongoProfile[]> {
  return await getCollection().find({ locale }).toArray() as MongoProfile[];
}