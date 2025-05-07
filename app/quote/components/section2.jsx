/* eslint-disable react-hooks/exhaustive-deps */
'use client';

import Image from 'next/image';
import QuoteForm from './quote-form';

const Section1 = () => {
  return (
    <div className="container flex flex-col gap-4 py-12 lg:flex-row">
      <div>
        <div>
          <h1 className="mb-2 text-2xl font-bold lg:text-4xl">
            What will be the next step?
          </h1>
          <p className="mb-8 text-sm font-medium md:text-base">
            You are one step closer into protecting what matters.
          </p>
        </div>
        <div className="flex gap-4">
          <div className="flex w-[24px] shrink-0 flex-col items-center">
            <Image
              src="/images/quote/dot.png"
              width={24}
              height={24}
              alt="dot"
            />
            <div className="h-20 w-[1px] bg-black sm:h-16" />
            <Image
              src="/images/quote/dot.png"
              width={24}
              height={24}
              alt="dot"
            />
            <div className="h-20 w-[1px] bg-black sm:h-16" />
            <Image
              src="/images/quote/dot.png"
              width={24}
              height={24}
              alt="dot"
            />
            <div className="h-20 w-[1px] bg-black sm:h-16" />
            <Image
              src="/images/quote/dot.png"
              width={24}
              height={24}
              alt="dot"
            />
          </div>
          <div className="text-sm md:text-base">
            <div>
              <h2 className="font-semibold">We’ll review your inquiry. </h2>
              <p className="h-20 sm:h-16">
                We will carefully assess your inquiry andvget in touch with you
                if necessary.
              </p>
            </div>
            <div>
              <h2 className="font-semibold">We’ll prepare a proposal </h2>
              <p className="h-20 sm:h-16">
                Our team will create a tailored proposal based on your
                requirements.
              </p>
            </div>
            <div>
              <h2 className="font-semibold">Let’s discuss together</h2>
              <p className="h-20 sm:h-16">
                We will address any questions or modifications you may have
                regarding the proposal.
              </p>
            </div>
            <div>
              <h2 className="font-semibold">
                Get started on your risk management plan
              </h2>
              <p className="h-20 sm:h-16">
                Upon your approval, we will finalize the coverage details and
                outline the next steps to take.
              </p>
            </div>
          </div>
        </div>
      </div>
      <div>
        <QuoteForm />
      </div>
    </div>
  );
};

export default Section1;
