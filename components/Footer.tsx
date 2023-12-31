'use client';
import React from 'react';
import styled, { createGlobalStyle } from 'styled-components';
import { BsFillTelephoneFill, BsTwitter, BsGithub } from 'react-icons/bs';
import { AiFillHome } from 'react-icons/ai';
import { BiLogoGmail } from 'react-icons/bi';
import Image from 'next/image';
const GlobalStyle = createGlobalStyle`
@font-face {
  font-family: 'Ambit';
  src: url('/fonts/Ambit/Ambit-Regular.ttf') format('truetype');
}
`;

const Footer: React.FC = () => {
  return (
    <main id="footer">
      <div className="bg-gray-100 md:pt-4 md:pb-8 px-8 lg:px-36 flex lg:flex-row flex-col gap-6 lg:gap-0 justify-between items-center">
        <div className="flex gap-x-12 items-center justify-center">
          <a href="/">
            <Image
              src={'/logo.png'}
              alt="Picture of the author"
              width={100}
              height={100}
              style={{
                maxWidth: '100%',
                height: 'auto',
              }}
            />
          </a>
          <a
            href="https://twitter.com/coalministry"
            className="hover:scale-105 transition duration-300"
            style={{ fontSize: '24px', lineHeight: '24px' }}
          >
            <BsTwitter />
          </a>
          <a
            href="https://github.com/psidh/CoalRaker"
            className="hover:scale-105 transition duration-300"
            style={{ fontSize: '24px', lineHeight: '24px' }} // Adjust the font size and line height as needed
          >
            <BsGithub />
          </a>
        </div>
        <div className="flex gap-4">
          <div className="grid grid-cols-1 gap-4 items-center justify-center">
            <div className="flex flex-row hover:scale-105 transition duration-300 items-center justify-start">
              <BsFillTelephoneFill
                className="m-2"
                style={{ fontSize: '24px', lineHeight: '24px' }}
              />
              1800 1900 1800
            </div>
            <div className="flex flex-row items-center hover:scale-105 transition duration-300 justify-start">
              <BiLogoGmail
                className="m-2"
                style={{ fontSize: '24px', lineHeight: '24px' }}
              />
              Contact@gmail.com
            </div>
            <div className="flex flex-row hover:scale-105 transition duration-300 items-center justify-start">
              <AiFillHome
                className="m-2"
                style={{ fontSize: '24px', lineHeight: '24px' }}
              />
              Home
            </div>
          </div>
        </div>
      </div>
    </main>
  );
};

export default Footer;
