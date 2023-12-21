import { getServerSession } from 'next-auth';
import { authOptions } from '../lib/authOptions';
import { redirect } from 'next/navigation';
import Profile from '@/components/Profile';

const Profiles = async () => {
  const session = await getServerSession(authOptions);

  if (!session) redirect('/auth');

  return (
    <div className='flex items-center h-full justify-center'>
      <div className='flex flex-col'>
        <h1 className='text-3xl md:text-6xl text-white text-center'>Who is watching?</h1>
        <div className='flex items-center justify-center gap-8 mt-10'>
          <Profile name={session?.user?.name} />
        </div>
      </div>
    </div>
  );
};

export default Profiles;
