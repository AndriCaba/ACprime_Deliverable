'use client';
import React from 'react';
import Image from 'next/image';
import Link from 'next/link';
import BackgroundWave from '@/components/background-wave';
import clsx from 'clsx';
const Section1 = () => {
  const our_products = [
    {
      link: '/life',
      img: 'images/homepage/our_products-1.png',
      title: 'Life Insurance',
    },
    {
      link: '/non-life',
      img: 'images/homepage/our_products-2.png',
      title: 'Non Life/General Insurance',
    },
    {
      link: '/business-solutions',
      img: 'images/homepage/our_products-4.png',
      title: 'Business Solutions',
    },
  ];

  return (
    // <div className="text-[#ED4A00]font-sans relative mb-12 bg-gradient-to-b">
    //   <div className="container relative z-10 px-4 py-12">
    //     <div className="text-center">
    //       <h2 className="mb-12 text-4xl font-bold text-[#004588] lg:text-5xl">
    //         Our <span style={{ color: '#ED4A00' }}>Products</span>
    //       </h2>
    //     </div>
    //     <div className="flex flex-wrap justify-center gap-12 gap-y-24">
    //       {our_products.map((icon, index) => (
    //         <Link href={icon.link} key={index} className="shadow-lg group">
    //           <div className="flex h-full w-full justify-center overflow-hidden rounded">
    //             <Image
    //               src={icon.img}
    //               alt={icon.title}
    //               width={270}
    //               height={250}
    //               className="transition hover:scale-105"
    //             />
    //           </div>
    //           <div className="relative flex justify-center text-center">
    //             <div className="absolute bottom-[-24px] w-full select-none rounded-b bg-[#004588] p-3 text-base font-medium text-white group-hover:bg-navy-200">
    //               {icon.title}
    //             </div>
    //           </div>
    //         </Link>
    //       ))}
    //     </div>
    //   </div>
    //   <div className="flex justify-center">
    //     <a href="/products">
    //       <button className="button mt-10 border-b-2 border-gray-500 font-sans">
    //         View more
    //       </button>
    //     </a>
    //   </div>
    // </div>
    <section
      className="relative w-full bg-gray-50 py-16"
      role="region"
      aria-labelledby="our-products-heading"
    >
      <div className="mx-auto max-w-7xl px-4 sm:px-6 lg:px-8">
        <h1
          id="our-products-heading"
          className="mb-10 text-center text-4xl font-bold text-[#004588] lg:text-5xl"
        >
          Our <span style={{ color: '#ED4A00' }}>Products</span>
        </h1>

        <div className="grid grid-cols-1 gap-8 sm:grid-cols-2 lg:grid-cols-3">
          {our_products.map((product, index) => (
            <Link
              key={product.id || index}
              href={product.link}
              aria-label={`Learn more about ${product.title}`}
              className="shadow-lg hover:shadow-2xl group relative block overflow-hidden rounded-2xl transition-shadow duration-500"
            >
              {/* Image */}
              <div className="relative h-80 w-full">
                <Image
                  src={product.img}
                  alt={product.title}
                  fill
                  priority
                  sizes="(max-width: 768px) 100vw, 33vw"
                  className="object-cover transition-transform duration-500 group-hover:scale-105"
                />

                {/* Overlay */}
                <div className="absolute inset-0 bg-gradient-to-t from-black/70 to-transparent opacity-60 transition-opacity duration-500 group-hover:opacity-40" />
              </div>

              {/* Content */}
              <div className="absolute bottom-0 left-0 right-0 z-10 p-6">
                <h3 className="mb-3 text-2xl font-semibold text-white drop-shadow-sm">
                  {product.title}
                </h3>
                <span className="inline-block rounded-full border border-white bg-white/20 px-6 py-2 text-sm font-medium text-white backdrop-blur-md transition-all duration-300 group-hover:border-[#ED4A00] group-hover:bg-[#ED4A00]">
                  Learn More
                </span>
              </div>
            </Link>
          ))}
        </div>
      </div>
    </section>
  );
};

export default Section1;
