'use client'

import React, { useState, useEffect } from 'react';
import { AdminProfile } from '../services/AdminUsertypes';
import { useRouter } from 'next/navigation';

type Props = {
  data: AdminProfile;
  onSubmit: (profile: AdminProfile) => Promise<"OK" | "Invalid credentials">;
};

export default function UserForm({ data, onSubmit }: Props) {
  const [profile, setProfile] = useState<AdminProfile>(data);
  const [error, setError] = useState<string | null>(null);
  const [success, setSuccess] = useState<boolean>(false);
  const router = useRouter();

  const handleChange = (field: keyof AdminProfile) => (event: React.ChangeEvent<HTMLInputElement>) => {
    setProfile((prev) => ({ ...prev, [field]: event.target.value }));
  };

  const handleSubmit = async (event: React.FormEvent) => {
    event.preventDefault();
    setError(null);

    const result = await onSubmit(profile);

    if (result === "Invalid credentials") {
      setError("ログインに失敗しました。");
    } else {
      setSuccess(true); // 成功フラグを立てる
    }
  };

  useEffect(() => {
    if (success) {
      router.push('/en'); // クライアント遷移で安全にリダイレクト
    }
  }, [success, router]);

  return (
    <div className="container mt-5">
      <div className="card shadow p-4">
        <h2 className="text-center mb-4">User Login</h2>
        {error && <p className="text-danger text-center">{error}</p>}
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
