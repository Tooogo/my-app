import { getProfileById } from '@/app/services';
import UserForm from '../../../../components/UserForm';

export default async function HomePage({ params }: { params: { id: string } }) {
  const { id } = await params;
  const profile = await getProfileById(id);

  return (
    <div>
      <h1>User Profile</h1>
      {profile ? (
        <UserForm
          data={profile} 
        />
      ) : (
        <div>Profile not found</div>
      )}
    </div>
  );
}