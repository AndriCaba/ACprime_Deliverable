/* eslint-disable react-hooks/exhaustive-deps */
'use client';
import React from 'react';
import Image from 'next/image';
import Link from 'next/link';

const Section1 = () => {
  const our_products = [
    {
      link: 'business-solutions/group-life-insurance',
      img: '/images/business-solutions/group.png',
      title: 'Group Life Insurance',
    },
    {
      link: 'business-solutions/key-person-insurance',
      img: '/images/business-solutions/key.png',
      title: 'Key Person Insurance',
    },
    {
      link: 'business-solutions/employee-retirement-plan',
      img: '/images/business-solutions/retirement.png',
      title: 'Employee Retirement Plan',
    },
    {
      link: 'business-solutions/consulting-and-advisory',
      img: '/images/business-solutions/consulting.png',
      title: 'Consulting & Advisory Services',
    },
  ];

  return (
    <div className="bg-navy-500/20">
      <div className="container mx-auto p-6 py-12 pb-24 lg:px-16">
        {/* Header Section */}
        <div className="mb-12 text-center lg:text-start">
          <h2 className="mb-4 text-3xl font-semibold text-navy-100 lg:text-5xl">
            Business Solutions
          </h2>
          <p className="mb-12 text-lg text-navy-100">
            We can help your business protect its key assets, attract and retain
            top talent, ensure financial stability, and promote the overall
            well-being of your employees.
          </p>
        </div>

        {/* Product Cards */}
        {/* <div className="grid grid-cols-1 gap-10 md:grid-cols-2 lg:grid-cols-4">
          {our_products.map((icon, index) => (
            <Link key={index} href={icon.link}>
              <div className="shadow-md hover:shadow-xl group overflow-hidden rounded-xl bg-navy-300/10 transition-all duration-300 hover:-translate-y-1 hover:bg-[#4895ef1c]">
                <div className="relative h-48 w-full">
                  <Image
                    src={icon.img}
                    alt={icon.title}
                    layout="fill"
                    objectFit="cover"
                    className="rounded transition-transform duration-300 ease-in-out group-hover:scale-105"
                  />
                </div>
                <div className="flex items-center justify-between px-4 py-5">
                  <p className="text- font-semibold text-navy-100">
                    {icon.title}
                  </p>
                  <div className="rotate-45 transform transition-transform duration-300 group-hover:-translate-y-1 group-hover:translate-x-1">
                    ➔
                  </div>
                </div>
              </div>
            </Link>
          ))}
        </div> */}

        <div className="flex flex-wrap justify-center gap-12 gap-y-16">
          {our_products.map((icon, index) => (
            <Link
              key={index}
              href={icon.link}
              className="arrow-container group rounded-b rounded-t text-sm font-medium text-secondary lg:text-base"
            >
              <div className="flex w-full justify-center overflow-hidden rounded-t border-0 bg-navy-400/20 transition-all group-hover:opacity-90">
                <Image
                  src={icon.img}
                  alt={icon.title}
                  width={300}
                  height={400}
                  className="rounded-t pb-0 hover:scale-105 hover:drop-shadow-[0_0_2px_#0450C1]"
                />
              </div>
              <div className="flex justify-between rounded-b bg-navy-300 py-3 pl-4 pr-6">
                {icon.title}
                <div class="relative block -rotate-90 transform">
                  <div class="arrow duration-400 absolute left-1/2 transition-all ease-in-out"></div>
                  <div class="arrow duration-400 absolute left-1/2 transition-all ease-in-out"></div>
                  <div class="arrow duration-400 absolute left-1/2 transition-all ease-in-out"></div>
                </div>
              </div>
            </Link>
          ))}
        </div>
      </div>
    </div>
  );
};

export default Section1;
