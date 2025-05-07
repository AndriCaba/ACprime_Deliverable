/* eslint-disable react-hooks/exhaustive-deps */
'use client';
import React from 'react';

const Section1 = () => {
  return (
    <div
      className="w-auto bg-cover bg-left bg-no-repeat lg:bg-right"
      style={{
        backgroundImage: 'url(/images/quote/bg.png)',
      }}
    >
      <div className="container z-10 py-20 text-navy-100 lg:px-12">
        <div className="w-max lg:w-1/2 lg:p-6">
          <h1 className="mb-6 text-4xl font-semibold text-secondary drop-shadow-md lg:text-5xl">
            Get a Quote
          </h1>
        </div>
      </div>
    </div>
  );
};

export default Section1;
