
import { useState } from "react";
import { Button } from "@/components/ui/button";
import { Menu, X } from "lucide-react";

type NavbarProps = {
  handleOpenForm: () => void;
};

const Navbar = ({ handleOpenForm }: NavbarProps) => {
  const [isMenuOpen, setIsMenuOpen] = useState(false);

  const toggleMenu = () => {
    setIsMenuOpen(!isMenuOpen);
  };

  return (
    <header className="sticky top-0 z-50 bg-white/90 backdrop-blur-sm border-b border-gray-200">
      <div className="container-width px-4 sm:px-6 lg:px-8 flex items-center justify-between h-16">
        <div className="flex items-center">
          <a href="#" className="text-xl md:text-2xl font-bold text-nonode-blue font-playfair">
            No<span className="text-nonode-light-blue">Node</span>
          </a>
        </div>

        {/* Desktop Navigation */}
        <nav className="hidden md:flex items-center space-x-8">
          <a href="#services" className="text-nonode-blue hover:text-nonode-light-blue transition-colors">
            Services
          </a>
          <a href="#benefits" className="text-nonode-blue hover:text-nonode-light-blue transition-colors">
            Benefits
          </a>
          <a href="#testimonials" className="text-nonode-blue hover:text-nonode-light-blue transition-colors">
            Testimonials
          </a>
          <a href="#contact" className="text-nonode-blue hover:text-nonode-light-blue transition-colors">
            Contact
          </a>
        </nav>

        <div className="hidden md:block">
          <Button 
            className="bg-nonode-blue text-white hover:bg-nonode-light-blue"
            onClick={handleOpenForm}
          >
            Book a Consultation
          </Button>
        </div>

        {/* Mobile Menu Button */}
        <button
          className="md:hidden text-nonode-blue focus:outline-none"
          onClick={toggleMenu}
        >
          {isMenuOpen ? <X size={24} /> : <Menu size={24} />}
        </button>
      </div>

      {/* Mobile Navigation */}
      {isMenuOpen && (
        <div className="md:hidden absolute top-16 left-0 right-0 bg-white border-b border-gray-200 shadow-lg animate-fade-in">
          <div className="px-4 py-4 space-y-3">
            <a
              href="#services"
              className="block py-2 text-nonode-blue hover:text-nonode-light-blue"
              onClick={() => setIsMenuOpen(false)}
            >
              Services
            </a>
            <a
              href="#benefits"
              className="block py-2 text-nonode-blue hover:text-nonode-light-blue"
              onClick={() => setIsMenuOpen(false)}
            >
              Benefits
            </a>
            <a
              href="#testimonials"
              className="block py-2 text-nonode-blue hover:text-nonode-light-blue"
              onClick={() => setIsMenuOpen(false)}
            >
              Testimonials
            </a>
            <a
              href="#contact"
              className="block py-2 text-nonode-blue hover:text-nonode-light-blue"
              onClick={() => setIsMenuOpen(false)}
            >
              Contact
            </a>
            <Button 
              className="w-full bg-nonode-blue text-white hover:bg-nonode-light-blue mt-2"
              onClick={() => {
                setIsMenuOpen(false);
                handleOpenForm();
              }}
            >
              Book a Consultation
            </Button>
          </div>
        </div>
      )}
    </header>
  );
};

export default Navbar;
