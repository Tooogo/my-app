import { getProfileById } from '@/app/services';
import ParentComponent from '@/app/components/ParentComponent';

interface PageProps {
  params: {
    id: string;
  };
}

export default async function HomePage({ params }: PageProps) {
  const { id } = params;
  const profile = await getProfileById(id);

  return (
    <div>
      <h1>User Profile</h1>
      {profile ? (
        <ParentComponent userData={profile} />
      ) : (
        <div>Profile not found</div>
      )}
    </div>
  );
}
