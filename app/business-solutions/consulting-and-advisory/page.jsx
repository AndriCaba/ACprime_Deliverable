/* eslint-disable react-hooks/exhaustive-deps */
'use client';
import React from 'react';
import { Button } from '@/components/ui/button';
import Image from 'next/image';
import { useRouter } from 'next/navigation';
import { IoIosArrowDropleftCircle } from 'react-icons/io';
import Heading from '@/app/non-life/components/heading';
import { GetInTouchDialog } from '@/components/get-in-touch-dialog';

export default function ConsultingAndAdvisory() {
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
                  Consulting and Advisory Services
                </h1>
                <p className="mb-6 text-gray-700">
                  Our consultancy and advisory services provide expert guidance
                  tailored to meet the unique needs of your business.
                </p>
                <p className="mb-8 text-gray-700">
                  We specialize in crafting comprehensive risk management
                  strategies, optimizing investment plans, and delivering
                  bespoke business solutions. Additionally, our expertise in
                  transactional advisory and tax implications ensures that your
                  business decisions are informed and strategic. With our deep
                  industry knowledge and personalized approach, we help you
                  navigate complex challenges and capitalize on opportunities to
                  drive your business forward.
                </p>
                <GetInTouchDialog />
              </div>

              <div className="relative h-[160px] w-full lg:h-[700px] lg:w-1/2">
                <Image
                  src="/images/business-solutions/consulting_and_advisory_services.png"
                  alt="consulting"
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
