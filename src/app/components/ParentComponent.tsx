"use client";

import { usePathname } from 'next/navigation';
import UserForm from './UserForm';
import { MongoProfile } from '../services/User';
import { registerUser, UserAuthentication } from '../actions/userActions';


const defaultProfile: MongoProfile = {
  _id: '',
  name: '',
  locale: 'en',
  email: '',
  pass: '',
};

export default function ParentComponent({ userData }: { userData?: MongoProfile }) {
  const profile = userData ?? defaultProfile;
  const pathname = usePathname(); // 現在のページパスを取得

  const handleSubmit = async (profile: MongoProfile) => {
    if (pathname === '/submit') {
      await registerUser(profile);
      console.log('Registration completed');
    } else {{
        await UserAuthentication(profile);
        console.log('Authentication completed');
      }
    }
  };

  return <UserForm data={profile} onSubmit={handleSubmit} />;
}