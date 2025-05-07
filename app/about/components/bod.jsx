'use client';
import React from 'react';
import {
  Dialog,
  DialogClose,
  DialogContent,
  DialogFooter,
  DialogTrigger,
} from '@/components/ui/dialog';
import {
  Drawer,
  DrawerClose,
  DrawerContent,
  DrawerFooter,
  DrawerTrigger,
} from '@/components/ui/drawer';
import { MdKeyboardArrowRight } from 'react-icons/md';
import { Card, CardContent } from '@/components/ui/card';
import Image from 'next/image';
import { Button } from '@/components/ui/button';
import { boardDirector } from '@/lib/constants';

import useMediaQuery from '@/app/hooks/use-media-query';

const BoardDirectorModal = ({ board, isDesktop }) => {
  const ModalComponent = isDesktop ? Dialog : Drawer;
  const ModalTrigger = isDesktop ? DialogTrigger : DrawerTrigger;
  const ModalContent = isDesktop ? DialogContent : DrawerContent;
  const ModalFooter = isDesktop ? DialogFooter : DrawerFooter;
  const ModalClose = isDesktop ? DialogClose : DrawerClose;

  return (
    <ModalComponent>
      <ModalTrigger className="w-full sm:w-[18rem]">
        <Card className="custom-shadow flex h-full max-w-72 transform flex-col rounded transition-transform hover:-translate-y-2">
          <div className="h-max bg-gradient-to-b from-[#C5E6FF] to-[#DEF1FF] px-16">
            <Image src={board.img} alt={board.title} width={300} height={300} />
          </div>
          <CardContent className="flex h-full flex-col justify-between p-6 text-start text-navy-100">
            <div>
              <h3 className="text-base font-semibold">{board.name}</h3>
              <h3 className="mb-3.5 text-sm font-semibold text-primary">
                {board.position}
              </h3>
              <p className="mb-3.5 line-clamp-4 text-xs font-light">
                {board.workExperience}
              </p>
            </div>
            <div className="flex items-center justify-between">
              <p className="text-xs font-light underline">Learn More</p>
              <div className="flex h-[30px] w-[30px] items-center justify-center rounded-[50%] border">
                <MdKeyboardArrowRight />
              </div>
            </div>
          </CardContent>
        </Card>
      </ModalTrigger>
      <ModalContent className="max-h-[90vh] max-w-5xl rounded bg-[#E0EEFD] px-6 text-navy-100 md:px-8 lg:w-max">
        <div className="h-full">
          <h2 className="mb-1.5 text-xl font-bold">{board.name}</h2>
          <p className="mb-4 text-sm">{board.workExperience}</p>
          <div className="max-h-[calc(80vh-9rem)] overflow-auto">
            <div>
              <div className="mb-4 flex flex-col gap-4 md:flex-row">
                <div className="w-full max-w-[20rem]">
                  <div>
                    <h3 className="mb-2 font-semibold">Core Competencies</h3>
                    <ul className="ml-4 text-sm">
                      {board.coreCompetencies.map((core, index) => (
                        <li key={index} className="mb-1.5">
                          {core}
                        </li>
                      ))}
                    </ul>
                  </div>
                </div>
                <div className="w-full">
                  <h3 className="mb-2 font-semibold">
                    Educational Attainment and Other Certification Courses
                  </h3>
                  <ul className="list-none text-sm">
                    {board.educationalEx.map((education, index) => (
                      <li key={index} className="mb-1.5">
                        {education}
                      </li>
                    ))}
                  </ul>
                </div>
              </div>
              <div className="mb-4 w-full">
                <h3 className="mb-2 font-semibold">Work Experience:</h3>
                {board.workExperienceDetails.map((work, index) => (
                  <div key={index} className="mb-1.5 flex gap-4 sm:mb-0">
                    <div className="mb-1.5 w-full max-w-[20rem]">
                      <p className="flex flex-col flex-wrap sm:flex-row sm:gap-1">
                        <span className="flex text-sm font-medium">
                          {work.position}
                          <p className="hidden sm:block">,</p>
                        </span>
                        <span className="text-sm"> {work.years}</span>
                      </p>
                    </div>
                    <div className="w-full text-sm">
                      <p>{work.company}</p>
                    </div>
                  </div>
                ))}
              </div>
              <div className="w-full">
                <h3 className="mb-2 font-semibold">
                  Clubs / Social Organizations
                </h3>
                {board.clubs.map((club, index) => (
                  <div key={index} className="mb-1.5 flex gap-4 sm:mb-0">
                    <div className="mb-1.5 w-full max-w-[20rem]">
                      <p className="flex flex-col flex-wrap sm:flex-row sm:gap-1">
                        <span className="flex text-sm font-medium">
                          {club.position}
                          <p className="hidden sm:block">,</p>
                        </span>
                        <span className="text-sm"> {club.years}</span>
                      </p>
                    </div>
                    <div className="w-full text-sm">
                      <p>{club.company}</p>
                    </div>
                  </div>
                ))}
              </div>
            </div>
          </div>
        </div>

        <ModalFooter className="sm:justify-end">
          <ModalClose asChild>
            <Button type="button" variant="primary" className="h-fit">
              Close
            </Button>
          </ModalClose>
        </ModalFooter>
      </ModalContent>
    </ModalComponent>
  );
};

const Bod = () => {
  const isDesktop = useMediaQuery('(min-width: 768px)');

  return (
    <div className="flex w-full justify-center py-24">
      <div
        className="max-w-screen-lg p-8 md:mx-6"
        style={{
          background:
            'linear-gradient(180deg, #e0e9f3 40%, rgba(220, 230, 241, .967) 74%, rgba(249, 250, 252, .916))',
        }}
      >
        <h2 className="text-center">
          <span className="text-4xl font-semibold text-navy-100 lg:text-5xl">
            Board of Directors
          </span>
        </h2>
        <div>
          <div className="flex h-full flex-wrap justify-center gap-6 p-6">
            {boardDirector.map((board, index) => (
              <div key={index} className="flex justify-center">
                <BoardDirectorModal
                  board={{ ...board, index }}
                  isDesktop={isDesktop}
                />
              </div>
            ))}
          </div>
        </div>
      </div>
    </div>
  );
};

export default Bod;
