/* eslint-disable react-hooks/exhaustive-deps */
'use client';

import React from 'react';
import { Button } from '@/components/ui/button';
import Image from 'next/image';
import { useRouter } from 'next/navigation';
import { IoIosArrowDropleftCircle } from 'react-icons/io';
import Heading from '../components/heading';

export default function FireHomeInsurance() {
  const router = useRouter();

  return (
    <main className="min-h-screen bg-gray-50 text-gray-900">
      {/* Navigation & Hero */}
      <header className="bg-[#156CB9] py-10 text-white">
        <div className="container mx-auto px-4 sm:px-6 lg:px-20">
          <button
            onClick={() => router.back()}
            className="mb-6 inline-flex items-center gap-2 text-white hover:text-gray-200"
          >
            <IoIosArrowDropleftCircle className="h-6 w-6" />
            <span className="text-sm font-medium">Back</span>
          </button>

          <div className="grid items-center gap-10 lg:grid-cols-2">
            <div>
              <h1 className="mb-4 text-3xl font-bold">Property Insurance</h1>
              <p className="mb-6 max-w-xl text-white/90">
                Protect your home and assets with coverage for fire, theft,
                natural disasters, and more.
              </p>
              <Button
                className="rounded bg-[#ED4A00] px-6 py-2 text-white hover:bg-[#c33d00]"
                onClick={() => router.push('/contact')}
              >
                Request a Quote
              </Button>
            </div>
            <div className="flex justify-center">
              <Image
                src="/images/non-life/property_insurance.png"
                alt="Property Insurance Visual"
                width={500}
                height={500}
                className="w-full max-w-md object-contain"
              />
            </div>
          </div>
        </div>
      </header>

      {/* Features Section */}
      <section className="bg-white py-16">
        <div className="container mx-auto px-4 sm:px-6 lg:px-20">
          <div className="grid gap-8 md:grid-cols-2 lg:grid-cols-4">
            {[
              {
                title: 'Buildings',
                desc: 'Coverage for structural damage to your property.',
                icon: 'M3 12l2-2m0 0l7-7 7 7M5 10v10...',
              },
              {
                title: 'Contents',
                desc: 'Protection for personal belongings and contents.',
                icon: 'M20 7l-10-4-10 4m20 0v12...',
              },
              {
                title: 'Business Interruption',
                desc: 'Compensation for income loss due to damage.',
                icon: 'M12 8c-1.657 0-3 .895-3 2...',
              },
              {
                title: 'Additional Perils',
                desc: 'Optional coverage for theft, vandalism, and disasters.',
                icon: 'M9 12l2 2 4-4m6 2a9 9...',
              },
            ].map((item, idx) => (
              <div
                key={idx}
                className="shadow hover:shadow-md rounded-xl border border-gray-100 p-6 transition"
              >
                <div className="mb-4 flex h-10 w-10 items-center justify-center rounded-full bg-blue-100">
                  <svg
                    className="h-5 w-5 text-blue-600"
                    fill="none"
                    stroke="currentColor"
                    strokeWidth="2"
                    viewBox="0 0 24 24"
                  >
                    <path
                      strokeLinecap="round"
                      strokeLinejoin="round"
                      d={item.icon}
                    />
                  </svg>
                </div>
                <h3 className="mb-1 text-lg font-semibold">{item.title}</h3>
                <p className="text-sm text-gray-600">{item.desc}</p>
              </div>
            ))}
          </div>
        </div>
      </section>

      {/* Requirements */}
      <section className="bg-gray-100 py-20">
        <div className="container mx-auto px-4 sm:px-6 lg:px-20">
          <h2 className="mb-10 text-center text-2xl font-bold">
            Requirements for Property Insurance
          </h2>
          <div className="grid gap-6 md:grid-cols-2 lg:grid-cols-3">
            {[
              {
                title: 'Basic Information',
                items: ["Insured's Name", 'Property Location'],
              },
              {
                title: 'Items to Insure',
                items: [
                  'Building Structure',
                  'Contents (e.g., furniture)',
                  'Machinery & Equipment',
                  'Inventory/Stock',
                  'High-Value Items',
                ],
              },
              {
                title: 'Valuation & History',
                items: [
                  'Replacement Cost',
                  'Depreciated Value',
                  'Market Value',
                  'Mortgage Information',
                  'Loss History',
                ],
              },
            ].map((group, idx) => (
              <div
                key={idx}
                className="shadow hover:shadow-md rounded-lg bg-white p-6 transition"
              >
                <h3 className="mb-3 text-lg font-semibold text-blue-700">
                  {group.title}
                </h3>
                <ul className="list-inside list-disc space-y-1 text-sm text-gray-700">
                  {group.items.map((item, i) => (
                    <li key={i}>{item}</li>
                  ))}
                </ul>
              </div>
            ))}
          </div>
        </div>
      </section>

      {/* CTA */}
      <footer className="bg-[#156CB9] py-14 text-center text-white">
        <div className="container mx-auto px-4 sm:px-6 lg:px-20">
          <h2 className="mb-3 text-2xl font-bold">
            Secure Your Property Today
          </h2>
          <p className="mx-auto mb-6 max-w-xl text-sm text-white/90">
            Get tailored coverage with our trusted partners. Contact us for a
            free consultation.
          </p>
          <Button
            className="rounded bg-[#ED4A00] px-6 py-2 text-white hover:bg-[#c33d00]"
            onClick={() => router.push('/contact')}
          >
            Get Started
          </Button>
        </div>
      </footer>
    </main>
  );
}
