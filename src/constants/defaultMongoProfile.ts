// File: src/constants/defaultMongoProfile.ts

import { MongoProfile } from '@/app/services/type';
import { ObjectId } from 'mongodb';

export const defaultMongoProfile: MongoProfile = {
  _id: null as unknown as ObjectId,
  name: '',
  locale: 'en',
  hobby: '',
  area: '',
  club: '',
  part_time_job: '',
  self_introduction: [],
};