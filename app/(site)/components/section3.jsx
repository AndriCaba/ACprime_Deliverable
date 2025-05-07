/* eslint-disable react-hooks/exhaustive-deps */
'use client';

import React, { useState, useRef, useEffect } from 'react';
import Autoplay from 'embla-carousel-autoplay';
import Image from 'next/image';
import { Card, CardContent } from '@/components/ui/card';

import {
  Carousel,
  CarouselContent,
  CarouselItem,
  CarouselNext,
  CarouselPrevious,
} from '@/components/ui/carousel';
import { IoNavigate } from 'react-icons/io5';
import Link from 'next/link';
import { articles } from '@/lib/constants';

const Section3 = () => {
  const [emblaApi, setEmblaApi] = useState(null);
  const [selectedIndex, setSelectedIndex] = useState(0);
  const autoplay = useRef(Autoplay({ delay: 5000, stopOnInteraction: true }));

  useEffect(() => {
    if (!emblaApi) return;

    const handleSelect = () => {
      setSelectedIndex(emblaApi.selectedScrollSnap());
    };

    handleSelect(); // Initial call to set the correct index
    emblaApi.on('select', handleSelect);

    return () => {
      emblaApi.off('select', handleSelect);
    };
  }, [emblaApi]);

  const handleDotClick = (index) => {
    if (emblaApi) emblaApi.scrollTo(index);
  };
  return (
    <div className="bg-navy-400/20">
      <div className="min-[96rem]:max-w-[96rem] mx-auto px-6 py-12 sm:py-16 md:max-w-[48rem] lg:max-w-[64rem] lg:px-8 xl:max-w-[80rem]">
        <div className="text-center">
          <h1 className="mb-4 text-center text-4xl font-semibold text-[#004588] lg:text-5xl">
            Articles and Insights
          </h1>
          <div className="w-100 mx-auto mb-4 border-b-2 border-[#004588]"></div>
        </div>

        <div className="w-full pb-6">
          <Carousel
            opts={{ loop: true, align: 'start' }}
            plugins={[autoplay.current]}
            setApi={setEmblaApi}
            className="w-full"
          >
            <CarouselContent className="gap-4">
              {articles.slice(0, 6).map((article, index) => (
                <CarouselItem
                  key={index}
                  className={`${index === articles.length - 1 ? 'pr-4' : ''} basis-full md:basis-[48.9%] lg:basis-[32.1%] xl:basis-[24%]`}
                >
                  <Link
                    href={`/insights/${article.id}`}
                    className="group h-full w-full"
                  >
                    <Card className="rounded-lg-none mx-auto h-[300px] max-w-[420px] overflow-hidden rounded-t bg-[#004588]">
                      <div className="flex h-auto w-full items-center">
                        <Image
                          src={article.img}
                          alt={article.title}
                          width={400}
                          height={400}
                          style={{
                            maxWidth: '100%',
                            height: 'auto',
                          }}
                        />
                      </div>
                      <CardContent className="relative flex flex-col items-center justify-center p-2 px-2.5">
                        {/* <div className="flex w-full flex-wrap justify-start gap-2">
                          {article.tags.map((tag, tagIndex) => (
                            <div
                              key={tagIndex}
                              className="border border-secondary px-2 py-1 text-[10px] text-secondary"
                            >
                              {tag}
                            </div>
                          ))}
                        </div> */}
                        <h2 className="mb-1 mt-1.5 w-full text-start text-[10px] font-semibold text-[#ffffff]">
                          {article.date}
                        </h2>
                        <div className="h-24 text-secondary">
                          <h3 className="mb-3.5 mt-1.5 line-clamp-2 text-sm font-medium leading-tight lg:leading-tight">
                            {article.title}
                          </h3>
                          {/* <p className="line-clamp-3 text-xs">
                            {article.description}
                          </p> */}
                        </div>
                        {/* <div className="absolute -bottom-8 -right-2">
                          <Image
                            src="/images/articles/fold_paper.png"
                            alt="fold"
                            width={40}
                            height={40}
                          />
                        </div> */}
                      </CardContent>
                    </Card>

                    {/* <div className="mx-auto flex max-w-[420px] items-center justify-end gap-4 rounded-b bg-[#F6F6F6] px-6 py-2 text-[13px] text-navy-100 transition group-hover:bg-[#ebebeb] group-hover:underline">
                      Read more
                      <IoNavigate className="rotate-45 transition group-hover:rotate-0" />
                    </div> */}
                  </Link>
                </CarouselItem>
              ))}
            </CarouselContent>
            <CarouselPrevious className="-left-10 hidden scale-125 rounded-full border-none bg-navy-300 text-2xl font-bold text-secondary transition hover:scale-[1.35] hover:bg-navy-300/90 hover:text-secondary md:flex" />
            <CarouselNext className="-right-10 hidden scale-125 rounded-full border-none bg-navy-300 text-2xl font-bold text-secondary transition hover:scale-[1.35] hover:bg-navy-300/90 hover:text-secondary md:flex" />
          </Carousel>
        </div>
        <div className="">
          <div className="flex items-center justify-center gap-2">
            {articles.slice(0, 6).map((_, index) => (
              <button
                key={index}
                onClick={() => handleDotClick(index)}
                className={`h-3 w-3 rounded-full transition-all ${selectedIndex === index ? 'scale-125 bg-navy-400' : 'bg-navy-400/40'} `}
              />
            ))}
          </div>
        </div>
        <div className="flex justify-center p-6 lg:justify-end">
          <Link
            href="/insights"
            variant="outline"
            className="rounded border border-navy-300 px-2 py-1.5 text-sm text-navy-300 hover:bg-navy-300 hover:text-white"
          >
            SEE ALL ARTICLES
          </Link>
        </div>
      </div>
    </div>
  );
};

export default Section3;
