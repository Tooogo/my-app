'use server';

import { WritingDataToMongoDB, updateUserInMongoDB } from '../services';

export async function registerUser(data: FormData) {
  return await WritingDataToMongoDB(data);
}

export async function updateUser(id: string, data: FormData) {
  return await updateUserInMongoDB(id, data);
}
