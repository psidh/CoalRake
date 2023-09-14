'use client';
import React, { useState } from 'react';
import styled, { createGlobalStyle } from 'styled-components';
import Image from 'next/image';
import { useRouter } from 'next/navigation.js';
import { signInWithEmailAndPassword } from 'firebase/auth';
import { createUserWithEmailAndPassword } from 'firebase/auth/cordova';
import { getAuth, signOut } from 'firebase/auth';
import { auth } from '../config.js';

const GlobalStyle = createGlobalStyle`
  @font-face {
    font-family: 'Ambit';
    src: url('/fonts/Ambit/Ambit-Regular.ttf') format('truetype');
  }
`;

interface NavBarProps {
  // Define props here if any
}

const CustomNav: React.FC<NavBarProps> = () => {
  const navigator = useRouter();

  const [isNavOpen, setIsNavOpen] = useState<boolean>(false);

  const toggleNav = () => {
    setIsNavOpen(!isNavOpen);
  };

  return (
    <div>
      <div className="mx-8  lg:mx-20 flex justify-between font-semibold text-xl py-8 md:py-10">
        <div className="flex flex-row items-center justify-center font-semibold text-xl md:space-x-4">
          <a className="hover:scale-105 transition duration-300" href="/">
            <div className="flex  items-center ">
              <span>Home</span>
            </div>
          </a>
          {/* image of logos INDIA */}

          <Image
            src="/azadi.png"
            alt="India"
            width={100} // Set the desired width
            height={60} // Set the desired height
            className="rounded overflow-hidden"
          />

          <Image
            src="/g20.png"
            alt="India"
            width={100} // Set the desired width
            height={60} // Set the desired height
            className="rounded overflow-hidden"
          />
        </div>
        <div className="gap-14 hidden lg:flex items-center">
          <a className="  hover:text-blue-600" href="/about">
            About
          </a>
          <a className="  hover:text-blue-600" href="/#getstarted">
            Get Started
          </a>
          <a className="  hover:text-blue-600" href="/#blog">
            Sign Out
          </a>
        </div>
        <svg
          onClick={toggleNav} // Add onClick event to toggle navigation
          xmlns="http://www.w3.org/2000/svg"
          width="24"
          height="24"
          viewBox="0 0 24 24"
          fill="none"
          stroke="currentColor"
          strokeWidth={2}
          strokeLinecap="round"
          strokeLinejoin="round"
          className="flex flex-col lg:hidden items-center justify-end w-6 h-6 cursor-pointer" // Add cursor-pointer to indicate it's clickable
        >
          <line x1="3" y1="12" x2="21" y2="12" />
          <line x1="3" y1="6" x2="21" y2="6" />
          <line x1="3" y1="18" x2="21" y2="18" />
        </svg>
      </div>

      {isNavOpen && ( // Render the navigation links if isNavOpen is true
        <div className="flex flex-col lg:hidden font-semibold text-lg ">
          <a className="m-8   hover:text-blue-600" href="/about">
            About
          </a>
          <a className="hover:text-blue-600 m-8" href="/getstarted">
            Get Started
          </a>
          <a className="m-8   hover:text-blue-600" href="/">
            <button
              onClick={() => {
                signOut(auth)
                  .then(() => {
                    navigator.replace('/');
                  })
                  .catch((error) => {
                    console.log(error);
                  });
              }}
            >
              Sign Out
            </button>
          </a>
        </div>
      )}
    </div>
  );
};

export default CustomNav;
