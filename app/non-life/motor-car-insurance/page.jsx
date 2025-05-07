/* eslint-disable react-hooks/exhaustive-deps */
'use client';
import React from 'react';
import { Button } from '@/components/ui/button';
import Image from 'next/image';
import { useRouter } from 'next/navigation';
import { IoIosArrowDropleftCircle } from 'react-icons/io';
import ContactForm from '@/components/contact-form';
import Heading from '../components/heading';

export default function MotorCar() {
  const router = useRouter();
  const handleBack = () => {
    router.back();
  };
  return (
    <div className="bg-navy-500/20">
      <div className="flex flex-col gap-12 lg:gap-0">
        <section className="relative bg-custom-gradient py-12 lg:min-h-[680px] lg:px-12 lg:pt-16">
          <div className="container">
            <Heading
              title="Motor Car Insurance"
              description="We understand that your vehicle is more than just a means of transportation – it's an essential part of your daily life. Our motor insurance policies are crafted to offer you comprehensive protection, ensuring you stay on the road with confidence and peace of mind."
            />
            <div className="items-center justify-between gap-8 lg:flex-row">
              <div>
                <div className="mx-auto my-8 grid max-w-sm grid-cols-1 gap-6 lg:max-w-full lg:grid-cols-3">
                  <div className="custom-shadow relative h-80 rounded bg-navy-500/30 p-6 lg:h-auto">
                    <h2 className="border-b-4 border-navy-100 p-2 text-center font-semibold">
                      Comprehensive Insurance
                    </h2>
                    <ul className="p-4 text-xs">
                      <li className="mb-1">Own Damage</li>
                      <li className="mb-1">Theft</li>
                      <li className="mb-1">
                        Third-Party Liability
                        <ol className="ml-4 list-[lower-roman]">
                          <li className="mt-1">
                            Provides coverage for the driver and passengers.
                          </li>
                        </ol>
                      </li>
                      <li className="pb-4">
                        Personal Accident
                        <ol className="ml-4 list-[lower-roman]">
                          <li className="mt-1">
                            Covers damage caused by natural disasters such as
                            floods, earthquakes and typhoons.
                          </li>
                        </ol>
                      </li>
                    </ul>
                    <Image
                      src="/images/non-life/motor_car-1.png"
                      width={80}
                      height={50}
                      alt="car"
                      className="absolute bottom-2 right-6"
                    />
                  </div>
                  <div className="custom-shadow relative h-80 rounded bg-navy-500/30 p-6 lg:h-auto">
                    <h2 className="border-b-4 border-navy-100 p-2 text-center font-semibold">
                      Third-Party Liability Insurance
                    </h2>
                    <ul className="p-4 text-xs">
                      <li className="mb-1">
                        Covers legal liability for injury or damage to third
                        parties.
                      </li>
                    </ul>

                    <Image
                      src="/images/non-life/motor_car-2.png"
                      width={80}
                      height={50}
                      alt="car"
                      className="absolute bottom-2 right-6"
                    />
                  </div>
                  <div className="custom-shadow relative h-80 rounded bg-navy-500/30 p-6 lg:h-auto">
                    <h2 className="border-b-4 border-navy-100 p-2 text-center font-semibold">
                      Compulsory Third-Party Liability (CTPL)
                    </h2>
                    <ul className="p-4 text-xs">
                      <li className="mb-1">
                        Mandatory coverage for bodily injury or death of third
                        parties due to the use of the insured vehicle.
                      </li>
                    </ul>

                    <Image
                      src="/images/non-life/motor_car-3.png"
                      width={70}
                      height={50}
                      alt="car"
                      className="absolute bottom-2 right-6"
                    />
                  </div>
                </div>

                <div>
                  <p className="font-semibold">
                    Information/Documents Required for Comprehensive Motorcar
                    Insurance:
                  </p>
                  <ul className="ml-4 mt-1 text-sm">
                    <li className="mb-1">
                      Copy of OR/CR: Official Receipt and Certificate of
                      Registration of the vehicle.
                    </li>
                    <li className="mb-1">LAssured’s Name</li>
                    <li className="mb-1">
                      The registered location or address of the vehicle.
                    </li>
                    <li className="mb-1">Description of Unit:</li>
                    <li className="mb-1">
                      Details of the vehicle including brand, model, and year of
                      manufacture.
                    </li>
                    <li className="mb-1">Fair Market Value</li>
                    <li className="mb-1">
                      Sum Insured/Limit of Liability: The coverage amount or
                      limit for the insurance.
                    </li>
                    <li className="mb-1">
                      Mortgage (if applicable): Details of any mortgage or lien
                      on the vehicle.
                    </li>
                    <li className="mb-1">
                      Loss History: A record of any previous claims or losses
                      associated with the vehicle.
                    </li>
                  </ul>
                </div>
              </div>
            </div>
          </div>
        </section>
        <section className="container">{/* <ContactForm /> */}</section>
      </div>
    </div>
  );
}
