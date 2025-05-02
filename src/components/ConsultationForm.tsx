
import { useState } from "react";
import { zodResolver } from "@hookform/resolvers/zod";
import { useForm } from "react-hook-form";
import * as z from "zod";
import { User, Mail, Phone, Building, List, Send } from "lucide-react";

import { Button } from "@/components/ui/button";
import {
  Form,
  FormControl,
  FormField,
  FormItem,
  FormLabel,
  FormMessage,
} from "@/components/ui/form";
import { Input } from "@/components/ui/input";
import {
  Select,
  SelectContent,
  SelectItem,
  SelectTrigger,
  SelectValue,
} from "@/components/ui/select";

const formSchema = z.object({
  fullName: z.string().optional(),
  email: z.string().email({ message: "Please enter a valid email address" }),
  phone: z.string().min(7, { message: "Phone number is required" }),
  companyName: z.string().min(1, { message: "Company name is required" }),
  businessType: z.string().min(1, { message: "Please select a business type" }),
});

type ConsultationFormProps = {
  onSubmitSuccess: () => void;
};

const ConsultationForm = ({ onSubmitSuccess }: ConsultationFormProps) => {
  const form = useForm<z.infer<typeof formSchema>>({
    resolver: zodResolver(formSchema),
    defaultValues: {
      fullName: "",
      email: "",
      phone: "",
      companyName: "",
      businessType: "",
    },
  });

  const onSubmit = (values: z.infer<typeof formSchema>) => {
    console.log("Form submitted:", values);
    // Here you would typically submit the data to your backend
    // For now, we'll just trigger the success callback
    setTimeout(() => {
      onSubmitSuccess();
    }, 500);
  };

  return (
    <Form {...form}>
      <form onSubmit={form.handleSubmit(onSubmit)} className="space-y-4 py-2">
        <FormField
          control={form.control}
          name="fullName"
          render={({ field }) => (
            <FormItem className="grid grid-cols-12 items-center gap-4">
              <div className="col-span-1">
                <User className="h-4 w-4 text-gray-500" />
              </div>
              <div className="col-span-11">
                <FormLabel>Full Name (Optional)</FormLabel>
                <FormControl>
                  <Input placeholder="Your name" {...field} />
                </FormControl>
                <FormMessage />
              </div>
            </FormItem>
          )}
        />
        <FormField
          control={form.control}
          name="email"
          render={({ field }) => (
            <FormItem className="grid grid-cols-12 items-center gap-4">
              <div className="col-span-1">
                <Mail className="h-4 w-4 text-gray-500" />
              </div>
              <div className="col-span-11">
                <FormLabel>Email Address *</FormLabel>
                <FormControl>
                  <Input placeholder="your.email@example.com" {...field} />
                </FormControl>
                <FormMessage />
              </div>
            </FormItem>
          )}
        />
        <FormField
          control={form.control}
          name="phone"
          render={({ field }) => (
            <FormItem className="grid grid-cols-12 items-center gap-4">
              <div className="col-span-1">
                <Phone className="h-4 w-4 text-gray-500" />
              </div>
              <div className="col-span-11">
                <FormLabel>Phone Number *</FormLabel>
                <FormControl>
                  <Input placeholder="(123) 456-7890" {...field} />
                </FormControl>
                <FormMessage />
              </div>
            </FormItem>
          )}
        />
        <FormField
          control={form.control}
          name="companyName"
          render={({ field }) => (
            <FormItem className="grid grid-cols-12 items-center gap-4">
              <div className="col-span-1">
                <Building className="h-4 w-4 text-gray-500" />
              </div>
              <div className="col-span-11">
                <FormLabel>Company Name *</FormLabel>
                <FormControl>
                  <Input placeholder="Your company" {...field} />
                </FormControl>
                <FormMessage />
              </div>
            </FormItem>
          )}
        />
        <FormField
          control={form.control}
          name="businessType"
          render={({ field }) => (
            <FormItem className="grid grid-cols-12 items-center gap-4">
              <div className="col-span-1">
                <List className="h-4 w-4 text-gray-500" />
              </div>
              <div className="col-span-11">
                <FormLabel>Type of Business *</FormLabel>
                <Select onValueChange={field.onChange} defaultValue={field.value}>
                  <FormControl>
                    <SelectTrigger className="w-full">
                      <SelectValue placeholder="Select business type" />
                    </SelectTrigger>
                  </FormControl>
                  <SelectContent>
                    <SelectItem value="retail">Retail</SelectItem>
                    <SelectItem value="ecommerce">E-commerce</SelectItem>
                    <SelectItem value="manufacturing">Manufacturing</SelectItem>
                    <SelectItem value="service">Service Industry</SelectItem>
                    <SelectItem value="healthcare">Healthcare</SelectItem>
                    <SelectItem value="technology">Technology</SelectItem>
                    <SelectItem value="hospitality">Hospitality</SelectItem>
                    <SelectItem value="construction">Construction</SelectItem>
                    <SelectItem value="education">Education</SelectItem>
                    <SelectItem value="other">Other</SelectItem>
                  </SelectContent>
                </Select>
                <FormMessage />
              </div>
            </FormItem>
          )}
        />
        <div className="pt-4 flex justify-end">
          <Button 
            type="submit"
            className="bg-nonode-blue hover:bg-nonode-blue/90 text-white flex items-center space-x-2"
          >
            <span>Submit</span>
            <Send size={16} />
          </Button>
        </div>
      </form>
    </Form>
  );
};

export default ConsultationForm;
