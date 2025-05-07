/* eslint-disable react-hooks/exhaustive-deps */
'use client';
import React from 'react';
import Image from 'next/image';
import { Button } from '@/components/ui/button';
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
const Section5 = () => {
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
    <div className="container pb-12">
      <h1 className="mb-12 text-start text-2xl font-semibold text-primary lg:text-3xl">
        Want to know more about us?
      </h1>
      <div className="flex flex-col gap-8 lg:flex-row">
        <div className="w-full py-8 text-navy-100 lg:w-2/5">
          <p className="mb-6">
            We’re excited to help you find the perfect insurance coverage to
            meet your needs. Whether you’re looking for life, property, travel,
            accident, motor car or specialized insurance, we’re here to guide
            you every step of the way.
          </p>
          <p className="mb-6">
            You may reach us by sending us an{' '}
            <span className="text-primary">email</span>, by filling out the form
            on the right or by calling us at :{' '}
            <span className="whitespace-nowrap text-primary">
              +63 0917 710 7391
            </span>
          </p>
          <p className="mb-6">
            We can’t wait to assist you! Let’s get started!
          </p>
        </div>
        <div className="mx-auto w-full rounded-md text-navy-100 sm:border sm:border-gray-300 sm:p-6 lg:w-3/6 lg:p-8">
          <h2 className="text-center text-lg font-medium lg:text-xl">
            AC Prime Insurance Brokers
          </h2>
          <p className="mx-auto mb-6 max-w-sm text-center text-sm font-light">
            You can reach us by submitting this form below:
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
                  Insurance Brokers Inc. processing, and storing my information
                  in accordance with our Privacy Pollicy. Also consent to
                  receiving information from AC Prime.
                </Label>
              </div>
              <div className="flex w-full justify-center">
                <Button
                  variant="primary"
                  type="submit"
                  className="h-[32px] rounded-[2px] px-[40px]"
                >
                  SUBMIT
                </Button>
              </div>
            </form>
          </Form>
        </div>
      </div>
    </div>
  );
};
export default Section5;
