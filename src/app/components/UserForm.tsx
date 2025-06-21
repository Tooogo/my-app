'use client'

import React, { useState } from 'react';
import { MongoProfile } from '../services/type';
import { defaultMongoProfile } from '@/constants/defaultMongoProfile';


export default function UserForm({ data, onSubmit }: { data: MongoProfile, onSubmit: (profile: MongoProfile) => Promise<void> }) {
  const [profile, setProfile] = useState<MongoProfile>(data ?? defaultMongoProfile);
  console.log(onSubmit);
  const isEditMode = data?._id ? true : false;

  const handleChange = (field: keyof MongoProfile) => (event: React.ChangeEvent<HTMLInputElement | HTMLSelectElement>) => {
    setProfile((prev) => ({ ...prev, [field]: event.target.value }));
  };

  // フォーム送信時の処理
  const handleSubmit = async (event: React.FormEvent) => {
    event.preventDefault();
    console.log(profile);
    await onSubmit(profile);

  };

  return (
    <div className="container mt-5">
      <div className="card shadow p-4">

        <h2 className="text-center mb-4">{isEditMode ? 'Edit Profile' : 'User Registration'}</h2>

        <form onSubmit={handleSubmit}>
          <div className="mb-3">
            <label htmlFor="name" className="form-label">Name:</label>
            <input type="text" id="name" className="form-control" value={profile.name} onChange={handleChange('name')} required />
          </div>
          <div className="mb-3">
            <label htmlFor="locale" className="form-label">Language:</label>
            <select id="locale" className="form-select" value={profile.locale} onChange={handleChange('locale')} required>
              <option value="en">English</option>
              <option value="ja">日本語</option>
            </select>
          </div>
          <div className="mb-3">
            <label htmlFor="hobby" className="form-label">Hobby:</label>
            <input type="text" id="hobby" className="form-control" value={profile.hobby} onChange={handleChange('hobby')} required />
          </div>
          <div className="mb-3">
            <label htmlFor="area" className="form-label">Area:</label>
            <input type="text" id="area" className="form-control" value={profile.area} onChange={handleChange('area')} required />
          </div>
          <div className="mb-3">
            <label htmlFor="club" className="form-label">Club:</label>
            <input type="text" id="club" className="form-control" value={profile.club} onChange={handleChange('club')} required />
          </div>
          <div className="mb-3">
            <label htmlFor="part_time_job" className="form-label">Part-time job:</label>
            <input type="text" id="part_time_job" className="form-control" value={profile.part_time_job} onChange={handleChange('part_time_job')} required />
          </div>
          <button type="submit" className="btn btn-primary w-100">{isEditMode ? 'Update' : 'Register'}</button>

        </form>
      </div>
    </div>
  );
}
