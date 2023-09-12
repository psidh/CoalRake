'use client';
import React, { useState } from 'react';
import { auth } from '../config.js';
import { useRouter } from 'next/navigation.js';
import { signInWithEmailAndPassword } from 'firebase/auth';
import { createUserWithEmailAndPassword } from 'firebase/auth/cordova';

const TopIntro: React.FC = () => {
  const [isLogin, setIsLogin] = useState(true);

  const toggleLogin = () => {
    setIsLogin(!isLogin);
  };

  const [email, setEmail] = useState('');
  const [password, setPassword] = useState('');
  const navigator = useRouter();

  return (
    <div className='min-h-fit' style={{ fontFamily: 'Ambit, sans-serif' }}>
      <main>
      <div
          className="bg-cover bg-center mt-8 mb-8 flex flex-row-reverse sm:flex-col items-center justify-center sm:bg-left md:bg-center bg-opacity-60"
          style={{
            backgroundImage: 'url("/background.png")',
            backgroundRepeat: 'no-repeat',
            backgroundPosition: 'center',
            minHeight: '100vh',
            backgroundSize: 'cover',
          }}
      >
          <a href="/login">
            <button className="bg-blue-800 hover:bg-blue-700 text-white font-bold py-6 px-12 rounded-full md:py-6 md:px-12 transition duration-300">
              <span className='font-extrabold' >Get Started</span> 
            </button>{' '}
          </a>
        </div>
      </main>
    </div>
  );
};

export default TopIntro;
