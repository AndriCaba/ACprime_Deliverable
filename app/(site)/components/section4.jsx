/* eslint-disable react-hooks/exhaustive-deps */
'use client';

import React from 'react';
import Image from 'next/image';
import { Poppins } from 'next/font/google';
import BackgroundWave from '@/components/background-wave';

const poppins = Poppins({ weight: ['400', '700'], subsets: ['latin'] });

const Section4 = () => {
  return (
    <section
      className={`flex min-h-screen items-center justify-center bg-[#043a6e] text-white ${poppins.className}`}
    >
      <div className="container mx-auto flex flex-col-reverse items-center gap-6 px-6 md:flex-row md:px-12 lg:px-24">
        {/* Left Text Section */}
        <div className="flex-1 text-center md:text-left">
          <h1 className="mt-3 text-3xl font-bold md:text-5xl">Who is</h1>
          <Image
            src="/images/logo/ac_prime-white.png"
            alt="AC Prime Insurance Brokers Logo"
            width={700}
            height={700}
            priority
            className="shadow-lg rounded-lg"
          />
          <p className="mt-4 text-lg text-gray-200">
            AC Prime Insurance Brokers, Inc. is an emerging player in the
            Philippine insurance industry built on a strong foundation of
            expertise and experience!
          </p>
        </div>

        {/* Right Image Section */}
        <div className="flex flex-1 justify-center">
          <Image
            src="/images/logo/ac_prime-white.png"
            alt="Insurance Services Illustration"
            width={900}
            height={900}
            priority
            className="shadow-lg rounded-lg transition-transform duration-300 hover:scale-105"
          />
        </div>
      </div>
    </section>
  );
};

export default Section4;
