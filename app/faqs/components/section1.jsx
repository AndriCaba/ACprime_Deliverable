/* eslint-disable react-hooks/exhaustive-deps */
'use client';
import React from 'react';
import Image from 'next/image';
import {
  Accordion,
  AccordionContent,
  AccordionItem,
  AccordionTrigger,
} from '@/components/ui/accordion';
import {
  Table,
  TableBody,
  TableCell,
  TableHead,
  TableHeader,
  TableRow,
} from '@/components/ui/table';
import { healthTableData, lifeTableData } from '@/lib/constants';

const Section1 = () => {
  const LifeInsuranceComparisonTable = () => (
    <Table className="mx-auto my-4 max-w-4xl">
      <TableHeader className="bg-transparent">
        <TableRow>
          <TableHead className="border border-navy-100 bg-navy-100 p-2 text-center font-medium text-secondary">
            TERM LIFE
          </TableHead>
          <TableHead className="border border-navy-100 bg-navy-100 p-2 text-center font-medium text-secondary">
            WHOLE LIFE
          </TableHead>
        </TableRow>
      </TableHeader>
      <TableBody className="border border-navy-200 text-start text-xs sm:text-sm">
        {lifeTableData.map((item, index) => (
          <TableRow key={index} className="border-0">
            <TableCell className="border-r border-navy-200 align-top">
              <p className="mb-2">
                <span className="font-semibold">{item.label}: </span>
                {item.termLife}
              </p>
            </TableCell>
            <TableCell className="align-top">
              <p className="mb-2">
                <span className="font-semibold">{item.label}: </span>
                {item.wholeLife}
              </p>
            </TableCell>
          </TableRow>
        ))}
      </TableBody>
    </Table>
  );

  const HealthInsuranceComparisonTable = () => (
    <Table className="mx-auto my-4 max-w-4xl">
      <TableHeader className="bg-transparent">
        <TableRow>
          <TableHead className="border border-navy-100 bg-navy-100 p-2 text-center font-medium text-secondary">
            HMO
          </TableHead>
          <TableHead className="border border-navy-100 bg-navy-100 p-2 text-center font-medium text-secondary">
            HEALTH INSURANCE
          </TableHead>
        </TableRow>
      </TableHeader>
      <TableBody className="border border-navy-200 text-start text-sm">
        {healthTableData.map((item, index) => (
          <TableRow key={index} className="border-0">
            <TableCell className="border-r border-navy-200 align-top">
              <p className="mb-2">
                <span className="font-semibold">{item.label}: </span>
                {item.hmo}
              </p>
            </TableCell>
            <TableCell className="align-top">
              <p className="mb-2">
                <span className="font-semibold">{item.label}: </span>
                {item.healthInsurance}
              </p>
            </TableCell>
          </TableRow>
        ))}
      </TableBody>
    </Table>
  );

  const faqData = [
    {
      question: 'Which insurance policy is the most suitable for my needs?',
      answer:
        "Finding the perfect insurance policy is like finding the right pair of shoes - it depends on your specific needs! There's no one-size-fits-all answer because everyone has unique circumstances. Don't try to navigate the insurance world alone! A trusted advisor can be your guide to finding the right coverage and giving you peace of mind.",
    },
    {
      question:
        'How does Traditional Life Insurance differ from Whole Life Insurance?',
      answer: <LifeInsuranceComparisonTable />,
    },
    {
      question: 'What distinguishes Health Insurance from an HMO plan?',
      answer: <HealthInsuranceComparisonTable />,
    },
    {
      question: 'Is it possible to purchase insurance while living abroad?',
      answer:
        "While the application process might be online, there's an important step to remember: both you (the client) and the financial advisor (FA) need to be physically present in the Philippines to finalize the contract. Why is this important? If either of you are abroad during the signing, the contract may be considered invalid. This means any claims you try to file in the future might not be honored. So, if you're currently outside the Philippines but interested in getting insurance, it's best to wait until you return before starting the application process.",
    },
    {
      question: 'Which insurance policy is the most suitable for my needs?',
      answer: (
        <div>
          <p className="mb-4">
            The duration of your coverage depends entirely on the specific plan
            you choose. Some plans offer coverage until a specific age (e.g., 65
            or 75), while others provide lifelong coverage.
          </p>
          <p className="mb-4">
            If you reach the age limit, this will happen depending on the type
            of insurance you have :
          </p>
          <p className="mb-4">
            <span className="font-bold">Traditional Plans:</span> If you have a
            traditional plan (like a participating whole life policy) and
            outlive the coverage period, the policy simply matures. This means
            you&#39;ll typically receive any accumulated dividends or bonuses
            earned over the years.
          </p>
          <p className="mb-4">
            <span className="font-bold">Term Life Insurance:</span> Coverage
            lasts for a predefined period (e.g., 10, 20, or 30 years) until a
            specific age (usually 65 or 75). If you outlive the term, the policy
            expires, and you won&#39;t receive any payout unless the policy has
            a rider for a guaranteed death benefit.
          </p>
          <p className="mb-4">
            <span className="font-bold">Variable Universal Life (VUL):</span>{' '}
            With VUL plans, there&#39;s no set age limit. However, the coverage
            itself is linked to the investment component. If you outlive the
            plan, you&#39;ll typically receive the remaining fund value (the
            accumulated investment amount).
          </p>
        </div>
      ),
    },
  ];
  return (
    <div className="bg-navy-500/20">
      <div className="container z-10 px-6 py-12 text-navy-100 lg:px-32">
        <div className="mb-8 flex justify-center">
          <Image
            src="/images/faqs/faq-icon.png"
            alt="Calling"
            width={250}
            height={300}
          />
        </div>
        <p className="mb-8">
          Looking for answers about insurance? You&#39;ve come to the right
          place! Our FAQs page is designed to be a one-stop shop for all your
          insurance questions. Here, you&#39;ll find clear and concise answers
          to common inquiries, helping you understand your options and make
          informed decisions about your insurance coverage.
        </p>
        <Accordion type="single" collapsible className="w-full">
          {faqData.map((faq, index) => (
            <AccordionItem key={index} value={index + 1} className="sm:px-2">
              <AccordionTrigger className="text-start text-sm text-navy-100 hover:text-primary data-[state=open]:text-primary lg:text-base [&[data-state=open]>svg]:text-primary">
                {index + 1}. {faq.question}
              </AccordionTrigger>
              <AccordionContent>{faq.answer}</AccordionContent>
            </AccordionItem>
          ))}
        </Accordion>
      </div>
    </div>
  );
};

export default Section1;
