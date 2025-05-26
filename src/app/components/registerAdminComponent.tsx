"use client";

import UserForm from './registerAdminUserform';
import { AdminProfile } from '../services/AdminUsertypes';
import { registerAdminUser, updateAdminUser } from '../actions/userActions';



const defaultProfile: AdminProfile = {
  _id: '',
  username: '',
  email: '',
  pass: '',
};


export default function ParentComponent({ userData }: { userData?: AdminProfile }) {
  const profile = userData ?? defaultProfile;

  const handleSubmit = async (profile: AdminProfile) => {
    if (profile._id) {
      await updateAdminUser(profile._id, profile);
    } else {
      await registerAdminUser(profile);
    }
  };

  return <UserForm data={profile} onSubmit={handleSubmit} />;
}