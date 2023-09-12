import React from 'react';
import NavBar from '../components/NavBar';
import Footer from '../components/Footer';

const GetStartedPage: React.FC = () => {
  return (
    <div>
      <NavBar />
      <div className="min-h-screen">
        <div className=" px-4 py-8 flex flex-col justify-center items-center">
          <div className="p-6">
            <h1 className="text-3xl font-semibold mb-4">
              Get Started as a Coal Operator
            </h1>
            <p className="text-gray-700 mb-4">
              Welcome to our platform! As a coal operator, you can take
              advantage of our services to manage and monitor your coal
              production data efficiently.
            </p>
            <ul className="list-disc list-inside text-gray-700 mb-4">
              <li>Create an account to access our platform.</li>
              <li>
                Manage your coal production data for different mines and
                regions.
              </li>
              <li>Apply filters to analyze and visualize your data.</li>
              <li>
                Stay up-to-date with the latest coal industry trends and news.
              </li>
            </ul>
            <p className="text-gray-700">
              Get started today and streamline your coal operations!
            </p>
            <div className="mt-6">
              <a
                href="/login"
                target="_blank" // Replace with the actual signup page URL
                className="px-4 py-2 bg-green-700 hover:bg-green-800 text-white rounded-3xl transition duration-300 ease-in-out inline-block"
              >
                Sign Up Now !
              </a>
            </div>
          </div>
        </div>
      </div>
      <Footer />
    </div>
  );
};

export default GetStartedPage;
