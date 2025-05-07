/* eslint-disable react-hooks/exhaustive-deps */
'use client';
import React from 'react';
import Image from 'next/image';
const Section1 = () => {
  return (
    <div
      className="w-auto bg-cover bg-left bg-no-repeat lg:min-h-[75vh] lg:bg-right-bottom"
      style={{
        backgroundImage: 'url(/images/about/section1-1.png)',
      }}
    >
      <div className="container py-20 md:py-32">
        <div className="w-full backdrop-blur-lg lg:w-1/2 lg:px-6 lg:backdrop-blur-none">
          <h1 className="mb-8 text-center text-4xl font-semibold text-navy-100 lg:text-start lg:text-5xl">
            Our <span className="text-primary">Company</span>
          </h1>
          <p className="mb-6 text-center text-base text-navy-100 lg:text-start">
            AC Prime Brokers, Inc. is the up and coming insurance brokerage
            company in the Philippines dedicated to providing innovative,
            accessible, and reliable insurance solutions.
          </p>
          <p className="mb-12 text-center text-base text-navy-100 lg:text-start">
            Our first step is to get to know you, your pain points, your hopes,
            and your dreams because this will enable us to give you precisely
            what you need for those dreams to become a reality.
          </p>
        </div>
      </div>
    </div>
  );
};

export default Section1;
