
import { useState } from "react";
import { Button } from "@/components/ui/button";
import { Menu, X } from "lucide-react";
import { useIsMobile } from "@/hooks/use-mobile";

type NavbarProps = {
  handleOpenForm: () => void;
};

const Navbar = ({ handleOpenForm }: NavbarProps) => {
  const [isMenuOpen, setIsMenuOpen] = useState(false);
  const isMobile = useIsMobile();

  const toggleMenu = () => {
    setIsMenuOpen(!isMenuOpen);
  };

  const handleNavClick = (event: React.MouseEvent<HTMLAnchorElement>, target: string) => {
    event.preventDefault();
    setIsMenuOpen(false);
    
    const element = document.querySelector(target);
    if (element) {
      const navbarHeight = 64; // Height of the navbar in pixels
      const y = element.getBoundingClientRect().top + window.pageYOffset - navbarHeight;
      
      window.scrollTo({ top: y, behavior: 'smooth' });
    }
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
        <nav className="hidden md:flex items-center space-x-6 lg:space-x-8">
          <a 
            href="#services" 
            onClick={(e) => handleNavClick(e, '#services')}
            className="text-nonode-blue hover:text-nonode-light-blue transition-colors py-2"
          >
            Services
          </a>
          <a 
            href="#benefits" 
            onClick={(e) => handleNavClick(e, '#benefits')}
            className="text-nonode-blue hover:text-nonode-light-blue transition-colors py-2"
          >
            Benefits
          </a>
          <a 
            href="#testimonials" 
            onClick={(e) => handleNavClick(e, '#testimonials')}
            className="text-nonode-blue hover:text-nonode-light-blue transition-colors py-2"
          >
            Testimonials
          </a>
          <a 
            href="#contact" 
            onClick={(e) => handleNavClick(e, '#contact')}
            className="text-nonode-blue hover:text-nonode-light-blue transition-colors py-2"
          >
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
          className="md:hidden text-nonode-blue focus:outline-none mobile-touch-target p-2"
          onClick={toggleMenu}
          aria-label="Toggle menu"
        >
          {isMenuOpen ? <X size={24} /> : <Menu size={24} />}
        </button>
      </div>

      {/* Mobile Navigation */}
      {isMenuOpen && (
        <div className="md:hidden absolute top-16 left-0 right-0 bg-white border-b border-gray-200 shadow-lg animate-fade-in">
          <div className="px-4 py-4 space-y-4 mobile-spacing">
            <a
              href="#services"
              className="block py-3 text-nonode-blue hover:text-nonode-light-blue mobile-touch-target"
              onClick={(e) => handleNavClick(e, '#services')}
            >
              Services
            </a>
            <a
              href="#benefits"
              className="block py-3 text-nonode-blue hover:text-nonode-light-blue mobile-touch-target"
              onClick={(e) => handleNavClick(e, '#benefits')}
            >
              Benefits
            </a>
            <a
              href="#testimonials"
              className="block py-3 text-nonode-blue hover:text-nonode-light-blue mobile-touch-target"
              onClick={(e) => handleNavClick(e, '#testimonials')}
            >
              Testimonials
            </a>
            <a
              href="#contact"
              className="block py-3 text-nonode-blue hover:text-nonode-light-blue mobile-touch-target"
              onClick={(e) => handleNavClick(e, '#contact')}
            >
              Contact
            </a>
            <Button 
              className="w-full bg-nonode-blue text-white hover:bg-nonode-light-blue mt-2 py-6 h-auto"
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
