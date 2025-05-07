/* eslint-disable react-hooks/exhaustive-deps */
'use client';
import React from 'react';
import { Dialog, DialogContent, DialogTrigger } from '@/components/ui/dialog';
import { Button } from '@/components/ui/button';

import Image from 'next/image';
import BackgroundWave from '@/components/background-wave';
const Section2 = () => {
  const why_us = [
    {
      description:
        'You are provided with a dedicated team to support clients’ needs, ensuring personalized service and prompt resolution of any issues or queries.',
      img: 'images/homepage/why_us-1.png',
      title: 'Dedicated Service',
    },
    {
      description:
        'By consolidating and negotiating with multiple insurers, we can secure more competitive rates and better terms for you',
      img: 'images/homepage/why_us-2.png',
      title: 'Best products  with the least cost ',
    },
    {
      description:
        'From Life protection to business insurance to personal investment, we have you covered. We have access to a wide range of insurance and investment companies providing you with a wholistic service ',
      img: 'images/homepage/why_us-3.png',
      title: 'A one-stop shop for  all your financial needs',
    },
  ];
  return (
    <div className="bg- #004588-500/20 relative">
      <BackgroundWave
        rotation="-15deg"
        translateX="-500px"
        translateY="180px"
      />
      <div className="container relative z-10 flex flex-col gap-12 py-16 lg:flex-row lg:gap-0">
        <div className="flex w-full items-center justify-center">
          <div className="w-full lg:max-w-[300px]">
            <h1 className="text- #004588 mb-12 text-center text-4xl font-semibold lg:text-start lg:text-5xl">
              Why Us<span className="questionAn2"> ?</span>
            </h1>
            <p className="text- #004588 text-center text-base lg:text-start lg:text-xl">
              An insurance broker works exclusively for the client, ensuring
              unbiased recommendations. With this mandate, Brokers maintain
              objectivity, allowing them to search the market for the
              best-priced products tailored to the unique needs of each
              customer.
            </p>
          </div>
        </div>
        <div className="flex w-full flex-col gap-6">
          {why_us.map((card, index) => (
            <div
              key={index}
              className="flex flex-col items-center gap-2 rounded bg-[#f6f6f68a] p-6 backdrop-blur-sm lg:flex-row lg:items-start lg:gap-4"
            >
              <div className="flex w-full flex-col items-center">
                <div className="shrink-0 lg:w-max">
                  <Image
                    src={card.img}
                    alt={card.title}
                    width={250}
                    height={150}
                  />
                </div>
                <h2 className="pt-3 text-center text-base font-medium text-primary lg:text-lg">
                  {card.title}
                </h2>
              </div>
              <p className="text-center text-xs font-light lg:text-start lg:text-base">
                {card.description}
              </p>
            </div>
          ))}
        </div>
      </div>
    </div>
  );
};
export default Section2;
