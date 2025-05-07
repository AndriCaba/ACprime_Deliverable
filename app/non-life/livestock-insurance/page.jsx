/* eslint-disable react-hooks/exhaustive-deps */
'use client';
import React from 'react';
import { Button } from '@/components/ui/button';
import Image from 'next/image';
import { useRouter } from 'next/navigation';
import { IoIosArrowDropleft } from 'react-icons/io';
import { motion } from 'framer-motion';

export default function LivestockInsurance() {
  const router = useRouter();
  const handleBack = () => {
    router.back();
  };

  return (
    <div className="bg-[#F9FAFB] text-gray-800">
      {/* Hero Section */}
      <section className="relative bg-[#156CB9] text-white">
        <div className="absolute inset-0 opacity-20">
          <Image
            src="/images/non-life/livestock_insurance.png"
            alt="Livestock Background"
            layout="fill"
            objectFit="cover"
          />
        </div>
        <div className="relative z-10 px-6 py-20 text-center">
          <div className="mx-auto max-w-3xl">
            <h1 className="mb-4 text-4xl font-bold">Livestock Insurance</h1>
            <p className="text-lg leading-relaxed">
              Protect your livestock from unexpected risks such as death,
              disease, or theft — offering peace of mind to farmers and
              ranchers.
            </p>
            <div className="mt-6 flex justify-center">
              <Button
                variant="ghost"
                onClick={handleBack}
                className="flex items-center gap-2 text-white hover:text-[#ED4A00]"
              >
                <IoIosArrowDropleft className="text-xl" />
                Back
              </Button>
            </div>
          </div>
        </div>
      </section>

      {/* Coverage Section */}
      <section className="px-6 py-16">
        <div className="mx-auto max-w-5xl text-center">
          <h2 className="mb-10 text-3xl font-semibold text-[#156CB9]">
            What's Covered?
          </h2>
          <div className="grid gap-8 md:grid-cols-2">
            {[
              {
                title: 'Death',
                desc: 'Accidents, disease, illness, or natural events like flooding or lightning.',
              },
              {
                title: 'Theft',
                desc: 'Compensation if your livestock is stolen.',
              },
              {
                title: 'Injury or Illness',
                desc: 'Covers veterinary costs due to injuries or sickness.',
              },
              {
                title: 'Transit',
                desc: 'Protection during the transportation of livestock.',
              },
            ].map((item, idx) => (
              <motion.div
                key={idx}
                initial={{ opacity: 0, y: 20 }}
                whileInView={{ opacity: 1, y: 0 }}
                transition={{ duration: 0.4, delay: idx * 0.1 }}
                className="shadow-md rounded-xl bg-white p-6 text-left"
              >
                <h3 className="mb-2 text-xl font-semibold text-[#ED4A00]">
                  {item.title}
                </h3>
                <p className="text-gray-600">{item.desc}</p>
              </motion.div>
            ))}
          </div>
        </div>
      </section>

      {/* Requirements Section */}
      <section className="bg-white px-6 py-16">
        <div className="mx-auto max-w-4xl text-center">
          <h2 className="mb-10 text-3xl font-semibold text-[#156CB9]">
            Required Information
          </h2>
          <ul className="space-y-6 text-left">
            {[
              {
                label: "Assured's Name",
                value: 'The individual or entity applying for insurance.',
              },
              {
                label: 'Location of Livestock',
                value: 'Where the animals are kept or raised.',
              },
              {
                label: 'Valuation',
                value: 'Estimated value of the livestock or poultry.',
              },
              {
                label: 'Loss History',
                value: 'Record of past claims or losses (if any).',
              },
            ].map((item, idx) => (
              <li
                key={idx}
                className="shadow-sm rounded-md border-l-4 border-[#ED4A00] bg-gray-50 py-2 pl-4"
              >
                <p className="font-medium text-[#156CB9]">{item.label}</p>
                <p className="text-gray-700">{item.value}</p>
              </li>
            ))}
          </ul>
        </div>
      </section>
    </div>
  );
}
