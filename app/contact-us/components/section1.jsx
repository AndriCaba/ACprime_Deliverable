/* eslint-disable react-hooks/exhaustive-deps */
'use client';
import React from 'react';
import { ImPhone } from 'react-icons/im';
import { IoIosMail } from 'react-icons/io';
import { FaLocationDot } from 'react-icons/fa6';

const Section1 = () => {
  return (
    <div
      className="w-auto bg-cover bg-left bg-no-repeat lg:bg-right"
      style={{
        backgroundImage: 'url(/images/contact/section1-1.png)',
      }}
    >
      <div className="container z-10 py-20 text-navy-100 lg:px-12 lg:py-32">
        <div className="w-max lg:w-1/2 lg:p-6">
          <h1 className="mb-6 text-4xl font-semibold lg:text-5xl">
            Connect with <span className="text-primary">Us</span>
          </h1>
          <div className="mb-4 flex items-center gap-2">
            <span className="flex items-center justify-center rounded-full bg-navy-100 p-1.5 text-xl text-white">
              <FaLocationDot />
            </span>
            <div className="text-sm lg:text-base">
              <p className="font-light">Our Address</p>
              <p className="font-medium">1204 Antel 2000</p>
              <p className="font-medium">121 Valero St, Salcedo Village,</p>
              <p className="font-medium">Makati City</p>
            </div>
          </div>
          <div className="mb-4 flex items-center gap-2">
            <span className="flex items-center justify-center rounded-full bg-navy-100 p-1.5 text-xl text-white">
              <ImPhone />
            </span>
            <div className="text-sm lg:text-base">
              <p className="font-light">Call us</p>
              <p className="font-medium">+63 917 710 7391</p>
            </div>
          </div>
          <div className="flex items-center gap-2">
            <span className="flex items-center justify-center rounded-full bg-navy-100 p-1.5 text-xl text-white">
              <IoIosMail />
            </span>
            <div className="text-sm">
              <p className="font-light">Email us</p>
              <p className="font-medium">support@acprimeinsurance.com</p>
            </div>
          </div>
        </div>
      </div>
    </div>
  );
};

export default Section1;
