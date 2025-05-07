/* eslint-disable react-hooks/exhaustive-deps */
'use client';
import React from 'react';
import { Button } from '@/components/ui/button';
import Image from 'next/image';
import { useRouter } from 'next/navigation';
import { IoIosArrowDropleftCircle } from 'react-icons/io';
import Heading from '@/app/non-life/components/heading';
import { GetInTouchDialog } from '@/components/get-in-touch-dialog';

export default function EmployeeRetirementPlan() {
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
                  Employee Retirement Plan
                </h1>
                <p className="mb-6 text-gray-700">
                  Our Employee Retirement Benefit Solution offers a
                  comprehensive approach to retirement planning for your
                  employees.
                </p>
                <p className="mb-8 text-gray-700">
                  We craft and implement a tailored investment program aligned
                  with your organization's goals, ensuring effective management
                  and administration of retirement funds.
                </p>
                <p className="mb-8 text-gray-700">
                  Our service includes regular portfolio reviews to optimize
                  performance and detailed financial reporting to keep you
                  informed every step of the way. This solution is designed to
                  help your employees secure a financially stable future while
                  aligning with your company's objectives.
                </p>
                <GetInTouchDialog />
              </div>

              <div className="relative h-[160px] w-full lg:h-[700px] lg:w-1/2">
                <Image
                  src="/images/business-solutions/employee_retirement_plan.png"
                  alt="employee retirement plan"
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
