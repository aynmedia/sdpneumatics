/** @format */
import React from 'react';
import { zodResolver } from '@hookform/resolvers/zod';
import { useForm } from 'react-hook-form';
import * as z from 'zod';
import {
  Form,
  FormControl,
  FormField,
  FormItem,
  FormLabel,
  FormMessage,
} from '@/components/ui/form';
import { Input } from '@/components/ui/input';
import { Button } from '@/components/ui/button';
import { Textarea } from '@/components/ui/textarea';

// Define validation schema with zod
const formSchema = z.object({
  name: z.string().min(2, 'Name must be at least 2 characters long'),
  email: z.string().email('Invalid email address'),
  phone: z.string().min(10, 'Phone number must be at least 10 characters long'),
  message: z.string().min(2, 'Message must be at least 2 characters long'),
});

const ContactForm = () => {
  const form = useForm({
    resolver: zodResolver(formSchema),
  });

  const onSubmit = async (data) => {
    try {
      console.log(data);
      // You can add your form submission logic here
    } catch (error) {
      console.error('Error:', error);
    }
  };

  return (
    <div className='text-left'>
      <Form {...form}>
        <form
          onSubmit={form.handleSubmit(onSubmit)}
          className='flex flex-col gap-4'>
          <FormField
            control={form.control}
            name='name'
            render={({ field }) => (
              <FormItem>
                <FormLabel>Enter your name</FormLabel>
                <FormControl>
                  <Input {...field} type='text' placeholder='John Doe' />
                </FormControl>
                <FormMessage />
              </FormItem>
            )}
          />
          <FormField
            control={form.control}
            name='email'
            render={({ field }) => (
              <FormItem>
                <FormLabel>Enter your email address</FormLabel>
                <FormControl>
                  <Input {...field} type='text' placeholder='xxxx@xxxx.com' />
                </FormControl>
                <FormMessage />
              </FormItem>
            )}
          />
          <FormField
            control={form.control}
            name='phone'
            render={({ field }) => (
              <FormItem>
                <FormLabel>Enter your phone number</FormLabel>
                <FormControl>
                  <Input {...field} type='text' placeholder='+91xxxxxxxxxx' />
                </FormControl>
                <FormMessage />
              </FormItem>
            )}
          />

          <FormField
            control={form.control}
            name='message'
            render={({ field }) => (
              <FormItem>
                <FormLabel>Enter your message</FormLabel>
                <FormControl>
                  <Textarea
                    {...field}
                    type='message'
                    placeholder='Enter your message'
                  />
                </FormControl>
                <FormMessage />
              </FormItem>
            )}
          />
          <Button
            variant='outline'
            type='submit'
            size='lg'
            className='bg-green hover:bg-green text-white hover:text-white text-xl py-6 max-w-2xl'>
            Submit
          </Button>
        </form>
      </Form>
    </div>
  );
};

export default ContactForm;
