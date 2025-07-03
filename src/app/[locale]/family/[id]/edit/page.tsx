import { getProfileById } from '@/app/services';
import ParentComponent from '@/app/components/ParentComponent';

// src/app/[locale]/family/[id]/edit/page.tsx

export default async function Page(props: { params: Promise<{id: string, locale: string}> }) {
  const resolvedParams = await props.params;  // ✅ `params` を `await` してから使う
  const id = resolvedParams.id;
  const profile = await getProfileById(id);

  return (
    <div>
      <h1>User Profile</h1>
      {profile ? <ParentComponent userData={profile} /> : <div>Profile not found</div>}
    </div>
  );
}
