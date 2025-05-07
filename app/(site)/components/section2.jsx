/* eslint-disable react-hooks/exhaustive-deps */
'use client';
import React from 'react';
import Image from 'next/image';

const logos = [
  { src: '/images/logo/pacific_union.png' },
  { src: '/images/logo/prudential_guarantee.png' },
  { src: '/images/logo/Malayan_InsuranceLogo.webp' },
  { src: '/images/logo/cocogen_logo.png' },
  { src: '/images/logo/pioneer_logo.png' },
  { src: '/images/logo/stronghold_insurance_logo.png' },
  { src: '/images/logo/LI-Logo-Green.png' },
  { src: '/images/logo/Mercantile_insurance_logo.png' },
];

const Section2 = () => {
  const why_us = [
    {
      title: 'Dedicated Service',
      description:
        'A dedicated team provides personalized service and promptly resolves client issues.',
      image: '/images/homepage/our_products-5.png',
    },
    {
      title: 'Best products with the least cost',
      description:
        'We negotiate with multiple insurers to secure better rates and terms for you.',
      image: '/images/homepage/why_us-5.jpg',
    },
    {
      title: 'One-stop shop for all your financial needs',
      description:
        'From Life protection to business insurance to personal investment, we have you covered.',
      image: '/images/articles/article-9.png',
    },
    {
      title: 'Expert Guidance and Advice',
      description:
        'A dedicated team provides personalized service and promptly resolves client issues.',
      image: '/images/homepage/why_us.png',
    },
  ];

  return (
    <div className="via-#004588/30 relative bg-gradient-to-t from-navy-400/20 py-20 font-sans">
      <div className="container mx-auto px-6">
        {/* Title */}
        <h2 className="mb-10 text-center text-4xl font-bold text-[#004588] lg:text-5xl">
          Why Us ?
          <br />
          YOU'RE THE <span className="text-[#ED4A00]">BOSS!!</span>
        </h2>
        <h2 className="mx-6 mb-10 text-center text-[25px] font-semibold text-[#004588] lg:mb-16">
          Our insurance company partners are trusted providers offering
          competitive rates, comprehensive coverage, and tailored solutions to
          meet diverse client needs.
        </h2>

        {/* Why Us Cards */}
        <div className="flex flex-wrap justify-center gap-10">
          {why_us.map((card, index) => (
            <div
              key={index}
              className="shadow-lg relative mb-8 mt-2 h-[420px] w-[340px] overflow-hidden rounded-lg transition-transform hover:scale-105"
            >
              <Image
                src={card.image}
                alt={card.title || 'Card Image'}
                fill
                sizes="(max-width: 800px) 100vw, (max-width: 1200px) 50vw, 300px"
                className="rounded-lg object-cover"
              />
              <div className="absolute inset-x-0 bottom-0 h-1/2 bg-gradient-to-t from-[#004588]/50 via-[#004588]/80 to-transparent"></div>

              {/* Card Text */}
              <div className="absolute bottom-0 left-0 w-full p-6 text-center">
                <h1 className="text-[25px] font-bold text-white drop-shadow-lg">
                  {card.title}
                </h1>
                {/* <p className="mt-1.5 text-sm font-semibold text-[#156CB9] drop-shadow-lg">
                  {card.description}
                </p> */}
              </div>
            </div>
          ))}
        </div>
      </div>

      {/* Partners Section */}
      <div className="container mt-20">
        <h2 className="mb-10 text-center text-4xl font-bold text-[#004588] lg:text-5xl">
          OUR <span className="text-[#ED4A00]">PARTNERS</span>
        </h2>
        <h2 className="mb-10 text-center text-2xl font-semibold text-[#004588]">
          As an insurance broker, we work exclusively for you, ensuring that all
          our recommendations are unbiased and aligned with your best interests.
        </h2>

        {/* Logo Slider */}
        <div className="logo-slider mx-auto w-[100%] overflow-hidden">
          <div className="logo-track animate-slide flex gap-12">
            {[...logos, ...logos].map((logo, index) => (
              <div key={index} className="logo-item">
                <Image
                  src={logo.src}
                  alt="partner's logo"
                  width={180}
                  height={180}
                  className="transition-transform hover:scale-110"
                />
              </div>
            ))}
          </div>
        </div>
      </div>
    </div>
  );
};

export default Section2;
