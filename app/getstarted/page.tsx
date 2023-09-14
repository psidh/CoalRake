import React from 'react';
import NavBar from '../components/NavBar';
import Footer from '../components/Footer';
import 'tailwindcss/tailwind.css'; // Import Tailwind CSS
import Image from "next/image";
import Chat from '../components/Chat';
const GetStartedPage = () => {
  return (
    <div>
      <NavBar />
      <div className="min-h-screen">
        {/* Hero Section */}
        <div className="bg-blue-400 text-white py-12">
      <div className="container mx-auto flex flex-col lg:flex-row items-center">
        <div className=" text-center lg:text-left lg:pr-8">
          <h1 className="text-4xl font-semibold mb-4">
            Get Started as a Coal Operator
          </h1>
          <p className="text-lg mb-6">
            Welcome to our platform! As a coal operator, you can take advantage of our services to manage and monitor your coal production data efficiently.
          </p>
          <a
            href="/login"
            target="_blank" // Replace with the actual signup page URL
            className="px-6 py-3 bg-blue-600 hover:bg-blue-700 text-white rounded-full transition duration-300 ease-in-out inline-block text-lg"
          >
            Sign Up Now!
          </a>
        </div>
        <div className=" mt-6 lg:mt-0">
          {/* Next.js Image Component */}
          <div className="relative h-64 w-64 mx-auto lg:mx-0">
            <Image
              // Replace with your image path
              src="/worker.svg"
              alt="Coal Operator Image"
              fill
              sizes="100vw"
              style={{
                objectFit: "cover"
              }} />
          </div>
        </div>
      </div>
    </div>

        {/* Slides Section */}
        <div className="bg-gray-100 py-12">
          <div className="container mx-auto">
            <div className="text-center mb-6">
              <h2 className="text-3xl font-semibold">Why Choose Us?</h2>
              <p className="text-gray-700 mt-2">
                Discover the benefits of our platform.
              </p>
            </div>
            <div className="slick-carousel">
              {/* Slide 1 */}
              <div className="bg-white p-6 rounded-t-xl shadow-lg">
                <h3 className="text-xl font-semibold mb-2">
                  Efficient Data Management
                </h3>
                <p className="text-gray-700">
                  Manage your coal production data for different mines and
                  regions with ease.
                </p>
              </div>

              {/* Slide 2 */}
              <div className="bg-white p-6 shadow-xl">
                <h3 className="text-xl font-semibold mb-2">
                  Advanced Analytics
                </h3>
                <p className="text-gray-700">
                  Apply filters and analyze your data to make informed
                  decisions.
                </p>
              </div>

              {/* Slide 3 */}
              <div className="bg-white p-6 rounded-b-xl shadow-lg">
                <h3 className="text-xl font-semibold mb-2">Stay Informed</h3>
                <p className="text-gray-700">
                  Stay up-to-date with the latest coal industry trends and news.
                </p>
              </div>
            </div>
          </div>
        </div>

        {/* Image Cards Section */}
        <div className="bg-gray-200 py-12">
          <div className="container mx-auto text-center">
            <h2 className="text-3xl font-semibold mb-6">
              Explore Our Features
            </h2>
            <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-6">
              {/* Card 1 */}
              <div className="bg-white p-6 rounded-lg shadow-lg">
                <img
                  src="/image1.jpg"
                  alt="Feature 1"
                  className="mb-4 mx-auto"
                />
                <h3 className="text-xl font-semibold mb-2">Feature 1</h3>
                <p className="text-gray-700">
                  Lorem ipsum dolor sit amet, consectetur adipiscing elit.
                </p>
              </div>

              {/* Card 2 */}
              <div className="bg-white p-6 rounded-lg shadow-lg">
                <img
                  src="/image2.jpg"
                  alt="Feature 2"
                  className="mb-4 mx-auto"
                />
                <h3 className="text-xl font-semibold mb-2">Feature 2</h3>
                <p className="text-gray-700">
                  Lorem ipsum dolor sit amet, consectetur adipiscing elit.
                </p>
              </div>

              {/* Card 3 */}
              <div className="bg-white p-6 rounded-lg shadow-lg">
                <img
                  src="/image3.jpg"
                  alt="Feature 3"
                  className="mb-4 mx-auto"
                />
                <h3 className="text-xl font-semibold mb-2">Feature 3</h3>
                <p className="text-gray-700">
                  Lorem ipsum dolor sit amet, consectetur adipiscing elit.
                </p>
              </div>
            </div>
          </div>
        </div>

        {/* Additional Sections */}
        {/* Add more sections with content, headings, and images as needed */}
      </div>
      <div className="bg-gray-200 py-12">
          <div className="container mx-auto ">
      <div className="bg-white rounded-lg shadow-md p-6 md:p-8 flex flex-wrap items-center my-8">
      <div className="w-full md:w-2/3 md:pr-4 my-4">
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
          <li className="my-4">Log in to your account using your credentials.</li>
          <li className="my-4">
            Search for available coal quantities at different railway sidings.
          </li>
          <li className="my-4">
            Receive real-time updates on coal availability and transportation
            routes.
          </li>
          <li className="my-4">
            Optimize coal transportation and reduce waiting times for trains.
          </li>
          <li>Save on demurrage charges and streamline your coal logistics operations.</li>
        </ol>
      </div>
      <div className="w-full md:w-1/3 p-4 my-2">
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
    </div>
      <Chat />
      <Footer />
    </div>
  );
};

export default GetStartedPage;
