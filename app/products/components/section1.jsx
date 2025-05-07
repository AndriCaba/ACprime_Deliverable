/* eslint-disable react-hooks/exhaustive-deps */
'use client';
import React from 'react';
import Image from 'next/image';
import Link from 'next/link';
import BackgroundWave from '@/components/background-wave';
import color from '@/components/color';

const Section1 = () => {
  const our_products = [
    {
      link: 'life',
      img: 'images/homepage/our_products-1.png',
      title: 'LIFE',
    },
    {
      link: 'non-life',
      img: 'images/homepage/our_products-2.png',
      title: 'Non Life/General Insurance',
    },
    // {
    //   link: 'services#investment-management',
    //   img: 'images/homepage/our_products-3.png',
    //   title: 'HMO',
    // },
    {
      link: 'services#retirement-planning',
      img: 'images/homepage/our_products-4.png',
      title: 'Business Solutions',
    },
  ];

  return (
    <div className="relative bg-navy-500/20">
      <color />
      <div className="container relative z-10 p-8 py-12 pb-24">
        <div className="text-center">
          <h2 className="mb-3 text-4xl font-semibold text-navy-100 lg:text-5xl">
            Our <span style={{ color: '#ED4A00' }}>Products</span>
          </h2>
          <p className="px-10 text-lg lg:px-24 lg:text-xl">
            Protect your family's future with the best term insurance plans
            designed to fit your needs. Get expert guidance and secure
            comprehensive coverage at the best rates today!
          </p>
        </div>
      </div>
      {/* ----------------------------Product Containers--------------------------- */}
      <div class="Product_containers">
        <div class="LifeInsurance_image">
          <Image
            src="/images/products/Happy_Family.jpg"
            alt="partner's logo"
            width={1280}
            height={720}
            // className="md:w-[11rem]"
          />
        </div>
        <div className="LifeInsurance_Text&Description relative flex flex-col items-center justify-center px-6 py-10 text-center">
          <h1 className="mb-4 text-3xl font-bold">
            <span style={{ color: '#ED4A00' }}>Life Insurance</span>
          </h1>
          <p className="text-bg-navy-500/20 max-w-2xl text-lg">
            Protect your family's future with the best term insurance plans
            designed to fit your needs. Get expert guidance and secure
            comprehensive coverage at the best rates today!
          </p>
          <Link href="/life">
            <button className="button mt-4">View more</button>
          </Link>
        </div>
      </div>

      <div class="Product_containers">
        <div className="Non_LifeInsurance_Text&Description flex flex-col items-center justify-center px-6 py-10 text-center">
          <h1 className="mb-4 text-3xl font-bold">
            <span style={{ color: '#ED4A00' }}>Non - Life Insurance</span>
          </h1>
          <p className="text-bg-navy-500/20 max-w-2xl text-lg">
            Also known as general insurance, provides financial protection
            against losses and damages other than those covered by life
            insurance. Non-life insurance policies are typically short-term and
            need to be renewed periodically.
          </p>
          <Link href="/non-life">
            <button className="button mt-4">View more</button>
          </Link>
        </div>

        <div class="Non_LifeInsurance_image">
          <Image
            src="/images/products/Non_insurance.jpg"
            alt="partner's logo"
            width={1280}
            height={720}
            // className="md:w-[11rem]"
          />
        </div>
      </div>

      <div class="Product_containers">
        <div class="LifeInsurance_image">
          <Image
            src="/images/products/Buissnes_Insurance.webp"
            alt="partner's logo"
            width={1280}
            height={720}
            // className="md:w-[11rem]"
          />
        </div>
        <div className="LifeInsurance_Text&Description flex flex-col items-center justify-center px-6 py-10 text-center">
          <h1 className="mb-4 text-3xl font-bold">
            <span style={{ color: '#ED4A00' }}>Business Solutions</span>
          </h1>
          <p className="text-bg-navy-500/20 max-w-2xl text-lg">
            We can help your business protect its key assets, attract and retain
            top talent, ensure financial stability, and promote the overall
            well-being of your employees.
          </p>
          <Link href="/business-solutions">
            <button className="button mt-4">View more</button>
          </Link>
        </div>
      </div>

      {/* ------------------------------------------------------------------------------- */}
    </div>
  );
};

export default Section1;
