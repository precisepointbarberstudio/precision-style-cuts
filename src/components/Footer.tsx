
import { Instagram } from "lucide-react";
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
                href="https://www.instagram.com/precisepointbarbering?igsh=MXdnY3duNTlvN3Z1NQ==" 
                target="_blank"
                rel="noopener noreferrer"
                className="text-gray-300 hover:text-gold transition-colors duration-200"
                aria-label="Instagram"
              >
                <Instagram size={20} />
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
              <p>303-177 Main St</p>
              <p>Dartmouth, NS, B2X 1S1</p>
              <p>(902) 830-1373</p>
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
            <a href="https://getsquire.com/discover/barbershop/precise-point-barber-studio-dartmouth?hl=en-CA&gei=0CI9aJzcGfqe5NoPopiVqAg&gsas=1&ahbb=1&rwg_token=ACgRB3e9WsBMuE6yvBY3ALSq5KHnJ9ICr0NDBeYAM0uCAezR_Z2F-jZh1f77md8Bh2JB5OnK1uGhYV710fbKBmz1GD7MueULBQ%3D%3D" target="_blank" rel="noopener noreferrer">Book Your Cut</a>
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
