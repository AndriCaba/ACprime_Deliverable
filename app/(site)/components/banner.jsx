/* eslint-disable react-hooks/exhaustive-deps */
'use client';
import { useState, useEffect } from 'react';
import { motion, AnimatePresence } from 'framer-motion';

const images = [
  '/images/homepage/landing-bg1.png',
  '/images/homepage/landing-bg3.JPG',
];

const Banner = () => {
  const [currentIndex, setCurrentIndex] = useState(0);

  // Slideshow interval logic
  useEffect(() => {
    const interval = setInterval(() => {
      setCurrentIndex((prev) => (prev + 1) % images.length);
    }, 5000); // second interval
    return () => clearInterval(interval);
  }, []);

  return (
    <div className="h-[calc(100vh-120px)] max-h-[50rem] min-h-[500px] w-auto bg-navy-400/10 lg:mb-0 lg:h-[calc(100vh-60px)] lg:min-h-[680px]">
      <div className="relative h-[50%] lg:h-full">
        {/* Slideshow container */}
        <div className="absolute left-0 top-0 z-0 h-full w-full overflow-hidden">
          <div className="absolute left-0 top-0 h-full w-full bg-gradient-to-b from-black/90 via-black/90 to-black/80">
            <AnimatePresence>
              <motion.img
                key={currentIndex}
                src={images[currentIndex]}
                alt={`slide-${currentIndex}`}
                initial={{ opacity: 0 }}
                animate={{ opacity: 1 }}
                exit={{ opacity: 0 }}
                transition={{ duration: 1 }}
                className="absolute left-0 top-0 h-full w-full object-cover"
              />
            </AnimatePresence>
          </div>
        </div>

        {/* Text Container (Higher Z-Index) */}
        <div className="relative top-0 mx-auto flex h-full w-full max-w-7xl items-center justify-center lg:px-16">
          <div className="absolute top-[100%] z-10 flex h-full w-full shrink flex-col items-center justify-center p-4 pb-10 text-center lg:static lg:items-start lg:pb-4 lg:pb-[100px]">
            <div className="mb-4 flex w-full flex-col items-center text-3xl font-semibold leading-tight text-navy-100 lg:mb-8 lg:items-start lg:text-start lg:text-7xl lg:text-secondary">
              <div className="mb-2 h-[0.2rem] w-[6rem] bg-gradient-to-r from-[#0378E0] to-[#9CF4F8]" />
              <p className="text-base font-normal lg:text-2xl">
                Protection meets peace of mind
              </p>
              <div className="flex items-center gap-3 lg:gap-4">
                <span className="w-full font-normal">Your</span> Reliable
                <span className="w-full font-normal">and</span>
              </div>
              <span>Trusted</span>Insurance Partner
            </div>
          </div>
        </div>
      </div>
    </div>
  );
};

export default Banner;
