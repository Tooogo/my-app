// app/components/UserForm.js
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
    <form onSubmit={handleSubmit}>
      <div>
        <label htmlFor="name">Name:</label>
        <input
          type="text"
          id="name"
          value={name}
          onChange={(e) => setName(e.target.value)}
          required
        />
      </div>
      <div>
        <label htmlFor="locale">Locale:</label>
        <select
          id="locale"
          value={locale}
          onChange={(e) => setLocale(e.target.value)}
          required
        >
          <option value="en">English</option>
          <option value="ja">日本語</option>
        </select>
      </div>
      <div>
        <label htmlFor="hobby">Hobby:</label>
        <input
          type="text"
          id="hobby"
          value={hobby}
          onChange={(e) => setHobby(e.target.value)}
          required
        />
      </div>
      <div>
        <label htmlFor="area">Area:</label>
        <input
          type="text"
          id="area"
          value={area}
          onChange={(e) => setArea(e.target.value)}
          required
        />
      </div>
      <div>
        <label htmlFor="club">Club:</label>
        <input
          type="text"
          id="club"
          value={club}
          onChange={(e) => setClub(e.target.value)}
          required
        />
      </div>
      <div>
        <label htmlFor="part_time_job">Part-time job:</label>
        <input
          type="text"
          id="part_time_job"
          value={part_time_job}
          onChange={(e) => setPart_time_job(e.target.value)}
          required
        />
      </div>
      {error && <p style={{ color: 'red' }}>{error}</p>}
      <button type="submit">Register</button>
    </form>
  );
}
