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
            {" "}
            <span className="text-white mx-0 px-0 text-7xl">Precise cut,</span>{" "}
            <span className="text-gradient font-extrabold text-7xl">Modern style</span>
          </h1>
          
          <p className="text-xl md:text-2xl text-gray-300 mb-12 max-w-2xl mx-auto animate-fade-in">Where modern style meets precision</p>
          
          <Button asChild size="lg" className="bg-gold hover:bg-gold-dark text-black font-semibold px-12 py-4 text-lg hover-lift animate-fade-in golden-glow">
            <a href="https://getsquire.com/discover/barbershop/precise-point-barber-studio-dartmouth?hl=en-CA&gei=0CI9aJzcGfqe5NoPopiVqAg&gsas=1&ahbb=1&rwg_token=ACgRB3e9WsBMuE6yvBY3ALSq5KHnJ9ICr0NDBeYAM0uCAezR_Z2F-jZh1f77md8Bh2JB5OnK1uGhYV710fbKBmz1GD7MueULBQ%3D%3D" target="_blank" rel="noopener noreferrer">Book Your Cut</a>
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

      {/* Signature Services */}
      <section className="py-32 bg-jet-light">
        <div className="max-w-7xl mx-auto px-4">
          <h2 className="text-4xl md:text-5xl font-playfair font-bold text-center text-gold mb-20">
            Our Signature Services
          </h2>
          
          <div className="grid grid-cols-1 lg:grid-cols-3 gap-12">
            {[
              { 
                title: "Precision Cuts", 
                description: "Architectural styling with razor-sharp precision that defines your unique character",
                image: "https://images.unsplash.com/photo-1621605815971-fbc98d665033?w=400&h=300&fit=crop&q=80"
              },
              { 
                title: "Master Fades", 
                description: "Seamless transitions crafted with surgical precision for the modern gentleman",
                image: "https://images.unsplash.com/photo-1599351431202-1e0f0137899a?w=400&h=300&fit=crop&q=80"
              },
              { 
                title: "Beard Sculpting", 
                description: "Transform your facial hair into a work of art with our master-level expertise",
                image: "https://images.unsplash.com/photo-1503951914875-452162b0f3f1?w=400&h=300&fit=crop&q=80"
              }
            ].map((service, index) => (
              <div 
                key={service.title}
                className="group relative overflow-hidden bg-black border border-gray-800 hover:border-gold/50 transition-all duration-500 hover-lift"
                style={{ animationDelay: `${index * 0.2}s` }}
              >
                {/* Service Image */}
                <div className="relative h-64 overflow-hidden">
                  <img 
                    src={service.image} 
                    alt={service.title}
                    className="w-full h-full object-cover transition-transform duration-700 group-hover:scale-110"
                  />
                  <div className="absolute inset-0 bg-gradient-to-t from-black via-black/50 to-transparent"></div>
                </div>
                
                {/* Service Content */}
                <div className="p-8">
                  <h3 className="text-2xl font-playfair font-bold text-gold mb-4 group-hover:text-gold-light transition-colors">
                    {service.title}
                  </h3>
                  <p className="text-gray-300 group-hover:text-white transition-colors leading-relaxed">
                    {service.description}
                  </p>
                </div>

                {/* Hover Glow Effect */}
                <div className="absolute inset-0 bg-gradient-to-br from-gold/5 to-transparent opacity-0 group-hover:opacity-100 transition-opacity duration-500 pointer-events-none"></div>
              </div>
            ))}
          </div>
          
          <div className="text-center mt-16">
            <Button asChild variant="outline" className="border-gold text-gold hover:bg-gold hover:text-black font-semibold px-8 py-3">
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
