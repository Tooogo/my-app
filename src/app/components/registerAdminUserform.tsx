'use client';

import React, { useState } from 'react';
import { AdminProfile } from '../services/AdminUsertypes';
import { defaultAdminProfile } from '@/constants/defaultAdminProfile';
import { STRINGS } from '@/constants/strings';

type SubmitResult = { modifiedCount: number } | { insertedId: string };

export default function UserForm({
  data,
  onSubmit
}: {
  data: AdminProfile;
  onSubmit: (profile: AdminProfile) => Promise<SubmitResult>;
}) {
  const [profile, setProfile] = useState<AdminProfile>(data ?? defaultAdminProfile);
  const isEditMode = Boolean(profile._id);

  const handleChange = (field: keyof AdminProfile) => (event: React.ChangeEvent<HTMLInputElement>) => {
    setProfile((prev) => ({ ...prev, [field]: event.target.value }));
  };

  const handleSubmit = async (event: React.FormEvent) => {
    event.preventDefault();
    await onSubmit(profile);
  };

  return (
    <div className="container mt-5">
      <div className="card shadow p-4">
        <h2 className="text-center mb-4">{isEditMode ? STRINGS.admin.editTitle : STRINGS.admin.registrationTitle}</h2>
        <form onSubmit={handleSubmit}>
          <div className="mb-3">
            <label htmlFor="username" className="form-label">Username:</label>
            <input type="text" id="username" className="form-control" value={profile.username} onChange={handleChange('username')} required />
          </div>
          <div className="mb-3">
            <label htmlFor="email" className="form-label">Email:</label>
            <input type="email" id="email" className="form-control" value={profile.email} onChange={handleChange('email')} required />
          </div>
          <div className="mb-3">
            <label htmlFor="pass" className="form-label">Password:</label>
            <input type="password" id="pass" className="form-control" value={profile.pass} onChange={handleChange('pass')} required />
          </div>
          <button type="submit" className="btn btn-primary w-100">
            {isEditMode ? STRINGS.admin.updateButton : STRINGS.admin.registerButton}
          </button>
        </form>
      </div>
    </div>
  );
}
