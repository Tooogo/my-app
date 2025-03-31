
import { getProfileById } from '@/app/services';
import ParentComponent from '@/app/components/ParentComponent';

export default async function HomePage({ params }: { params: { id: string } }) {
  const { id } = await params;
  const profile = await getProfileById(id);


  return (
    <div>
      <h1>User Profile</h1>
      {profile ? (
        <ParentComponent
          userData={profile}
        />
      ) : (
        <div>Profile not found</div>
      )}
    </div>
  );
}
