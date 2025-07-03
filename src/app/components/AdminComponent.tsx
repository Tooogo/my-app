"use client";

import UserForm from './AdminUserForm';
import { AdminProfile } from '../services/AdminUsertypes';
import { defaultAdminProfile } from '@/constants/defaultAdminProfile';
import { authenticateUser } from '../actions/userActions';


export default function AdminComponent({ userData }: { userData?: AdminProfile }) {
  const profile: AdminProfile = userData ?? defaultAdminProfile;
  const handleSubmit = async (profile: AdminProfile) => {
      return await authenticateUser(profile);
    };

  return <UserForm data={profile} onSubmit={handleSubmit} />;
}