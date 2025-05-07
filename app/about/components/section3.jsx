/* eslint-disable react-hooks/exhaustive-deps */
'use client';
import React from 'react';
import Image from 'next/image';
import Lottie from 'lottie-react';

// Import the JSON files
import integrityAnimation from '/public/images/about/integrity.json';
import excellenceAnimation from '/public/images/about/excellence.json';
import customerCentricAnimation from '/public/images/about/customer_centric.json';
import innovationAnimation from '/public/images/about/innovation.json';
import empowermentAnimation from '/public/images/about/empowerment.json';
import reliabilityAnimation from '/public/images/about/reliability.json';

const Section3 = () => {
  const coreValues1 = [
    {
      title: 'INTEGRITY',
      json: integrityAnimation,
      width: '3rem',
      text: 'Uphold the highest ethical standard, transparency and honesty in all our dealings',
    },
    {
      title: 'EXCELLENCE',
      json: excellenceAnimation,
      width: '4.5rem',
      text: 'Constantly seeking improvement to improve our services and exceed client expectations',
    },
    {
      title: 'CUSTOMER CENTRIC',
      json: customerCentricAnimation,
      width: '4.5rem',
      text: 'We are dedicated to understanding our client needs and exceeding their expectations through personalized service and attentive care.',
    },
    {
      title: 'INNOVATION',
      json: innovationAnimation,
      width: '4.5rem',
      text: 'Adapt to technologies to improve our services and provide effective solutions for complex insurance needs',
    },
    {
      title: 'EMPOWERMENT',
      json: empowermentAnimation,
      width: '4.5rem',
      text: 'We empower our clients by providing them with the knowledge. Through education and transparency, we help them confidently navigate their insurance options.',
    },
    {
      title: 'RELIABILITY',
      json: reliabilityAnimation,
      width: '4.5rem',
      text: 'We prioritize reliability in all our services, ensuring that our clients can depend on us for consistent, trustworthy support.',
    },
  ];

  return (
    <div className="container px-6 py-12 text-center">
      <h1 className="mb-4 text-4xl font-semibold text-navy-100 lg:text-5xl">
        Our Core <span className="text-primary">Values</span>
      </h1>
      <p className="mx-auto mb-10 max-w-[800px] text-navy-100">
        These core values guide the behaviors and decisions of our management
        and staff, ensuring we remain focused on delivering exceptional service
        and maintaining strong, ethical relationships with clients and partners.
      </p>
      <div className="mx-auto grid w-max grid-cols-1 gap-6 sm:grid-cols-2 lg:grid-cols-3">
        {coreValues1.map((core, index) => (
          <div
            key={index}
            className="custom-shadow h-[17rem] max-w-[16rem] rounded bg-gradient-to-b from-[#C5E6FF] to-[#DEF1FF] px-8 py-12 lg:h-[18rem] lg:max-w-[18rem]"
          >
            <h2
              className={`text-sm font-semibold lg:text-base ${
                index % 2 === 0 ? 'text-primary' : 'text-navy-100'
              } lg:text-base`}
            >
              {core.title}
            </h2>
            <div
              className={`flex w-full justify-center ${index === 0 ? 'py-[0.5024rem]' : ''} `}
            >
              <Lottie
                animationData={core.json}
                style={{ maxWidth: core.width }}
                loop={true}
              />
            </div>
            <p className="text-xs text-navy-100 lg:text-sm">{core.text}</p>
          </div>
        ))}
      </div>
    </div>
  );
};

export default Section3;
