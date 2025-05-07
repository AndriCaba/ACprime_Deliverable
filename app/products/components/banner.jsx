/* eslint-disable react-hooks/exhaustive-deps */
'use client';
import { useState, useEffect } from 'react';
import Image from 'next/image';
import { Button } from '@/components/ui/button';
import { GoChevronRight, GoChevronLeft } from 'react-icons/go';
import {
  Carousel,
  CarouselContent,
  CarouselItem,
} from '@/components/ui/carousel';

const Banner = () => {
  return (
    <div className="h-[calc(100vh-130px)] min-h-[500px] w-auto lg:mb-0 lg:min-h-[680px]">
      <div className="relative h-[50%] lg:h-full">
        <div className="flex h-full flex-wrap">
          <div className="max-w-full">
            <Image
              src="images/homepage/landing-bg1.png"
              alt="bg1"
              layout="fill"
              objectFit="cover"
            />
            <div className="absolute top-0 flex h-full w-full flex-row-reverse items-center lg:px-20">
              <div className="flex h-full w-full items-end justify-center lg:justify-start">
                <Image
                  src="images/homepage/landing-fg1.png"
                  alt="fg1"
                  width={800}
                  height={900}
                  className="max-h-[90%] w-auto overflow-hidden lg:max-h-[100%]"
                  objectFit="cover"
                />
              </div>
              <div className="absolute top-[100%] z-10 flex h-full w-full flex-col items-center justify-center p-4 pb-10 text-center lg:static lg:pb-4 lg:pb-[100px] lg:pl-20 lg:pr-0">
                <div className="mb-4 flex w-full max-w-md flex-col items-center text-[40px] font-semibold leading-tight text-navy-100 lg:mb-8 lg:text-[75px] lg:text-secondary">
                  We got you covered!
                </div>
                <Button variant="primary" className="w-auto max-w-fit px-12">
                  Contact Us
                </Button>
              </div>
            </div>
          </div>
        </div>
      </div>
    </div>
  );
};
export default Banner;
