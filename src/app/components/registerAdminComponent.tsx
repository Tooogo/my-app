"use client";

import UserForm from './registerAdminUserform';
import { AdminProfile } from '../services/AdminUsertypes';
import { defaultAdminProfile } from '@/constants/defaultAdminProfile';
import { registerAdminUser, updateAdminUser } from '../actions/userActions';

type SubmitResult = { modifiedCount: number } | { insertedId: string };

export default function ParentComponent({ userData }: { userData?: AdminProfile }) {
  const profile = userData ?? defaultAdminProfile;

  // ✅ return await を使い、DB関数の返り値をそのまま返す
  const handleSubmit = async (profile: AdminProfile): Promise<SubmitResult> => {
    if (profile._id) {
      return await updateAdminUser(profile._id, profile); // return await
    }
    return await registerAdminUser(profile); // else 削除
  };

  return <UserForm data={profile} onSubmit={handleSubmit} />;
}
