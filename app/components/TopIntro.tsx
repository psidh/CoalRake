'use client';
import { createUserWithEmailAndPassword } from 'firebase/auth/cordova';
import React, { useState } from 'react';
import { auth } from '../config.js';
import { useRouter } from 'next/navigation.js';
import { signInWithEmailAndPassword } from 'firebase/auth';

const TopIntro: React.FC = () => {
  const [isLogin, setIsLogin] = useState(true);

  const toggleLogin = () => {
    setIsLogin(!isLogin);
  };

  const [email, setEmail] = useState('');
  const [password, setPassword] = useState('');
  const navigator = useRouter();

  return (
    <div style={{ fontFamily: 'Ambit, sans-serif' }}>
      <main>
        <div
          className="bg-cover bg-center mt-8 mb-8 flex flex-row-reverse sm:flex-col items-center justify-center sm:bg-left md:bg-center bg-opacity-90"
          style={{
            backgroundImage: 'url("/background.png")',
            backgroundRepeat: 'no-repeat',
            backgroundPosition: 'center',
            minHeight: '100vh',
            backgroundSize: 'cover',
          }}
        >
          <div className="w-2/3 md:grid md:grid-cols-2 items-center justify-center md:mr-8 ">
            <div className="bg-white dark:bg-black text-black dark:text-white rounded-lg p-4 sm:p-8 shadow-md">
              <h2 className="text-2xl font-semibold mb-4">
                {isLogin ? 'Login' : 'Sign Up'}
              </h2>
              <div className="mb-4">
                <label className="block dark:text-gray-200 text-gray-700 text-sm font-bold mb-2">
                  Email
                </label>
                <input
                  type="email"
                  onChange={(event) => {
                    setEmail(event.target.value);
                  }}
                  className="border rounded-lg px-3 py-2 w-full 
                  dark:bg-gray-500 
                  focus:outline-none focus:ring-2 
                  focus:ring-blue-500 focus:border-transparent"
                  placeholder="Email"
                />
              </div>
              <div className="mb-4">
                <label className="block dark:text-gray-200 text-gray-700 text-sm font-bold mb-2">
                  Password
                </label>
                <input
                  type="password"
                  onChange={(event) => {
                    setPassword(event.target.value);
                  }}
                  className="border rounded-lg px-3 py-2 w-full 
                  dark:bg-gray-500 
                  focus:outline-none focus:ring-2 
                  focus:ring-blue-500 focus:border-transparent"
                  placeholder="Password"
                  onSubmit={() => {
                    if (isLogin) {
                      signInWithEmailAndPassword(auth, email, password)
                        .then((userCredential) => {
                          const user = userCredential.user;
                          navigator.replace('/data');
                        })
                        .catch((error) => {
                          const errorCode = error.code;
                          const errorMessage = error.message;
                        });
                    } else {
                      createUserWithEmailAndPassword(auth, email, password)
                        .then((userCredential) => {
                          const user = userCredential.user;
                          navigator.replace('/data');
                        })
                        .catch((error) => {
                          const errorCode = error.code;
                          const errorMessage = error.message;
                        });
                    }
                  }}
                />
              </div>
              <button
                className="bg-blue-600 hover:bg-blue-700 text-white font-bold py-2 px-4 rounded-lg w-full"
                onClick={() => {
                  if (isLogin) {
                    signInWithEmailAndPassword(auth, email, password)
                      .then((userCredential) => {
                        const user = userCredential.user;
                        navigator.replace('/data');
                      })
                      .catch((error) => {
                        const errorCode = error.code;
                        const errorMessage = error.message;
                      });
                  } else {
                    createUserWithEmailAndPassword(auth, email, password)
                      .then((userCredential) => {
                        const user = userCredential.user;
                        navigator.replace('/data');
                      })
                      .catch((error) => {
                        const errorCode = error.code;
                        const errorMessage = error.message;
                      });
                  }
                }}
              >
                {isLogin ? 'Log In' : 'Sign Up'}
              </button>
              <div
                className="dark:text-gray-200 text-gray-600 text-sm mt-2 "
                onClick={toggleLogin}
              >
                {isLogin ? (
                  <p>
                    Don't have an account?
                    <span className="text-blue-600 text-sm m-2">Sign Up</span>
                  </p>
                ) : (
                  <p>
                    Already have an account?
                    <span className=" text-blue-600 text-sm m-2 ">Log In</span>
                  </p>
                )}
              </div>
            </div>
          </div>
        </div>
      </main>
    </div>
  );
};

export default TopIntro;
