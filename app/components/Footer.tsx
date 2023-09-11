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
      <div className=" md:pt-4 md:pb-8 px-8 lg:px-36 flex lg:flex-row flex-col gap-6 lg:gap-0 justify-between items-center">
        <div className="flex gap-x-12 items-center justify-center">
          <Image
            src={'/logo.jpeg'}
            alt="Picture of the author"
            width={100}
            height={100}
          />
          <a
            href="https://twitter.com/coalministry"
            className="hover:scale-105 transition duration-300"
            style={{ fontSize: '36px', lineHeight: '36px' }}
          >
            <BsTwitter />
          </a>
          <a
            href="https://github.com/psidh/CoalRaker"
            className="hover:scale-105 transition duration-300"
            style={{ fontSize: '36px', lineHeight: '36px' }} // Adjust the font size and line height as needed
          >
            <BsGithub />
          </a>
        </div>
        <div className="flex gap-4">
          <div className="grid grid-cols-1 gap-4 items-center justify-center">
            <div className="flex flex-row items-center justify-start">
              <BsFillTelephoneFill
                className="hover:scale-150 transition duration-300 m-2"
                style={{ fontSize: '30px', lineHeight: '30px' }}
              />
              1800 1900 1800
            </div>
            <div className="flex flex-row items-center justify-start">
              <BiLogoGmail
                className="hover:scale-150 transition duration-300 m-2"
                style={{ fontSize: '30px', lineHeight: '30px' }}
              />
              Contact@gmail.com
            </div>
            <div className="flex flex-row items-center justify-start">
              <AiFillHome
                className="hover:scale-150 transition duration-300 m-2"
                style={{ fontSize: '30px', lineHeight: '30px' }}
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
