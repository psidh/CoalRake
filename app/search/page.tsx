'use client';
import React, { useState } from 'react';
import NavBar from '../components/NavBar';
import Footer from '../components/Footer';
import { AiOutlineSearch } from 'react-icons/ai';
const Login: React.FC = () => {
  const [isLogin, setIsLogin] = useState(true);

  const toggleLogin = () => {
    setIsLogin(!isLogin);
  };

  return (
    <div style={{ fontFamily: 'Ambit, sans-serif' }}>
      <NavBar />
      <main>
        <div
          className="bg-cover bg-center mt-8 mb-8 flex flex-row-reverse sm:flex-col items-center justify-center sm:bg-left md:bg-center bg-opacity-90"
          style={{
            backgroundImage: 'url("/login.png")',
            backgroundRepeat: 'no-repeat',
            backgroundPosition: 'center',
            minHeight: '100vh',
            backgroundSize: 'cover',
          }}
        >
          <div className="w-2/3 flex  items-center justify-center md:mr-8 ">
            <div className="bg-blue-50 bg-opacity-50 rounded-xl p-4 sm:p-8 shadow-lg">
              <h2 className="text-2xl font-semibold mb-4"></h2>
              <div className="mb-4">
                <div className="relative">
                  <label className="block text-gray-700 text-sm font-bold mb-2">
                    FROM
                  </label>
                  <div className="relative rounded-xl border flex">
                    <input
                      type="text"
                      className="border-none rounded-xl px-3 py-2 w-full"
                      placeholder="Search Location"
                    />
                    <div className="absolute inset-y-0 right-0 flex items-center pr-3 pointer-events-none">
                      <AiOutlineSearch />
                    </div>
                  </div>
                </div>
              </div>
              <div className="mb-4">
                <div className="relative">
                  <label className="block text-gray-700 text-sm font-bold mb-2">
                    TO
                  </label>
                  <div className="relative rounded-xl border flex">
                    <input
                      type="text"
                      className="border-none rounded-xl px-3 py-2 w-full"
                      placeholder="Search Location"
                    />
                    <div className="absolute inset-y-0 right-0 flex items-center pr-3 pointer-events-none">
                      <AiOutlineSearch className="p" />
                    </div>
                  </div>
                </div>
              </div>
              <button className="bg-blue-600 hover:bg-blue-700 text-white font-bold py-2 px-4 rounded-lg w-full my-2">
                Generate Map
              </button>
              <button className="bg-red-600 hover:bg-red-700 text-white font-bold py-2 px-4 rounded-lg w-full my-2">
                View as Table
              </button>
            </div>
          </div>
        </div>
      </main>
      <Footer />
    </div>
  );
};

export default Login;
