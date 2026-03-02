import { Separator } from "./ui/separator";
import { Phone, Mail, MapPin, Facebook, Instagram, Linkedin } from "lucide-react";
import { Link } from "react-router-dom";

export function Footer() {
  return (
    <footer className="bg-gray-900 text-white">
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 py-12">
        <div className="grid grid-cols-1 md:grid-cols-4 gap-8">
          {/* Company Info */}
          <div className="col-span-1 md:col-span-2">
            <div className="mb-4">
            </div>
            <p className="text-gray-300 mb-6 max-w-md">
              Professional facility maintenance and labour solutions company delivering reliable, compliant, and scalable services across multiple sectors. Trusted Partner in Reliability.
            </p>
            <div className="space-y-2">
              <a href="tel:+254706218092" className="flex items-center text-gray-300 hover:text-red-400 transition-colors">
                <Phone className="h-4 w-4 mr-3" />
                <span>+254 706 218 092</span>
              </a>
              <a href="mailto:info@fixit-hvac.com" className="flex items-center text-gray-300 hover:text-green-400 transition-colors">
                <Mail className="h-4 w-4 mr-3" />
                <span>info@fixit-hvac.com</span>
              </a>
              <div className="flex items-center text-gray-300">
                <MapPin className="h-4 w-4 mr-3" />
                <span>Muguna Plaza, Ngong Town, Kenya</span>
              </div>
            </div>
          </div>

          {/* Services */}
          <div>
            <h3 className="text-lg mb-4">Services</h3>
            <ul className="space-y-2 text-gray-300">
              <li><Link to="/services" className="hover:text-red-400 transition-colors">MEP Services</Link></li>
              <li><Link to="/services" className="hover:text-red-400 transition-colors">General Maintenance</Link></li>
              <li><Link to="/services" className="hover:text-red-400 transition-colors">Preventive Maintenance</Link></li>
              <li><Link to="/services" className="hover:text-red-400 transition-colors">Emergency Response</Link></li>
              <li><Link to="/services" className="hover:text-red-400 transition-colors">Workforce Solutions</Link></li>
            </ul>
          </div>

          {/* Quick Links */}
          <div>
            <h3 className="text-lg mb-4">Quick Links</h3>
            <ul className="space-y-2 text-gray-300">
              <li><Link to="/" className="hover:text-green-400 transition-colors">Home</Link></li>
              <li><Link to="/about" className="hover:text-green-400 transition-colors">About Us</Link></li>
              <li><Link to="/services" className="hover:text-green-400 transition-colors">Services</Link></li>
              <li><Link to="/contact" className="hover:text-green-400 transition-colors">Contact</Link></li>
            </ul>
            
            <h4 className="text-lg mt-6 mb-4">Follow Us</h4>
            <div className="flex space-x-4">
              <a href="#" className="text-gray-300 hover:text-green-400 transition-colors">
                <Facebook className="h-5 w-5" />
              </a>
              <a href="#" className="text-gray-300 hover:text-red-400 transition-colors">
                <Instagram className="h-5 w-5" />
              </a>
              <a href="#" className="text-gray-300 hover:text-green-400 transition-colors">
                <Linkedin className="h-5 w-5" />
              </a>
            </div>
          </div>
        </div>

        <Separator className="my-8 bg-gray-700" />

        <div className="flex flex-col md:flex-row justify-between items-center">
          <p className="text-gray-300 text-sm">
            © 2026 Fix IT. All rights reserved.
          </p>
          <div className="flex space-x-6 text-sm text-gray-300 mt-4 md:mt-0">
            <a href="#" className="hover:text-green-400 transition-colors">Privacy Policy</a>
            <a href="#" className="hover:text-green-400 transition-colors">Terms of Service</a>
            <a href="#" className="hover:text-green-400 transition-colors">License Info</a>
          </div>
        </div>
      </div>
    </footer>
  );
}