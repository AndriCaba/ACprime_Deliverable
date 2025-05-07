/* eslint-disable react-hooks/exhaustive-deps */
'use client';
import React from 'react';
import { Button } from '@/components/ui/button';
import Image from 'next/image';
import { useRouter } from 'next/navigation';
import { IoIosArrowDropleftCircle } from 'react-icons/io';
import {
  FaPlaneDeparture,
  FaHospital,
  FaClock,
  FaSuitcaseRolling,
} from 'react-icons/fa';

export default function TravelInsurance() {
  const router = useRouter();
  const handleBack = () => {
    router.back();
  };

  return (
    <div className="bg-custom-gradient">
      <div className="container mx-auto px-4 lg:px-8">
        <Button onClick={handleBack} variant="ghost" className="mb-8">
          <IoIosArrowDropleftCircle className="mr-2 h-5 w-5" />
          Go Back
        </Button>

        {/* Main Content Section */}
        <section className="shadow-md overflow-hidden rounded-lg bg-white lg:flex">
          <div className="p-8 text-[#156CB9] lg:w-1/2">
            <h1 className="mb-4 text-4xl font-bold text-[#156CB9]">
              Travel Insurance
            </h1>
            <p className="mb-6 text-gray-700">
              We offer a comprehensive range of travel insurance products
              designed to offer financial protection and peace of mind to
              individuals and families traveling domestically and
              internationally. These products cater to vacation, business,
              student, and adventure travel.
            </p>

            <h3 className="mb-4 text-xl font-semibold text-primary">
              Key Coverage:
            </h3>
            <ul className="space-y-4">
              <li className="flex items-start">
                <FaPlaneDeparture className="mr-3 h-6 w-6 text-[#156CB9]" />
                <div>
                  <h4 className="font-semibold text-[#156CB9]">
                    Trip Cancellation and Interruption
                  </h4>
                  <p className="text-sm text-gray-600">
                    Reimbursement for non-refundable travel expenses due to
                    illness, injury, natural disasters, or unforeseen events.
                  </p>
                </div>
              </li>
              <li className="flex items-start">
                <FaHospital className="mr-3 h-6 w-6 text-[#156CB9]" />
                <div>
                  <h4 className="font-semibold text-[#156CB9]">
                    Emergency Medical Coverage
                  </h4>
                  <p className="text-sm text-gray-600">
                    Covers hospitalization, emergency treatments, doctor visits,
                    and medications while abroad.
                  </p>
                </div>
              </li>
              <li className="flex items-start">
                <FaClock className="mr-3 h-6 w-6 text-[#156CB9]" />
                <div>
                  <h4 className="font-semibold text-[#156CB9]">
                    Travel Delay & Missed Connection
                  </h4>
                  <p className="text-sm text-gray-600">
                    Reimbursement for additional costs caused by delays or
                    missed connections due to covered reasons.
                  </p>
                </div>
              </li>
              <li className="flex items-start">
                <FaSuitcaseRolling className="mr-3 h-6 w-6 text-[#156CB9]" />
                <div>
                  <h4 className="font-semibold text-[#156CB9]">
                    Baggage Loss and Delay
                  </h4>
                  <p className="text-sm text-gray-600">
                    Covers lost, stolen, or delayed baggage and essentials
                    bought while waiting.
                  </p>
                </div>
              </li>
            </ul>
          </div>

          <div className="relative h-[200px] w-full lg:h-auto lg:w-1/2">
            <Image
              src="/images/non-life/travel_insurance.png"
              alt="travel insurance"
              width={800}
              height={300}
              className="h-full w-full rounded-r-lg object-cover"
            />
          </div>
        </section>

        {/* Document Requirements Section */}
        <section className="shadow-md mt-12 rounded-lg bg-white p-8">
          <h2 className="mb-6 text-xl font-semibold text-primary">
            Information Needed for Travel Insurance
          </h2>
          <div className="grid grid-cols-1 gap-6 text-sm text-[#156CB9] md:grid-cols-2">
            <div>
              <h4 className="text-navy-600 mb-2 font-semibold">
                Per Trip Insurance
              </h4>
              <ul className="ml-5 list-disc">
                <li>Applicant's Name</li>
                <li>Person/s to be Insured</li>
                <li>Itinerary</li>
                <li>Departure and Arrival Dates</li>
                <li>Preferred Amount of Insurance</li>
              </ul>
            </div>
            <div>
              <h4 className="text-navy-600 mb-2 font-semibold">
                Annual Insurance
              </h4>
              <ul className="ml-5 list-disc">
                <li>Applicant's Name</li>
                <li>Person/s to be Insured</li>
                <li>Geographical Limit</li>
              </ul>
              <p className="mt-4 text-sm font-semibold">
                Loss History: Record of previous claims or travel-related
                losses.
              </p>
            </div>
          </div>
        </section>
      </div>
    </div>
  );
}
