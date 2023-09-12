'use client';
import { auth } from '../config.js';
import { useRouter } from 'next/navigation.js';
import { signInWithEmailAndPassword } from 'firebase/auth';
import { createUserWithEmailAndPassword } from 'firebase/auth/cordova';
import React, { useEffect, useRef, useState } from "react";
import AOS from 'aos';
import 'aos/dist/aos.css';

const TopIntro: React.FC = () => {
  const [isLogin, setIsLogin] = useState(true);


  useEffect(() => {
    AOS.init({ 
      delay: 100,
      offset: 100,
      duration: 700,
      once: false,
      mirror: true,
      easing: "ease-in-out",
    });
  }, []);


  const toggleLogin = () => {
    setIsLogin(!isLogin);
  };

  const [email, setEmail] = useState('');
  const [password, setPassword] = useState('');
  const navigator = useRouter();

  return (
    <div data-aos="fade-in" style={{ fontFamily: 'Ambit, sans-serif' }}>
      <main>
        <div className="w-full relative rounded-xl shadow-[0_4px_32px_4px_rgba(0,0,0,0.1)] my-4 ">
          <img src="/background.png" className="w-full h-1/2 rounded-md" />
          <div className="bg-black z-10 absolute w-full h-full top-0 rounded-r-md bg-opacity-0 hover:bg-opacity-30">
            <div className="w-full h-full flex top-0 absolute items-center justify-center opacity-0 hover:opacity-100">
            <button className="bg-blue-700 hover:bg-black text-white font-bold py-2 px-6 rounded-full md:py-4 md:px-12 sm:py-1 sm:px-4 transition duration-200">
              <span className="font-extrabold md:text-4xl text-lg ">Get Started</span>
            </button>
            </div>
          </div>
        </div>
      </main>
    </div>
  );
};

export default TopIntro;
