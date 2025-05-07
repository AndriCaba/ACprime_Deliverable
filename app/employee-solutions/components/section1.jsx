/* eslint-disable react-hooks/exhaustive-deps */
'use client';
import React from 'react';
import Image from 'next/image';
import Link from 'next/link';
const Section1 = () => {
  const our_products = [
    {
      link: 'life/term-insurance',
      img: '/images/life/life_insurance-1.png',
      title: 'Term Insurance',
    },
    {
      link: 'life/whole-life',
      img: '/images/life/life_insurance-2.png',
      title: 'Whole Life',
    },
    {
      link: 'life/vul-insurance',
      img: '/images/life/life_insurance-3.png',
      title: 'VUL Insurance',
    },
    {
      link: 'life/term-insurance',
      img: '/images/life/life_insurance-1.png',
      title: 'Term Insurance',
    },
    {
      link: 'life/whole-life',
      img: '/images/life/life_insurance-2.png',
      title: 'Whole Life',
    },
    {
      link: 'life/vul-insurance',
      img: '/images/life/life_insurance-3.png',
      title: 'VUL Insurance',
    },
  ];

  return (
    <div className="bg-navy-500/20">
      <div className="container p-6 py-12 pb-24 lg:px-16">
        <div className="text-center lg:text-start">
          <h2 className="mb-8 text-3xl font-semibold text-navy-100 lg:text-5xl">
            Employee Benefits Solutions
          </h2>
        </div>
        <div className="flex flex-wrap justify-center gap-12 gap-y-16">
          {our_products.map((icon, index) => (
            <Link
              key={index}
              href={icon.link}
              className="arrow-container group rounded bg-navy-300/10 text-sm font-medium text-navy-100 hover:bg-[#4895ef1c] lg:text-base"
            >
              <div className="flex w-full justify-center overflow-hidden rounded-t transition-all group-hover:opacity-80">
                <Image
                  src={icon.img}
                  alt={icon.title}
                  width={300}
                  height={250}
                  className="hover:scale-105"
                />
              </div>
              <div className="flex justify-between py-3 pl-4 pr-6">
                <p className="font-semibold">{icon.title}</p>
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
