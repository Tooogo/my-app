// app/page.js
import UserForm from '../../../../components/UserForm';
import { getProfileById } from '@/app/services';

export default async function HomePage({ params }: { params: { id: string } }) {
  const { id } =  params;
  const profile = await getProfileById(id);
  if (!profile) {
    return <div>Profile not found</div>;
  }

  return (
    <div>
      <h1>User Profile</h1>
      <UserForm data={profile} />
    </div>
  );
}


/*
import UserForm from '../../../../components/UserForm';
import { getProfileById } from '@/app/services';

export default async function HomePage({ params }: {
    params: { id: string }
    }) {
    const { id } = await params;
    const profile = await getProfileById(id);
    delete profile["_id"];
    if (!profile) {
        return <div>{t('profileNotFound')}</div>; // プロフィールが見つからない場合のエラーメッセージ
      }
  return (
    <div>
      <h1>User Registration</h1>
      <UserForm data={profile}/>
    </div>
  );
}
  */