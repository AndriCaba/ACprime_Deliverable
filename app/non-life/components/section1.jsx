/* eslint-disable react-hooks/exhaustive-deps */
'use client';
import React, { useState } from 'react';
import Image from 'next/image';
import Link from 'next/link';
import { Input } from '@/components/ui/input';
const Section1 = () => {
  const [searchQuery, setSearchQuery] = useState('');

  const our_products = [
    {
      link: 'non-life/aviation-insurance',
      img: '/images/non-life/aviation.png',
      title: 'Aviation Insurance',
    },
    {
      link: 'non-life/business-continuity',
      img: '/images/non-life/continuity.png',
      title: 'Business Continuity',
    },
    {
      link: 'non-life/cybersecurity',
      img: '/images/non-life/cybersecurity.png',
      title: 'Cyber Insurance',
    },
    {
      link: 'non-life/engineering-insurance',
      img: '/images/non-life/engineering.png',
      title: 'Engineering Insurance',
    },
    {
      link: 'non-life/fire-home-insurance',
      img: '/images/non-life/home.png',
      title: 'Fire/Home Insurance',
    },
    {
      link: 'non-life/liability-insurance',
      img: '/images/non-life/liability.png',
      title: 'Liability Insurance',
    },
    {
      link: 'non-life/livestock-insurance',
      img: '/images/non-life/livestock.png',
      title: 'Livestock Insurance',
    },
    {
      link: 'non-life/marine-insurance',
      img: '/images/non-life/marine.png',
      title: 'Marine Insurance',
    },
    {
      link: 'non-life/motor-car-insurance',
      img: '/images/non-life/car.png',
      title: 'Motor Car Insurance',
    },
    {
      link: 'non-life/property-insurance',
      img: '/images/non-life/property.png',
      title: 'Property Insurance',
    },
    {
      link: 'non-life/pet-insurance',
      img: '/images/non-life/pet.png',
      title: 'Pet Insurance',
    },
    {
      link: 'non-life/trade-credit-insurance',
      img: '/images/non-life/credit.png',
      title: 'Trade Credit Insurance',
    },
    {
      link: 'non-life/surety-bonds',
      img: '/images/non-life/surety.png',
      title: 'Surety Bonds',
    },
    {
      link: 'non-life/travel-insurance',
      img: '/images/non-life/travel.png',
      title: 'Travel Insurance',
    },
    {
      link: 'non-life/works-of-art',
      img: '/images/non-life/art.png',
      title: 'Works of Art',
    },
  ];
  const filteredProducts = our_products.filter((product) =>
    product.title.toLowerCase().includes(searchQuery.toLowerCase())
  );
  return (
    <div className="bg-navy-500/20">
      <div className="container p-6 py-12 lg:px-16">
        <div className="text-center lg:text-start">
          <h2 className="mb-4 text-3xl font-semibold text-navy-100 lg:text-4xl">
            Non Life Insurance (General Insurance)
          </h2>
          <p className="mb-12 text-base text-navy-100 lg:text-lg">
            Also known as general insurance, provides financial protection
            against losses and damages other than those covered by life
            insurance. Non-life insurance policies are typically short-term and
            need to be renewed periodically.
          </p>
        </div>
        <Input
          placeholder="Search Products"
          className="mx-auto mb-10 max-w-64 sm:max-w-sm lg:mb-12 lg:max-w-lg"
          onChange={(e) => setSearchQuery(e.target.value)}
        />
        <div className="flex flex-wrap justify-center gap-12 gap-y-16">
          {filteredProducts.map((icon, index) => (
            <Link
              key={index}
              href={icon.link}
              className="arrow-container group rounded-b rounded-t text-sm font-medium text-secondary lg:text-base"
            >
              <div className="flex w-full justify-center overflow-hidden rounded-t border-0 bg-navy-400/20 transition-all group-hover:opacity-90">
                <Image
                  src={icon.img}
                  alt={icon.title}
                  width={240}
                  height={240}
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
