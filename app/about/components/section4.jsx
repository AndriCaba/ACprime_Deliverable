/* eslint-disable react-hooks/exhaustive-deps */
'use client';
import React from 'react';
import { Card, CardContent } from '@/components/ui/card';
import Image from 'next/image';
import Link from 'next/link';

const partners = [
  {
    name: 'Affinity Capital Corp',
    href: 'https://affinitycorp.net/',
    imgSrc: '/images/logo/acc.png',
    imgWidth: 150,
    imgHeight: 150,
    description:
      'Affinity Capital Corp is a mutual fund distributor licensed by the Philippine SEC in 2019. Based in Makati City, it offers investment products, including financial planning and wealth management. The company partners with BPI Wealth and FAMI to provide diversified investment options.',
  },
  {
    name: 'Affinity Consulting',
    href: 'https://affinitycorp.net/', // Correct link needed
    imgSrc: '/images/logo/achi.png',
    imgWidth: 120,
    imgHeight: 180,
    description:
      'We are a premier consulting firm specializing in financial due diligence and transactional advisory. Committed to clarity and strategic growth, we empower Filipino businesses with precise assessments and informed decision-making.',
  },
];

const bottomPartner = {
  name: 'Affinity Consulting Firm',
  href: 'https://affinityconsulting.com/',
  imgSrc: '/images/logo/affinity_consulting.png',
  imgWidth: 150,
  imgHeight: 225,
  description:
    'We are a premier consulting firm specializing in financial due diligence and transactional advisory. Committed to clarity and strategic growth, we empower Filipino businesses with precise assessments and informed decision-making.',
};

const PartnerCard = ({ partner }) => (
  <div className="Logo_Desc">
    <Link href={partner.href}>
      <Image
        src={partner.imgSrc}
        alt={`${partner.name} logo`}
        width={partner.imgWidth}
        height={partner.imgHeight}
        className="object-contain md:w-[15rem]"
      />
    </Link>
    <p className="Partners_Pstyle">{partner.description}</p>
  </div>
);

const Section4 = () => {
  return (
    <div className="w-full text-navy-100">
      <div className="bg-gradient-to-b from-[#CBE7F9] to-[#71BAE9] py-16">
        <h1 className="mb-12 px-6 text-center text-xl font-semibold sm:text-2xl lg:text-4xl">
          Our Sister <span style={{ color: '#ED4A00' }}>Companies </span>
        </h1>
        <div className="Partners_Containers grid grid-cols-1 justify-items-center gap-8 md:grid-cols-2">
          {partners.map((partner, index) => (
            <PartnerCard key={index} partner={partner} />
          ))}
        </div>
        <div className="mt-8 flex justify-center">
          <PartnerCard partner={bottomPartner} />
        </div>
      </div>
    </div>
  );
};

export default Section4;
