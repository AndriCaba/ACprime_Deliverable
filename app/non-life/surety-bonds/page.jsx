'use client';
import React from 'react';
import { Button } from '@/components/ui/button';
import Image from 'next/image';
import { useRouter } from 'next/navigation';
import { IoIosArrowDropleftCircle } from 'react-icons/io';
import ContactForm from '@/components/contact-form';
import Heading from '../components/heading';
import { FaGavel, FaBuilding, FaUserShield, FaFileAlt } from 'react-icons/fa';

export default function SuretyBonds() {
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

        {/* Content Section */}
        <section className="shadow-md overflow-hidden rounded-lg bg-white lg:flex">
          <div className="p-8 text-[#156CB9] lg:w-1/2">
            <h1 className="mb-4 text-4xl font-bold text-[#156CB9]">
              Surety Bonds
            </h1>
            <p className="mb-6 text-gray-700">
              Secure your obligations with our comprehensive surety bond
              solutions, offering financial protection and peace of mind for
              your business commitments.
            </p>

            <h3 className="mb-4 text-xl font-semibold text-primary">
              Types of Surety Bonds:
            </h3>
            <ul className="space-y-4">
              <li className="flex items-start">
                <FaGavel className="mr-3 h-6 w-6 text-[#156CB9]" />
                <div>
                  <h4 className="font-semibold text-[#156CB9]">
                    Contract Bonds
                  </h4>
                  <p className="text-sm text-gray-600">
                    Includes bid, performance, and payment bonds for
                    construction and service contracts.
                  </p>
                </div>
              </li>
              <li className="flex items-start">
                <FaBuilding className="mr-3 h-6 w-6 text-[#156CB9]" />
                <div>
                  <h4 className="font-semibold text-[#156CB9]">
                    Commercial Bonds
                  </h4>
                  <p className="text-sm text-gray-600">
                    License, permit, and judicial bonds to comply with
                    government regulations.
                  </p>
                </div>
              </li>
              <li className="flex items-start">
                <FaUserShield className="mr-3 h-6 w-6 text-[#156CB9]" />
                <div>
                  <h4 className="font-semibold text-[#156CB9]">
                    Fidelity Bonds
                  </h4>
                  <p className="text-sm text-gray-600">
                    Protection against employee dishonesty and fraudulent acts.
                  </p>
                </div>
              </li>
            </ul>
          </div>
          <div className="relative lg:w-1/2">
            <Image
              src="/images/non-life/surety_bonds.png"
              alt="surety bonds"
              fill
              style={{ objectFit: 'cover' }}
              className="absolute"
            />
          </div>
        </section>

        {/* Documents Section */}
        <section className="shadow-md mb-5 mt-5 rounded-lg bg-white p-8">
          <h2 className="mb-6 text-xl font-semibold text-primary">
            Documents Required for Construction Bonds
          </h2>
          <div className="grid grid-cols-1 gap-6 text-sm text-[#156CB9] md:grid-cols-2">
            <div>
              <ul className="ml-5 list-disc">
                <li>Business Permit</li>
                <li>Financial Statements (FS)</li>
                <li>Income Tax Return (ITR)</li>
              </ul>
            </div>
            <div>
              <ul className="ml-5 list-disc">
                <li>Company Profile</li>
                <li>Contract Agreement</li>
              </ul>
            </div>
          </div>
        </section>

        {/* Contact Form Section */}
      </div>
    </div>
  );
}
