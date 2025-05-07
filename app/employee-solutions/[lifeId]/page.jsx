/* eslint-disable react-hooks/exhaustive-deps */
'use client';
import React from 'react';
import { Button } from '@/components/ui/button';
import Image from 'next/image';
import Link from 'next/link';
import { IoIosArrowDropleftCircle } from 'react-icons/io';
import { useRouter } from 'next/navigation';
import BackgroundWave from '@/components/background-wave';
export default function LifeDetails({ params }) {
  const { lifeId } = params;
  const router = useRouter();
  const life_insurance = {
    'term-insurance': {
      img: '/images/life/life_insurance-4.png',
      title: 'Term Insurance',
      key_feature: [
        'Provides coverage for a specified term (e.g., 10, 20, or 30 years).',
        'Lower premiums compared to permanent life insurance or a VUL',
        'Pays out a death benefit if the insured dies within the term.',
        'No cash value component.',
        'Renewable',
      ],
      suitable_for: [
        'Individuals seeking affordable coverage for a specific period (e.g., until children are grown or a mortgage is paid off).',
      ],
    },
    'whole-life': {
      img: '/images/life/life_insurance-5.png',
      title: 'Whole Life',
      key_feature: [
        'Provides lifelong coverage or until age 100',
        [
          'Fixed premiums that do not increase over time.',
          'Accumulates cash value that grows at a guaranteed rate.',
        ],
        'Can take a loan against the cash value.',
      ],
      suitable_for: [
        'Individuals seeking permanent coverage with a savings component.',
        'Those looking for a guaranteed death benefit and stable premiums.',
      ],
    },
    'vul-insurance': {
      img: '/images/life/life_insurance-6.png',
      title: 'Variable Unit Link (VUL)',
      key_feature: [
        'Provides lifelong coverage with portion of premium goes to investment.',
        'Premiums and death benefits can vary based on investment performance.',
        'Portion of premium is invested in various investment funds (e.g., stocks, bonds).',
        'For Regular Pay VUL, the investment portion is intended to pay future premiums.',
      ],
      suitable_for: [
        'Individuals seeking insurance coverage with an investment component.',
        'Individuals who may want to increase or decrease insurance coverage later on.',
        'Young professionals who want to have an investment portfolio as a side benefit.',
      ],
    },
  };

  if (!life_insurance[lifeId]) {
    return <div>Life insurance type not found.</div>;
  }
  const { img, title, key_feature, suitable_for } = life_insurance[lifeId];

  const handleBack = () => {
    router.back();
  };
  const renderKeyFeatures = (features) => {
    return (
      <ul className="lg: mb-6 ml-6 list-disc text-sm font-medium text-navy-100 lg:text-base">
        {features.map((feature, index) =>
          Array.isArray(feature) ? (
            <li className="mb-1" key={index}>
              {feature[0]}
              <ul className="ml-6 list-[circle]">
                {feature.slice(1).map((subFeature, subIndex) => (
                  <li className="mb-1 list-[circle]" key={subIndex}>
                    {subFeature}
                  </li>
                ))}
              </ul>
            </li>
          ) : (
            <li className="mb-1" key={index}>
              {feature}
            </li>
          )
        )}
      </ul>
    );
  };

  return (
    <div className="relative flex bg-navy-500/20">
      <BackgroundWave rotation="140deg" translateX="50px" translateY="-250px" />
      <div className="container z-20 flex-col gap-12 lg:gap-0 lg:px-12">
        <section className="py-16 lg:h-screen lg:max-h-[680px] lg:px-6">
          <div className="mb-8 flex justify-between">
            <h2 className="text-3xl font-semibold text-navy-100 lg:text-4xl">
              {title}
            </h2>
            <div
              className="my-auto h-max text-4xl text-navy-100 transition hover:text-navy-200"
              onClick={handleBack}
            >
              <IoIosArrowDropleftCircle />
            </div>
          </div>
          <div className="flex flex-col-reverse items-center justify-between gap-8 lg:flex-row">
            <div className="lg:w-2/3">
              <h3 className="mb-6 text-base font-bold text-navy-100 lg:text-xl">
                Key Features
              </h3>
              {renderKeyFeatures(key_feature)}
              <h3 className="mb-6 text-base font-bold text-navy-100 lg:text-xl">
                Suitable For
              </h3>
              <ul className="mb-12 ml-6 list-disc font-medium text-navy-100">
                {suitable_for.map((suitable, index) => (
                  <li className="mb-1 text-sm lg:text-base" key={index}>
                    {suitable}
                  </li>
                ))}
              </ul>
            </div>
            <div className="bottom-0 right-0 px-8 lg:absolute lg:px-0">
              <Image
                src={img}
                alt={title}
                width={500}
                height={250}
                className=""
              />
            </div>
          </div>
          <div className="flex justify-center lg:justify-start">
            <Link href="/contact-us">
              <Button variant="primary">Talk to a Professional</Button>
            </Link>
          </div>
        </section>
      </div>
    </div>
  );
}
