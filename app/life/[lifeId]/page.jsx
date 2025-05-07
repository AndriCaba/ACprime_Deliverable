/* eslint-disable react-hooks/exhaustive-deps */
'use client';
import React from 'react';
import { Button } from '@/components/ui/button';
import Image from 'next/image';
import Link from 'next/link';
import BackgroundWave from '@/components/background-wave';
import BackButton from '@/components/ui/back-button';
import '@/app/life/style.css'; // Import the CSS file

export default function LifeDetails({ params }) {
  const { lifeId } = params;

  const life_insurance = {
    'term-insurance': {
      description:
        'Life Insurance policy that provides a death benefit to the beneficiaries if the insured passes away during the term or period.',
      img: '/images/life/product-1.png',
      title: 'Term Insurance',
      key_feature: [
        'Provides coverage for a specified term (e.g., 10, 20, or 30 years).',
        'Lower premiums compared to permanent life insurance or a VUL.',
        'Pays out a death benefit if the insured dies within the term.',
        'No cash value component.',
        'Renewable.',
      ],
      suitable_for: [
        'Individuals seeking affordable coverage for a specific period (e.g., until children are grown or a mortgage is paid off).',
      ],
      InfoNeeded: [
        'Photo of Valid Government-Issued ID',
        'Name',
        'Contact Information and Email Address',
        'Residence Address',
        'Name and Details of Beneficiaries',
      ],
    },
    'whole-life': {
      description:
        'A permanent Life Insurance policy that accumulates cash value over time, while providing coverage.',
      img: '/images/life/product-2.png',
      title: 'Whole Life',
      key_feature: [
        'Provides lifelong coverage or until age 100',
        'Fixed premiums that do not increase over time.',
        'Accumulates cash value that grows at a guaranteed rate.',
        'Can take a loan against the cash value.',
      ],
      suitable_for: [
        'Individuals seeking permanent coverage with a savings component.',
        'Those looking for a guaranteed death benefit and stable premiums.',
      ],
      InfoNeeded: [
        'Photo of Valid Government-Issued ID',
        'Name',
        'Contact Information and Email Address',
        'Residence Address',
        'Name and Details of Beneficiaries',
      ],
    },
    'vul-insurance': {
      description:
        'A Life Insurance policy with an investment component, while providing flexible coverage options.',
      img: '/images/life/product-3.png',
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
      InfoNeeded: [
        'Photo of Valid Government-Issued ID',
        'Name',
        'Contact Information and Email Address',
        'Residence Address',
        'Name and Details of Beneficiaries',
        'Risk Profile Questionnaire',
        'Preferred Coverage',
      ],
    },
    'critical-illness': {
      description:
        'A Health Insurance policy that provides a cash benefit if the insured is diagnosed with a serious illness.',
      img: '/images/life/product-4.png',
      title: 'Critical Illness',
      key_feature: [
        'Pays a lump sum cash benefit upon diagnosis of a critical illness.',
        'Offers greater freedom of choice for doctors and hospitals.',
        'Premiums may vary depending on coverage options and age.',
        'Policies typically cover you until a designated age (e.g., 75 or 100) and require renewal.',
        'Often includes additional benefits like cashback, hospitalization allowance, or other health riders.',
      ],
      suitable_for: [
        'Individuals with a family history of critical illnesses.',
        'Primary breadwinners seeking financial protection for their family.',
        'Health-conscious individuals wanting comprehensive protection.',
        'Self-employed or freelancers without employer-provided health benefits.',
      ],
      InfoNeeded: [
        'Photo of Valid Government-Issued ID',
        'Name',
        'Contact Information and Email Address',
        'Residence Address',
        'Name and Details of Beneficiaries',
      ],
    },
  };

  if (!life_insurance[lifeId]) {
    return <div>Life insurance type not found.</div>;
  }

  const { img, title, key_feature, suitable_for, InfoNeeded, description } =
    life_insurance[lifeId];

  return (
    <div className="relative flex overflow-hidden bg-navy-500/20">
      <BackgroundWave rotation="140deg" translateX="50px" translateY="-250px" />

      <div className="gap-15 container z-20 mx-auto flex flex-col lg:gap-0">
        <section className="py-20">
          <div className="flex flex-col items-start gap-8 lg:flex-row">
            {/* Image Section */}
            <div className="w-full lg:w-1/3">
              <Image
                src={img}
                alt={title}
                width={500}
                height={450}
                className="rounded-lg"
              />
            </div>

            {/* Details Section */}
            <div className="w-full lg:w-2/3">
              <div className="mb-4 flex items-center justify-between">
                <h2 className="text-3xl font-bold">{title}</h2>
                <BackButton />
              </div>
              <p className="mb-6 text-lg text-gray-700">{description}</p>

              {/* Collapsible Sections */}
              {[
                { label: 'Key Features', items: key_feature },
                { label: 'Suitable For', items: suitable_for },
                { label: `Requirements for ${title}`, items: InfoNeeded },
              ].map(({ label, items }, index) => (
                <details
                  key={index}
                  className="mb-4 rounded-lg border border-gray-300 p-4"
                >
                  <summary className="cursor-pointer text-lg font-semibold">
                    {label}
                  </summary>
                  <ul className="mt-2 list-disc pl-6">
                    {items.map((item, idx) => (
                      <li key={idx} className="text-gray-600">
                        {item}
                      </li>
                    ))}
                  </ul>
                </details>
              ))}

              {/* CTA Button */}
              <div className="mt-6 text-[#ED4A00]">
                <Link href="/contact-us">
                  <Button>Get a Quote</Button>
                </Link>
              </div>
            </div>
          </div>
        </section>
      </div>
    </div>
  );
}
