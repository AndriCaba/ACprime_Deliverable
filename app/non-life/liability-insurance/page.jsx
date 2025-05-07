'use client';

import React from 'react';
import Image from 'next/image';
import { useRouter } from 'next/navigation';
import { Button } from '@/components/ui/button';
import { Card } from '@/components/ui/card';
import { ChevronLeft, Shield, FileText, Info } from 'lucide-react';

const INSURANCE_TYPES = [
  {
    icon: <Shield className="h-6 w-6 text-blue-500" />,
    title: 'Public Liability Insurance',
    description:
      "Covers legal liability for injury or damage to third parties on the insured's premises.",
  },
  {
    icon: <Shield className="h-6 w-6 text-green-500" />,
    title: 'Product Liability Insurance',
    description:
      'Covers legal liability for injury or damage caused by defective products.',
  },
  {
    icon: <Shield className="h-6 w-6 text-purple-500" />,
    title: 'Professional Indemnity Insurance',
    description:
      'Covers legal liability for professional errors, omissions, or negligence.',
  },
];

const REQUIRED_DOCUMENTS = [
  "Insured's Name",
  'Property Location',
  'Territorial/Geographic Scope',
  'Business Nature',
  'Type of Coverage Required',
  'Insured Amount/Liability Limit',
  'Occupied Floor Area',
  'List/Description of Insured Property',
  'Security System/Transportation Method',
  'Names of Directors and Officers',
  'List of Regular Employees/Positions',
  'Loss History',
];

export default function LiabilityInsurance() {
  const router = useRouter();

  return (
    <div className="min-h-screen bg-gradient-to-b from-navy-500/10 to-navy-500/5">
      <main className="container mx-auto px-4 py-16">
        <div className="grid gap-16 lg:grid-cols-2">
          {/* Left Column */}
          <div className="space-y-8">
            <div className="space-y-4">
              <h1 className="text-navy-900 text-4xl font-bold tracking-tight">
                Liability Insurance
              </h1>
              <p className="text-navy-600 text-lg">
                Comprehensive protection for your business against legal
                liabilities
              </p>
            </div>

            <div className="space-y-6">
              {INSURANCE_TYPES.map(({ icon, title, description }) => (
                <Card
                  key={title}
                  className="hover:shadow-lg p-6 transition-shadow"
                >
                  <div className="flex gap-4">
                    {icon}
                    <div>
                      <h3 className="text-navy-900 font-semibold">{title}</h3>
                      <p className="text-navy-600 mt-1 text-sm">
                        {description}
                      </p>
                    </div>
                  </div>
                </Card>
              ))}
            </div>
          </div>

          {/* Right Column */}
          <div>
            <div className="sticky top-24 space-y-8">
              <div className="shadow-xl overflow-hidden rounded-2xl bg-white">
                <Image
                  src="/images/non-life/liability_insurance.png"
                  alt="Liability Insurance Coverage"
                  width={600}
                  height={400}
                  className="w-full object-cover"
                  priority
                />
              </div>

              <Card className="p-6">
                <div className="flex items-center gap-2">
                  <FileText className="h-5 w-5 text-blue-500" />
                  <h2 className="font-semibold">Required Documents</h2>
                </div>
                <div className="mt-4 grid grid-cols-2 gap-2">
                  {REQUIRED_DOCUMENTS.map((doc) => (
                    <div
                      key={doc}
                      className="text-navy-600 flex items-center gap-2 text-sm"
                    >
                      <Info className="h-4 w-4 text-navy-400" />
                      {doc}
                    </div>
                  ))}
                </div>
              </Card>
            </div>
          </div>
        </div>
      </main>
    </div>
  );
}
