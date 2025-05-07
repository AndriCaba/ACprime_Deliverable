/* eslint-disable react-hooks/exhaustive-deps */
'use client';
import React from 'react';
import { ImPhone } from 'react-icons/im';
import { IoIosMail } from 'react-icons/io';
import { FaLocationDot } from 'react-icons/fa6';

const Section2 = () => {
  return (
    <div
      className="w-auto bg-cover bg-left bg-no-repeat lg:bg-right"
      style={{ backgroundImage: 'url(/images/contact/section1-1.png)' }}
    >
      <div className="container mx-auto flex flex-col items-center justify-between gap-10 py-20 lg:flex-row lg:px-12 lg:py-32">
        {/* Contact Information */}
        <div className="w-full text-[#004588] lg:w-1/2 lg:p-6">
          <h1 className="mb-6 text-4xl font-semibold lg:text-5xl">
            Connect with <span className="text-primary">Us</span>
          </h1>
          <div className="mb-4 flex items-center gap-2">
            <span className="flex items-center justify-center rounded-full bg-[#004588] p-1.5 text-xl text-white">
              <FaLocationDot />
            </span>
            <div className="text-sm text-[#004588] lg:text-base">
              <p className="font-light">Our Address</p>
              <p className="font-semibold">1204 Antel 2000</p>
              <p className="font-semibold">121 Valero St, Salcedo Village,</p>
              <p className="font-semibold">Makati City</p>
            </div>
          </div>
          <div className="mb-4 flex items-center gap-2">
            <span className="flex items-center justify-center rounded-full bg-[#004588] p-1.5 text-xl text-white">
              <ImPhone />
            </span>
            <div className="text-sm lg:text-base">
              <p className="font-light">Call us</p>
              <p className="font-semibold">+63 917 710 7391</p>
            </div>
          </div>
          <div className="flex items-center gap-2">
            <span className="flex items-center justify-center rounded-full bg-[#004588] p-1.5 text-xl text-white">
              <IoIosMail />
            </span>
            <div className="text-sm">
              <p className="font-light">Email Us</p>
              <p className="font-semibold">support@acprimeinsurance.com</p>
            </div>
          </div>
        </div>

        {/* Contact Form */}
        <div className="shadow-xl w-full max-w-lg rounded-xl bg-white p-8 drop-shadow-lg">
          <h2 className="mb-6 text-center text-3xl font-semibold text-[#004588]">
            Leave us an <span style={{ color: '#ED4A00' }}>Email</span>
          </h2>
          <form className="space-y-5">
            <div className="grid grid-cols-1 gap-4 md:grid-cols-2">
              <div>
                <label className="block font-semibold text-[#004588]">
                  Full Name
                </label>
                <input
                  type="text"
                  className="w-full rounded-lg border border-gray-300 p-3 text-gray-600"
                  placeholder="Juan Dela Cruz"
                />
              </div>
              <div>
                <label className="block font-semibold text-[#004588]">
                  Email Address
                </label>
                <input
                  type="email"
                  className="w-full rounded-lg border border-gray-300 p-3"
                  placeholder="example@gmail.com"
                />
              </div>
            </div>
            <div className="grid grid-cols-1 gap-4 md:grid-cols-2">
              <div>
                <label className="block font-semibold text-[#004588]">
                  Contact Number
                </label>
                <input
                  type="text"
                  className="w-full rounded-lg border border-gray-300 p-3 text-gray-600"
                  placeholder="09123456789"
                />
              </div>
            </div>
            <div>
              <label className="block font-semibold text-[#004588]">
                Message (optional)
              </label>
              <textarea
                className="w-full rounded-lg border border-gray-300 p-3"
                rows="4"
                placeholder="Write your message"
              ></textarea>
            </div>
            <button className="mt-4 w-full rounded-lg bg-[#004588] py-3 text-lg font-semibold text-white transition-all duration-300 hover:bg-[#003366]">
              Submit
            </button>
          </form>
        </div>
      </div>
    </div>
  );
};

export default Section2;
