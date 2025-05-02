import Navbar from "@/components/Navbar";
import ServiceCard from "@/components/ServiceCard";
import TestimonialCard from "@/components/TestimonialCard";
import CTASection from "@/components/CTASection";
import Footer from "@/components/Footer";
import { Button } from "@/components/ui/button";
import { Badge } from "@/components/ui/badge";
import { ChartLine, User, Check, Briefcase } from "lucide-react";
import { useState } from "react";
import { Dialog, DialogContent, DialogHeader, DialogTitle, DialogDescription } from "@/components/ui/dialog";
import ConsultationForm from "@/components/ConsultationForm";
import { toast } from "@/hooks/use-toast";

const Index = () => {
  // Add state for the consultation form modal
  const [isFormOpen, setIsFormOpen] = useState(false);
  const [isSubmitted, setIsSubmitted] = useState(false);
  
  // Handler to open the form
  const handleOpenForm = () => {
    setIsFormOpen(true);
    setIsSubmitted(false);
  };
  
  // Services data
  const services = [{
    title: "Bookkeeping",
    description: "Comprehensive bookkeeping solutions to keep your finances organized and accurate.",
    icon: "book" as const
  }, {
    title: "Payroll",
    description: "Efficient payroll management ensuring your team gets paid accurately and on time.",
    icon: "book" as const
  }, {
    title: "Business Plans",
    description: "Strategic business planning to set clear financial goals and achievable milestones.",
    icon: "book" as const
  }, {
    title: "Tax Filing",
    description: "Expert tax preparation and filing to ensure compliance and minimize liabilities.",
    icon: "file-text" as const
  }, {
    title: "Cashflow Management",
    description: "Optimize your business cash flow with expert forecasting and management strategies.",
    icon: "chart-line" as const
  }];

  // Testimonials data
  const testimonials = [{
    quote: "NoNode completely transformed our financial operations. Their expert insights helped us reduce tax liabilities by 25% while improving our cash flow.",
    name: "Sarah Johnson",
    title: "CEO, TechStart Inc."
  }, {
    quote: "As a small business owner, I was overwhelmed by financial management. NoNode provided tailored solutions that simplified everything.",
    name: "Michael Rodriguez",
    title: "Owner, Rodriguez Retail"
  }, {
    quote: "The team at NoNode delivers reliable, accurate service consistently. They're truly partners in our business growth.",
    name: "Jessica Lee",
    title: "CFO, Innovate Solutions"
  }];
  return <div className="min-h-screen flex flex-col">
      <Navbar handleOpenForm={handleOpenForm} />
      
      {/* Hero Section */}
      <section className="bg-gradient-to-r from-nonode-blue to-nonode-dark-blue text-white section-padding">
        <div className="container-width flex flex-col lg:flex-row items-center">
          <div className="lg:w-1/2 mb-10 lg:mb-0 pr-0 lg:pr-12">
            <Badge className="bg-white text-nonode-blue hover:bg-gray-100 mb-4">
              Limited Time Offer: 30% OFF All Services
            </Badge>
            <h1 className="text-4xl md:text-5xl lg:text-6xl font-bold mb-6">
              Expert Financial Services for Growing Businesses
            </h1>
            <p className="text-lg md:text-xl mb-8 text-gray-200">
              We help businesses minimize tax liabilities and maximize profit through strategic financial management.
            </p>
            <div className="flex flex-col sm:flex-row gap-4">
              <Button 
                className="bg-white text-nonode-blue hover:bg-gray-100 text-lg px-8 py-6 h-auto"
                onClick={handleOpenForm}
              >
                Book a Consultation
              </Button>
              <Button variant="outline" className="border-white text-lg px-8 py-6 h-auto bg-gray-900 hover:bg-gray-800 text-zinc-50">
                Learn More
              </Button>
            </div>
          </div>
          <div className="lg:w-1/2 flex justify-center lg:justify-end">
            <img src="https://images.unsplash.com/photo-1554224155-8d04cb21cd6c?ixlib=rb-4.0.3&ixid=MnwxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHx8&auto=format&fit=crop&w=700&q=80" alt="Financial Professional" className="rounded-lg shadow-2xl max-w-full h-auto" />
          </div>
        </div>
      </section>
      
      {/* Services Section */}
      <section id="services" className="bg-gray-50 section-padding">
        <div className="container-width">
          <div className="text-center mb-12">
            <h2 className="text-3xl md:text-4xl font-bold mb-4 text-nonode-blue">Our Services</h2>
            <p className="text-lg text-gray-600 max-w-3xl mx-auto">
              Comprehensive financial solutions tailored to help your business grow and succeed.
            </p>
          </div>
          
          <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-8">
            {services.map((service, index) => <ServiceCard key={index} title={service.title} description={service.description} icon={service.icon} />)}
          </div>
        </div>
      </section>
      
      {/* Benefits Section */}
      <section id="benefits" className="section-padding bg-white">
        <div className="container-width">
          <div className="text-center mb-12">
            <h2 className="text-3xl md:text-4xl font-bold mb-4 text-nonode-blue">Why Choose NoNode?</h2>
            <p className="text-lg text-gray-600 max-w-3xl mx-auto">
              Our clients trust us to deliver exceptional financial services that drive real results.
            </p>
          </div>
          
          <div className="grid grid-cols-1 md:grid-cols-3 gap-8">
            <div className="p-6 border border-gray-100 rounded-lg shadow-md bg-white text-center">
              <div className="mx-auto w-16 h-16 flex items-center justify-center bg-nonode-light-blue/10 rounded-full mb-4">
                <ChartLine size={28} className="text-nonode-light-blue" />
              </div>
              <h3 className="text-xl font-semibold mb-3 text-nonode-blue">Expert Financial Insights</h3>
              <p className="text-gray-600">
                Our team of experienced accountants provides strategic insights to optimize your business finances.
              </p>
            </div>
            
            <div className="p-6 border border-gray-100 rounded-lg shadow-md bg-white text-center">
              <div className="mx-auto w-16 h-16 flex items-center justify-center bg-nonode-light-blue/10 rounded-full mb-4">
                <Check size={28} className="text-nonode-light-blue" />
              </div>
              <h3 className="text-xl font-semibold mb-3 text-nonode-blue">Reliable & Accurate Service</h3>
              <p className="text-gray-600">
                Count on our meticulous approach to ensure your financial records are always accurate and up-to-date.
              </p>
            </div>
            
            <div className="p-6 border border-gray-100 rounded-lg shadow-md bg-white text-center">
              <div className="mx-auto w-16 h-16 flex items-center justify-center bg-nonode-light-blue/10 rounded-full mb-4">
                <Briefcase size={28} className="text-nonode-light-blue" />
              </div>
              <h3 className="text-xl font-semibold mb-3 text-nonode-blue">Tailored Business Solutions</h3>
              <p className="text-gray-600">
                We create customized financial strategies aligned with your specific business goals and challenges.
              </p>
            </div>
          </div>
        </div>
      </section>
      
      {/* Discount Banner */}
      <section className="py-10 bg-nonode-green text-white">
        <div className="container-width px-6 text-center">
          <h2 className="text-2xl md:text-3xl font-bold mb-4">Limited Time Offer: 30% OFF All Services</h2>
          <p className="text-lg mb-6">
            New clients can enjoy 30% off our comprehensive accounting services. Offer ends soon!
          </p>
          <Button 
            className="bg-white text-nonode-green hover:bg-gray-100"
            onClick={() => {
              // Generate and show a random discount code here
              const characters = 'ABCDEFGHIJKLMNOPQRSTUVWXYZ0123456789';
              let code = 'NONODE';
              for (let i = 0; i < 6; i++) {
                code += characters.charAt(Math.floor(Math.random() * characters.length));
              }
              
              toast({
                title: "Your 30% Discount Code",
                description: code,
                action: (
                  <Button 
                    variant="outline" 
                    size="sm" 
                    className="mt-2" 
                    onClick={() => {
                      navigator.clipboard.writeText(code);
                      toast({
                        title: "Copied!",
                        description: "Discount code copied to clipboard",
                      });
                    }}
                  >
                    Copy Code
                  </Button>
                ),
              });
            }}
          >
            Claim Your Discount
          </Button>
        </div>
      </section>
      
      {/* Testimonials Section */}
      <section id="testimonials" className="section-padding bg-gray-50">
        <div className="container-width">
          <div className="text-center mb-12">
            <h2 className="text-3xl md:text-4xl font-bold mb-4 text-nonode-blue">What Our Clients Say</h2>
            <p className="text-lg text-gray-600 max-w-3xl mx-auto">
              Discover why businesses trust NoNode for their accounting and financial management needs.
            </p>
          </div>
          
          <div className="grid grid-cols-1 md:grid-cols-3 gap-8">
            {testimonials.map((testimonial, index) => <TestimonialCard key={index} quote={testimonial.quote} name={testimonial.name} title={testimonial.title} />)}
          </div>
        </div>
      </section>
      
      {/* Stats Section */}
      <section className="py-16 bg-white">
        <div className="container-width px-6">
          <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-4 gap-8">
            <div className="text-center">
              <p className="text-4xl font-bold text-nonode-blue mb-2">500+</p>
              <p className="text-gray-600">Satisfied Clients</p>
            </div>
            <div className="text-center">
              <p className="text-4xl font-bold text-nonode-blue mb-2">25%</p>
              <p className="text-gray-600">Average Tax Savings</p>
            </div>
            <div className="text-center">
              <p className="text-4xl font-bold text-nonode-blue mb-2">15+</p>
              <p className="text-gray-600">Years of Experience</p>
            </div>
            <div className="text-center">
              <p className="text-4xl font-bold text-nonode-blue mb-2">98%</p>
              <p className="text-gray-600">Client Retention</p>
            </div>
          </div>
        </div>
      </section>
      
      {/* CTA Section - already has its own modal implementation */}
      <CTASection />
      
      {/* Footer */}
      <Footer />
      
      {/* Global Consultation Form Modal */}
      <Dialog open={isFormOpen} onOpenChange={setIsFormOpen}>
        <DialogContent className="sm:max-w-md">
          <DialogHeader>
            <DialogTitle className="text-xl text-nonode-blue">Book Your Free Consultation</DialogTitle>
            <DialogDescription>
              {isSubmitted ? (
                <div className="py-8 text-center">
                  <h3 className="text-xl font-semibold text-nonode-blue mb-2">Thank you!</h3>
                  <p>We'll contact you shortly to discuss how NoNode can help your business grow.</p>
                </div>
              ) : (
                <p>Please fill out the form below and we'll get back to you within 24 hours.</p>
              )}
            </DialogDescription>
          </DialogHeader>
          
          {!isSubmitted && <ConsultationForm onSubmitSuccess={() => setIsSubmitted(true)} />}
        </DialogContent>
      </Dialog>
    </div>;
};

export default Index;
