'use client';
import React from 'react';
import { Button } from '@/components/ui/button';
import Image from 'next/image';
import { useRouter } from 'next/navigation';
import { IoIosArrowDropleftCircle } from 'react-icons/io';
import ContactForm from '@/components/contact-form';
import Heading from '../components/heading';
import { FaShip, FaAnchor, FaLifeRing, FaFileAlt } from 'react-icons/fa';

export default function MarineInsurance() {
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

        <section className="shadow-md overflow-hidden rounded-lg bg-white lg:flex">
          <div className="p-8 text-[#156CB9] lg:w-1/2">
            <h1 className="mb-4 text-4xl font-bold text-[#156CB9]">
              Marine Insurance
            </h1>
            <p className="mb-6 text-gray-700">
              Marine insurance provides crucial coverage against a wide range of
              risks associated with maritime activities. Whether you're
              transporting goods, operating a fleet, or managing port
              facilities, securing the right insurance is paramount for peace of
              mind and financial security.
            </p>

            <h3 className="mb-4 text-xl font-semibold text-primary">
              Key Coverage Areas:
            </h3>
            <ul className="space-y-4">
              <li className="flex items-start">
                <FaShip className="mr-3 h-6 w-6 text-[#156CB9]" />
                <div>
                  <h4 className="font-semibold text-[#156CB9]">
                    Cargo Insurance
                  </h4>
                  <p className="text-sm text-gray-600">
                    Shielding your goods in transit from theft, damage, and
                    loss, ensuring your supply chain remains secure.
                  </p>
                </div>
              </li>
              <li className="flex items-start">
                <FaAnchor className="mr-3 h-6 w-6 text-[#156CB9]" />
                <div>
                  <h4 className="text-navy-700 font-semibold">
                    Hull Insurance
                  </h4>
                  <p className="text-sm text-gray-600">
                    Covering physical damage to your ships and vessels, from
                    minor repairs to total loss.
                  </p>
                </div>
              </li>
              <li className="flex items-start">
                <FaLifeRing className="mr-3 h-6 w-6 text-[#156CB9]" />
                <div>
                  <h4 className="text-navy-700 font-semibold">
                    Marine Liability Insurance
                  </h4>
                  <p className="text-sm text-gray-600">
                    Protecting you against liabilities arising from marine
                    operations, including collisions, environmental damage, and
                    port liabilities.
                  </p>
                </div>
              </li>
              <li className="flex items-start">
                <FaFileAlt className="mr-3 h-6 w-6 text-[#156CB9]" />
                <div>
                  <h4 className="text-navy-700 font-semibold">
                    Protection and Indemnity (P&I) Insurance
                  </h4>
                  <p className="text-sm text-gray-600">
                    Offering comprehensive liability coverage for crew injuries,
                    pollution incidents, and damage to third-party property.
                  </p>
                </div>
              </li>
            </ul>
          </div>
          <div className="relative lg:w-1/2">
            <Image
              src="/images/non-life/marine_insurance.png"
              alt="marine"
              fill
              style={{ objectFit: 'cover' }}
              className="absolute"
            />
          </div>
        </section>

        <section className="shadow-md mt-12 rounded-lg bg-white p-8">
          <h2 className="mb-6 text-xl font-semibold text-primary">
            Information Needed for Your Marine Insurance Quote
          </h2>
          <div className="grid grid-cols-1 gap-6 text-sm text-[#156CB9] md:grid-cols-2">
            <div>
              <h4 className="text-navy-600 mb-2 font-semibold">
                General Information
              </h4>
              <ul className="ml-5 list-disc">
                <li>Assured's Name</li>
                <li>Voyage Route</li>
                <li>Frequency of Voyage</li>
                <li>Type of Cover (Cargo, Hull, etc.)</li>
              </ul>
            </div>
            <div>
              <h4 className="text-navy-600 mb-2 font-semibold">
                Vessel/Cargo Details
              </h4>
              <ul className="ml-5 list-disc">
                <li>Details of Vessel/Aircraft</li>
                <li>Conveyance (Truck, Ship, Plane)</li>
                <li>Geographical Limit</li>
                <li>Sum Insured</li>
              </ul>
            </div>
            <div>
              <h4 className="text-navy-600 mb-2 font-semibold">
                Additional Information
              </h4>
              <ul className="ml-5 list-disc">
                <li>Mortgage (if applicable)</li>
                <li>Loss History</li>
              </ul>
            </div>
            <div>
              <p className="text-[#156CB9]">
                Providing accurate information will help us tailor a marine
                insurance policy that perfectly suits your needs and protects
                your valuable assets.
              </p>
            </div>
          </div>
        </section>
      </div>
    </div>
  );
}
