// /* eslint-disable react-hooks/exhaustive-deps */
// 'use client';
// import React from 'react';
// import { Button } from '@/components/ui/button';
// import Image from 'next/image';
// import { useRouter } from 'next/navigation';
// import { IoIosArrowDropleftCircle } from 'react-icons/io';
// import ContactForm from '@/components/contact-form';
// import Heading from '../components/heading';

// export default function BusinessContinuity() {
//   const router = useRouter();
//   const handleBack = () => {
//     router.back();
//   };
//   return (
//     <div className="bg-navy-500/20">
//       <div className="flex flex-col gap-12 lg:gap-0">
//         <section className="relative bg-custom-gradient py-12 lg:min-h-[680px] lg:px-12 lg:pt-16">
//           <div className="container">
//             <Heading
//               title="Business Continuity Insurance"
//               description="Provides coverage to help businesses recover from unexpected events that disrupt operations. This insurance ensures that a business can continue its essential functions and maintain financial stability after a disaster, such as a fire, flood, or other significant event that causes a temporary shutdown."
//               className="lg:max-w-[70%]"
//             />
//             <Image
//               src="/images/non-life/business_continuity_insurance.png"
//               alt="continuity"
//               width={600}
//               height={600}
//               className="bottom-0 right-8 mx-auto mb-4 flex w-full max-w-md lg:absolute lg:mb-0 lg:w-[50%] lg:max-w-2xl"
//             />

//             <div className="relative z-10 w-full items-center justify-between gap-8 lg:max-w-[50%] lg:flex-row">
//               <div>
//                 <ul className="ml-4 font-semibold text-primary">
//                   <li className="mb-4">
//                     Loss of Income
//                     <ul className="ml-4 mt-1 list-none text-sm font-normal text-navy-100">
//                       <li className="mb-1">
//                         Covers the loss of income that a business suffers after
//                         a disaster. This is calculated based on the historical
//                         financial performance of the business.
//                       </li>
//                     </ul>
//                   </li>
//                   <li className="mb-4">
//                     Temporary Relocation
//                     <ul className="ml-4 mt-1 list-none text-sm font-normal text-navy-100">
//                       <li className="mb-1">
//                         Covers the costs associated with moving the business to
//                         a temporary location and the additional expenses
//                         incurred to continue operations from that location.
//                       </li>
//                     </ul>
//                   </li>
//                   <li className="mb-4">
//                     Contingent Business Interruption
//                     <ul className="ml-4 mt-1 list-none text-sm font-normal text-navy-100">
//                       <li className="mb-1">
//                         Provides coverage for loss of income due to damage to a
//                         supplier&#39;s or customer&#39;s property, which impacts
//                         the insured business&#39;s operations.
//                       </li>
//                     </ul>
//                   </li>
//                   <li className="mb-8">
//                     Service Interruption
//                     <ul className="ml-4 mt-1 list-none text-sm font-normal text-navy-100">
//                       <li className="mb-1">
//                         Covers losses due to the interruption of essential
//                         services such as electricity, water, gas, or internet
//                         caused by damage to the service provider&#39;s
//                         infrastructure.
//                       </li>
//                     </ul>
//                   </li>
//                 </ul>
//                 <div>
//                   <p className="font-semibold">
//                     Information/Documents needed for Business Continuity
//                     Insurance
//                   </p>
//                   <ul className="ml-4 mt-1 text-sm font-normal">
//                     <li className="mb-1">Full Business Name</li>
//                     <li className="mb-1">
//                       Complete Address of Building Location
//                     </li>
//                     <li className="mb-1">
//                       Property Values Broken Down Between Building and Contents
//                     </li>
//                     <li className="mb-1">
//                       Building Construction (Please Indicate Whether Concrete or
//                       Semi-Concrete)
//                     </li>
//                   </ul>
//                 </div>
//               </div>
//             </div>
//           </div>
//         </section>
//         <section className="container">{/* <ContactForm /> */}</section>
//       </div>
//     </div>
//   );
// }

/* eslint-disable react-hooks/exhaustive-deps */
/* eslint-disable react-hooks/exhaustive-deps */
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
          backgroundImage: `linear-gradient(to bottom, rgba(0, 69, 136, 0.8), rgba(0, 69, 136, 0.8)), url('/images/non-life/business_continuity_insurance.png')`,
        }}
      >
        <div className="container mx-auto px-6 text-center">
          <h1 className="animate-fade-in text-4xl font-extrabold tracking-tight sm:text-5xl md:text-6xl">
            Business Continuity
          </h1>
        </div>
      </section>

      {/* Description Section */}
      <section className="container mx-auto px-6 py-12">
        <div className="animate-fade-in mx-auto max-w-3xl text-center">
          <h2 className="text-#004588 mb-6 text-2xl font-semibold sm:text-3xl">
            What is Business Continuity?
          </h2>
          <p className="text-#004588 text-lg">
            Business Continuity Insurance provides coverage to help businesses
            recover from unexpected events that disrupt operations. This
            insurance ensures that a business can continue its essential
            functions and maintain financial stability after a disaster, such as
            a fire, flood, or other significant event that causes a temporary
            shutdown.
          </p>
        </div>
      </section>

      {/* Features and Benefits Section */}
      <section className="container mx-auto px-6 py-16">
        <h2 className="text-#004588 mb-12 text-center text-3xl font-semibold sm:text-4xl">
          Features and Benefits
        </h2>
        <div className="grid gap-8 sm:grid-cols-2 lg:grid-cols-2">
          {[
            {
              title: 'Loss of Income',
              desc: 'Covers the loss of income that a business suffers after a disaster. This is calculated based on the historical financial performance of the business',
            },
            {
              title: 'Temporary Relocation',
              desc: 'Covers the costs associated with moving the business to a temporary location and the additional expenses incurred to continue operations from that location.',
            },
            {
              title: 'Natural Disaster Support',
              desc: 'Provides coverage for loss of income due to damage to a supplier or customer property, which impacts the insured business operations.',
            },
            {
              title: 'Service Interruption',
              desc: 'Covers losses due to the interruption of essential services such as electricity, water, gas, or internet caused by damage to the service provider infrastructure.',
            },
          ].map((feature, index) => (
            <div
              key={index}
              className="animate-fade-up shadow-lg hover:shadow-xl rounded-lg bg-white p-6 transition-all duration-300"
              style={{ '--i': index }}
            >
              <h3 className="mb-3 text-xl font-semibold text-[#ED4A00]">
                {feature.title}
              </h3>
              <p className="text-[#004588]">{feature.desc}</p>
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
                <ul>
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
              className="shadow-md hover:shadow-lg group rounded-lg bg-white p-5 transition-all duration-300 hover:border"
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

//  #004588
