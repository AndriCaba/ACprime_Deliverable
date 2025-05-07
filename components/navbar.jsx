'use client';
import { motion } from 'framer-motion';

import { Button } from '@/components/ui/button';
import Image from 'next/image';
import Link from 'next/link';
import { usePathname } from 'next/navigation';
import React, { useState } from 'react';
import {
  FaBars,
  FaMagnifyingGlass,
  FaXmark,
  FaBuildingColumns,
} from 'react-icons/fa6';
import { IoShieldCheckmarkSharp } from 'react-icons/io5';
import { FaHome } from 'react-icons/fa';
import { HiUserGroup } from 'react-icons/hi2';
import { PiHandWithdrawFill } from 'react-icons/pi';
import { MdBusinessCenter, MdArticle } from 'react-icons/md';
import { FiPlus, FiMinus } from 'react-icons/fi';

import {
  NavigationMenu,
  NavigationMenuContent,
  NavigationMenuItem,
  NavigationMenuLink,
  NavigationMenuList,
  NavigationMenuTrigger,
  navigationMenuTriggerStyle,
  NavigationMenuViewport,
} from '@/components/ui/navigation-menu';
import {
  Accordion,
  AccordionContent,
  AccordionItem,
  AccordionTrigger,
} from './ui/accordion';
// import {
//   Form,
//   FormControl,
//   FormDescription,
//   FormField,
//   FormItem,
//   FormLabel,
//   FormMessage,
// } from '@/components/ui/form';
// import { Input } from '@/components/ui/input';

// const formSchema = z.object({
//   username: z.string().min(1, {
//     message: 'Please fill out this field',
//   }),
// });

const Navbar = () => {
  const [open, setOpen] = useState(false);
  const [isSearchOpen, setIsSearchOpen] = useState(false);

  const handleSearchToggle = () => {
    setIsSearchOpen((prev) => !prev);
  };
  const pathname = usePathname();
  const links = [
    {
      href: '/',
      label: 'Home',
      icon: <FaHome />,
    },
    {
      href: '/about',
      label: 'About Us',
      icon: <FaBuildingColumns />,
      sublinks: [
        {
          href: '/about',
          label: 'About the Company',
          icon: <FaBuildingColumns />,
        },
        {
          href: '/about/board-and-management',
          label: 'Board and Management',
          icon: <HiUserGroup />,
        },
      ],
    },
    {
      href: '/life',
      label: 'Products',
      icon: <IoShieldCheckmarkSharp />,
      sublinks: [
        {
          href: '/life',
          label: 'Life Insurance',
          subCategories: [
            { href: '/life/term-insurance', label: 'Term Insurance' },
            { href: '/life/whole-life', label: 'Whole Life' },
            { href: '/life/vul-insurance', label: 'VUL Insurance' },
            { href: '/life/critical-illness', label: 'Critical Illness' },
          ],
        },

        {
          href: '/non-life',
          label: 'Non Life Insurance',
          subCategories: [
            {
              href: '/non-life/aviation-insurance',
              label: 'Aviation Insurance',
            },
            {
              href: '/non-life/business-continuity',
              label: 'Business Continuity',
            },
            {
              href: '/non-life/cybersecurity',
              label: 'Cyber Insurance',
            },
            {
              href: '/non-life/engineering-insurance',
              label: 'Engineering Insurance',
            },
            {
              href: '/non-life/fire-home-insurance',
              label: 'Fire/Home Insurance',
            },
            {
              href: '/non-life/liability-insurance',
              label: 'Liability Insurance',
            },
            {
              href: '/non-life/livestock-insurance',
              label: 'Livestock Insurance',
            },
            { href: '/non-life/marine-insurance', label: 'Marine Insurance' },
            {
              href: '/non-life/motor-car-insurance',
              label: 'Motor Car Insurance',
            },
            { href: '/non-life/pet-insurance', label: 'Pet Insurance' },
            {
              href: '/non-life/property-insurance',
              label: 'Property Insurance',
            },
            { href: '/non-life/surety-bonds', label: 'Surety Bonds' },
            {
              href: '/non-life/trade-credit-insurance',
              label: 'Trade Credit Insurance',
            },
            { href: '/non-life/travel-insurance', label: 'Travel Insurance' },
            {
              href: '/non-life/works-of-art',
              label: 'Works of Art',
            },
          ],
        },
        // { href: '/hmo', label: 'HMO', subCategories: [] },
        {
          href: '/business-solutions',
          label: 'Business Solutions',
          subCategories: [
            {
              href: '/business-solutions/consulting-and-advisory',
              label: 'Consulting and Advisory',
            },
            {
              href: '/business-solutions/employee-retirement-plan',
              label: 'Employee Retirement Plan',
            },
            {
              href: '/business-solutions/group-life-insurance',
              label: 'Group Life Insurance',
            },
            {
              href: '/business-solutions/key-person-insurance',
              label: 'Key Person Insurance',
            },
          ],
        },
      ],
    },
    { href: '/claims', label: 'Claims', icon: <PiHandWithdrawFill /> },
    { href: '/careers', label: 'Careers', icon: <MdBusinessCenter /> },
    { href: '/insights', label: 'Insights', icon: <MdArticle /> },
    { href: '/contact-us', label: 'Contact Us', icon: <MdArticle /> },
  ];

  return (
    <nav className="fixed z-50 h-[65px] w-full">
      <div
        className={`${open ? 'shadow-lg' : 'border-b-0'} flex h-full items-center justify-between bg-white px-6 py-4 shadow-[0_2px_4px_rgba(0,-0,_0,_0.3)] lg:border-b-0 lg:px-12 lg:pb-0`}
      >
        <div className="flex w-full items-center justify-between">
          <div className="z-30 lg:px-4 lg:pb-4">
            <Link href="/">
              <Image
                src="/images/logo/ACprimeLogoHD.png"
                width={160}
                height={40}
                alt="Logo"
                className="min-w-[160px]"
              />
            </Link>
          </div>
          <div
            className={` ${open ? 'top-[calc(100%+0px)]' : 'hidden lg:block'} absolute left-0 flex h-screen w-full bg-white duration-500 lg:relative lg:h-auto lg:items-center`}
          >
            <NavigationMenu className="block w-full">
              <NavigationMenuList className="flex h-screen w-full flex-col justify-start gap-0 overflow-scroll pb-64 lg:h-auto lg:w-auto lg:flex-row lg:gap-6 lg:overflow-auto lg:px-0 lg:pb-0">
                <form
                  action=""
                  class="relative mb-2 block w-full px-8 text-[#004588] shadow-[0_2px_4px_rgba(0,-0,_0,_0.3)] lg:hidden"
                >
                  <div className="border-t">
                    <input
                      type="search"
                      placeholder="Eg. Car Insurance, Life Insurance"
                      class={`eclipse peer relative z-10 my-4 h-8 w-full cursor-pointer cursor-text rounded bg-[#004588] pl-8 pr-3 text-sm font-light outline-none`}
                    />
                    <FaMagnifyingGlass className="absolute left-10 top-6 text-sm" />
                  </div>
                </form>
                {links.map((item, index) => {
                  const isActive = pathname === item.href;
                  const isAbout = item.label === 'About Us';
                  const isProducts = item.label === 'Products';

                  return (
                    <NavigationMenuItem
                      key={index}
                      className={`border-b hover:bg-[#dae9ff] lg:border-b-0`}
                    >
                      {isAbout ? (
                        <>
                          {/* About Section */}
                          <NavigationMenuTrigger
                            className={`hidden ${isActive ? 'text-primary' : 'text-[#004588]'} ${
                              isSearchOpen ? 'lg:hidden' : 'lg:block'
                            }`}
                          >
                            About
                          </NavigationMenuTrigger>
                          <NavigationMenuContent className="z-90">
                            <ul className="w-[80vw] list-none gap-3 p-2 lg:max-w-[16rem]">
                              {item.sublinks.map((sublink, subIndex) => (
                                <li
                                  key={subIndex}
                                  className="border-[#004588] first:border-b"
                                >
                                  <NavigationMenuLink asChild>
                                    <Link
                                      href={sublink.href}
                                      className="flex items-center gap-3 p-4 text-sm font-medium text-[#004588]"
                                    >
                                      <span className="text-base">
                                        {sublink.icon}
                                      </span>
                                      {sublink.label}
                                    </Link>
                                  </NavigationMenuLink>
                                </li>
                              ))}
                            </ul>
                          </NavigationMenuContent>
                          <Accordion
                            type="single"
                            collapsible
                            className="w-full lg:hidden"
                          >
                            <AccordionItem value="about" className="border-b-0">
                              <AccordionTrigger
                                className={`p-0 px-3 py-2 text-sm text-[#004588] hover:no-underline data-[state=open]:bg-[#dae9ff] ${isActive ? 'text-primary [&>svg]:text-primary' : 'text-[#004588]'}`}
                              >
                                <div className="flex items-center gap-2">
                                  <span className="text-sm">{item.icon}</span>
                                  About Us
                                </div>
                              </AccordionTrigger>
                              <AccordionContent className="bg-#004588 pb-0">
                                <ul className="flex list-none flex-col gap-0.5 text-sm">
                                  {item.sublinks.map((sublink, subIndex) => (
                                    <Link
                                      href={sublink.href}
                                      key={subIndex}
                                      className={`border-#004588 py-2 pl-8 text-secondary first:border-b`}
                                    >
                                      {sublink.label}
                                    </Link>
                                  ))}
                                </ul>
                              </AccordionContent>
                            </AccordionItem>
                          </Accordion>
                        </>
                      ) : isProducts ? (
                        <>
                          <NavigationMenuTrigger
                            className={`hidden ${isActive ? 'text-primary' : 'text-[#004588]'} ${isSearchOpen ? 'lg:hidden' : 'lg:block'}`}
                          >
                            Products
                          </NavigationMenuTrigger>
                          <NavigationMenuContent className="z-90">
                            <ul className="grid h-min list-none gap-3 p-6 lg:w-[48rem] lg:grid-cols-[.45fr_1fr] xl:w-[60rem] xl:grid-cols-[.35fr_1fr]">
                              <li>
                                <NavigationMenuLink asChild>
                                  <div className="focus:shadow-md flex h-full w-full select-none flex-col justify-end rounded-md bg-gradient-to-b from-muted/50 to-muted p-6 no-underline outline-none">
                                    <div className="mb-2 text-xl font-bold text-[#004588]">
                                      <Link
                                        href="/products"
                                        className="font-semibold text-[#004588] underline"
                                      >
                                        Products
                                      </Link>
                                    </div>
                                    <p className="mb-2 text-sm leading-tight text-[#004588]">
                                      AC Prime offers excess and surplus lines,
                                      property and casualty insurance. <br />
                                      <span className="mt-2 block font-semibold text-[#004588]">
                                        Yes, we cover that.
                                      </span>
                                    </p>
                                    <p className="text-sm leading-tight text-[#004588]">
                                      Don’t see your product line or class
                                      listed? Contact us, we can more than
                                      likely work with you and create an
                                      insurance policy that fits your needs.
                                      <Link
                                        href="/contact-us"
                                        className="ml-1 font-semibold text-[#004588] underline"
                                      >
                                        Contact Us
                                      </Link>
                                    </p>
                                  </div>
                                </NavigationMenuLink>
                              </li>

                              <li className="grid grid-flow-col p-6 text-sm text-[#004588] lg:grid-rows-[repeat(14,_minmax(0,_1fr));] xl:grid-rows-9">
                                {item.sublinks.map((sublink, subIndex) => (
                                  <React.Fragment key={subIndex}>
                                    <Link
                                      href={sublink.href}
                                      className="rounded px-2 py-1 font-semibold hover:bg-navy-500/30"
                                    >
                                      {sublink.label}
                                    </Link>
                                    {sublink.subCategories &&
                                      sublink.subCategories.map(
                                        (subCategory, categoryIndex) => (
                                          <Link
                                            key={`${subIndex}-${categoryIndex}`}
                                            href={subCategory.href}
                                            className="rounded px-2 py-1 font-normal hover:bg-navy-500/30"
                                          >
                                            {subCategory.label}
                                          </Link>
                                        )
                                      )}
                                  </React.Fragment>
                                ))}
                              </li>
                            </ul>
                          </NavigationMenuContent>
                          <Accordion
                            type="single"
                            collapsible
                            className="w-full lg:hidden"
                          >
                            <AccordionItem
                              value="product"
                              className="border-b-0"
                            >
                              <AccordionTrigger
                                className={`text-#004588 p-0 px-3 py-2 text-sm hover:no-underline data-[state=open]:bg-[#dae9ff] ${isActive ? 'text-primary [&>svg]:text-primary' : 'text-#004588'}`}
                              >
                                <div className="flex items-center gap-2">
                                  <span className="text-base">{item.icon}</span>
                                  Products
                                </div>
                              </AccordionTrigger>
                              <AccordionContent className="bg-navy-300/80 pb-0">
                                <ul className="text-#004588 flex list-none flex-col gap-0.5 text-sm">
                                  {item.sublinks.map((sublink, subIndex) => (
                                    <Accordion
                                      type="single"
                                      collapsible
                                      className="w-full"
                                      key={subIndex}
                                    >
                                      <AccordionItem
                                        value={subIndex + 1}
                                        className="border-navy-100/20"
                                      >
                                        {subIndex === 2 ? (
                                          <Link
                                            href={sublink.href}
                                            key={subIndex}
                                            className="block w-full py-2 pl-9 text-secondary"
                                          >
                                            {sublink.label}
                                          </Link>
                                        ) : (
                                          <AccordionTrigger className="px-3 py-0 [&>svg:last-child]:hidden [&>svg:nth-child(3)]:hidden [&>svg]:text-secondary [&[data-state=open]>svg:nth-child(2)]:hidden [&[data-state=open]>svg:nth-child(3)]:block">
                                            <Link
                                              href={sublink.href}
                                              key={subIndex}
                                              className="w-[50%] min-w-fit py-2 pl-6 text-start text-secondary"
                                            >
                                              {sublink.label}
                                            </Link>
                                            <FiPlus />
                                            <FiMinus />
                                          </AccordionTrigger>
                                        )}
                                        <AccordionContent className="flex flex-col bg-navy-200/70 pb-0 text-secondary">
                                          {sublink.subCategories &&
                                            sublink.subCategories.map(
                                              (subCategory, categoryIndex) => (
                                                <Link
                                                  key={`${subIndex}-${categoryIndex}`}
                                                  href={subCategory.href}
                                                  className="rounded border-t border-navy-100/20 py-2 pl-9 font-normal"
                                                >
                                                  {subCategory.label}
                                                </Link>
                                              )
                                            )}
                                        </AccordionContent>
                                      </AccordionItem>
                                    </Accordion>
                                  ))}
                                </ul>
                              </AccordionContent>
                            </AccordionItem>
                          </Accordion>
                        </>
                      ) : (
                        <Link href={item.href} passHref legacyBehavior>
                          <NavigationMenuLink
                            className={`${navigationMenuTriggerStyle()} group/link ${
                              isActive ? 'text-primary' : 'text- #004588'
                            } ${isSearchOpen ? 'lg:hidden' : ''}`}
                          >
                            <div className="flex items-center gap-2 lg:block">
                              <span className="text-lg lg:hidden">
                                {item.icon}
                              </span>
                              <span>{item.label}</span>
                            </div>
                            <span
                              className={`-mb-1 mt-1 block h-0.5 max-w-0 bg-orange-400 transition-all duration-300 group-hover/link:max-w-[60px] lg:group-hover/link:max-w-full`}
                            ></span>
                          </NavigationMenuLink>
                        </Link>
                      )}
                    </NavigationMenuItem>
                  );
                })}
              </NavigationMenuList>
            </NavigationMenu>
          </div>
        </div>
        <div className="text-#004588 flex items-center justify-end space-x-4">
          <div className="text-#004588 flex gap-2">
            <form
              action=""
              className="relative mx-auto hidden w-max overflow-hidden lg:block"
            >
              <motion.input
                type="search"
                placeholder="Eg. Car Insurance, Life Insurance"
                initial={{ opacity: 0, x: -20, width: 0 }}
                animate={
                  isSearchOpen
                    ? { opacity: 1, x: 0, width: 400 }
                    : { opacity: 0, x: -20, width: 0 }
                }
                transition={{ duration: 0.3, ease: 'easeInOut' }}
                className="eclipse peer relative z-10 h-10 cursor-pointer rounded border bg-transparent pl-8 text-sm font-light outline-none focus:cursor-text focus:border-navy-300/20"
                onFocus={handleSearchToggle}
                onBlur={handleSearchToggle}
              />
              <FaMagnifyingGlass className="absolute left-2 top-3 transition-opacity duration-300 ease-in-out" />
            </form>

            {/* -------Get a quote button and Login direfor AJ */}
            <Link href="/contact-us" passHref legacyBehavior>
              <Button
                variant="primary"
                className="bg-primary/90 hover:bg-primary lg:mb-3"
              >
                <span>Get a Quote</span>
              </Button>
            </Link>
            {/* <Link href="/contact-us" passHref legacyBehavior>
              <Button
                variant="primary"
                className="bg-primary/90 hover:bg-primary lg:mb-3"
              >
                <span>Login </span>
              </Button>
            </Link> */}
          </div>

          {open ? (
            <FaXmark
              className="z-30 block h-5 w-6 cursor-pointer transition lg:hidden"
              onClick={() => setOpen(!open)}
            />
          ) : (
            <FaBars
              className="z-30 block h-5 w-6 cursor-pointer transition lg:hidden"
              onClick={() => setOpen(!open)}
            />
          )}
        </div>
      </div>
    </nav>
  );
};

export default Navbar;
