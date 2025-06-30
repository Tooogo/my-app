"use client";

import UserForm from './registerAdminUserform';
import { AdminProfile } from '../services/AdminUsertypes';
import { defaultAdminProfile } from '@/constants/defaultAdminProfile';
import { registerAdminUser, updateAdminUser } from '../actions/userActions';


export default function ParentComponent({ userData }: { userData?: AdminProfile }) {
  const profile = userData ?? defaultAdminProfile;

  const handleSubmit = async (profile: AdminProfile) => {
    if (profile._id) {
      await updateAdminUser(profile._id, profile);
    } else {
      await registerAdminUser(profile);
    }
  };

  return <UserForm data={profile} onSubmit={handleSubmit} />;
}