"use client";

import UserForm from './AdminUserForm';
import { AdminProfile } from '../services/AdminUsertypes';
import { authenticateUser } from '../actions/userActions';



const defaultProfile: AdminProfile = {
  _id: '',
  username: '',
  email: '',
  pass: '',
};

export default function ParentComponent({ userData }: { userData?: AdminProfile }) {
  const profile = userData ?? defaultProfile;
  const handleSubmit = async (profile: AdminProfile) => {
      return await authenticateUser(profile);
    };

  return <UserForm data={profile} onSubmit={handleSubmit} />;
}