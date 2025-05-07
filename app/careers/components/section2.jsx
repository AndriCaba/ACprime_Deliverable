/* eslint-disable react-hooks/exhaustive-deps */
'use client';
import React from 'react';
import { Dialog, DialogContent, DialogTrigger } from '@/components/ui/dialog';
import { Button } from '@/components/ui/button';

import Image from 'next/image';
import { Checkbox } from '@/components/ui/checkbox';
import { Label } from '@/components/ui/label';
import {
  Form,
  FormControl,
  FormField,
  FormItem,
  FormLabel,
  FormMessage,
} from '@/components/ui/form';
import { zodResolver } from '@hookform/resolvers/zod';
import { useForm } from 'react-hook-form';
import { z } from 'zod';
import { Textarea } from '@/components/ui/textarea';
import { Input } from '@/components/ui/input';
import {
  Select,
  SelectContent,
  SelectItem,
  SelectTrigger,
  SelectValue,
} from '@/components/ui/select';
import ReCAPTCHA from 'react-google-recaptcha';
const formSchema = z.object({
  firstName: z.string().min(1, {
    message: 'First Name is required',
  }),
  lastName: z.string().min(1, {
    message: 'Last Name is required',
  }),
  email: z.string().email({
    message: 'Invalid email address.',
  }),
  contactNo: z.string().min(11, {
    message: 'Contact Number must be at least 11 digits.',
  }),
  product: z.string().min(1, {
    message: 'Please select a product',
  }),
  message: z.string().optional(),
});
const Section2 = () => {
  const form = useForm({
    resolver: zodResolver(formSchema),
    defaultValues: {
      lastName: '',
      firstName: '',
      email: '',
      product: '',
      contactNo: '',
      message: '',
    },
  });
  const sendEmail = async (values) => {
    setLoading(true);
    setSuccess(false);
    console.log(values);
    try {
      const response = await axios({
        url: 'https://api.nvestmo.com/graphql',
        method: 'post',
        data: {
          query: `
            mutation {
              createEmail(
                input: {
                  data: {
                    message: "${values.message}",
                    email: "${values.email}",
                    contactNo: "0${values.contactNo}",
                    fullName: "${values.fullName}",
                    type: EMAIL
                  }
                }
              ) {
                email {
                  id
                }
              }
            }
          `,
        },
      });

      if (unMount.current) return;

      setLoading(false);
      window.scrollTo(0, 0);

      if (response.data.errors) {
        console.log('Error Sending Email');
      } else {
        setSuccess(true);
        form.reset();
      }
    } catch (error) {
      setLoading(false);
      console.log('Error Sending Email:', error);
    }
  };
  return (
    <div className="bg-navy-500/20">
      <div className="container px-8 py-12 text-center lg:text-start">
        <div className="flex flex-col items-center gap-4 lg:flex-row">
          <div className="flex w-full justify-center lg:w-3/5 lg:justify-start">
            <Image
              src="/images/careers/section2-1.png"
              alt="placeholder"
              width={400}
              height={400}
              className="w-full max-w-lg rounded-md lg:max-w-xl"
            />
          </div>
          <div className="w-full text-navy-100 lg:w-2/5">
            <h1 className="mb-6 text-2xl font-semibold text-navy-100 lg:text-3xl">
              Why work with <span className="text-primary">Us?</span>
            </h1>
            <p className="mb-4 text-sm lg:text-base">
              We believe that our people are our greatest asset. We offer a
              dynamic and inclusive work environment where you can grow your
              career, make meaningful contributions, and be part of a team that
              values innovation, integrity, and excellence.
            </p>
          </div>
        </div>
        <div className="my-12 max-w-2xl border-4 border-primary lg:max-w-3xl" />
        <div className="mb-6 flex flex-col-reverse items-center gap-6 lg:flex-row">
          <div className="w-full text-navy-100 lg:w-3/5">
            <h1 className="mb-6 text-2xl font-semibold text-navy-100 lg:text-3xl">
              What we <span className="text-primary">offer</span>
            </h1>
            <h2 className="mb-2 w-full text-base font-semibold lg:text-lg">
              Professional Growth
            </h2>
            <p className="mb-4 text-sm lg:text-base">
              We believe that our people are our greatest asset. We offer a
              dynamic and inclusive work environment where you can grow your
              career, make meaningful contributions, and be part of a team that
              values innovation, integrity, and excellence.
            </p>
            <h2 className="mb-2 w-full text-base font-semibold lg:text-lg">
              Competitive Compensation
            </h2>
            <p className="mb-4 text-sm lg:text-base">
              We offer attractive salaries, performance-based bonuses, and
              comprehensive benefits packages.
            </p>
            <h2 className="mb-2 w-full text-base font-semibold lg:text-lg">
              Work-Life Balance
            </h2>
            <p className="mb-4 text-sm lg:text-base">
              We understand the importance of work-life balance. Our flexible
              work arrangements and supportive environment ensure that you can
              thrive both personally and professionally.
            </p>
            <h2 className="mb-2 w-full text-base font-semibold lg:text-lg">
              Positive Culture
            </h2>
            <p className="mb-4 text-sm lg:text-base">
              Our company culture is built on collaboration, respect, and a
              shared commitment to our clients. We celebrate diversity and
              foster a welcoming and inclusive atmosphere.
            </p>
          </div>
          <div className="w-full lg:w-2/5">
            <Image
              src="/images/careers/section2-2.png"
              alt="placeholder"
              width={400}
              height={400}
              className="mx-auto w-full max-w-sm rounded-md lg:max-w-lg"
            />
          </div>
        </div>
        <h1 className="mb-12 text-start text-2xl font-semibold text-navy-100 lg:text-3xl">
          Join us and make a <span className="text-primary">difference!</span>
        </h1>
        <div className="flex flex-col items-center gap-8 lg:flex-row">
          <div className="w-full lg:w-2/5">
            <Image
              src="/images/careers/section2-3.png"
              alt="Calling"
              width={400}
              height={300}
              className="mx-auto w-full max-w-sm rounded-md lg:max-w-lg"
            />
          </div>
          <div className="mx-auto w-full rounded-md text-navy-100 sm:border sm:border-gray-300 sm:p-6 lg:w-3/6 lg:p-8">
            <h2 className="mb-4 text-center text-xl font-semibold lg:text-2xl">
              Apply Now!
            </h2>
            <p className="mx-auto mb-6 max-w-sm text-center text-sm font-light">
              For any inquiries, please contact our HR department. We look
              forward to welcoming you to our team!
            </p>
            <Form {...form}>
              <form
                onSubmit={form.handleSubmit(sendEmail)}
                className="text-start"
              >
                <div className="gap-1.2 grid grid-cols-1 text-navy-100 sm:grid-cols-2 sm:gap-2.5">
                  <FormField
                    control={form.control}
                    name="lastName"
                    render={({ field }) => (
                      <FormItem>
                        <FormLabel className="text-navy-100">
                          Last Name *
                        </FormLabel>
                        <FormControl>
                          <Input
                            className="h-[32px] rounded"
                            placeholder="Dela Cruz"
                            {...field}
                          />
                        </FormControl>
                        <FormMessage />
                      </FormItem>
                    )}
                  />
                  <FormField
                    control={form.control}
                    name="firstName"
                    render={({ field }) => (
                      <FormItem>
                        <FormLabel className="text-navy-100">
                          First Name *
                        </FormLabel>
                        <FormControl>
                          <Input
                            className="h-[32px] rounded"
                            placeholder="Juan"
                            {...field}
                          />
                        </FormControl>
                        <FormMessage />
                      </FormItem>
                    )}
                  />
                  <FormField
                    control={form.control}
                    name="email"
                    render={({ field }) => (
                      <FormItem>
                        <FormLabel className="text-navy-100">
                          Email Address *
                        </FormLabel>
                        <FormControl>
                          <Input
                            className="h-[32px] rounded"
                            placeholder="example@example.com"
                            {...field}
                          />
                        </FormControl>
                        <FormMessage />
                      </FormItem>
                    )}
                  />
                  <FormField
                    control={form.control}
                    name="contactNo"
                    render={({ field }) => (
                      <FormItem>
                        <FormLabel className="text-navy-100">
                          Mobile Number *
                        </FormLabel>
                        <FormControl>
                          <Input
                            className="h-[32px] rounded"
                            placeholder="09123456789"
                            {...field}
                          />
                        </FormControl>
                        <FormMessage />
                      </FormItem>
                    )}
                  />
                </div>
                <FormField
                  control={form.control}
                  name="message"
                  render={({ field }) => (
                    <FormItem>
                      <FormLabel className="text-navy-100">Message</FormLabel>
                      <FormControl>
                        <Textarea
                          className="h-[60px] resize-none rounded"
                          placeholder="Write you message (optional)"
                          {...field}
                        />
                      </FormControl>
                      <FormMessage />
                    </FormItem>
                  )}
                />

                <div className="flex items-center gap-2 pb-4 pt-2">
                  <Checkbox id="terms" className="" />
                  <Label
                    htmlFor="terms"
                    className="text-xs font-normal text-navy-100"
                  >
                    By submitting my personal data, I consent to AC Prime
                    Insurance Brokers Inc. processing, and storing my
                    information in accordance with our Privacy Pollicy. Also
                    consent to receiving information from AC Prime.
                  </Label>
                </div>
                <div className="flex w-full flex-col justify-center">
                  <ReCAPTCHA
                    sitekey="6LdrIUUqAAAAAAmHYwAtY5Jp8n3JxxAdsZYZVHfT"
                    onChange={(val) => setCapVal(val)}
                    className="mx-auto mb-2"
                  />
                  <Button
                    variant="primary"
                    type="submit"
                    className="mx-auto h-[32px] rounded-[2px] px-[40px]"
                  >
                    SUBMIT
                  </Button>
                </div>
              </form>
            </Form>
          </div>
        </div>
      </div>
    </div>
  );
};
export default Section2;
