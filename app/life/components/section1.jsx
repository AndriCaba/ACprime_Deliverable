/* eslint-disable react-hooks/exhaustive-deps */
'use client';
import React from 'react';
import Image from 'next/image';
import Link from 'next/link';

const Section1 = () => {
  const our_products = [
    {
      link: 'life/term-insurance',
      img: '/images/life/life_products-1.png',
      title: 'Term Insurance',
    },
    {
      link: 'life/whole-life',
      img: '/images/life/life_products-2.png',
      title: 'Whole Life',
    },
    {
      link: 'life/vul-insurance',
      img: '/images/life/life_products-3.png',
      title: 'VUL Insurance',
    },
    {
      link: 'life/critical-illness',
      img: '/images/life/life_products-4.png',
      title: 'Critical Illness',
    },
  ];

  return (
    <div className="bg-navy-500/20">
      <div className="container mx-auto p-6 py-12 pb-24 lg:px-16">
        {/* Header Section */}
        <div className="mb-12 text-center lg:text-start">
          <h2 className="mb-4 text-3xl font-semibold text-navy-100 lg:text-5xl">
            Life Insurance
          </h2>
          <p className="mb-12 text-lg text-navy-100">
            Having a life insurance plan can offer substantial financial and
            emotional benefits, providing protection and security for you and
            your loved ones. Let AC Prime helps you find the right life
            insurance solution fit to your unique needs.
          </p>
          {/* <p className="mb-8 text-center text-2xl font-semibold text-primary">
            Types of Life Insurance Plan
          </p> */}
        </div>

        {/* Product Cards */}
        <div className="grid grid-cols-1 gap-10 md:grid-cols-2 lg:grid-cols-4">
          {our_products.map((icon, index) => (
            <Link key={index} href={icon.link}>
              {/* <div className="shadow-md hover:shadow-xl group overflow-hidden rounded-xl bg-navy-300/10 transition-all duration-300 hover:-translate-y-1 hover:bg-[#4895ef1c]">
                <div className="relative h-48 w-full">
                  <Image
                    src={icon.img}
                    alt={icon.title}
                    layout="fill"
                    objectFit="cover"
                    className="transition-transform duration-300 ease-in-out group-hover:scale-105"
                  />
                </div>
                <div className="flex justify-between rounded-b bg-navy-300 py-3 pl-4 pr-6">
                  <p className="text-white">{icon.title}</p>
                  <div className="rotate-45 transform transition-transform duration-300 group-hover:-translate-y-1 group-hover:translate-x-1">
                    ➔
                  </div>
                </div>
              </div> */}
              <div className="flex w-full justify-center overflow-hidden rounded-t border-0 bg-navy-400/20 transition-all group-hover:opacity-90">
                <div className="relative h-48 w-full">
                  <Image
                    src={icon.img}
                    alt={icon.title}
                    layout="fill"
                    objectFit="cover"
                    className="rounded-t pb-0 hover:scale-105 hover:drop-shadow-[0_0_2px_#0450C1]"
                  />
                </div>
              </div>
              <div className="flex justify-between rounded-b bg-navy-300 py-3 pl-4 pr-6">
                <p className="text-white">{icon.title}</p>
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
