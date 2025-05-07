import React, { useState } from 'react';

import { cn } from '@/lib/utils';
import { Button } from '@/components/ui/button';
import { Dialog, DialogContent, DialogTrigger } from '@/components/ui/dialog';
import {
  Drawer,
  DrawerClose,
  DrawerContent,
  DrawerFooter,
  DrawerTrigger,
} from '@/components/ui/drawer';
import { Input } from '@/components/ui/input';
import { Label } from '@/components/ui/label';
import { Textarea } from '@/components/ui/textarea';
import useMediaQuery from '@/app/hooks/use-media-query';
import {
  Form,
  FormField,
  FormItem,
  FormLabel,
  FormControl,
  FormMessage,
} from '@/components/ui/form';
import { zodResolver } from '@hookform/resolvers/zod';
import { useForm } from 'react-hook-form';
import { z } from 'zod';
import { Checkbox } from '@/components/ui/checkbox';
import { MdOutlineFileUpload } from 'react-icons/md';

export function GetInTouchDialog() {
  const [open, setOpen] = useState(false);
  const isDesktop = useMediaQuery('(min-width: 768px)');

  if (isDesktop) {
    return (
      <Dialog open={open} onOpenChange={setOpen}>
        <DialogTrigger asChild>
          <Button variant="primary">Get in Touch</Button>
        </DialogTrigger>
        <DialogContent className="rounded bg-[#E0EEFD] sm:max-w-xl">
          {/* <ContactForm /> */}
        </DialogContent>
      </Dialog>
    );
  }

  return (
    <div className="flex justify-center">
      <Drawer open={open} onOpenChange={setOpen}>
        <DrawerTrigger asChild>
          <Button variant="primary">Get in Touch</Button>
        </DrawerTrigger>
        <DrawerContent className="bg-[#E0EEFD]">
          <ContactForm className="px-4" />
          <DrawerFooter className="pt-2">
            <DrawerClose asChild>
              <Button variant="outline" className="h-9">
                Cancel
              </Button>
            </DrawerClose>
          </DrawerFooter>
        </DrawerContent>
      </Drawer>
    </div>
  );
}

function ContactForm({ handleFileChange, className }) {
  const formSchema = z.object({
    firstName: z.string().min(1, {
      message: 'First Name is required',
    }),
    lastName: z.string().min(1, {
      message: 'Last Name is required',
    }),
    companyName: z.string().min(1, {
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
  const form = useForm({
    resolver: zodResolver(formSchema),
    defaultValues: {
      lastName: '',
      firstName: '',
      companyName: '',
      product: '',
      contactNo: '',
      message: '',
    },
  });
  const sendEmail = async (values) => {
    setLoading(true);
    setSuccess(false);

    console.log(`Values are `, values);

    const response = await axios({
      url: 'https://api2.nvestmo.com/api/affinity-web/sendInquiry',
      method: 'POST',
      data: {
        ...values,
      },
    });

    setLoading(false);
    window.scrollTo(0, 0);
    if (response.error === 'invalid') return;

    setSuccess(true);
    form.resetFields();
  };
  return (
    <div className="w-full sm:p-4">
      <p className="mb-6 text-center text-navy-100">
        Please provide the following information and one of our specialists will
        get in touch with you.
      </p>
      <Form {...form}>
        <form
          onSubmit={form.handleSubmit(sendEmail)}
          className={cn('', className)}
        >
          <div className="gap-1.2 grid grid-cols-1 sm:grid-cols-2 sm:gap-2.5">
            <FormField
              control={form.control}
              name="lastName"
              render={({ field }) => (
                <FormItem>
                  <FormLabel>Last Name *</FormLabel>
                  <FormControl>
                    <Input
                      className="h-9 rounded"
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
                  <FormLabel>First Name *</FormLabel>
                  <FormControl>
                    <Input
                      className="h-9 rounded"
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
              name="contactNo"
              render={({ field }) => (
                <FormItem>
                  <FormLabel>Mobile Number *</FormLabel>
                  <FormControl>
                    <Input
                      className="h-9 rounded"
                      placeholder="09123456789"
                      {...field}
                    />
                  </FormControl>
                  <FormMessage />
                </FormItem>
              )}
            />
            <FormField
              control={form.control}
              name="companyName"
              render={({ field }) => (
                <FormItem>
                  <FormLabel>Company Name *</FormLabel>
                  <FormControl>
                    <Input
                      className="h-9 rounded"
                      placeholder="ABC Company"
                      {...field}
                    />
                  </FormControl>
                  <FormMessage />
                </FormItem>
              )}
            />
            <FormField
              control={form.control}
              name="product"
              render={({ field }) => (
                <FormItem>
                  <FormLabel>Industry *</FormLabel>
                  <FormControl>
                    <Input
                      className="h-9 rounded"
                      placeholder="ex. Information Technology"
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
                <FormLabel>Message *</FormLabel>
                <FormControl>
                  <Textarea
                    className="h-[60px] resize-none rounded"
                    placeholder="Write your message (optional)"
                    {...field}
                  />
                </FormControl>
                <FormMessage />
              </FormItem>
            )}
          />
          <FormField
            control={form.control}
            name="upload"
            render={({ field }) => (
              <FormItem>
                <FormLabel>Upload</FormLabel>
                <FormControl className="cursor-pointer">
                  <div className="relative">
                    <label
                      htmlFor="picture"
                      className="flex w-[9.5rem] cursor-pointer items-center rounded border bg-white px-4 py-2.5 text-xs text-navy-100"
                    >
                      <MdOutlineFileUpload className="mr-2 h-4 w-4" />
                      Click to Upload
                    </label>
                    <Input
                      id="picture"
                      type="file"
                      multiple
                      {...field}
                      onChange={(e) => handleFileChange(e)}
                      className="absolute left-0 top-0 h-full w-[9.5rem] opacity-0"
                    />
                  </div>
                </FormControl>
                <FormMessage />
              </FormItem>
            )}
          />
          <div className="flex items-center gap-2 pt-4">
            <Checkbox id="updates" />
            <Label
              htmlFor="updates"
              className="text-xs font-normal text-navy-100"
            >
              I agree to receive regular updates, promotions, and
              recommendations regarding insurance and investments.
            </Label>
          </div>
          <div className="flex items-center gap-2 pb-4 pt-2">
            <Checkbox id="privacy" />
            <Label
              htmlFor="privacy"
              className="text-xs font-normal text-navy-100"
            >
              By submitting my personal data, I consent to AC Prime Insurance
              Brokers Inc. processing, and storing my information in accordance
              with its Privacy Notice.
            </Label>
          </div>
          <div className="flex w-full justify-center">
            <Button
              variant="primary"
              type="submit"
              className="h-9 w-full rounded-[2px] sm:max-w-[10rem]"
            >
              SUBMIT
            </Button>
          </div>
        </form>
      </Form>
    </div>
  );
}
