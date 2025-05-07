/* eslint-disable react-hooks/exhaustive-deps */
'use client';
import React from 'react';
import { Button } from '@/components/ui/button';
import Image from 'next/image';
import { useRouter } from 'next/navigation';
import { IoIosArrowDropleftCircle } from 'react-icons/io';
import Heading from '@/app/non-life/components/heading';
import { GetInTouchDialog } from '@/components/get-in-touch-dialog';

export default function KeyPersonInsurance() {
  const router = useRouter();
  const handleBack = () => {
    router.back();
  };

  return (
    <div className="bg-navy-500/20">
      <div className="flex flex-col gap-12 lg:gap-0">
        <section className="relative bg-custom-gradient py-12 lg:min-h-[680px] lg:px-12 lg:pt-16">
          <div className="container">
            <Button onClick={handleBack} variant="ghost" className="mb-8">
              <IoIosArrowDropleftCircle className="mr-2 h-5 w-5" />
              Go Back
            </Button>

            <div className="shadow-md overflow-hidden rounded-lg bg-white lg:flex">
              <div className="p-8 text-[#156CB9] lg:w-1/2">
                <h1 className="mb-4 text-4xl font-bold text-[#156CB9]">
                  Key Person Insurance
                </h1>
                <p className="mb-6 text-gray-700">
                  Could your business endure the sudden loss of a key member?
                  Key person insurance is designed to protect businesses from
                  financial loss if a crucial employee dies or becomes
                  terminally ill.
                </p>
                <p className="font-semibold">
                  Benefits of Keyman Insurance include:
                </p>
                <ul className="mb-8 ml-4 mt-2 text-sm">
                  <li className="mb-1">Business Continuity</li>
                  <li className="mb-1">Maintain Cashflow</li>
                  <li className="mb-1">Confidence for Stakeholders</li>
                  <li className="mb-1">Debt Repayment</li>
                  <li className="mb-1">Talent Attraction and Retention</li>
                </ul>
                <p className="mb-8 text-sm">
                  If losing a key person leads to lost profits, keyman insurance
                  covers those costs, including wages, replacement staff, and
                  loan repayments, helping your business stay afloat during
                  tough times. We can help you determine the appropriate amount
                  and duration of coverage and find a key person insurance
                  policy that suits your business&#39;s needs.
                </p>
                <p className="font-semibold">What You Will Receive:</p>
                <ol className="mb-8 ml-4 mt-2 text-sm">
                  <li className="mb-1">
                    Key person coverage that provides a cash payout if the
                    insured individual dies, suffers terminal illness, or
                    suffers a specified illness like a stroke, cancer, or heart
                    attack.
                  </li>
                  <li className="mb-1">
                    A separate policy for each designated key person.
                  </li>
                  <li className="mb-1">
                    A business-owned contract, meaning the business pays the
                    premiums and benefits from any claims.
                  </li>
                  <li className="mb-1">
                    Peace of mind knowing that the loss of a key person won’t
                    disrupt your organization.
                  </li>
                </ol>
                <p className="font-semibold">
                  Information/Documents needed for Key Person Insurance:
                </p>
                <ul className="mb-8 ml-4 mt-2 text-sm">
                  <li className="mb-1">Name of Company</li>
                  <li className="mb-1">Nature of Business</li>
                  <li className="mb-1">Details of Insured</li>
                </ul>
                <GetInTouchDialog />
              </div>

              <div className="relative h-[160px] w-full lg:h-[500px] lg:w-1/2">
                <Image
                  src="/images/business-solutions/key_person_insurance.png"
                  alt="key person insurance"
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
