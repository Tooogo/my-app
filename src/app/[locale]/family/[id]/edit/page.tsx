import { getProfileById } from '@/app/services';
import ParentComponent from '@/app/components/ParentComponent';


export default async function Page(props: { params: Promise<{id: string, locale: string}> }) {
  const resolvedParams = await props.params;
  const id = resolvedParams.id;
  console.log("Page ID:", id);
  const profile = await getProfileById(id);
  console.log("Fetched Profile:", profile);

  return (
    <div>
      <h1>User Profile</h1>
      {profile ? <ParentComponent userData={profile} /> : <div>Profile not found</div>}
    </div>
  );
}