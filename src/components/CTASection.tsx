
import { Button } from "@/components/ui/button";
import { ArrowRight } from "lucide-react";

const CTASection = () => {
  return (
    <section id="contact" className="bg-nonode-blue text-white section-padding">
      <div className="container-width flex flex-col items-center text-center">
        <h2 className="text-3xl md:text-4xl font-bold mb-4">Ready to Optimize Your Finances?</h2>
        <p className="text-lg md:text-xl max-w-2xl mb-8 text-gray-200">
          Book a free consultation today and let's discuss how we can help your business thrive.
        </p>
        <Button 
          className="bg-white text-nonode-blue hover:bg-gray-100 text-lg px-8 py-6 h-auto flex items-center space-x-2"
        >
          <span>Book Your Free Consultation</span>
          <ArrowRight size={20} />
        </Button>
        <p className="mt-6 text-gray-300 text-sm">
          No obligations. Let's just talk about your business goals.
        </p>
      </div>
    </section>
  );
};

export default CTASection;
