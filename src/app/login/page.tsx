import ParentComponent from '@/app/components/AdminComponent';

export default function HomePage() {

  return (
    <div>
      <h1>Login</h1>
      <ParentComponent />
    </div>
  );
}
export const dynamic = 'force-dynamic'