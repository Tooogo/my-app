'use client'

import React, { useState } from 'react';
import { AdminProfile } from '../services/AdminUsertypes';

export default function UserForm({ onSubmit }: { onSubmit: (profile: AdminProfile) => Promise<"OK" | "Invalid credentials"> }) {
  const [profile, setProfile] = useState<AdminProfile>({ _id: '', username: '', email: '', pass: '' });
  const [error, setError] = useState<string | null>(null); // エラーメッセージ用

  const handleChange = (field: keyof AdminProfile) => (event: React.ChangeEvent<HTMLInputElement>) => {
    setProfile((prev) => ({ ...prev, [field]: event.target.value }));
  };

  // フォーム送信時の処理
  const handleSubmit = async (event: React.FormEvent) => {
    event.preventDefault();
    setError(null); // エラーリセット

    const result = await onSubmit(profile);

    if (result === "Invalid credentials") {
      setError("ログインに失敗しました。");
    } else {
      alert("ログイン成功！");
      window.location.href = "/en";
    }
  };


  return (
    <div className="container mt-5">
      <div className="card shadow p-4">
        <h2 className="text-center mb-4">User Login</h2>
        {error && <p className="text-danger text-center">{error}</p>} {/* エラーメッセージ表示 */}
        <form onSubmit={handleSubmit}>
          <div className="mb-3">
            <label htmlFor="email" className="form-label">Email:</label>
            <input type="text" id="email" className="form-control" value={profile.email} onChange={handleChange('email')} required />
          </div>
          <div className="mb-3">
            <label htmlFor="pass" className="form-label">Password:</label>
            <input type="password" id="pass" className="form-control" value={profile.pass} onChange={handleChange('pass')} required />
          </div>
          <button type="submit" className="btn btn-primary w-100">Login</button>
        </form>
      </div>
    </div>
  );
}
