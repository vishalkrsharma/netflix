'use client';

import { signOut } from 'next-auth/react';

const Signout = () => {
  return (
    <button
      className='h-10 w-full bg-white'
      onClick={() => signOut()}
    >
      Sign out
    </button>
  );
};

export default Signout;
