
import { useState } from "react";
import { Button } from "@/components/ui/button";
import { ArrowRight, Copy } from "lucide-react";
import { Dialog, DialogContent, DialogHeader, DialogTitle, DialogDescription } from "@/components/ui/dialog";
import ConsultationForm from "@/components/ConsultationForm";
import { toast } from "@/hooks/use-toast";

const CTASection = () => {
  const [isFormOpen, setIsFormOpen] = useState(false);
  const [isSubmitted, setIsSubmitted] = useState(false);
  const [discountCode, setDiscountCode] = useState("");
  const [isDiscountModalOpen, setIsDiscountModalOpen] = useState(false);

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
      <div className="container-width flex flex-col items-center text-center">
        <h2 className="text-3xl md:text-4xl font-bold mb-4">Ready to Optimize Your Finances?</h2>
        <p className="text-lg md:text-xl max-w-2xl mb-8 text-gray-200">
          Book a free consultation today and let's discuss how we can help your business thrive.
        </p>
        <Button 
          className="bg-white text-nonode-blue hover:bg-gray-100 text-lg px-8 py-6 h-auto flex items-center space-x-2"
          onClick={handleOpenForm}
        >
          <span>Book Your Free Consultation</span>
          <ArrowRight size={20} />
        </Button>
        <p className="mt-6 text-gray-300 text-sm">
          No obligations. Let's just talk about your business goals.
        </p>
      </div>

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

      <Dialog open={isDiscountModalOpen} onOpenChange={setIsDiscountModalOpen}>
        <DialogContent className="sm:max-w-md">
          <DialogHeader>
            <DialogTitle className="text-xl text-nonode-blue">Your Discount Code</DialogTitle>
            <DialogDescription>
              <p>Use this code during your consultation to receive 30% off all services.</p>
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
