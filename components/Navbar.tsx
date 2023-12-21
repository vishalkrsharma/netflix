'use client';

import NavbarItem from './NavbarItem';
import { FaSearch, FaBell } from 'react-icons/fa';
import { useCallback, useEffect, useState } from 'react';
import { FaChevronDown } from 'react-icons/fa6';
import MobileMenu from './MobileMenu';
import AccountMenu from './AccountMenu';

const TOP_OFFSET = 66;

const Navbar = ({ name }: { name: string | null | undefined }) => {
  const [showMobileMenu, setShowMobileMenu] = useState(false);
  const [showAccountMenu, setShowAccountMenu] = useState(false);
  const [showBackground, setShowBackground] = useState(false);

  useEffect(() => {
    const handleScroll = () => {
      if (window.scrollY >= TOP_OFFSET) setShowBackground(true);
      else setShowBackground(false);
    };

    window.addEventListener('scroll', handleScroll);

    return () => {
      window.removeEventListener('scroll', handleScroll);
    };
  }, []);

  const toggleMobileMenu = useCallback(() => {
    setShowMobileMenu((current) => !current);
  }, [setShowMobileMenu]);

  const toggleAccountMenu = useCallback(() => {
    setShowAccountMenu((current) => !current);
  }, [setShowAccountMenu]);

  return (
    <nav className='w-full fixed z-40'>
      <div className={`px-4 md:px-16 py-6 flex flex-row items-center transition duration-500 ${showBackground && 'bg-zinc-900 bg-opacity-90'}`}>
        <img
          className='h-4 lg:h-7'
          src='/images/logo.png'
          alt='Logo'
        />
        <div className='flex-row ml-8 gap-7 hidden lg:flex'>
          <NavbarItem label='Home' />
          <NavbarItem label='Series' />
          <NavbarItem label='Films' />
          <NavbarItem label='New & Popular' />
          <NavbarItem label='My List' />
          <NavbarItem label='Browse by languages' />
        </div>
        <div
          className='lg:hidden flex flex-row items-center gap-2 ml-8 cursor-pointer relative'
          onClick={toggleMobileMenu}
        >
          <p className='text-white font-medium text-sm'>Browse</p>
          <FaChevronDown className={`text-white transition text-sm ${showMobileMenu ? 'rotate-180' : 'rotate-0'}`} />
          <MobileMenu visible={showMobileMenu} />
        </div>
        <div className='flex flex-row ml-auto gap-7 items-center'>
          <div className='text-gray-200 hover:text-gray-300 cursor-pointer transition'>
            <FaSearch />
          </div>
          <div className='text-gray-200 hover:text-gray-300 cursor-pointer transition'>
            <FaBell />
          </div>
          <div
            className='flex flex-row items-center gap-2 cursor-pointer relative'
            onClick={toggleAccountMenu}
          >
            <div className='w-6 h-6 lg:w-10 lg:h-10 rounded-md overflow-hidden'>
              <img
                src='/images/default-blue.png'
                alt='Profile'
              />
            </div>
            <FaChevronDown className={`text-white transition text-sm ${showAccountMenu ? 'rotate-180' : 'rotate-0'}`} />
            <AccountMenu
              visible={showAccountMenu}
              name={name}
            />
          </div>
        </div>
      </div>
    </nav>
  );
};

export default Navbar;
