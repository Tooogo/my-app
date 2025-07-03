'use server';

import { WritingDataToMongoDB, updateUserInMongoDB, Authenticator, RegisterAdminUser, updateAdminInMongoDB } from '../services';
import { MongoProfile } from '../services/type';
import { AdminProfile } from '../services/AdminUsertypes';
import { deleteSession } from "@/lib/session/session";
import { ObjectId } from 'mongodb';


export async function registerUser(data: MongoProfile) {
  return await WritingDataToMongoDB(data);
}


export async function updateUser(id: ObjectId, data: MongoProfile) {
  return await updateUserInMongoDB(id, data);
}


export async function registerAdminUser(data: AdminProfile) {
  return await RegisterAdminUser(data);
}

export async function updateAdminUser(id: string, data: AdminProfile) {
  return await updateAdminInMongoDB(id, data);
}

export async function authenticateUser(data: AdminProfile) {
  const login = await Authenticator(data);
  console.log(login);
  return login;
}

export async function logoutAdminUser(): Promise<"OK"> {
  await deleteSession();
  console.log("Admin user logged out");
  return "OK"; // ここでは副作用なし
}
