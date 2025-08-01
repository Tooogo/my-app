'use server';

import { WritingDataToMongoDB, updateUserInMongoDB, Authenticator, RegisterAdminUser, updateAdminInMongoDB } from '../services';
import { MongoProfile } from '../services/type';
import { AdminProfile } from '../services/AdminUsertypes';
import { deleteSession } from "@/lib/session/session";
import { ObjectId } from 'mongodb';
import type { LogoutResult } from '@/types/auth';



export async function registerUser(data: MongoProfile) {
  return await WritingDataToMongoDB(data);
}

export async function updateUser(id: string, data: MongoProfile) {
  const objectId = new ObjectId(id);
  const { _id, ...updateDocument } = data;
  return await updateUserInMongoDB(objectId, updateDocument);

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

export async function logoutAdminUser(): Promise<LogoutResult> {
  const success = await deleteSession();

  if (!success) {
    return { status: "ERROR", redirectTo: "/not-found" };
  }

  console.log("Admin user logged out");
  return { status: "OK", redirectTo: "/en" };
}