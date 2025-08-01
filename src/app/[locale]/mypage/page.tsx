import { getCurrentAdminProfile } from '@/app/services';
import ParentComponent from '@/app/components/registerAdminComponent';

export default async function HomePage() {
  const currentAdminProfile = await getCurrentAdminProfile();

  return (
    <div>
      <h1>User Profile</h1>
      {currentAdminProfile ? (
        <ParentComponent
          userData={currentAdminProfile}
        />
      ) : (
        <div>Profile not found</div>
      )}
    </div>
  );
}