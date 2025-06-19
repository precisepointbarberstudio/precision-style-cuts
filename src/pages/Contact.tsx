
import Navigation from "@/components/Navigation";
import Footer from "@/components/Footer";
import { Button } from "@/components/ui/button";
import { MapPin, Phone, Mail, Clock } from "lucide-react";
import { Facebook } from "lucide-react";

const Contact = () => {
  return (
    <div className="min-h-screen bg-black text-white">
      <Navigation />
      
      {/* Hero Section */}
      <section className="pt-32 pb-20 text-center">
        <div className="max-w-4xl mx-auto px-4">
          <h1 className="text-5xl md:text-6xl font-playfair font-bold text-gold mb-6 animate-fade-in">
            Contact Us
          </h1>
          <p className="text-xl text-gray-300 animate-fade-in max-w-2xl mx-auto">
            Ready to experience precision craftsmanship? Get in touch with us today
          </p>
        </div>
      </section>

      {/* Contact Content */}
      <section className="py-20">
        <div className="max-w-4xl mx-auto px-4">
          <div className="grid grid-cols-1 lg:grid-cols-2 gap-16">
            
            {/* Contact Information */}
            <div className="animate-fade-in">
              <h2 className="text-3xl font-playfair font-bold text-gold mb-8">
                Get In Touch
              </h2>
              
              <div className="space-y-8">
                <div className="flex items-start space-x-4">
                  <div className="w-12 h-12 bg-gold rounded-full flex items-center justify-center flex-shrink-0">
                    <MapPin size={20} className="text-black" />
                  </div>
                  <div>
                    <h3 className="text-xl font-semibold text-white mb-2">Location</h3>
                    <p className="text-gray-300">
                      177 Main Street, Suite 303 <br />
                      Dartmouth, NS, B2X 1S1
                    </p>
                  </div>
                </div>

                <div className="flex items-start space-x-4">
                  <div className="w-12 h-12 bg-gold rounded-full flex items-center justify-center flex-shrink-0">
                    <Phone size={20} className="text-black" />
                  </div>
                  <div>
                    <h3 className="text-xl font-semibold text-white mb-2">Phone</h3>
                    <p className="text-gray-300">
                      <a href="tel:+19028301373" className="hover:text-gold transition-colors">
                        (902) 830-1373
                      </a>
                    </p>
                  </div>
                </div>

                <div className="flex items-start space-x-4">
                  <div className="w-12 h-12 bg-gold rounded-full flex items-center justify-center flex-shrink-0">
                    <Mail size={20} className="text-black" />
                  </div>
                  <div>
                    <h3 className="text-xl font-semibold text-white mb-2">Email</h3>
                    <p className="text-gray-300">
                      <a href="mailto:precisepointbarbering@gmail.com" className="hover:text-gold transition-colors">
                        precisepointbarbering@gmail.com
                      </a>
                    </p>
                  </div>
                </div>

                <div className="flex items-start space-x-4">
                  <div className="w-12 h-12 bg-gold rounded-full flex items-center justify-center flex-shrink-0">
                    <Clock size={20} className="text-black" />
                  </div>
                  <div>
                    <h3 className="text-xl font-semibold text-white mb-2">Hours</h3>
                    <div className="text-gray-300 space-y-1">
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
                </div>

                {/* Social Media */}
                <div className="flex items-start space-x-4">
                  <div className="w-12 h-12 bg-gold rounded-full flex items-center justify-center flex-shrink-0">
                    <div className="w-6 h-6 bg-black rounded-full"></div>
                  </div>
                  <div>
                    <h3 className="text-xl font-semibold text-white mb-2">Follow Us</h3>
                    <div className="space-y-2 text-gray-300">
                      <p>
                        <a href="https://www.instagram.com/precisepointbarbering?igsh=MXdnY3duNTlvN3Z1NQ==" target="_blank" rel="noopener noreferrer" className="hover:text-gold transition-colors">
                          Instagram: @precisepointbarbering
                        </a>
                      </p>
                      <p>
                        <a href="https://www.facebook.com/share/161iGDqAX7/?mibextid=wwXIfr" target="_blank" rel="noopener noreferrer" className="hover:text-gold transition-colors">
                          Facebook: Precise Point Barber Studio
                        </a>
                      </p>
                      <p>
                        <a href="https://www.tiktok.com/@precisepointbarberstudio?_t=ZM-8wsHTS4yJCn&_r=1" target="_blank" rel="noopener noreferrer" className="hover:text-gold transition-colors">
                          TikTok: @precisepointbarberstudio
                        </a>
                      </p>
                    </div>
                  </div>
                </div>
              </div>
            </div>

            {/* Map Placeholder */}
            <div className="animate-fade-in">
              <div className="aspect-video bg-jet-light border border-gold/30 rounded-lg overflow-hidden">
                <div className="w-full h-full bg-gradient-to-br from-gold/10 to-black flex items-center justify-center">
                  <div className="text-center">
                    <MapPin size={48} className="text-gold mx-auto mb-4" />
                    <p className="text-gray-300">Visit Us</p>
                    <p className="text-sm text-gray-400"> 177 Main Street, Suite 303, Dartmouth NS</p>
                  </div>
                </div>
              </div>
            </div>
          </div>
        </div>
      </section>

      {/* CTA Section */}
      <section className="py-32 text-center bg-jet-light">
        <div className="max-w-4xl mx-auto px-4">
          <h2 className="text-4xl md:text-5xl font-playfair font-bold text-gold mb-8">
            Ready to Book?
          </h2>
          <p className="text-xl text-gray-300 mb-12 max-w-2xl mx-auto">
            Skip the contact form and book your appointment directly
          </p>
          
          <Button 
            asChild
            size="lg"
            className="bg-gold hover:bg-gold-dark text-black font-semibold px-12 py-4 text-lg hover-lift golden-glow"
          >
            <a href="https://getsquire.com/discover/barbershop/precise-point-barber-studio-dartmouth?hl=en-CA&gei=0CI9aJzcGfqe5NoPopiVqAg&gsas=1&ahbb=1&rwg_token=ACgRB3e9WsBMuE6yvBY3ALSq5KHnJ9ICr0NDBeYAM0uCAezR_Z2F-jZh1f77md8Bh2JB5OnK1uGhYV710fbKBmz1GD7MueULBQ%3D%3D">Book Your Session</a>
          </Button>
        </div>
      </section>

      <Footer />
    </div>
  );
};

export default Contact;
