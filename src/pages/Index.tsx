
import { Link } from "react-router-dom";
import { Button } from "@/components/ui/button";
import Navigation from "@/components/Navigation";
import Footer from "@/components/Footer";

const Index = () => {
  return (
    <div className="min-h-screen bg-black text-white">
      <Navigation />
      
      {/* Hero Section */}
      <section className="relative h-screen flex items-center justify-center overflow-hidden">
        {/* Background Image/Video Placeholder */}
        <div className="absolute inset-0 bg-gradient-to-b from-black/40 via-black/60 to-black/80">
          <div className="absolute inset-0 bg-[url('data:image/svg+xml,%3Csvg%20width%3D%2260%22%20height%3D%2260%22%20viewBox%3D%220%200%2060%2060%22%20xmlns%3D%22http%3A//www.w3.org/2000/svg%22%3E%3Cg%20fill%3D%22none%22%20fill-rule%3D%22evenodd%22%3E%3Cg%20fill%3D%22%23D4AF37%22%20fill-opacity%3D%220.03%22%3E%3Cpath%20d%3D%22M0%200h30v30H0zM30%2030h30v30H30z%22/%3E%3C/g%3E%3C/g%3E%3C/svg%3E')] opacity-20"></div>
        </div>
        
        {/* Hero Content */}
        <div className="relative z-10 text-center max-w-4xl mx-auto px-4">
          <h1 className="text-5xl md:text-7xl lg:text-8xl font-playfair font-bold mb-6 animate-fade-in">
            <span className="text-gradient">Style.</span>{" "}
            <span className="text-white">Precision.</span>{" "}
            <span className="text-gradient">Power.</span>
          </h1>
          
          <p className="text-xl md:text-2xl text-gray-300 mb-12 max-w-2xl mx-auto animate-fade-in">
            Where modern style meets surgical precision
          </p>
          
          <Button 
            asChild
            size="lg"
            className="bg-gold hover:bg-gold-dark text-black font-semibold px-12 py-4 text-lg hover-lift animate-fade-in golden-glow"
          >
            <Link to="/booking">Book Your Cut</Link>
          </Button>
        </div>

        {/* Scroll Indicator */}
        <div className="absolute bottom-8 left-1/2 transform -translate-x-1/2 animate-bounce">
          <div className="w-px h-16 bg-gradient-to-b from-gold to-transparent"></div>
        </div>
      </section>

      {/* About Section */}
      <section className="py-32 max-w-4xl mx-auto px-4 text-center">
        <div className="animate-fade-in">
          <h2 className="text-4xl md:text-5xl font-playfair font-bold text-gold mb-8">
            Crafted for Excellence
          </h2>
          <p className="text-xl text-gray-300 leading-relaxed max-w-3xl mx-auto">
            At Precise Point, we don't just cut hair — we sculpt confidence. 
            Every snip is calculated, every fade is flawless, every client leaves 
            with the power that comes from looking their absolute best.
          </p>
        </div>
      </section>

      {/* Quick Services Preview */}
      <section className="py-32 bg-jet-light">
        <div className="max-w-7xl mx-auto px-4">
          <h2 className="text-4xl md:text-5xl font-playfair font-bold text-center text-gold mb-16">
            Our Signature Services
          </h2>
          
          <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-4 gap-8">
            {[
              { title: "Precision Cuts", description: "Architectural styling with razor-sharp precision" },
              { title: "Beard Sculpting", description: "Master-crafted beard design and maintenance" },
              { title: "Perfect Fades", description: "Seamless transitions that define excellence" },
              { title: "Hot Towel Shaves", description: "Traditional luxury meets modern technique" }
            ].map((service, index) => (
              <div 
                key={service.title}
                className="bg-black p-8 hover-lift group cursor-pointer border border-gray-800 hover:border-gold/50 transition-all duration-300"
                style={{ animationDelay: `${index * 0.1}s` }}
              >
                <h3 className="text-xl font-playfair font-bold text-gold mb-4 group-hover:text-gold-light transition-colors">
                  {service.title}
                </h3>
                <p className="text-gray-300 group-hover:text-white transition-colors">
                  {service.description}
                </p>
              </div>
            ))}
          </div>
          
          <div className="text-center mt-12">
            <Button 
              asChild
              variant="outline"
              className="border-gold text-gold hover:bg-gold hover:text-black font-semibold px-8 py-3"
            >
              <Link to="/services">View All Services</Link>
            </Button>
          </div>
        </div>
      </section>

      <Footer />
    </div>
  );
};

export default Index;
