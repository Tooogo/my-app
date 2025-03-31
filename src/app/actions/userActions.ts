'use server';

import { WritingDataToMongoDB, updateUserInMongoDB, Authenticator, RegisterAdminUser } from '../services';
import { MongoProfile } from '../services/type';
import { AdminProfile } from '../services/AdminUsertypes';
import { deleteSession } from "@/lib/session";


export async function registerUser(data: MongoProfile) {
  return await WritingDataToMongoDB(data);
}

export async function updateUser(id: string, data: MongoProfile) {
  return await updateUserInMongoDB(id, data);
}


export async function registerAdminUser(data: AdminProfile) {
  return await RegisterAdminUser(data);
}

export async function authenticateUser(data: AdminProfile) {
  const login = await Authenticator(data);
  console.log(login);
  return login;
}

export async function logoutAdminUser(): Promise<"OK"> {
  await deleteSession(); // セッションを削除
  console.log("Admin user logged out"); // デバッグ用
  window.location.href = "/en"; // ログアウト後にリダイレクト
  return "OK";
}
