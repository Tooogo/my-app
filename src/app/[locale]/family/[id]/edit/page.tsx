import { getProfileById } from '@/app/services';
import ParentComponent from '@/app/components/ParentComponent';

// src/app/[locale]/family/[id]/edit/page.tsx

export default async function Page({ params }: { params: { id: string; locale: string } }) {
  const { id } = params;
  const profile = await getProfileById(id);

  return (
    <div>
      <h1>User Profile</h1>
      {profile ? <ParentComponent userData={profile} /> : <div>Profile not found</div>}
    </div>
  );
}
