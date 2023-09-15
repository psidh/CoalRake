'use client';
import React from 'react';
import NavBar from '../components/NavBar';
import Footer from '../components/Footer';
import { createGlobalStyle } from 'styled-components';
import Features from '../components/Features';
import Chat from '../components/Chat';
import ProblemSolutionTable from '../components/PS';
import DemurrageCalculator from '../components/BeerCharges';
import Image from 'next/image';
const GlobalStyle = createGlobalStyle`
  @font-face {
    font-family: 'Ambit';
    src: url('/fonts/Ambit/Ambit-Regular.ttf') format('truetype');
  }
`;
const About: React.FC = () => {
  return (
    <div style={{ fontFamily: 'Ambit, sans-serif' }}>
      <NavBar />
      
      <div className="min-h-fit">
        {/* Hero Section */}
        <div className="bg-yellow-500 text-white py-12">
          <div className="container mx-auto flex flex-col lg:flex-row items-center">
            <div className=" text-center lg:text-left lg:pr-8">
              <h1 className="text-4xl font-semibold mb-4">
                Who are WE ?
              </h1>
              <p className="text-lg mb-6">
              CRN Coal Rake Navigators is a team of dedicated professionals
            specializing in coal logistics optimization. We combine innovative
            technology and data-driven solutions to revolutionize the coal
            transportation industry.
              </p>
              <a
                href="/login"
                target="_blank" // Replace with the actual signup page URL
                className="px-6 py-3 bg-yellow-700 hover:bg-yellow-800 text-white rounded-full transition duration-300 ease-in-out inline-block text-lg"
              >
                Sign Up Now!
              </a>
            </div>
            <div className=" mt-6 lg:mt-0">
              {/* Next.js Image Component */}
              <div className="relative h-64 w-64 mx-auto lg:mx-0">
                <Image
                  // Replace with your image path
                  src="/info.svg"
                  alt="Coal Operator Image"
                  fill
                  sizes="100vw"
                  style={{
                    objectFit: 'cover',
                  }}
                />
              </div>
            </div>
          </div>
        </div>
      </div>
      <div className="p-4 container mx-auto font-semibold my-4 px-6 md:px-16 md:py-10 text-justify">
        <div className="flex flex-col md:grid-cols-2 gap-8 my-8">
          <div className="rounded-lg my-2 p-4 shadow-md">
            <img
              src="/about/ps.png" 
              alt="problem statement picture here"
              className="rounded-lg my-4"
            />
            <p className="text-gray-700">Problem Statement</p>
          </div>
        </div>
        <ProblemSolutionTable />
        <DemurrageCalculator />
        <section className="my-4">
          <h2 className="text-2xl md:text-4xl text-gray-700  font-semibold mt-8 mb-4">
            How We Solve the Problem
          </h2>
          <p className="text-lg md:text-xl text-gray-600 my-2">
            Our digital platform provides real-time updates on coal availability
            at railway sidings, ensuring efficient dispatch of trains to
            locations with sufficient coal. By optimizing transportation routes
            and reducing waiting times, we help companies save on demurrage
            charges and streamline operations.
          </p>
        </section>
      </div>
      <Features />
      <Chat />
      <Footer />
    </div>
  );
};

export default About;
