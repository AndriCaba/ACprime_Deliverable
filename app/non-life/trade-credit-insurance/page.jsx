/* eslint-disable react-hooks/exhaustive-deps */
'use client';

import React from 'react';
import { useRouter } from 'next/navigation';
import Image from 'next/image';
import { IoIosArrowDropleftCircle } from 'react-icons/io';
import Heading from '../components/heading';
// import ContactForm from '@/components/contact-form';

export default function TradeCredit() {
  const router = useRouter();
  const handleBack = () => router.back();

  return (
    <div className="min-h-screen bg-custom-gradient py-10 text-gray-800">
      <div className="container mx-auto space-y-12 px-4 lg:px-16">
        {/* Back Button */}
        <div>
          <button
            onClick={handleBack}
            className="flex items-center gap-2 text-sm font-medium text-[#156CB9] hover:text-[#ED4A00]"
          >
            <IoIosArrowDropleftCircle className="text-2xl" />
            <span>Back</span>
          </button>
        </div>

        {/* Main Section */}
        <div className="flex flex-col-reverse items-start gap-12 lg:flex-row">
          {/* Text Content */}
          <div className="w-full space-y-8 lg:w-1/2">
            {/* Title with corporate blue */}
            <div className="space-y-2">
              <h2 className="text-3xl font-bold text-[#156CB9]">
                Trade Credit Insurance
              </h2>
              <p className="text-gray-600">
                Protects sellers from buyer non-payment due to insolvency or
                prolonged default. Designed for domestic and export transactions
                on a sales turnover basis.
              </p>
            </div>

            {/* Coverage List */}
            <div className="space-y-6">
              {[
                {
                  title: 'Single Contract',
                  desc: 'Protection for a specific trade deal, ensuring payment throughout the contract duration.',
                },
                {
                  title: 'Domestic / Export',
                  desc: 'Covers both local and international trade receivables.',
                },
                {
                  title: 'Political Risk',
                  desc: 'Includes coverage for geopolitical events that affect payment, such as war or expropriation.',
                },
                {
                  title: 'Special Risks',
                  desc: 'Flexible for niche industries or exceptional risks not in standard policies.',
                },
              ].map(({ title, desc }) => (
                <div key={title}>
                  <h4 className="text-base font-semibold text-[#156CB9]">
                    {title}
                  </h4>
                  <p className="text-sm text-gray-600">{desc}</p>
                </div>
              ))}
            </div>

            {/* Info Required */}
            <div>
              <h4 className="mb-2 text-base font-semibold text-[#ED4A00]">
                Required Documents & Info
              </h4>
              <ul className="ml-4 list-disc space-y-1 text-sm text-gray-600">
                <li>Business name, address, and contact details</li>
                <li>Nature of business and industry sector</li>
                <li>
                  Financial statements (e.g., balance sheet, income statement)
                </li>
                <li>Trade Receivables Information</li>
                <li>Credit Management Policies</li>
                <li>Preferred Coverage</li>
                <li>Claims History</li>
                <li>Additional Documentation</li>
              </ul>
            </div>
          </div>

          {/* Image Section */}
          <div className="w-full lg:w-1/2">
            <div className="shadow-sm overflow-hidden rounded-xl border border-gray-200">
              <Image
                src="/images/non-life/trade credit_insurance.png"
                alt="Trade Credit Insurance"
                width={800}
                height={800}
                className="w-full object-cover"
              />
            </div>
          </div>
        </div>

        {/* Contact Form - Uncomment if needed */}
        {/* <div className="rounded-lg border border-gray-200 bg-white p-6 shadow-sm">
          <ContactForm />
        </div> */}
      </div>
    </div>
  );
}
