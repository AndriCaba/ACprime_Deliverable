'use client';

import React from 'react';
import Image from 'next/image';
import { useRouter } from 'next/navigation';
import { Button } from '@/components/ui/button';
import { IoIosArrowBack } from 'react-icons/io';
import { motion } from 'framer-motion';

export default function WorksOfArt() {
  const router = useRouter();

  const handleBack = () => router.back();

  const containerVariants = {
    hidden: { opacity: 0 },
    visible: {
      opacity: 1,
      transition: { staggerChildren: 0.2 },
    },
  };

  const itemVariants = {
    hidden: { opacity: 0, y: 20 },
    visible: { opacity: 1, y: 0 },
  };

  return (
    <div className="bg-gray-50 font-normal">
      {/* Hero Section */}
      <section className="relative bg-gradient-to-br from-white via-blue-50 to-blue-100 py-20">
        <div className="container mx-auto flex flex-col items-center gap-12 px-6 lg:flex-row">
          <motion.div
            className="lg:w-1/2"
            variants={containerVariants}
            initial="hidden"
            animate="visible"
          >
            <motion.h1
              className="mb-6 text-5xl font-semibold tracking-tight text-[#ED4A00]"
              variants={itemVariants}
            >
              Protect Your Art Legacy
            </motion.h1>
            <motion.p
              className="mb-8 text-lg leading-relaxed text-[#156CB9]"
              variants={itemVariants}
            >
              Safeguard your priceless artworks with tailored insurance
              solutions, ensuring protection against loss, damage, or theft for
              your invaluable collections.
            </motion.p>
            <motion.ul
              className="space-y-3 text-base font-semibold text-[#156CB9]"
              variants={itemVariants}
            >
              <li className="flex items-center gap-2">
                <span className="text-[#ED4A00]">✓</span> Comprehensive Coverage
                for All Art Types
              </li>
              <li className="flex items-center gap-2">
                <span className="text-[#ED4A00]">✓</span> Authenticated
                Collections Protection
              </li>
              <li className="flex items-center gap-2">
                <span className="text-[#ED4A00]">✓</span> Global Transit &
                Static Risk Coverage
              </li>
              <li className="flex items-center gap-2">
                <span className="text-[#ED4A00]">✓</span> Tailored Policies for
                Unique Needs
              </li>
            </motion.ul>
          </motion.div>
          <motion.div
            className="lg:w-1/2"
            initial={{ opacity: 0, scale: 0.9 }}
            animate={{ opacity: 1, scale: 1 }}
            transition={{ duration: 0.5 }}
          >
            <Image
              src="/images/non-life/works_of_art.png"
              alt="Art insurance visual"
              width={600}
              height={600}
              className="shadow-2xl mx-auto rounded-2xl"
              priority
            />
          </motion.div>
        </div>
      </section>

      {/* Why It Matters */}
      <section className="bg-white py-24">
        <div className="container mx-auto px-6 text-center">
          <motion.h2
            className="mb-6 text-3xl font-semibold text-[#ED4A00]"
            initial={{ opacity: 0 }}
            whileInView={{ opacity: 1 }}
            viewport={{ once: true }}
          >
            Why Insure Your Art?
          </motion.h2>
          <motion.p
            className="mx-auto max-w-2xl text-lg text-[#156CB9]"
            initial={{ opacity: 0 }}
            whileInView={{ opacity: 1 }}
            transition={{ delay: 0.2 }}
            viewport={{ once: true }}
          >
            Your art embodies cultural, emotional, and financial value. Our
            insurance solutions protect your investments, preserving their
            legacy for generations to come.
          </motion.p>
        </div>
      </section>

      {/* Feature Cards */}
      <section className="container mx-auto grid grid-cols-1 gap-8 px-6 py-20 sm:grid-cols-2 lg:grid-cols-3">
        {[
          {
            title: 'Authenticated Coverage',
            desc: 'Coverage backed by verified documentation for ultimate peace of mind.',
          },
          {
            title: 'Global Risk Protection',
            desc: 'Insured during storage, display, and international transit.',
          },
          {
            title: 'Fragile Art Expertise',
            desc: 'Specialized protection for sculptures, antiques, and delicate works.',
          },
        ].map((item, i) => (
          <motion.div
            key={i}
            className="shadow-lg hover:shadow-xl rounded-xl bg-white p-8 transition-shadow"
            variants={itemVariants}
            initial="hidden"
            whileInView="visible"
            viewport={{ once: true }}
          >
            <h3 className="mb-3 text-xl font-semibold text-[#ED4A00]">
              {item.title}
            </h3>
            <p className="text-[#156CB9]">{item.desc}</p>
          </motion.div>
        ))}
      </section>

      {/* Policy Details */}
      <section className="bg-gray-50 py-24">
        <div className="container mx-auto space-y-16 px-6">
          <motion.div
            initial={{ opacity: 0 }}
            whileInView={{ opacity: 1 }}
            viewport={{ once: true }}
          >
            <h2 className="mb-4 text-2xl font-semibold text-[#ED4A00]">
              Covered Artworks
            </h2>
            <ul className="grid gap-4 text-base font-semibold text-[#156CB9] sm:grid-cols-2">
              <li className="flex items-center gap-2">
                <span className="text-[#ED4A00]">•</span> Non-Brittle Artworks
                (Oil, Acrylic, Pastel)
              </li>
              <li className="flex items-center gap-2">
                <span className="text-[#ED4A00]">•</span> Brittle Artworks
                (Sculpture, Metal, Antique)
              </li>
              <li className="flex items-center gap-2">
                <span className="text-[#ED4A00]">•</span> Authenticated
                Collections
              </li>
            </ul>
          </motion.div>

          <motion.div
            initial={{ opacity: 0 }}
            whileInView={{ opacity: 1 }}
            viewport={{ once: true }}
          >
            <h2 className="mb-4 text-2xl font-semibold text-[#ED4A00]">
              Coverage Scope
            </h2>
            <p className="text-[#156CB9]">
              Comprehensive protection against physical loss or damage at
              declared locations or during transportation, tailored to your
              collection’s needs.
            </p>
          </motion.div>

          <motion.div
            initial={{ opacity: 0 }}
            whileInView={{ opacity: 1 }}
            viewport={{ once: true }}
          >
            <h2 className="mb-4 text-2xl font-semibold text-[#ED4A00]">
              Required Documentation
            </h2>
            <ul className="grid gap-2 text-base font-semibold text-[#156CB9] sm:grid-cols-2">
              <li className="flex items-center gap-2">
                <span className="text-[#ED4A00]">•</span> Proposer Details
              </li>
              <li className="flex items-center gap-2">
                <span className="text-[#ED4A00]">•</span> Item Location
              </li>
              <li className="flex items-center gap-2">
                <span className="text-[#ED4A00]">•</span> Security Measures
              </li>
              <li className="flex items-center gap-2">
                <span className="text-[#ED4A00]">•</span> Valuation/Appraisal
              </li>
              <li className="flex items-center gap-2">
                <span className="text-[#ED4A00]">•</span> Loss History
              </li>
            </ul>
          </motion.div>

          <motion.div
            initial={{ opacity: 0 }}
            whileInView={{ opacity: 1 }}
            viewport={{ once: true }}
          >
            <h2 className="mb-4 text-2xl font-semibold text-[#ED4A00]">
              Claim Requirements
            </h2>
            <ul className="grid gap-2 text-base font-semibold text-[#156CB9] sm:grid-cols-2">
              <li className="flex items-center gap-2">
                <span className="text-[#ED4A00]">•</span> Incident Report
              </li>
              <li className="flex items-center gap-2">
                <span className="text-[#ED4A00]">•</span> Affidavit of
                Loss/Damage
              </li>
              <li className="flex items-center gap-2">
                <span className="text-[#ED4A00]">•</span> Police Report
              </li>
              <li className="flex items-center gap-2">
                <span className="text-[#ED4A00]">•</span> Photographs
              </li>
              <li className="flex items-center gap-2">
                <span className="text-[#ED4A00]">•</span> Repair/Restoration
                Estimates
              </li>
            </ul>
          </motion.div>
        </div>
      </section>

      {/* Call to Action */}
      <section className="bg-gradient-to-r from-orange-50 to-blue-50 py-20">
        <div className="container mx-auto px-6 text-center">
          <motion.h2
            className="mb-6 text-3xl font-semibold text-[#ED4A00]"
            initial={{ opacity: 0 }}
            whileInView={{ opacity: 1 }}
            viewport={{ once: true }}
          >
            Secure Your Art Collection Now
          </motion.h2>
          <motion.p
            className="mx-auto mb-8 max-w-lg text-[#156CB9]"
            initial={{ opacity: 0 }}
            whileInView={{ opacity: 1 }}
            transition={{ delay: 0.2 }}
            viewport={{ once: true }}
          >
            Connect with our experts to explore tailored insurance solutions or
            request a personalized quote today.
          </motion.p>
          <motion.div
            initial={{ opacity: 0 }}
            whileInView={{ opacity: 1 }}
            transition={{ delay: 0.4 }}
            viewport={{ once: true }}
          ></motion.div>
        </div>
      </section>
    </div>
  );
}
