/* eslint-disable react-hooks/exhaustive-deps */
'use client';
import React from 'react';
import { Button } from '@/components/ui/button';
import Image from 'next/image';
import { useRouter } from 'next/navigation';
import { IoIosArrowDropleftCircle } from 'react-icons/io';
import ContactForm from '@/components/contact-form';
import Heading from '../components/heading';

export default function PetInsurance() {
  const router = useRouter();
  const handleBack = () => {
    router.back();
  };
  const imagePositions = ['Front', 'Sphinx', 'Back', 'Right', 'Left'];

  return (
    <div className="bg-navy-500/20">
      <div className="flex flex-col gap-12 lg:gap-0">
        <section className="relative bg-custom-gradient py-12 lg:min-h-[680px] lg:px-12 lg:pt-16">
          <div className="container">
            <Heading
              title="Pet Insurance"
              description="Provides coverage for veterinary expenses incurred due to illness or injury of a pet. It helps pet owners manage the cost of medical treatments, surgeries, and other veterinary services, ensuring their pets receive the necessary care without financial strain."
              className="lg:max-w-[60%]"
            />
            <Image
              src="/images/non-life/pet_insurance.png"
              alt="surety-bonds"
              width={500}
              height={500}
              className="bottom-80 right-8 mx-auto mb-4 flex w-full max-w-md lg:absolute lg:mb-0 lg:w-[50%] lg:max-w-xl"
            />
            <div className="relative z-10 w-full items-center justify-between gap-8 lg:max-w-[50%] lg:flex-row">
              <div>
                <ul className="ml-4 font-semibold text-primary">
                  <li className="mb-4">
                    Medical Reimbursement
                    <ul className="ml-4 mt-1 text-sm font-normal text-navy-100">
                      <li className="mb-1">
                        Covers veterinary expenses for treatments due to
                        accidents or illnesses.
                      </li>
                      <li className="mb-1">
                        Includes diagnostics, surgeries, medications, and
                        hospitalizations.
                      </li>
                    </ul>
                  </li>
                  <li className="mb-4">
                    Pet Owner’s Liability
                    <ul className="ml-4 mt-1 text-sm font-normal text-navy-100">
                      <li className="mb-1">
                        Provides coverage for damages or injuries caused by the
                        pet to third parties.
                      </li>
                      <li className="mb-1">
                        <span className="font-medium">Judicial Bonds:</span>{' '}
                        Include court bonds like appeal bonds, attachment bonds,
                        and guardianship bonds, ensuring compliance with court
                        orders.
                      </li>
                    </ul>
                  </li>
                  <li className="mb-8">
                    Personal Accident Cover for Pet Owners
                    <ul className="ml-4 mt-1 text-sm font-normal text-navy-100">
                      <li className="mb-1">
                        Offers 24/7 coverage for personal accidents that might
                        occur to the pet owner.
                      </li>
                    </ul>
                  </li>
                </ul>
                <div className="mb-6">
                  <p className="font-semibold">
                    Information/Documents needed for Pet Insurance
                  </p>
                  <ul className="ml-4 mt-1 text-sm font-normal">
                    <li className="mb-1">
                      Pet Book (with Vet’s Information): This document should
                      include updated vaccination details based on the pet’s
                      age. It&#39;s optional but recommended in case of a claim.
                    </li>
                    <li className="mb-1">
                      Photos of the Pet: Upload at least 3 photos of the pet in
                      different poses:
                    </li>
                  </ul>
                </div>
              </div>
            </div>
            <div className="mx-auto mb-4 flex w-full max-w-xs flex-col gap-2 md:max-w-full md:flex-row">
              {imagePositions.map((position, index) => (
                <div
                  key={index}
                  className="relative flex flex-col items-center rounded bg-navy-400/40 px-4"
                >
                  <p className="pt-4 text-sm font-medium">{position} View</p>

                  <Image
                    src={`/images/non-life/pet-${index + 1}.png`}
                    width={150}
                    height={150}
                    alt={`${position} view`}
                    className={`${index === 0 ? 'pt-5' : ''}`}
                  />
                </div>
              ))}
            </div>
            <ul className="ml-4 mt-1 text-sm font-normal">
              <li className="mb-1">
                Veterinarian Name and Contact Information: Provide the name and
                contact details of the veterinarian who has been treating the
                pet.
              </li>
            </ul>
          </div>
        </section>
        <section className="container">{/* <ContactForm /> */}</section>
      </div>
    </div>
  );
}
