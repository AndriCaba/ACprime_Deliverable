'use client';
import React from 'react';
import { useRouter } from 'next/navigation';
import { IoIosArrowDropleftCircle } from 'react-icons/io';

// Constants for reusable data
const FEATURES_DATA = [
  {
    title: 'First-Party Coverage',
    items: [
      'Network repairs due to cyber-attacks',
      'Data loss and system restoration',
      'Business interruption',
      'Crisis management',
      'Public relations expenses',
      'Notification costs',
      'Cyber extortion',
    ],
  },
  {
    title: 'Third-Party Coverage',
    items: [
      'Defense costs and legal liabilities',
      'Claims resulting from the negligent transmission of viruses to third parties',
    ],
  },
];

const FAQ_DATA = [
  {
    question: 'Information/Documents needed for Cyber Insurance',
    items: [
      'Company Name',
      'Business Type',
      'Business Location',
      'Geographic Reach',
      'Security Measures: The current security and data protection practices in place.',
      'Preferred Cyber Insurance coverage',
    ],
  },
  {
    question: 'What types of cyber risks are covered?',
    items: [
      'Data breaches and unauthorized access',
      'Ransomware attacks and cyber extortion',
      'Business email compromise',
      'Social engineering fraud',
      'Network security failures',
      'Privacy violations',
      'System damage and business interruption',
      'Cyber theft and fraud',
    ],
  },
];

// Reusable components
const ListItems = ({ items, className }) => (
  <ul className={`list-inside list-disc space-y-2 ${className}`}>
    {items.map((item, index) => (
      <li key={index}>{item}</li>
    ))}
  </ul>
);

const FeatureCard = ({ title, items }) => (
  <div className="shadow-lg hover:shadow-xl flex flex-col items-center rounded-lg bg-white p-6 text-center transition-all duration-300 hover:scale-105">
    <h3 className="mb-3 text-xl font-semibold text-[#ED4A00]">{title}</h3>
    <div className="text-left">
      <ListItems items={items} className="mt-5 text-[#004588]" />
    </div>
  </div>
);

const FaqItem = ({ question, items }) => (
  <details className="shadow-md hover:shadow-lg group mb-4 rounded-lg bg-white p-6 transition-all duration-300 hover:scale-105">
    <summary className="flex cursor-pointer items-center justify-between text-lg font-semibold text-[#ED4A00]">
      <span>{question}</span>
      <IoIosArrowDropleftCircle className="h-6 w-6 transform transition-transform duration-300 group-open:rotate-[-90deg]" />
    </summary>
    <div className="mt-4 text-gray-700">
      <ListItems items={items} className="text-gray-700" />
    </div>
  </details>
);

export default function Cyber() {
  const router = useRouter();
  const handleBack = () => router.back();

  return (
    <div className="min-h-screen bg-gray-50">
      {/* Hero Section */}
      <section className="relative flex min-h-[600px] bg-[#004588]">
        <div className="container mx-auto flex items-center px-6">
          <div className="grid grid-cols-1 gap-8 md:grid-cols-2">
            <div className="flex flex-col justify-center">
              <h1 className="mb-4 text-4xl font-bold text-white">
                Cyber Security
              </h1>
              <p className="mb-6 text-white">
                We don't just uncover the threat, we find the solution and go to
                bat on your behalf—restoring your identity, recovering your
                accounts, and getting back what you lost.
              </p>
            </div>
            <div className="relative">
              <img
                src="/images/non-life/cybersecurity_insurance.png"
                alt="Cyber Security"
                className="h-auto w-full rounded-lg object-cover"
              />
              <div className="absolute right-0 top-0 -z-10 h-3/4 w-3/4 rounded-full bg-[#f5f5f5]"></div>
            </div>
          </div>
        </div>
      </section>

      {/* Features Section */}
      <section className="container mx-auto px-6 py-16">
        <h2 className="mb-12 text-center text-3xl font-semibold text-[#004588] sm:text-4xl">
          Features and Benefits
        </h2>
        <div className="grid grid-cols-1 gap-8 md:grid-cols-2 md:gap-20">
          {FEATURES_DATA.map((feature, index) => (
            <FeatureCard key={index} {...feature} />
          ))}
        </div>
      </section>

      {/* FAQ Section */}
      <section className="container mx-auto px-6 py-16">
        <h2 className="mb-12 text-center text-3xl font-semibold text-[#004588] sm:text-4xl">
          Frequently Asked Questions
        </h2>
        <div className="mx-auto max-w-3xl space-y-6">
          {FAQ_DATA.map((faq, index) => (
            <FaqItem key={index} {...faq} />
          ))}
        </div>
      </section>
    </div>
  );
}
