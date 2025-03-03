'use server';

import { WritingDataToMongoDB } from '../services';

export async function registerUser(data: FormData) {
  return await WritingDataToMongoDB(data);
}
