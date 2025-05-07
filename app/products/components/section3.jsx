/* eslint-disable react-hooks/exhaustive-deps */
'use client';

import React from 'react';
import Autoplay from 'embla-carousel-autoplay';
import Image from 'next/image';
import { Card, CardContent, CardImage } from '@/components/ui/card';
import { Button } from '@/components/ui/button';

import {
  Carousel,
  CarouselContent,
  CarouselItem,
  CarouselNext,
  CarouselPrevious,
} from '@/components/ui/carousel';
import { IoNavigate } from 'react-icons/io5';

const Section3 = () => {
  const blogs = [
    {
      tags: ['Financial Wellness', 'Insurance and Risk'],
      img: '/images/articles/articles-1.png',
      title:
        "Unleashing the power of Mutual Funds: A beginner's guide to Investing",
      content:
        "Investing can seem intimidating for beginners, but fear not! There's a gateway to the world of investing that can help you navigate the complexities with ease: Mutual Funds.",
      link: '/blog/kn1',
      date: 'July 26, 2024',
    },
    {
      tags: ['Industry Trends', 'Reports'],
      img: '/images/articles/articles-2.png',
      title: 'Affinity Capital Triumphs in 2nd Friendship Cup Golf Tournament',
      content:
        "Affinity Capital Secures Back-to-Back Wins in 2nd Friendship Cup Golf Tournament 2024, Supporting The Medical City South Luzon's Mission for Women and Children",
      date: 'July 26, 2024',
    },
    {
      tags: ['Financial Wellness', 'Industry Trends'],
      img: '/images/articles/articles-3.png',
      title: 'Certainty Amidst Uncertainties',
      content:
        'Mr. Toots Cortez, President & CEO of Affinity Capital shared his expertise on finding stability in uncertain times at the Philippine Institute of Architects (PIA) National Convention held in Marriott Hotel, Resorts World Manila.',
      date: 'July 26, 2024',
    },
    {
      tags: ['Reports', 'Insurance and Risk'],
      img: '/images/articles/articles-1.png',
      title: 'Affinity Welcomes Mr. Enchong Dee',
      content:
        "Affinity is excited to welcome Mr. Dee as a new shareholder who shares Affinity's vision of improving Filipinos' financial literacy.",
      date: 'July 26, 2024',
    },
    {
      tags: ['Financial Wellness', 'Reports'],
      img: '/images/articles/articles-2.png',
      title: 'Leaders Training ',
      content:
        'Over the course of a three-hour presentation, Mr. Toots Cortez presented several tips and strategies on how to position mutual funds effectively in the market.',
      link: '/blog/leaders_training',
      date: 'July 26, 2024',
    },
    {
      tags: ['Industry Trends', 'Insurance and Risk'],
      img: '/images/articles/articles-3.png',
      title: 'Cisol General Assembly',
      content:
        'Affinity Capital had its first blended general assembly event with informative, exciting, and fun events. Mr. Toots Cortez, the CEO, attended the event along with Officers Danny Alimorong, Roann Navarro, Jr Cortez, KAPs and our team of CISols.',
      link: '/blog/general_assembly',
      date: 'July 26, 2024',
    },
  ];

  const plugin = React.useRef(
    Autoplay({ delay: 5000, stopOnInteraction: true })
  );

  return (
    <div className="p-8 py-12">
      <div className="text-start">
        <h1 className="mb-12 text-4xl font-semibold text-navy-100 lg:text-5xl">
          Articles and Insights
        </h1>
      </div>
      <div className="w-full pb-6">
        <Carousel
          plugins={[plugin.current]}
          opts={{
            align: 'start',
            loop: true,
          }}
          className="w-full"
          onMouseEnter={plugin.current.stop}
          onMouseLeave={plugin.current.reset}
        >
          <CarouselContent>
            {blogs.map((blog, index) => (
              <CarouselItem key={index} className="md:basis-1/3 lg:basis-1/4">
                <div className="h-full w-full px-4">
                  <Card
                    className={`mx-auto max-w-[320px] rounded-none p-2.5 pb-12 ${
                      index % 2 === 0 ? 'bg-[#0450C1]' : 'bg-[#CAE7F9]'
                    }`}
                  >
                    <div className="flex h-auto w-full items-center">
                      <Image
                        src={blog.img}
                        alt={blog.title}
                        width={400}
                        height={250}
                        style={{
                          maxWidth: '100%',
                          height: 'auto',
                        }}
                      />
                    </div>
                    <CardContent className="relative flex flex-col items-center justify-center p-0 pt-2.5">
                      <div className="flex w-full justify-start gap-2">
                        {blog.tags.map((tag, tagIndex) => (
                          <div
                            key={tagIndex}
                            className="rounded bg-white p-1 text-[10px] text-navy-100"
                          >
                            {tag}
                          </div>
                        ))}
                      </div>
                      <h2
                        className={`my-1.5 w-full text-start text-xs font-semibold lg:text-sm ${index % 2 === 0 ? 'text-navy-500' : 'text-primary'}`}
                      >
                        {blog.date}
                      </h2>
                      <div
                        className={`h-24 ${index % 2 === 0 ? 'text-white' : 'text-navy-100'}`}
                      >
                        <h3 className="mb-1.5 line-clamp-2 text-sm font-semibold leading-tight lg:text-base lg:leading-tight">
                          {blog.title}
                        </h3>
                        <p className="line-clamp-3 text-xs lg:text-sm">
                          {blog.content}
                        </p>
                      </div>
                      <div className="absolute -bottom-14 -right-4">
                        <Image
                          src="/images/articles/fold_paper.png"
                          alt="fold"
                          width={40}
                          height={40}
                        />
                      </div>
                    </CardContent>
                  </Card>
                  <div className="group mx-auto flex max-w-[320px] items-center justify-end gap-4 bg-[#F6F6F6] px-6 py-2 text-navy-100 transition hover:bg-[#ebebeb] hover:underline">
                    READ MORE
                    <IoNavigate className="rotate-45 transition group-hover:rotate-0" />
                  </div>
                </div>
              </CarouselItem>
            ))}
          </CarouselContent>
          <CarouselPrevious className="-left-4 scale-125 border-none bg-transparent text-xl font-bold text-[#007ae2] transition hover:scale-150 hover:bg-transparent hover:text-[#007ae2]" />
          <CarouselNext className="-right-4 scale-125 border-none bg-transparent text-xl font-bold text-[#007ae2] transition hover:scale-150 hover:bg-transparent hover:text-[#007ae2]" />
        </Carousel>
      </div>
      <div className="flex justify-end p-6">
        <Button
          href="https://www.youtube.com/@affinitycapital"
          variant="outline"
          className="border-[#0450C1] text-[#0450C1] hover:bg-[#0450C1] hover:text-white"
        >
          SEE ALL ARTICLES
        </Button>
      </div>
    </div>
  );
};

export default Section3;
