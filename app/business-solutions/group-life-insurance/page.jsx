/* eslint-disable react-hooks/exhaustive-deps */
'use client';
import React from 'react';
import { Button } from '@/components/ui/button';
import Image from 'next/image';
import { useRouter } from 'next/navigation';
import { IoIosArrowDropleftCircle } from 'react-icons/io';
import Heading from '@/app/non-life/components/heading';
import { GetInTouchDialog } from '@/components/get-in-touch-dialog';

export default function GroupLifeInsurance() {
  const router = useRouter();
  const handleBack = () => {
    router.back();
  };

  return (
    <div className="bg-navy-500/20">
      <div className="flex flex-col gap-12 lg:gap-0">
        <section className="relative bg-custom-gradient py-12 lg:px-12 lg:pt-16">
          <div className="container">
            <Button onClick={handleBack} variant="ghost" className="mb-8">
              <IoIosArrowDropleftCircle className="mr-2 h-5 w-5" />
              Go Back
            </Button>

            <div className="shadow-md overflow-hidden rounded-lg bg-white lg:flex">
              <div className="p-8 text-[#156CB9] lg:w-1/2">
                <h1 className="mb-4 text-4xl font-bold text-[#156CB9]">
                  Group Life Insurance
                </h1>
                <p className="mb-6 text-gray-700">
                  Provides coverage to employees or members. This provides
                  coverage to all eligible employees or members under a single
                  contract, offering financial security to their families in the
                  event of the insured's death.
                </p>
                <p className="font-semibold">Other benefits can include:</p>
                <ul className="mb-8 ml-4 mt-2 text-sm">
                  <li className="mb-1">
                    Accidental Death and Dismemberment (AD&D)
                  </li>
                  <li className="mb-1">
                    Total and Permanent Disability Income Benefit (TPDIB)
                  </li>
                  <li className="mb-1">Terminal Illness Benefit (TIB)</li>
                  <li className="mb-1">Burial Benefit</li>
                  <li className="mb-1">Accidental Medical Reimbursement</li>
                </ul>
                <p className="font-semibold">
                  Information/Documents needed for Group Life Insurance
                </p>
                <ul className="mb-8 ml-4 mt-2 text-sm">
                  <li className="mb-1">
                    Preferred plan benefits (if available)
                  </li>
                  <li className="mb-1">
                    Employee and dependent list, including date of birth, civil
                    status, gender, and position/job level
                  </li>
                  <li className="mb-1">Name and Nature of business</li>
                </ul>
                <GetInTouchDialog />
              </div>

              <div className="relative h-[200px] w-full lg:h-[500px] lg:w-1/2">
                <Image
                  src="/images/business-solutions/group_life_insurance.png"
                  alt="group life insurance"
                  fill
                  style={{ objectFit: 'cover' }}
                  className="rounded-r-lg"
                />
              </div>
            </div>
          </div>
        </section>
      </div>
    </div>
  );
}
