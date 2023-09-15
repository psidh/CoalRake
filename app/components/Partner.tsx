'use client';
import Image from 'next/image';
import React, { useEffect, useRef, useState } from 'react';
import AOS from 'aos';
import 'aos/dist/aos.css';

export default function Partner() {
  useEffect(() => {
    AOS.init({
      delay: 100,
      offset: 100,
      duration: 700,
      once: false,
      mirror: true,
      easing: 'ease-in-out',
    });
  }, []);

  return (
    <div
      data-aos="fade-in"
      className="flex flex-col justify-center items-center"
      style={{ fontFamily: 'Ambit, sans-serif' }}
    >
      <h1 className="text-4xl md:text-6xl font-semibold mb-6 mt-2">
        Our Clients
      </h1>
      <div className="md:grid md:grid-cols-2 flex flex-col justify-between items-center ">
        <div className="flex flex-col justify-center items-center space-y-3 m-6">
          <Image
            // Replace with the actual path to your client image
            src="/miniscoal.png"
            width={200}
            height={200}
            alt="Client 1"
            className="rounded"
            style={{
              maxWidth: '100%',
              height: 'auto',
              objectFit: 'cover',
            }}
          />
          <a
            href="https://coal.nic.in/" // Replace with the actual client 1 website URL
            target="_blank"
            className="px-8 py-2 border-2 
            border-black 
            text-black 
            hover:bg-black 
            hover:text-white 

            dark:border-white 
            dark:text-white 
            dark:hover:bg-white 
            dark:hover:text-black 
            dark:border-2  transition duration-300 rounded-full"
            type="submit"
          >
            Website
          </a>
        </div>
        <div className="flex flex-col justify-center items-center space-y-4 m-6">
          <Image
            // Replace with the actual path to your client image
            src="/rail.png"
            alt="Client 2"
            width={230}
            height={230}
            className="rounded"
            style={{
              maxWidth: '100%',
              height: 'auto',
              objectFit: 'cover',
            }}
          />
          <div className="flex flex-col justify-center items-center">
            <a
              href="https://indianrailways.gov.in/railwayboard/" // Replace with the actual client 2 website URL
              target="_blank"
              className="px-8 py-2 border-2 
              border-black 
              text-black 
              hover:bg-black 
              hover:text-white 

              dark:border-white 
              dark:text-white 
              dark:hover:bg-white 
              dark:hover:text-black 
              dark:border-2  transition duration-300 rounded-full"
              type="submit"
            >
              Website
            </a>
          </div>
        </div>
      </div>
    </div>
  );
}
