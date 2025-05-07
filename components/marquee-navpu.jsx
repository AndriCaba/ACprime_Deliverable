/* eslint-disable react-hooks/exhaustive-deps */
'use client';

import axios from 'axios';
import Image from 'next/image';
import { useEffect, useRef } from 'react';
import { IoCaretDown, IoCaretUp } from 'react-icons/io5';

import { useAppDispatch, useAppSelector } from '@/app/hooks';
import { listFunds } from '@/lib/features';
import { cn, numberFormater } from '@/lib/utils';

const MarqueeNav = () => {
  const initialized = useRef(false);
  const dispatch = useAppDispatch();
  const { funds } = useAppSelector(({ fund }) => fund);

  useEffect(() => {
    async function getFunds() {
      const { data } = await axios.get('/api/funds');

      dispatch(listFunds([...data]));
    }

    // TO AVOID CALLING FUNCTION TWICE
    if (!initialized.current && !funds.length) {
      initialized.current = true;
      getFunds();
    }
  }, []);

  return (
    // Note: Edit in tailwind.config for marquee animation
    <div className="fixed top-0 z-50 w-full">
      <div className="group relative flex min-h-[58px] overflow-x-hidden bg-sky-100">
        <div className="animate-marquee flex whitespace-nowrap py-2 group-hover:[animation-play-state:paused]">
          {funds.map((item) => (
            <div key={item.id} className="mx-4 text-4xl">
              <div className="flex">
                <div className="flex">
                  <div className="w-16">
                    <Image
                      src={item.managerLogo || '/images/logo/bpi_wealth.png'}
                      width={976}
                      height={202}
                      alt="Manager Logo"
                    />
                  </div>
                  <p className="px-2 text-xs text-blue-500">{item.currency}</p>
                </div>

                <p className="border-l border-slate-400 pl-2 text-xs text-blue-700">
                  {item.description}
                </p>
              </div>

              <div className="mt-2 flex justify-between">
                <p className="text-xs text-blue-700">{item.navDate}</p>

                <div className="flex items-center text-xs">
                  <p>{numberFormater(item.navpu, 4, 4)}</p>
                  <p
                    className={cn(
                      'ml-1',
                      item.navpuPerformance === 0
                        ? 'text-black'
                        : item.navpuPerformance < 0
                          ? 'text-red-500'
                          : 'text-green-500'
                    )}
                  >
                    ({numberFormater(item.navpuPerformance, 2, 2)} %)
                  </p>
                  {item.navpuPerformance === 0 ? null : item.navpuPerformance <
                    0 ? (
                    <IoCaretDown className="text-red-500" />
                  ) : (
                    <IoCaretUp className="text-lg text-green-500" />
                  )}
                </div>
              </div>
            </div>
          ))}
        </div>

        <div className="animate-marquee2 absolute top-0 flex min-h-[58px] whitespace-nowrap py-2 group-hover:[animation-play-state:paused]">
          {funds.map((item) => (
            <div key={item.id} className="mx-4 text-4xl">
              <div className="flex">
                <div className="flex">
                  <div className="w-16">
                    <Image
                      src={item.managerLogo || '/images/logo/bpi-wealth.png'}
                      width={976}
                      height={202}
                      alt="Manager Logo"
                    />
                  </div>
                  <p className="px-2 text-xs text-blue-500">{item.currency}</p>
                </div>

                <p className="border-l border-slate-400 pl-2 text-xs text-blue-700">
                  {item.description}
                </p>
              </div>

              <div className="mt-2 flex justify-between">
                <p className="text-xs text-blue-700">{item.navDate}</p>

                <div className="flex items-center text-xs">
                  <p>{numberFormater(item.navpu, 4, 4)}</p>
                  <p
                    className={cn(
                      'ml-1',
                      item.navpuPerformance === 0
                        ? 'text-black'
                        : item.navpuPerformance < 0
                          ? 'text-red-500'
                          : 'text-green-500'
                    )}
                  >
                    ({numberFormater(item.navpuPerformance, 2, 2)} %)
                  </p>
                  {item.navpuPerformance === 0 ? null : item.navpuPerformance <
                    0 ? (
                    <IoCaretDown className="text-red-500" />
                  ) : (
                    <IoCaretUp className="text-lg text-green-500" />
                  )}
                </div>
              </div>
            </div>
          ))}
        </div>
      </div>
    </div>
  );
};

export default MarqueeNav;
