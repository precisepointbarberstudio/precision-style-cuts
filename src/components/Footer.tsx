
import { Link } from "react-router-dom";
import { Facebook, Instagram, Twitter } from "lucide-react";
import { Button } from "@/components/ui/button";

const Footer = () => {
  return (
    <footer className="bg-jet text-white py-16">
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
        {/* Main Footer Content */}
        <div className="grid grid-cols-1 md:grid-cols-3 gap-12 mb-12">
          {/* Brand */}
          <div className="text-center md:text-left">
            <h3 className="text-2xl font-playfair font-bold text-gold mb-4">
              Precise Point
            </h3>
            <p className="text-gray-300 mb-6">
              Where modern style meets surgical precision.
            </p>
            {/* Social Icons */}
            <div className="flex justify-center md:justify-start space-x-4">
              <a 
                href="#" 
                className="text-gray-300 hover:text-gold transition-colors duration-200"
                aria-label="Facebook"
              >
                <Facebook size={20} />
              </a>
              <a 
                href="#" 
                className="text-gray-300 hover:text-gold transition-colors duration-200"
                aria-label="Instagram"
              >
                <Instagram size={20} />
              </a>
              <a 
                href="#" 
                className="text-gray-300 hover:text-gold transition-colors duration-200"
                aria-label="Twitter"
              >
                <Twitter size={20} />
              </a>
            </div>
          </div>

          {/* Hours */}
          <div className="text-center">
            <h4 className="text-lg font-semibold text-gold mb-4">Hours</h4>
            <div className="space-y-2 text-gray-300">
              <div className="flex justify-between">
                <span>Monday - Friday</span>
                <span>9:00 AM - 8:00 PM</span>
              </div>
              <div className="flex justify-between">
                <span>Saturday</span>
                <span>8:00 AM - 6:00 PM</span>
              </div>
              <div className="flex justify-between">
                <span>Sunday</span>
                <span>10:00 AM - 4:00 PM</span>
              </div>
            </div>
          </div>

          {/* Contact */}
          <div className="text-center md:text-right">
            <h4 className="text-lg font-semibold text-gold mb-4">Contact</h4>
            <div className="space-y-2 text-gray-300">
              <p>123 Style Street</p>
              <p>Downtown, NY 10001</p>
              <p>(555) 123-4567</p>
              <p>info@precisepoint.com</p>
            </div>
          </div>
        </div>

        {/* CTA Section */}
        <div className="text-center mb-12">
          <div className="w-full h-px bg-gradient-to-r from-transparent via-gold to-transparent mb-8"></div>
          <Button 
            asChild
            size="lg"
            className="bg-gold hover:bg-gold-dark text-black font-semibold px-8 py-3 text-lg hover-lift"
          >
            <Link to="/booking">Book Your Cut</Link>
          </Button>
        </div>

        {/* Copyright */}
        <div className="text-center pt-8 border-t border-gray-800">
          <p className="text-gray-400">
            © 2024 Precise Point Barber Studio. All rights reserved.
          </p>
        </div>
      </div>
    </footer>
  );
};

export default Footer;
