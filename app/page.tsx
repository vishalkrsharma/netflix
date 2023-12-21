import Signout from '@/components/Signout';
import { getServerSession } from 'next-auth';
import { authOptions } from './lib/authOptions';
import { redirect } from 'next/navigation';

export default async function Home() {
  const session = await getServerSession(authOptions);

  if (!session) {
    redirect('/auth');
  }

  return (
    <>
      <div>Netflix</div>
      <Signout />
    </>
  );
}
