'use client';
import React from 'react';
import NavBar from '../components/NavBar';
import Footer from '../components/Footer';
import { signOut } from 'firebase/auth';
import { auth } from '../config.js';
import { useRouter } from 'next/navigation.js';

const About: React.FC = () => {
  const navigator = useRouter();

  return (
    <div>
      <NavBar />
      <div className="p-4 container font-semibold mb-4 mx-auto pt-4 pb-8 px-6 md:px-16 md:py-10 text-justify">
        <h1 className="text-4xl font-bold mb-8">
          About CEM Coal Express Navigators
        </h1>
        <section className="mb-8">
          <h2 className="text-2xl font-semibold mb-2">Problem Statement</h2>
          <p className="text-gray-700">
            The coal transportation industry faces challenges with coal
            availability at railway sidings, resulting in demurrage charges due
            to waiting times for trains. CEM Coal Express Navigators aims to
            address this problem.
          </p>
        </section>
        <div className="grid grid-cols-1 md:grid-cols-2 gap-8 mb-8">
          <div className="bg-white dark:bg-black rounded-lg p-4 shadow-md">
            <img
              src="/loginage.png" // Replace with your image source
              alt="problem statement picture here"
              className="rounded-lg mb-4"
            />
            <p className="text-gray-700">
              This is the first image card with some information about it.
            </p>
          </div>
          <div className="bg-white dark:bg-black rounded-lg p-4 shadow-md">
            <img
              src="/image2.jpg" // Replace with your image source
              alt="Image 2"
              className="w-full h-auto rounded-lg mb-4"
            />
            <p className="text-gray-700">
              This is the second image card with some information about it.
            </p>
          </div>
        </div>

        <section className="mb-6">
          <h2 className="text-xl font-semibold mb-2">Who We Are</h2>
          <p className="text-gray-600">
            CEM Coal Express Navigators is a team of dedicated professionals
            specializing in coal logistics optimization. We combine innovative
            technology and data-driven solutions to revolutionize the coal
            transportation industry.
          </p>
        </section>
        <section className="mb-6">
          <h2 className="text-xl font-semibold mb-2">
            How We Solve the Problem
          </h2>
          <p className="text-gray-600">
            Our digital platform provides real-time updates on coal availability
            at railway sidings, ensuring efficient dispatch of trains to
            locations with sufficient coal. By optimizing transportation routes
            and reducing waiting times, we help companies save on demurrage
            charges and streamline operations.
          </p>
        </section>
        <section className="mb-6">
          <h2 className="text-xl font-semibold mb-2">
            How to Use This Application (For Railway Employees)
          </h2>
          <ol className="list-decimal pl-4 text-gray-600">
            <li>Log in to your account using your credentials.</li>
            <li>
              Search for available coal quantities at different railway sidings.
            </li>
            <li>
              Receive real-time updates on coal availability and transportation
              routes.
            </li>
            <li>
              Optimize coal transportation and reduce waiting times for trains.
            </li>
            <li>
              Save on demurrage charges and streamline your coal logistics
              operations.
            </li>
          </ol>
        </section>
        <section>
          <h2 className="text-xl font-semibold mb-2">Tech Stack</h2>
          <p className="text-gray-600">
            Our application is built using Next.js with TypeScript and leverages
            advanced algorithms and data analytics to provide accurate and
            real-time information to railway employees.
          </p>
        </section>
      </div>
      <Footer />
    </div>
  );
};

export default About;
