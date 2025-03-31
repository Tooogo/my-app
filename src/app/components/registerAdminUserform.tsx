'use client'

import React, { useState } from 'react';
import { AdminProfile } from '../services/AdminUsertypes';

export default function UserForm({ onSubmit }: { onSubmit: (profile: AdminProfile) => Promise<{ insertedId: string } | string> }) {
  const [profile, setProfile] = useState<AdminProfile>({ _id: '', username: '', email: '', pass: '' });
  const [error, setError] = useState<string | null>(null); // エラーメッセージ用
  const [success, setSuccess] = useState<string | null>(null); // 成功メッセージ用

  const handleChange = (field: keyof AdminProfile) => (event: React.ChangeEvent<HTMLInputElement>) => {
    setProfile((prev) => ({ ...prev, [field]: event.target.value }));
  };

  // フォーム送信時の処理（ユーザー登録）
  const handleSubmit = async (event: React.FormEvent) => {
    event.preventDefault();
    setError(null);
    setSuccess(null);

    try {
      const result = await onSubmit(profile);

      if (typeof result === "string") {
        setError(result);
      } else {
        setSuccess("登録成功！");
        alert("登録成功！");
      }
    } catch (err) {
      setError("登録に失敗しました。");
    }
  };

  return (
    <div className="container mt-5">
      <div className="card shadow p-4">
        <h2 className="text-center mb-4">User Registration</h2>
        {error && <p className="text-danger text-center">{error}</p>} {/* エラーメッセージ表示 */}
        {success && <p className="text-success text-center">{success}</p>} {/* 成功メッセージ表示 */}
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
          <button type="submit" className="btn btn-primary w-100">Register</button>
        </form>
      </div>
    </div>
  );
}
