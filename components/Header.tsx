import { Button } from "./ui/button";
import { Phone, Menu, X } from "lucide-react";
import { useState } from "react";
import { Link, useLocation } from "react-router-dom";
  
export function Header() {
  const [isMenuOpen, setIsMenuOpen] = useState(false);
  const location = useLocation();

  const isActive = (path: string) => {
    return location.pathname === path;
  };

  const closeMenu = () => {
    setIsMenuOpen(false);
  };

  const scrollToTop = () => {
    window.scrollTo({ top: 0, behavior: 'smooth' });
  };

  const handleLinkClick = () => {
    scrollToTop();
    closeMenu();
  };

  return (
    <header className="bg-gray-900 shadow-sm sticky top-0 z-50">
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
        <div className="flex justify-between items-center py-4">
          <Link to="/" className="flex items-center" onClick={scrollToTop}>
          </Link>

          {/* Desktop Navigation */}
          <nav className="hidden md:flex space-x-12">
            <Link 
              to="/" 
              onClick={scrollToTop}
              className={`transition-all px-4 ${isActive('/') ? 'text-green-400 underline' : 'text-white hover:text-green-400 hover:underline'}`}
            >
              Home
            </Link>
            <Link 
              to="/services" 
              onClick={scrollToTop}
              className={`transition-all px-4 ${isActive('/services') ? 'text-green-400 underline' : 'text-white hover:text-green-400 hover:underline'}`}
            >
              Services
            </Link>
            <Link 
              to="/about" 
              onClick={scrollToTop}
              className={`transition-all px-4 ${isActive('/about') ? 'text-green-400 underline' : 'text-white hover:text-green-400 hover:underline'}`}
            >
              About
            </Link>
            <Link 
              to="/contact" 
              onClick={scrollToTop}
              className={`transition-all px-4 ${isActive('/contact') ? 'text-green-400 underline' : 'text-white hover:text-green-400 hover:underline'}`}
            >
              Contact
            </Link>
          </nav>

          {/* Phone Number & CTA */}
          <div className="hidden md:flex items-center space-x-4">
            <a href="tel:+254706218092" className="flex items-center text-green-400 hover:text-green-300 transition-colors">
              <Phone className="h-4 w-4 mr-2" />
              <span>+254 706 218 092</span>
            </a>
            <Link to="/contact" onClick={scrollToTop}>
              <Button className="bg-red-600 hover:bg-red-700 text-white">
                Get Quote
              </Button>
            </Link>
          </div>

          {/* Mobile Menu Button */}
          <button
            className="md:hidden text-white"
            onClick={() => setIsMenuOpen(!isMenuOpen)}
          >
            {isMenuOpen ? <X className="h-6 w-6" /> : <Menu className="h-6 w-6" />}
          </button>
        </div>

        {/* Mobile Navigation */}
        {isMenuOpen && (
          <div className="md:hidden pb-4">
            <nav className="flex flex-col space-y-4">
              <Link 
                to="/" 
                onClick={handleLinkClick}
                className={`transition-all ${isActive('/') ? 'text-green-400 underline' : 'text-white hover:text-green-400 hover:underline'}`}
              >
                Home
              </Link>
              <Link 
                to="/services" 
                onClick={handleLinkClick}
                className={`transition-all ${isActive('/services') ? 'text-green-400 underline' : 'text-white hover:text-green-400 hover:underline'}`}
              >
                Services
              </Link>
              <Link 
                to="/about" 
                onClick={handleLinkClick}
                className={`transition-all ${isActive('/about') ? 'text-green-400 underline' : 'text-white hover:text-green-400 hover:underline'}`}
              >
                About
              </Link>
              <Link 
                to="/contact" 
                onClick={handleLinkClick}
                className={`transition-all ${isActive('/contact') ? 'text-green-400 underline' : 'text-white hover:text-green-400 hover:underline'}`}
              >
                Contact
              </Link>
              <a href="tel:+254706218092" className="flex items-center text-green-400 pt-2 hover:text-green-300 transition-colors">
                <Phone className="h-4 w-4 mr-2" />
                <span>+254 706 218 092</span>
              </a>
              <Link to="/contact" onClick={handleLinkClick}>
                <Button className="bg-red-600 hover:bg-red-700 text-white w-fit">
                  Get Quote
                </Button>
              </Link>
            </nav>
          </div>
        )}
      </div>
    </header>
  );
}