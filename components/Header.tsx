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

  return (
    <header className="bg-white shadow-sm sticky top-0 z-50">
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
        <div className="flex justify-between items-center py-4">
          <Link to="/" className="flex items-center">
          </Link>

          {/* Desktop Navigation */}
          <nav className="hidden md:flex space-x-8">
            <Link 
              to="/" 
              className={`transition-colors ${isActive('/') ? 'text-red-600' : 'text-gray-700 hover:text-red-600'}`}
            >
              Home
            </Link>
            <Link 
              to="/services" 
              className={`transition-colors ${isActive('/services') ? 'text-red-600' : 'text-gray-700 hover:text-red-600'}`}
            >
              Services
            </Link>
            <Link 
              to="/about" 
              className={`transition-colors ${isActive('/about') ? 'text-red-600' : 'text-gray-700 hover:text-red-600'}`}
            >
              About
            </Link>
            <Link 
              to="/contact" 
              className={`transition-colors ${isActive('/contact') ? 'text-red-600' : 'text-gray-700 hover:text-red-600'}`}
            >
              Contact
            </Link>
          </nav>

          {/* Phone Number & CTA */}
          <div className="hidden md:flex items-center space-x-4">
            <a href="tel:+254706218092" className="flex items-center text-gray-700 hover:text-red-600 transition-colors">
              <Phone className="h-4 w-4 mr-2" />
              <span>+254 706 218 092</span>
            </a>
            <Link to="/contact">
              <Button className="bg-red-600 hover:bg-red-700 text-white">
                Get Quote
              </Button>
            </Link>
          </div>

          {/* Mobile Menu Button */}
          <button
            className="md:hidden"
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
                onClick={closeMenu}
                className={`transition-colors ${isActive('/') ? 'text-red-600' : 'text-gray-700 hover:text-red-600'}`}
              >
                Home
              </Link>
              <Link 
                to="/services" 
                onClick={closeMenu}
                className={`transition-colors ${isActive('/services') ? 'text-red-600' : 'text-gray-700 hover:text-red-600'}`}
              >
                Services
              </Link>
              <Link 
                to="/about" 
                onClick={closeMenu}
                className={`transition-colors ${isActive('/about') ? 'text-red-600' : 'text-gray-700 hover:text-red-600'}`}
              >
                About
              </Link>
              <Link 
                to="/contact" 
                onClick={closeMenu}
                className={`transition-colors ${isActive('/contact') ? 'text-red-600' : 'text-gray-700 hover:text-red-600'}`}
              >
                Contact
              </Link>
              <a href="tel:+254706218092" className="flex items-center text-gray-700 pt-2 hover:text-red-600 transition-colors">
                <Phone className="h-4 w-4 mr-2" />
                <span>+254 706 218 092</span>
              </a>
              <Link to="/contact" onClick={closeMenu}>
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