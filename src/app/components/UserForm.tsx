'use client'

import React, { useState } from 'react';
import { MongoProfile } from '../services/User';


export default function UserForm({ data, onSubmit }: { data: MongoProfile, onSubmit: (profile: MongoProfile) => Promise<void> }) {
  const defaultProfile: MongoProfile = {
    _id: '',
    name: '',
    locale: 'en',
    email: '',
    pass: '',
  };
  const [profile, setProfile] = useState<MongoProfile>(data ?? defaultProfile);
  console.log(onSubmit);
  const isEditMode = data?._id ? true : false;

  const handleChange = (field: keyof MongoProfile) => (event: React.ChangeEvent<HTMLInputElement | HTMLSelectElement>) => {
    setProfile((prev) => ({ ...prev, [field]: event.target.value }));
  };

  const handleSubmit = async (event: React.FormEvent) => {
    event.preventDefault();
    console.log("Submitting profile:", profile); // 送信前のデータを確認
    try {
      const result = await onSubmit(profile);
      console.log("Insert result:", result); // MongoDB からのレスポンスを確認
    } catch (error) {
      console.error("Submission error:", error);
    }
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
            <label htmlFor="email" className="form-label">Email:</label>
            <input type="email" id="email" className="form-control" value={profile.email} onChange={handleChange('email')} required />
          </div>
          <div className="mb-3">
            <label htmlFor="pass" className="form-label">Password:</label>
            <input type="password" id="pass" className="form-control" value={profile.pass} onChange={handleChange('pass')} required />
          </div>
          <button type="submit" className="btn btn-primary w-100">{isEditMode ? 'Update' : 'Register'}</button>
        </form>
      </div>
    </div>
  );
}
