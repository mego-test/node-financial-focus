
import { useState } from "react";
import { Button } from "@/components/ui/button";
import { ArrowRight, Copy } from "lucide-react";
import { Dialog, DialogContent, DialogHeader, DialogTitle, DialogDescription } from "@/components/ui/dialog";
import ConsultationForm from "@/components/ConsultationForm";
import { toast } from "@/hooks/use-toast";
import { useIsMobile } from "@/hooks/use-mobile";

const CTASection = () => {
  const [isFormOpen, setIsFormOpen] = useState(false);
  const [isSubmitted, setIsSubmitted] = useState(false);
  const [discountCode, setDiscountCode] = useState("");
  const [isDiscountModalOpen, setIsDiscountModalOpen] = useState(false);
  const isMobile = useIsMobile();

  const handleOpenForm = () => {
    setIsFormOpen(true);
    setIsSubmitted(false);
  };

  const generateDiscountCode = () => {
    const characters = 'ABCDEFGHIJKLMNOPQRSTUVWXYZ0123456789';
    let result = 'NONODE';
    for (let i = 0; i < 6; i++) {
      result += characters.charAt(Math.floor(Math.random() * characters.length));
    }
    setDiscountCode(result);
    setIsDiscountModalOpen(true);
  };

  const copyToClipboard = () => {
    navigator.clipboard.writeText(discountCode);
    toast({
      title: "Code copied!",
      description: "Discount code copied to clipboard",
    });
  };

  return (
    <section id="contact" className="bg-nonode-blue text-white section-padding">
      <div className="container-width flex flex-col items-center text-center px-4 md:px-6">
        <h2 className="text-2xl md:text-3xl lg:text-4xl font-bold mb-4">Ready to Optimize Your Finances?</h2>
        <p className="text-base md:text-lg max-w-2xl mb-8 text-gray-200">
          Book a free consultation today and let's discuss how we can help your business thrive.
        </p>
        <Button 
          className="bg-white text-nonode-blue hover:bg-gray-100 text-base md:text-lg px-6 py-5 h-auto flex items-center space-x-2 w-full sm:w-auto"
          onClick={handleOpenForm}
        >
          <span>Book Your Free Consultation</span>
          <ArrowRight size={isMobile ? 16 : 20} />
        </Button>
        <p className="mt-6 text-gray-300 text-sm">
          No obligations. Let's just talk about your business goals.
        </p>
      </div>

      <Dialog open={isFormOpen} onOpenChange={setIsFormOpen}>
        <DialogContent className="sm:max-w-md mx-4">
          <DialogHeader>
            <DialogTitle className="text-lg md:text-xl text-nonode-blue">Book Your Free Consultation</DialogTitle>
            <DialogDescription>
              {isSubmitted ? (
                <div className="py-6 md:py-8 text-center">
                  <h3 className="text-lg md:text-xl font-semibold text-nonode-blue mb-2">Thank you!</h3>
                  <p className="text-base">We'll contact you shortly to discuss how NoNode can help your business grow.</p>
                </div>
              ) : (
                <p className="text-base">Please fill out the form below and we'll get back to you within 24 hours.</p>
              )}
            </DialogDescription>
          </DialogHeader>
          
          {!isSubmitted && <ConsultationForm onSubmitSuccess={() => setIsSubmitted(true)} />}
        </DialogContent>
      </Dialog>

      <Dialog open={isDiscountModalOpen} onOpenChange={setIsDiscountModalOpen}>
        <DialogContent className="sm:max-w-md mx-4">
          <DialogHeader>
            <DialogTitle className="text-lg md:text-xl text-nonode-blue">Your Discount Code</DialogTitle>
            <DialogDescription>
              <p className="text-base">Use this code during your consultation to receive 30% off all services.</p>
            </DialogDescription>
          </DialogHeader>
          <div className="p-4 bg-gray-50 rounded-md flex items-center justify-between mt-2">
            <span className="font-mono text-lg font-bold text-nonode-blue">{discountCode}</span>
            <Button variant="outline" size="sm" onClick={copyToClipboard} className="flex items-center gap-2">
              <Copy size={16} />
              <span>Copy</span>
            </Button>
          </div>
          <p className="text-sm text-gray-500 mt-2">
            This code is valid for 30 days from today. Present it during your initial consultation.
          </p>
        </DialogContent>
      </Dialog>
    </section>
  );
};

export default CTASection;
