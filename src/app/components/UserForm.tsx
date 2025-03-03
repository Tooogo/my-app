'use client';

import { useState } from 'react';
import { registerUser } from '../actions/userActions';

export default function UserForm() {
  const [name, setName] = useState('');
  const [locale, setLocale] = useState('en');
  const [hobby, setHobby] = useState('');
  const [area, setArea] = useState('');
  const [club, setClub] = useState('');
  const [part_time_job, setPart_time_job] = useState('');
  const [error, setError] = useState(null);

  const handleSubmit = async (event) => {
    event.preventDefault();
    setError(null);

    const formData = new FormData();
    formData.append('name', name);
    formData.append('locale', locale);
    formData.append('hobby', hobby);
    formData.append('area', area);
    formData.append('club', club);
    formData.append('part_time_job', part_time_job);

    try {
      await registerUser(formData);
      alert('User registered successfully');
      setName('');
      setLocale('en');
      setHobby('');
      setArea('');
      setClub('');
      setPart_time_job('');
    } catch (err) {
      setError(err.message);
    }
  };

  return (
    <div className="container mt-5">
      <div className="card shadow p-4">
        <h2 className="text-center mb-4">User Registration</h2>
        <form onSubmit={handleSubmit}>
          <div className="mb-3">
            <label htmlFor="name" className="form-label">Name:</label>
            <input
              type="text"
              id="name"
              className="form-control"
              value={name}
              onChange={(e) => setName(e.target.value)}
              required
            />
          </div>
          <div className="mb-3">
            <label htmlFor="locale" className="form-label">Language:</label>
            <select
              id="locale"
              className="form-select"
              value={locale}
              onChange={(e) => setLocale(e.target.value)}
              required
            >
              <option value="en">English</option>
              <option value="ja">日本語</option>
            </select>
          </div>
          <div className="mb-3">
            <label htmlFor="hobby" className="form-label">Hobby:</label>
            <input
              type="text"
              id="hobby"
              className="form-control"
              value={hobby}
              onChange={(e) => setHobby(e.target.value)}
              required
            />
          </div>
          <div className="mb-3">
            <label htmlFor="area" className="form-label">Area:</label>
            <input
              type="text"
              id="area"
              className="form-control"
              value={area}
              onChange={(e) => setArea(e.target.value)}
              required
            />
          </div>
          <div className="mb-3">
            <label htmlFor="club" className="form-label">Club:</label>
            <input
              type="text"
              id="club"
              className="form-control"
              value={club}
              onChange={(e) => setClub(e.target.value)}
              required
            />
          </div>
          <div className="mb-3">
            <label htmlFor="part_time_job" className="form-label">Part-time job:</label>
            <input
              type="text"
              id="part_time_job"
              className="form-control"
              value={part_time_job}
              onChange={(e) => setPart_time_job(e.target.value)}
              required
            />
          </div>
          {error && <p className="text-danger">{error}</p>}
          <button type="submit" className="btn btn-primary w-100">Register</button>
        </form>
      </div>
    </div>
  );
}
