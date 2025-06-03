
import { Instagram, Facebook } from "lucide-react";
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
              <a 
                href="https://www.facebook.com/share/161iGDqAX7/?mibextid=wwXIfr" 
                target="_blank"
                rel="noopener noreferrer"
                className="text-gray-300 hover:text-gold transition-colors duration-200"
                aria-label="Facebook"
              >
                <Facebook size={20} />
              </a>
              <a 
                href="https://www.tiktok.com/@precisepointbarberstudio?_t=ZM-8wsHTS4yJCn&_r=1" 
                target="_blank"
                rel="noopener noreferrer"
                className="text-gray-300 hover:text-gold transition-colors duration-200"
                aria-label="TikTok"
              >
                <svg width="20" height="20" viewBox="0 0 24 24" fill="currentColor">
                  <path d="M19.59 6.69a4.83 4.83 0 0 1-3.77-4.25V2h-3.45v13.67a2.89 2.89 0 0 1-5.2 1.74 2.89 2.89 0 0 1 2.31-4.64 2.93 2.93 0 0 1 .88.13V9.4a6.84 6.84 0 0 0-1-.05A6.33 6.33 0 0 0 5 20.1a6.34 6.34 0 0 0 10.86-4.43v-7a8.16 8.16 0 0 0 4.77 1.52v-3.4a4.85 4.85 0 0 1-1-.1z"/>
                </svg>
              </a>
            </div>
          </div>

          {/* Hours */}
          <div className="text-center">
            <h4 className="text-lg font-semibold text-gold mb-4">Hours</h4>
            <div className="space-y-2 text-gray-300">
              <div className="flex justify-between">
                <span>Monday</span>
                <span>Closed</span>
              </div>
              <div className="flex justify-between">
                <span>Tuesday</span>
                <span>Closed</span>
              </div>
              <div className="flex justify-between">
                <span>Wednesday</span>
                <span>10:00 AM - 8:30 PM</span>
              </div>
              <div className="flex justify-between">
                <span>Thursday</span>
                <span>10:00 AM - 8:30 PM</span>
              </div>
              <div className="flex justify-between">
                <span>Friday</span>
                <span>10:00 AM - 8:30 PM</span>
              </div>
              <div className="flex justify-between">
                <span>Saturday</span>
                <span>10:00 AM - 8:30 PM</span>
              </div>
              <div className="flex justify-between">
                <span>Sunday</span>
                <span>10:00 AM - 8:00 PM</span>
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
              <p>precisepointbarbering@gmail.com</p>
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
            <a href="https://getsquire.com/discover/barbershop/precise-point-barber-studio-dartmouth?hl=en-CA&gei=0CI9aJzcGfqe5NoPopiVqAg&gsas=1&ahbb=1&rwg_token=ACgRB3e9WsBMuE6yvBY3ALSq5KHnJ9ICr0NDBeYAM0uCAezR_Z2F-jZh1f77md8Bh2JB5OnK1uGhYV710fbKBmz1GD7MueULBQ%3D%3D">Book Your Cut</a>
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
