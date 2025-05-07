/* eslint-disable react-hooks/exhaustive-deps */
'use client';
import React from 'react';
import Image from 'next/image';
import Link from 'next/link';
import { ImPhone } from 'react-icons/im';
import { IoIosMail } from 'react-icons/io';

const Section1 = () => {
  return (
    <div
      className="w-auto bg-cover bg-center bg-no-repeat lg:bg-right"
      style={{
        backgroundImage: 'url(/images/careers/section1-1.png)',
      }}
    >
      <div className="container z-10 py-12 text-navy-100 lg:px-20 lg:py-20">
        <div className="w-full p-6 lg:w-1/2">
          <h1 className="mb-6 text-4xl font-semibold lg:text-5xl">Careers</h1>
          <p className="mb-8 w-full text-sm lg:text-base">
            We are the up and coming insurance brokerage in the Philippines,
            dedicated to providing exceptional insurance solutions to
            individuals and businesses alike. Our success is driven by our
            talented and passionate team, and we are always on the lookout for
            motivated individuals to join us in our mission to protect and
            empower our clients.
          </p>
          <h2 className="mb-8 w-full text-lg font-semibold lg:text-xl">
            Join our dynamic Team and make a{' '}
            <span className="text-primary">difference</span>
          </h2>
          <div className="mb-4 flex items-center gap-2 text-base lg:text-lg">
            <span className="flex items-center justify-center rounded-full bg-navy-100 p-1.5 text-white">
              <ImPhone className="text-lg lg:text-2xl" />
            </span>
            <p className="font-medium">+63 917 710 7391</p>
          </div>
          <div className="flex items-center gap-2 text-base lg:text-lg">
            <span className="flex items-center justify-center rounded-full bg-navy-100 p-1.5 text-white">
              <IoIosMail className="text-xl lg:text-2xl" />
            </span>
            <p className="font-medium">support@acprimeinsurance.com</p>
          </div>
        </div>
      </div>
    </div>
  );
};

export default Section1;
