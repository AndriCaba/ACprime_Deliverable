'use client';
import React from 'react';
import Image from 'next/image';
import { useRouter } from 'next/navigation';
import { IoIosArrowDropleftCircle } from 'react-icons/io';
import Heading from '../components/heading';

export default function EngineeringInsurance() {
  const router = useRouter();

  return (
    <div className="min-h-screen bg-gradient-to-b from-navy-500/5 to-navy-500/10 py-10">
      <div className="mx-auto max-w-7xl px-4 sm:px-6 lg:px-8">
        <section className="grid items-start gap-12 lg:grid-cols-2 lg:gap-20">
          <div className="space-y-8">
            <button
              onClick={() => router.back()}
              className="inline-flex items-center gap-2 font-medium text-primary transition-colors hover:text-primary/80"
            >
              <IoIosArrowDropleftCircle size={24} />
              <span>Back</span>
            </button>

            <Heading
              title="Engineering Insurance"
              description="Comprehensive coverage for your engineering projects and equipment."
              className="max-w-xl"
            />

            <div className="space-y-4">
              {insuranceTypes.map((type, index) => (
                <div
                  key={index}
                  className="hover:shadow-xl rounded-xl border border-white/10 bg-white/10 p-6 backdrop-blur-md transition-shadow"
                >
                  <h3 className="mb-2 text-lg font-semibold text-primary">
                    {type.title}
                  </h3>
                  <p className="text-navy-100">{type.description}</p>
                </div>
              ))}
            </div>
          </div>

          <div className="space-y-10">
            <Image
              src="/images/non-life/engineering_insurance.png"
              alt="Engineering Insurance"
              width={600}
              height={600}
              className="shadow-2xl w-full rounded-2xl object-cover"
            />

            <div className="rounded-2xl border border-white/10 bg-white/10 p-8 backdrop-blur-md">
              <h3 className="mb-4 text-xl font-semibold text-primary">
                Required Documentation
              </h3>
              <ul className="grid gap-3 text-sm text-navy-100 sm:grid-cols-2">
                {requiredDocs.map((doc, index) => (
                  <li key={index} className="flex items-start gap-2">
                    <span className="mt-1 h-2 w-2 rounded-full bg-primary"></span>
                    {doc}
                  </li>
                ))}
              </ul>
            </div>
          </div>
        </section>
      </div>
    </div>
  );
}

const insuranceTypes = [
  {
    title: 'Machinery Breakdown Insurance',
    description:
      'Protects against sudden and unforeseen physical damage to machinery due to breakdowns.',
  },
  {
    title: 'Civil Engineering Completed Risks (CECR)',
    description:
      'Coverage against losses or damages to civil engineering structures after completion, including highways, bridges, and dams.',
  },
  {
    title: "Contractor's All Risks (CAR)",
    description:
      'Comprehensive insurance for construction projects, covering property damage and third-party liabilities.',
  },
  {
    title: 'Erection All Risks (EAR)',
    description:
      'Covers risks associated with the erection and setup of machinery or structures.',
  },
];

const requiredDocs = [
  "Assured's Name",
  'Address/Location of Site',
  'Nature of Project',
  'Duration of the Project',
  'Total Project Cost',
  'Limit of Liability (3rd Party)',
  'Contract Documentation',
];
