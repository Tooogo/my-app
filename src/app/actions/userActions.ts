'use server';

import { MongoAPIError } from 'mongodb';
import { WritingDataToMongoDB, updateUserInMongoDB } from '../services';
import { MongoProfile } from '../services/type';

export async function registerUser(data: MongoProfile) {
  return await WritingDataToMongoDB(data);
}

export async function updateUser(id: string, data: MongoProfile) {
  return await updateUserInMongoDB(id, data);
}
