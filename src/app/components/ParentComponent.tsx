"use client";

import UserForm from './UserForm';
import { MongoProfile } from '../services/type';
import { registerUser, updateUser } from '../actions/userActions';


const defaultProfile: MongoProfile = {
  _id: '',
  name: '',
  locale: 'en',
  hobby: '',
  area: '',
  club: '',
  part_time_job: '',
  self_introduction: [],
};

export default function ParentComponent({ userData }: { userData?: MongoProfile }) {
  // `userData` が `undefined` の場合は `defaultProfile` を使う
  const profile = userData ?? defaultProfile;
  const handleSubmit = async (profile: MongoProfile) => {
    if (profile._id) {
      await updateUser(profile._id, profile);
    } else {
      await registerUser(profile);
    }
  };

  return <UserForm data={profile} onSubmit={handleSubmit} />;
}