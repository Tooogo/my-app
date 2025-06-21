"use client";

import UserForm from './UserForm';
import { MongoProfile } from '../services/type';
import { defaultMongoProfile } from '@/constants/defaultMongoProfile';
import { registerUser, updateUser } from '../actions/userActions';


export default function ParentComponent({ userData }: { userData?: MongoProfile }) {
  // `userData` が `undefined` の場合は `defaultProfile` を使う
  const profile = userData ?? defaultMongoProfile;
  const handleSubmit = async (profile: MongoProfile) => {
    if (profile._id) {
      await updateUser(profile._id, profile);
    } else {
      await registerUser(profile);
    }
  };

  return <UserForm data={profile} onSubmit={handleSubmit} />;
}