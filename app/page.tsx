import Signout from '@/components/Signout';
import { getServerSession } from 'next-auth';
import { authOptions } from './lib/authOptions';
import { redirect } from 'next/navigation';

const Home = async () => {
  const session = await getServerSession(authOptions);

  if (!session) redirect('/auth');

  return (
    <>
      <div>Netflix</div>
      <div>{session?.user?.name}</div>
      <Signout />
    </>
  );
};

export default Home;
