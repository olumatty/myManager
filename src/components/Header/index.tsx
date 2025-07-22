'use client';
import React, { useCallback, useState } from 'react';
import { Button } from '../ui/Button';
import { GiExtraTime } from 'react-icons/gi';
import { LuMenu, LuCircleX } from 'react-icons/lu';
import { useRouter } from 'next/navigation';

const Header = () => {
  const [isOpen, setIsOpen] = useState(false);
  const navLinks = [
    { name: 'Features', link: '#home' },
    { name: 'Resources', link: '#' },
    { name: 'Pricing', link: '/pricing' },
    { name: 'About Us', link: '/about' },
  ];

  const router = useRouter();

  const handleOutsideClick = useCallback((e: MouseEvent) => {
    const target = (e.target as Element) || null;
    if (
      target &&
      (target.closest('.mobile-menu') || target.closest('.menu-toggle'))
    ) {
      return;
    }
    setIsOpen(false);
  }, []);

  const handleGoBack = () => {
    router.back();
  };

  const handleLogin = () => {
    router.push('/login');
  };

  const handleSignup = () => {
    router.push('/signup');
  };
  return (
    <div className="sticky top-0 z-[9999] flex w-full items-center justify-between bg-[#f6f6f6] p-4 md:py-4 md:px-10">
      <div className="flex items-center space-x-12">
        <div className="">
          <button
            onClick={handleGoBack}
            className="flex cursor-pointer items-center gap-2 text-xl font-semibold md:text-2xl"
          >
            <GiExtraTime className="h-8 w-8 text-[#6d47ff]" />
            <span className="text-xl text-gray-700 md:text-base">
              my<span className="text-[#6d47ff]">Manager</span>
            </span>
          </button>
        </div>

        <nav className="hidden items-center space-x-4 md:flex lg:space-x-6">
          {navLinks.map(links => (
            <a
              key={links.name}
              href={links.link}
              className="text-sm font-medium text-[#262626] transition-colors duration-300 hover:text-gray-700"
            >
              {links.name}
            </a>
          ))}
        </nav>
      </div>

      <div className="flex items-center gap-4">
        <Button
          onClick={handleLogin}
          variant="tertiary"
          className="hidden md:block"
        >
          Sign in
        </Button>
        <Button
          variant="primary"
          className="hidden transition-colors duration-300 hover:bg-opacity-70 md:block"
          onClick={handleSignup}
        >
          Get Started
        </Button>
      </div>

      {/* Mobile Nav */}

      <div className="flex items-center md:hidden">
        <button
          onClick={() => setIsOpen(!isOpen)}
          className="text-gray-700"
          aria-label={isOpen ? 'Close menu' : 'Open menu'}
          aria-expanded={isOpen}
        >
          {isOpen ? (
            <LuCircleX className="h-6 w-6" />
          ) : (
            <LuMenu className="h-6 w-6" />
          )}
        </button>
      </div>

      {/* Mobile Menu */}
      {isOpen && (
        <div
          className="mobile-menu fixed inset-x-0 top-[60px] z-50 flex flex-col items-center justify-center bg-black/60 opacity-100 transition-opacity duration-300 ease-in-out md:hidden"
          role="dialog"
          aria-labelledby="mobile-menu"
        >
          <nav className="flex w-full flex-col space-y-6 bg-white p-6 shadow-xl">
            {navLinks.map(link => (
              <a
                key={link.name}
                href={link.link}
                className="text-base font-medium text-[#262626] transition-colors duration-300 hover:text-gray-700"
              >
                {link.name}
              </a>
            ))}

            {/* Buttons visible on mobile */}
            <div className="mt-6 flex flex-col gap-4">
              <Button variant="tertiary" className="w-full text-base">
                Sign in
              </Button>
              <Button
                variant="primary"
                className="flex w-full items-center justify-center text-base"
                onClick={handleLogin}
              >
                Get Started
              </Button>
            </div>
          </nav>
        </div>
      )}
    </div>
  );
};

export default Header;
