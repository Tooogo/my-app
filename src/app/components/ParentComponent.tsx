"use client";

import UserForm from './UserForm';
import { MongoProfile } from '../services/type';
import { defaultMongoProfile } from '@/constants/defaultMongoProfile';
import { registerUser, updateUser } from '../actions/userActions';


export default function ParentComponent({ userData }: { userData?: MongoProfile }) {
  const profile = userData ?? defaultMongoProfile;
  console.log("Submitting profile._id:", profile._id);
  console.log("Type of profile._id:", typeof profile._id);
  const handleSubmit = async (profile: MongoProfile) => {
    if (profile._id) {
      await updateUser(profile._id, profile);
    } else {
      await registerUser(profile);
      console.log("New user registered with profile._id:", profile._id);
    }
  };

  return <UserForm data={profile} onSubmit={handleSubmit} />;
}
