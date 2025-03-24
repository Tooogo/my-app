'use server';

import { WritingDataToMongoDB, updateUserInMongoDB, Authenticator, RegisterAdminUser } from '../services';
import { MongoProfile } from '../services/type';
import { AdminProfile } from '../services/AdminUsertypes';

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
