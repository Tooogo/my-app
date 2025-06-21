import UserForm from '../../components/UserForm';
import { getSession } from '@/lib/session/getSession';

export default async function HomePage() {
  const session = await getSession(); // ✅ await を使う
  console.log('SubmitPage session:', session); // ✅ サーバーログに表示される

  return (
    <div>
      <h1>User Registration</h1>
      <UserForm />
    </div>
  );
}
