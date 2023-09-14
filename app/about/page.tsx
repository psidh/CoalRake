'use client';
import React from 'react';
import NavBar from '../components/NavBar';
import Footer from '../components/Footer';
import { createGlobalStyle } from 'styled-components';
import Features from '../components/features';


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
  <div className="p-4 container mx-auto font-semibold my-4 px-6 md:px-16 md:py-10 text-justify">
    <h1 className="text-2xl md:text-4xl text-gray-800 font-bold my-8">About</h1>
    <section className="my-8">
      <h2 className="text-2xl md:text-4xl text-gray-700 font-semibold my-2">Problem Statement</h2>
      <p className="text-gray-700 text-xl md:text-2xl">
        The coal transportation industry faces challenges with coal availability at railway sidings, resulting in demurrage charges due to waiting times for trains. CRN Coal Rake Navigators aims to address this problem.
      </p>
    </section>
    <div className="flex flex-col md:grid-cols-2 gap-8 my-8">
      <div className="bg-white dark:bg-black rounded-lg p-4 shadow-md">
        <img
          src="/about/ps.png" // Replace with your image source
          alt="problem statement picture here"
          className="rounded-lg my-4"
        />
        <p className="text-gray-700">
          Problem Statement
        </p>
      </div>
    </div>

    <section className="my-6">
      <h2 className="text-2xl md:text-4xl text-gray-700  font-semibold my-2">Who We Are</h2>
      <p className="text-lg md:text-xl text-gray-600">
        CRN Coal Rake Navigators is a team of dedicated professionals specializing in coal logistics optimization. We combine innovative technology and data-driven solutions to revolutionize the coal transportation industry.
      </p>
    </section>
    <section className="my-6">
      <h2 className="text-2xl md:text-4xl text-gray-700  font-semibold my-2">How We Solve the Problem</h2>
      <p className="text-lg md:text-xl text-gray-600">
        Our digital platform provides real-time updates on coal availability at railway sidings, ensuring efficient dispatch of trains to locations with sufficient coal. By optimizing transportation routes and reducing waiting times, we help companies save on demurrage charges and streamline operations.
      </p>
    </section>

    <div className="bg-white rounded-lg shadow-md p-6 md:p-8 flex flex-wrap items-center my-8">
      <div className="w-full md:w-2/3 md:pr-4">
        <div className="flex items-center my-4">
          <svg
            xmlns="http://www.w3.org/2000/svg"
            className="h-6 w-6 mr-2 text-blue-500"
            fill="none"
            viewBox="0 0 24 24"
            stroke="currentColor"
          >
            <path
              strokeLinecap="round"
              strokeLinejoin="round"
              strokeWidth="2"
              d="M12 6v6m0 0v6m0-6h.01M12 18h.01M21 12a9 9 0 11-18 0 9 9 0 0118 0z"
            />
          </svg>
          <h2 className="text-xl md:text-2xl font-semibold">
            How to Use This Application (For Railway Employees)
          </h2>
        </div>
        <ol className="list-decimal pl-4 text-gray-700">
          <li className="my-2">Log in to your account using your credentials.</li>
          <li className="my-2">
            Search for available coal quantities at different railway sidings.
          </li>
          <li className="my-2">
            Receive real-time updates on coal availability and transportation
            routes.
          </li>
          <li className="my-2">
            Optimize coal transportation and reduce waiting times for trains.
          </li>
          <li>Save on demurrage charges and streamline your coal logistics operations.</li>
        </ol>
      </div>
      <div className="w-full md:w-1/3 p-4">
        {/* Image 1 */}
        <img
          src="/about/logincard.png" // Replace with the path to your first image
          alt="Image Alt Text"
          className="rounded-lg shadow-md"
        />
      </div>
      <div className="w-full md:w-1/3 p-4">
        {/* Image 2 */}
        <img
          src="/about/dashcard.png" // Replace with the path to your second image
          alt="Image Alt Text"
          className="rounded-lg shadow-md"
        />
      </div>
    </div>

    
  </div>
  <Features />
  <Footer />
</div>

  );
};

export default About;
