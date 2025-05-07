'use client';
import React from 'react';
import { useRouter } from 'next/navigation';
import { Button } from '@/components/ui/button';
import { IoIosArrowDropleftCircle } from 'react-icons/io';
import { FaChevronDown } from 'react-icons/fa';

export default function BusinessContinuity() {
  const router = useRouter();
  const handleBack = () => router.back();

  return (
    <div className="min-h-screen bg-gray-50">
      {/* Header Section */}
      <section
        className="relative flex h-[60vh] min-h-[300px] items-center justify-center bg-cover bg-center text-white"
        style={{
          backgroundImage: `linear-gradient(to bottom, rgba(0, 69, 136, 0.8), rgba(0, 69, 136, 0.8)), url('/images/non-life/aviation_insurance.png')`,
        }}
      >
        <div className="container mx-auto px-6 text-center">
          <h1 className="animate-fade-in text-4xl font-extrabold tracking-tight sm:text-5xl md:text-6xl">
            Aviation Hull Insurance
          </h1>
        </div>
      </section>

      {/* Description Section */}
      <section className="container mx-auto px-6 py-12">
        <div className="animate-fade-in mx-auto max-w-3xl text-center">
          <h2 className="mb-6 text-2xl font-semibold text-[#004588] sm:text-3xl">
            Description
          </h2>
          <p className="text-lg leading-relaxed text-gray-700">
            Provides coverage for physical loss or damage to an aircraft,
            including its engines and accessories. It may also cover liability
            for passenger injury or death, and damage to cargo, mail, or baggage
            on board.
          </p>
        </div>
      </section>

      {/* Features and Benefits Section */}
      <section className="container mx-auto px-6 py-16">
        <h2 className="mb-12 text-center text-3xl font-semibold text-[#004588] sm:text-4xl">
          Features and Benefits
        </h2>
        <div className="grid gap-8 sm:grid-cols-2 lg:grid-cols-3">
          {[
            {
              image: '/images/non-life/Airpalnde1.gif',
              title: 'Aviation Hull Insurance',
              desc: (
                <ul className="mt-5 list-inside list-disc space-y-2 text-gray-700">
                  <li>Owners' and Operators' Hull All Risks</li>
                  <li>War and Detainment Risks</li>
                  <li>Blanket Hull Policies for Manufacturers and Dealers</li>
                  <li>Business Interruption (loss of use)</li>
                  <li>
                    Additional Costs for Replacing Lost Aircraft (total loss)
                  </li>
                  <li>Vendor's and Lien Holders' Interests</li>
                  <li>Hull Deductible Insurance</li>
                </ul>
              ),
            },
            {
              image: '/images/non-life/insurance.gif',
              title: 'Aviation Liability Insurance',
              desc: (
                <ul className="mt-5 list-inside list-disc space-y-2 text-gray-700">
                  <li>Aircraft Operators’ Liability</li>
                  <li>
                    Injury or death of persons and damage to property caused by
                    aircraft or falling objects
                  </li>
                  <li>Passenger injury or death</li>
                  <li>Loss or damage to baggage and cargo</li>
                  <li>Ground Equipment Liability</li>
                  <li>
                    Manufacturers’ Products Liability, including grounding of
                    similar aircraft
                  </li>
                  <li>Fuel Suppliers’ Accident and Products Liability</li>
                  <li>
                    Airport Operators’ Liability, including Air Traffic Control
                  </li>
                  <li>Hangar Keepers’ Liability</li>
                </ul>
              ),
            },
            {
              image: '/images/non-life/pilot.gif',
              title: 'Aviation Personal Accident Insurance',
              desc: (
                <ul className="mt-5 list-inside list-disc space-y-2 text-gray-700">
                  <li>
                    Passenger Accident Insurance on an Automatic (seating) Basis
                  </li>
                  <li>Aircrew Personal Accident Insurance</li>
                  <li>Aircrew Loss of License due to Accident or Sickness</li>
                </ul>
              ),
            },
          ].map((feature, index) => (
            <div
              key={index}
              className="animate-fade-up shadow-lg hover:shadow-xl flex flex-col items-center rounded-lg bg-white p-6 text-center transition-all duration-300"
              style={{ '--i': index }}
            >
              <img
                src={feature.image}
                alt={feature.title}
                className="mb-4 h-20 w-20 object-contain"
              />
              <h3 className="mb-3 text-xl font-semibold text-[#ED4A00]">
                {feature.title}
              </h3>
              <div className="text-left">{feature.desc}</div>
            </div>
          ))}
        </div>
      </section>

      {/* FAQ Section */}
      <section className="container mx-auto px-6 py-16">
        <h2 className="mb-12 text-center text-3xl font-semibold text-[#004588] sm:text-4xl">
          Frequently Asked Questions
        </h2>
        <div className="space-y-6">
          {[
            {
              question:
                'Information/Documents needed for Business Continuity Insurance',
              answer: (
                <ul className="list-inside list-disc space-y-2 text-gray-700">
                  <li>Full Business Name</li>
                  <li>Complete Address of Building Location</li>
                  <li>
                    Property Values Broken Down Between Building and Contents
                  </li>
                  <li>
                    Building Construction (Please Indicate Whether Concrete or
                    Semi-Concrete)
                  </li>
                </ul>
              ),
            },
            {
              question: 'What types of disasters are covered?',
              answer:
                'Coverage typically includes fires, floods, earthquakes, and other events causing temporary shutdowns. Specifics depend on your policy.',
            },
            {
              question: 'How is the loss of income calculated?',
              answer:
                'Loss of income is based on historical financial data, factoring in revenue trends and operational costs before the disruption.',
            },
          ].map((faq, index) => (
            <details
              key={index}
              className="shadow-md hover:shadow-lg group rounded-lg bg-white p-5 transition-all duration-300"
            >
              <summary className="flex cursor-pointer items-center justify-between text-lg font-semibold text-[#ED4A00]">
                {faq.question}
                <FaChevronDown className="h-5 w-5 text-[#ED4A00] transition-transform duration-300 group-open:rotate-180" />
              </summary>
              <p className="mt-3">{faq.answer}</p>
            </details>
          ))}
        </div>
      </section>

      {/* Custom Styles */}
      <style jsx>{`
        @keyframes fadeIn {
          from {
            opacity: 0;
            transform: translateY(20px);
          }
          to {
            opacity: 1;
            transform: translateY(0);
          }
        }

        @keyframes fadeUp {
          from {
            opacity: 0;
            transform: translateY(30px);
          }
          to {
            opacity: 1;
            transform: translateY(0);
          }
        }

        .animate-fade-in {
          animation: fadeIn 0.8s ease-out forwards;
        }

        .animate-fade-up {
          animation: fadeUp 0.6s ease-out forwards;
          animation-delay: calc(0.1s * var(--i));
        }
      `}</style>
    </div>
  );
}
