/* eslint-disable react-hooks/exhaustive-deps */
'use client';
import React, { useState } from 'react';
import Image from 'next/image';
import { Input } from '@/components/ui/input';
import {
  Dialog,
  DialogTrigger,
  DialogClose,
  DialogContent,
  DialogFooter,
} from '@/components/ui/dialog';

import { Button } from '@/components/ui/button';
import { claims } from '@/lib/constants';
import useMediaQuery from '@/app/hooks/use-media-query';
import {
  Drawer,
  DrawerClose,
  DrawerContent,
  DrawerFooter,
  DrawerTrigger,
} from '@/components/ui/drawer';
import {
  Select,
  SelectContent,
  SelectItem,
  SelectTrigger,
  SelectValue,
  SelectGroup,
} from '@/components/ui/select';

import ContactForm from '@/components/contact-form';
import { FaMagnifyingGlass } from 'react-icons/fa6';

const Section1 = () => {
  const [searchQuery, setSearchQuery] = useState('');
  const [selectedInsurance, setSelectedInsurance] = useState('All');

  const isDesktop = useMediaQuery('(min-width: 768px)');

  const filteredProducts = claims.filter((product) => {
    const matchesSearchQuery = product.title
      .toLowerCase()
      .includes(searchQuery.toLowerCase());
    const matchesSelectedInsurance =
      selectedInsurance === 'All' || product.type === selectedInsurance;

    return matchesSearchQuery && matchesSelectedInsurance;
  });
  return (
    <div className="w-full overflow-scroll bg-navy-500/20">
      <div className="container p-6 py-12 lg:px-16">
        <div className="text-center text-[#156CB9]">
          <h1 className="mb-4 text-3xl font-semibold lg:text-4xl">
            Non Life Insurance or General Insurance
          </h1>
          <h2 className="mb-8 text-xl font-semibold lg:text-2xl">
            Claim <span className="text-primary">Requirements</span>
          </h2>
          <p className="mb-2 text-base font-light lg:text-lg">
            Here are the initial, common, and basic requirements for filing a
            claim.
          </p>
          <p className="mb-12 text-base font-light lg:text-lg">
            The Company reserves the right to require additional documents based
            on the evaluation of the submitted claim documents.
          </p>
        </div>
        <div className="relative mx-auto flex gap-2 md:max-w-[37rem] lg:max-w-4xl">
          <Input
            placeholder="Search Products"
            className="mb-10 w-full border-0 pl-9 text-xs sm:text-sm lg:mb-12"
            onChange={(e) => setSearchQuery(e.target.value)}
          />
          <FaMagnifyingGlass className="absolute left-3 top-5 -translate-y-1/2 transform text-[#156CB9]" />

          <Select onValueChange={setSelectedInsurance}>
            <SelectTrigger className="z-20 w-full max-w-[11rem] whitespace-nowrap border-0 bg-[#156CB9] text-xs text-secondary data-[placeholder]:text-secondary sm:text-sm lg:max-w-[15rem]">
              <div className="flex items-center gap-1">
                <span className="hidden font-light text-secondary/80 lg:block">
                  Show:
                </span>
                <SelectValue placeholder={<div>{selectedInsurance}</div>} />
              </div>
            </SelectTrigger>
            <SelectContent>
              <SelectGroup>
                <SelectItem value="All">All</SelectItem>
                <SelectItem value="life">Life Insurance</SelectItem>
                <SelectItem value="non-life">Non Life Insurance</SelectItem>
                {/* <SelectItem value="hmo">HMO</SelectItem> */}
                <SelectItem value="business-solutions">
                  Business Solutions
                </SelectItem>
              </SelectGroup>
            </SelectContent>
          </Select>
        </div>
        <div className="mx-auto flex max-w-5xl flex-wrap justify-center gap-4 gap-y-6">
          {filteredProducts.map((product, index) => (
            <React.Fragment key={index}>
              {isDesktop ? (
                <Dialog>
                  <DialogTrigger className="w-full sm:w-[18rem]">
                    <div className="flex items-center gap-2 rounded p-2 text-sm font-medium text-[#156CB9] shadow-custom-inset hover:shadow-custom-inset-hover">
                      <Image
                        src={product.img}
                        alt={product.title}
                        width={75}
                        height={75}
                      />
                      <p className="text-start">{product.title}</p>
                    </div>
                  </DialogTrigger>
                  <DialogContent className="max-h-[90vh] max-w-5xl rounded bg-[#E0EEFD] text-[#156CB9] md:px-10 lg:w-max">
                    <div className="max-h-[calc(90vh-9rem)] overflow-auto">
                      {product.content}
                    </div>
                    <DialogFooter className="sm:justify-end">
                      <DialogClose asChild>
                        <Button
                          type="button"
                          variant="primary"
                          className="h-fit"
                        >
                          Close
                        </Button>
                      </DialogClose>
                    </DialogFooter>
                  </DialogContent>
                </Dialog>
              ) : (
                <Drawer>
                  <DrawerTrigger className="w-full sm:w-[18rem]">
                    <div className="flex items-center gap-2 rounded p-2 text-sm font-medium text-[#156CB9] shadow-custom-inset hover:shadow-custom-inset-hover lg:text-base">
                      <Image
                        src={product.img}
                        alt={product.title}
                        width={75}
                        height={75}
                      />
                      <p className="text-start">{product.title}</p>
                    </div>
                  </DrawerTrigger>
                  <DrawerContent className="max-h-[80vh] bg-[#E0EEFD] px-4 text-[#156CB9]">
                    <div className="max-h-[calc(80vh-9rem)] overflow-auto">
                      {product.content}
                    </div>
                    <DrawerFooter>
                      <DrawerClose asChild>
                        <Button variant="primary">Close</Button>
                      </DrawerClose>
                    </DrawerFooter>
                  </DrawerContent>
                </Drawer>
              )}
            </React.Fragment>
          ))}
        </div>
        {/* <div className="mt-12">
          <ContactForm formTitle="Filing a claim? You can reach us by submitting this form" />
        </div> */}
      </div>
    </div>
  );
};

export default Section1;
