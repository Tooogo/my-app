// src/app/[locale]/submit/page.tsx
'use client';

import React from 'react';
import UserForm from '@/app/components/UserForm';
import { MongoProfile } from '@/app/services/type';
import { defaultMongoProfile } from '@/constants/defaultMongoProfile';

export default function SubmitPage() {
  const handleSubmit = async (profile: MongoProfile) => {
    try {
      const res = await fetch('/api/profiles', {
        method: 'POST',
        headers: { 'Content-Type': 'application/json' },
        body: JSON.stringify(profile),
      });

      if (!res.ok) {
        throw new Error('Failed to submit profile');
      }

      alert('プロフィールを登録しました');
    } catch (error) {
      console.error(error);
      alert('登録に失敗しました');
    }
  };

  return <UserForm data={defaultMongoProfile} onSubmit={handleSubmit} />;
}
