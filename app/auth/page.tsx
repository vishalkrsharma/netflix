import AuthForm from '@/components/AuthForm';
import { getServerSession } from 'next-auth';
import { authOptions } from '../lib/authOptions';
import { redirect } from 'next/navigation';

const Auth = async () => {
  const session = await getServerSession(authOptions);

  if (session) {
    redirect('/');
  }

  return (
    <div className="relative h-full w-full bg-[url('/images/hero.jpg')] bg-no-repeat bg-center bg-fixed bg-cover">
      <div className='bg-black w-full h-full lg:bg-opacity-50'>
        <nav className='px-12 py-5'>
          <img
            src='/images/logo.png'
            className='h-12'
            alt='Logo'
          />
        </nav>
        <AuthForm />
      </div>
    </div>
  );
};

export default Auth;
