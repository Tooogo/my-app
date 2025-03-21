'use server';

import { WritingDataToMongoDB, handler } from '../services';
import { MongoProfile } from '../services/User';

export async function registerUser(data: MongoProfile) {
  return await WritingDataToMongoDB(data);
}

export async function UserAuthentication(data: MongoProfile) {
  return await handler(data);
}
