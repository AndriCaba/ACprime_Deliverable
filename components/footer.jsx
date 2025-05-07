'use client';
import Image from 'next/image';
import { Button } from '@/components/ui/button';
import { Input } from '@/components/ui/input';
import Link from 'next/link';
import {
  FaLinkedinIn,
  FaFacebookF,
  FaYoutube,
  FaArrowRight,
} from 'react-icons/fa';
import {
  Tooltip,
  TooltipContent,
  TooltipProvider,
  TooltipTrigger,
} from '@/components/ui/tooltip';
import {
  Dialog,
  DialogTrigger,
  DialogClose,
  DialogContent,
  DialogFooter,
} from '@/components/ui/dialog';
import {
  Drawer,
  DrawerClose,
  DrawerContent,
  DrawerFooter,
  DrawerTrigger,
} from '@/components/ui/drawer';
import useMediaQuery from '@/app/hooks/use-media-query';
import PrivacyPolicy from './privacy-policy';
import TermsAndConditions from './terms-condition';

const Footer = () => {
  const isDesktop = useMediaQuery('(min-width: 768px)');
  const footerData = [
    {
      heading: 'Product',
      footerLink: [
        { link: '/life', text: 'Life Insurance' },
        { link: '/non-life', text: 'Non-life Insurance' },
        // { link: '/hmo', text: 'HMO' },
        { link: '/business-solution', text: 'Business Solutions' },
      ],
    },
    {
      heading: 'Information',
      footerLink: [
        { link: '/faqs', text: 'FAQ' },
        { link: '/insights', text: 'Articles/Insights' },
        { link: '/support', text: 'Support' },
      ],
    },

    {
      heading: 'Company',
      footerLink: [
        { link: '/about', text: 'About us' },
        { link: '/careers', text: 'Careers' },
        { link: '/contact-us', text: 'Contact us' },
      ],
    },
  ];
  return (
    <div>
      {/* links footer */}
      <div className="bg-[#004588]">
        <div className="container pb-12 pt-20 lg:px-20">
          <div className="flex flex-wrap justify-between gap-4">
            {footerData.map((item, index) => (
              <div key={index} className="pb-2 pt-8 text-secondary">
                <span>
                  <h4 className="mb-2 text-xs font-semibold lg:text-sm">
                    {item.heading}
                  </h4>
                  <ul className="list-outside">
                    {item.footerLink.map((footerItem, footerIndex) => (
                      <Link key={footerIndex} href={footerItem.link}>
                        <li className="hover:text- #004588-400 mb-2 list-none text-xs font-light opacity-70 lg:text-sm">
                          {footerItem.text}
                        </li>
                      </Link>
                    ))}
                  </ul>
                </span>
              </div>
            ))}
            <div className="order-first w-full rounded-md bg-[#4895ef21] p-8 text-secondary sm:order-last md:max-w-[350px]">
              <h4 className="mb-2 text-xs font-semibold lg:text-sm">
                Subscribe
              </h4>
              <div className="flex">
                <Input
                  className="placeholder:text-[placeholder:text-[#d9d9d9] mb-4 h-[32px] rounded-l rounded-r-none text-xs text-navy-100"
                  placeholder="Email address"
                />
                <Button className="h-[32px] rounded-l-none rounded-r bg-navy-400">
                  <FaArrowRight />
                </Button>
              </div>
              <p className="font-white text-xs opacity-50">
                Hello, we are AC Prime. Our goal is to translate the positive
                effects from revolutionizing how companies engage with their
                clients & their team.
              </p>
            </div>
          </div>
          <div className="mt-4 text-secondary">
            <p className="text-center text-xs font-light lg:text-sm">
              AC Prime Insurance is Registered with:
            </p>
            <div className="mt-4 flex w-full items-center justify-center gap-2 lg:mt-6 lg:gap-6">
              <div>
                <Image
                  src="/images/logo/sec.png"
                  alt="sec"
                  width={65}
                  height={50}
                  className="sm:w-[100px]"
                />
              </div>
              <div className="mr-2.5">
                <Image
                  src="/images/logo/insurance_commission.png"
                  alt="ip"
                  width={40}
                  height={50}
                  className="sm:w-[50px]"
                />
              </div>
              <div>
                <Image
                  src="/images/logo/npc.png"
                  alt="npc"
                  width={65}
                  height={50}
                  className="sm:w-[85px]"
                />
              </div>
            </div>
          </div>
          <div class="my-4 border-t border-[#ffffff57]"></div>
          <div className="xm:gap-4 flex flex-wrap items-center justify-between gap-8">
            <div className="max-w-[140px] sm:max-w-[180px]">
              <Image
                src="/images/logo/ac_prime-white.png"
                width={180}
                height={50}
                alt="AC Prime"
                className="w-auto"
              />
            </div>
            <div className="order-last flex w-full justify-center gap-3 text-[10px] text-secondary sm:w-auto lg:text-xs">
              {isDesktop ? (
                <>
                  <Dialog>
                    <DialogTrigger asChild>
                      <p className="cursor-pointer">Terms & Conditions</p>
                    </DialogTrigger>
                    <DialogContent className="max-h-[90%] max-w-5xl overflow-y-scroll rounded bg-[#E0EEFD] text-navy-100 md:px-10 lg:w-max">
                      <TermsAndConditions />
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

                  <Dialog>
                    <DialogTrigger asChild>
                      <p className="cursor-pointer">Privacy Policy</p>
                    </DialogTrigger>
                    <DialogContent className="max-h-[90%] max-w-5xl overflow-y-scroll rounded bg-[#E0EEFD] text-navy-100 md:px-10 lg:w-max">
                      <PrivacyPolicy />
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
                </>
              ) : (
                <>
                  <Drawer>
                    <DrawerTrigger asChild>
                      <p className="cursor-pointer">Terms & Conditions</p>
                    </DrawerTrigger>
                    <DrawerContent
                      className="max-h-[80%] bg-[#E0EEFD] px-4 text-navy-100"
                      dynamicClassName="h-36 bg-navy-100/20"
                    >
                      <div className="mt-4 overflow-y-scroll">
                        <TermsAndConditions />
                      </div>
                      <DrawerFooter>
                        <DrawerClose asChild>
                          <Button variant="primary">Close</Button>
                        </DrawerClose>
                      </DrawerFooter>
                    </DrawerContent>
                  </Drawer>

                  <Drawer>
                    <DrawerTrigger asChild>
                      <p className="cursor-pointer">Privacy Policy</p>
                    </DrawerTrigger>
                    <DrawerContent
                      className="max-h-[80%] bg-[#E0EEFD] px-4 text-navy-100"
                      dynamicClassName="h-8 bg-navy-100/20"
                    >
                      <div className="mt-4 overflow-y-auto">
                        <PrivacyPolicy />
                      </div>
                      <DrawerFooter>
                        <DrawerClose asChild>
                          <Button variant="primary">Close</Button>
                        </DrawerClose>
                      </DrawerFooter>
                    </DrawerContent>
                  </Drawer>
                </>
              )}
            </div>
            <TooltipProvider>
              <div className="flex items-center gap-2 text-secondary sm:order-last">
                <p className="mr-2 hidden text-[10px] font-semibold md:block">
                  FOLLOW US
                </p>
                <Tooltip className="flex items-center">
                  <TooltipTrigger className="rounded-full border border-[#ffffff57] p-2">
                    <Link
                      href="https://www.linkedin.com/company/affinity-capital-corp/"
                      target="blank"
                    >
                      <FaLinkedinIn />
                    </Link>
                  </TooltipTrigger>
                  <TooltipContent>
                    <p className="text-sm font-medium text-navy-200">
                      Connect with us
                    </p>
                  </TooltipContent>
                </Tooltip>
                <Tooltip className="flex items-center">
                  <TooltipTrigger className="rounded-full border border-[#ffffff57] p-2">
                    <Link
                      href="https://www.facebook.com/affinitycapitalcorp"
                      target="blank"
                    >
                      <FaFacebookF />
                    </Link>
                  </TooltipTrigger>
                  <TooltipContent>
                    <p className="text-sm font-medium text-navy-200">Like us</p>
                  </TooltipContent>
                </Tooltip>
                <Tooltip className="flex items-center">
                  <TooltipTrigger className="rounded-full border border-[#ffffff57] p-2">
                    <Link
                      href="https://www.youtube.com/@affinitycapital"
                      target="blank"
                    >
                      <FaYoutube />
                    </Link>
                  </TooltipTrigger>
                  <TooltipContent>
                    <p className="text-sm font-medium text-navy-200">
                      Subscribe
                    </p>
                  </TooltipContent>
                </Tooltip>
              </div>
            </TooltipProvider>
          </div>
        </div>
      </div>
    </div>
  );
};

export default Footer;
