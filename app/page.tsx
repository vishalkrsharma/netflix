import { getServerSession } from 'next-auth';
import { authOptions } from './lib/authOptions';
import { redirect } from 'next/navigation';
import Navbar from '@/components/Navbar';

const Home = async () => {
  const session = await getServerSession(authOptions);

  if (!session) redirect('/auth');

  return (
    <>
      <Navbar name={session?.user?.name} />
    </>
  );
};

export default Home;
