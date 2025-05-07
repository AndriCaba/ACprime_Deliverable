/* eslint-disable react-hooks/exhaustive-deps */
'use client';
import React from 'react';
import { useRouter } from 'next/navigation';
import Image from 'next/image';
import { IoIosArrowDropleftCircle } from 'react-icons/io';

export default function FireHomeInsurance() {
  const router = useRouter();
  const handleBack = () => router.back();

  return (
    <div className="bg-white text-gray-900">
      {/* Hero Section */}
      <section className="relative bg-gradient-to-r from-orange-50 via-blue-50 to-blue-100 px-4 py-20 md:px-16 lg:px-24">
        <div className="mx-auto grid max-w-7xl grid-cols-1 items-center gap-12 lg:grid-cols-2">
          {/* Text Content */}
          <div className="space-y-6">
            <h1 className="text-4xl font-extrabold text-blue-900 md:text-5xl">
              Fire/Home Insurance
            </h1>
            <p className="max-w-xl text-lg text-gray-700">
              We offer a comprehensive range of home protection designed to
              shield you from financial loss due to fire, disasters, or damage
              to your home.
            </p>
            <button
              onClick={handleBack}
              className="inline-flex items-center gap-2 rounded-full bg-orange-600 px-5 py-2.5 text-white transition hover:bg-orange-700"
            >
              <IoIosArrowDropleftCircle className="text-xl" />
              Back
            </button>
          </div>

          {/* Hero Image */}
          <div className="flex justify-center">
            <Image
              src="/images/non-life/fire_insurance.png"
              alt="Fire Insurance"
              width={500}
              height={500}
              className="shadow-xl w-full max-w-sm rounded-xl md:max-w-md lg:max-w-lg"
            />
          </div>
        </div>
      </section>

      {/* Information Cards */}
      <section className="bg-white px-4 py-20 md:px-16 lg:px-24">
        <div className="mx-auto grid max-w-7xl gap-10 md:grid-cols-2 lg:grid-cols-3">
          {/* Card 1 */}
          <div className="shadow hover:shadow-md rounded-2xl border-l-4 border-orange-500 bg-blue-50 p-6 transition">
            <h3 className="mb-2 text-lg font-semibold text-blue-800">
              Coverage Includes
            </h3>
            <ul className="list-inside list-disc space-y-1 text-sm text-gray-700">
              <li>Fire</li>
              <li>Lightning</li>
              <li>Explosion</li>
              <li>Earthquake, Typhoon, Flood (optional)</li>
              <li>Vandalism or Malicious Mischief</li>
            </ul>
          </div>

          {/* Card 2 */}
          <div className="shadow hover:shadow-md rounded-2xl border-l-4 border-orange-500 bg-blue-50 p-6 transition">
            <h3 className="mb-2 text-lg font-semibold text-blue-800">
              Required Details
            </h3>
            <ul className="list-inside list-disc space-y-1 text-sm text-gray-700">
              <li>Insured’s Name</li>
              <li>Property Type</li>
              <li>Nature of Project</li>
              <li>Mortgage Info</li>
            </ul>
          </div>

          {/* Card 3 */}
          <div className="shadow hover:shadow-md rounded-2xl border-l-4 border-orange-500 bg-blue-50 p-6 transition">
            <h3 className="mb-2 text-lg font-semibold text-blue-800">
              Property Details
            </h3>
            <ul className="list-inside list-decimal space-y-1 text-sm text-gray-700">
              <li>Floor Area</li>
              <li>Building Height</li>
              <li>Roofing Material</li>
              <li>Wall Material</li>
            </ul>
          </div>

          {/* Card 4 */}
          <div className="shadow hover:shadow-md rounded-2xl border-l-4 border-orange-500 bg-blue-50 p-6 transition">
            <h3 className="mb-2 text-lg font-semibold text-blue-800">
              Insured Items
            </h3>
            <ul className="list-inside list-disc space-y-1 text-sm text-gray-700">
              <li>Building Structure</li>
              <li>Contents (e.g. furniture)</li>
              <li>Machinery & Equipment</li>
              <li>Stock/Inventory</li>
              <li>High-value items or artwork</li>
            </ul>
          </div>

          {/* Card 5 */}
          <div className="shadow hover:shadow-md rounded-2xl border-l-4 border-orange-500 bg-blue-50 p-6 transition">
            <h3 className="mb-2 text-lg font-semibold text-blue-800">
              Loss History
            </h3>
            <p className="text-sm text-gray-700">
              Provide a record of any previous claims or losses related to the
              insured property.
            </p>
          </div>
        </div>
      </section>
    </div>
  );
}
