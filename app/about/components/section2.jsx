/* eslint-disable react-hooks/exhaustive-deps */
'use client';
import Image from 'next/image';
import React from 'react';
const Section2 = () => {
  return (
    <div>
      <div className="container relative flex flex-col pl-0 pr-0 lg:flex-row">
        <div className="w-full p-8 lg:w-2/5 lg:p-16">
          <Image
            src="/images/about/section2_ourstory.png"
            alt="Our Story"
            width={500}
            height={400}
            className="mx-auto w-full max-w-sm"
          />
        </div>
        <div className="h-full w-full px-8 py-8 text-navy-100 lg:w-3/5 lg:px-12 lg:py-16">
          <h1 className="mb-8 text-center text-4xl font-semibold text-navy-100 lg:text-start lg:text-5xl">
            Our <span className="text-primary">Story</span>
          </h1>
          <p className="mb-6">
            Our journey began with a shared vision: to offer customized
            insurance solutions tailored to the needs of individuals and
            companies in the Philippines. Our founders, seasoned professionals
            from the insurance industry, combined with others with diverse
            backgrounds, aimed to revolutionize insurance delivery by making it
            more personalized, responsive, and efficient.
          </p>
          <p className="mb-6">
            The team of AC Prime Brokers, Inc. identified a gap in the market.
            Despite the availability of insurance products, many Filipino
            business owners and individuals struggled to find coverage that
            truly met their needs. Generic policies often fell short, lacking
            the adaptability and personalization required to address their
            unique needs.
          </p>
          <p className="mb-6">
            Our founders believed in the importance of tailored insurance
            solutions—policies that are both comprehensive and customized to
            each client&rsquo;s specific needs. This commitment was driven by
            their collective experiences across various industries, where they
            observed the limitations of traditional insurance products. They
            recognized the need for an approach that combines deep industry
            expertise with a true understanding of each individual and business,
            risk profile, and goals.
          </p>
        </div>
      </div>{' '}
      <div className="custom-shadow mb-16 flex flex-col items-center gap-4 gap-6 bg-navy-500 px-6 py-12 text-center md:mr-[15vw] md:flex-row md:text-start lg:mb-20 lg:px-12">
        <Image
          src="/images/about/section2_vision.png"
          alt="Vision"
          width={300}
          height={150}
          className="max-w-[10rem] md:max-w-[14rem]"
        />
        <div>
          <h2 className="mb-2 text-4xl font-semibold md:mb-8 lg:text-5xl">
            Our Vision
          </h2>
          <p className="lg:text-lg">
            To be an insurance broker known for our commitment to delivering
            comprehensive solutions that empower individuals and businesses to
            thrive with confidence and security
          </p>
        </div>
      </div>
      <div className="custom-shadow mb-12 flex flex-col items-center gap-4 gap-6 bg-[#DEE7F2] px-6 py-12 md:ml-[15vw] md:flex-row lg:px-12">
        <Image
          src="/images/about/section2_mission.png"
          alt="Mission"
          width={300}
          height={150}
          className="max-w-[12rem] md:max-w-[15rem]"
        />
        <div>
          <h2 className="mb-2 text-center text-4xl font-semibold md:text-start lg:text-5xl">
            Our Mission
          </h2>
          <p className="mb-2 lg:text-lg">
            At AC Prime Insurance Brokers, our mission is to provide superior
            insurance products and services tailored to the unique needs of our
            clients. We aim to:
          </p>
          <ul className="ml-4 list-disc">
            <li className="mb-1">
              <span className="font-semibold">Offer Customized Solutions:</span>{' '}
              Develop insurance plans that address the specific requirements and
              risks of each client.
            </li>
            <li className="mb-1">
              <span className="font-semibold">Drive Innovation:</span>{' '}
              Continuously embrace new technologies and methodologies to improve
              our service delivery and enhance the client experience.
            </li>
            <li className="mb-1">
              <span className="font-semibold">Uphold Integrity:</span> Foster
              long-lasting relationships through transparency, honesty, and
              ethical practices.
            </li>
            <li className="mb-1">
              <span className="font-semibold">
                Promote Professional Excellence:
              </span>{' '}
              Invest in the growth and expertise of our team to ensure the
              highest standards of service and industry knowledge.
            </li>
          </ul>
        </div>
      </div>
    </div>
  );
};

export default Section2;
