import { Link } from "react-router-dom";
import { Button } from "@/components/ui/button";
import Navigation from "@/components/Navigation";
import Footer from "@/components/Footer";
import homeServices from "@/data/homeServices.json";

const Index = () => {
  return (
    <div className="min-h-screen bg-black text-white">
      <Navigation />
      
      {/* Hero Section */}
      <section className="relative h-screen flex items-center justify-center overflow-hidden">
        {/* Barber-themed backdrop: matte black + faint gold pinstripes */}
        <div className="absolute inset-0 hero-bg"></div>
        {/* Gold spotlight glow behind the headline */}
        <div className="absolute left-1/2 top-[42%] h-[65vh] w-[85vw] max-w-3xl -translate-x-1/2 -translate-y-1/2 hero-glow pointer-events-none"></div>
        
        {/* Hero Content */}
        <div className="relative z-10 text-center max-w-4xl mx-auto px-4">
          <h1 className="text-5xl md:text-7xl lg:text-8xl font-playfair font-bold mb-6 animate-fade-in">
            {" "}
            <span className="text-white mx-0 px-0 text-5xl">PRECISE CUT </span>{" "}
            <span className="text-gradient font-extrabold text-5xl">MODERN STYLE</span>
          </h1>
          
          <p className="text-xl md:text-2xl text-gray-300 mb-12 max-w-2xl mx-auto animate-fade-in">Where modern style meets surgical precision</p>
          
          <Button asChild size="lg" className="bg-gold hover:bg-gold-dark text-black font-semibold px-12 py-4 text-lg hover-lift animate-fade-in golden-glow">
            <a href="https://getsquire.com/discover/barbershop/precise-point-barber-studio-dartmouth?hl=en-CA&gei=0CI9aJzcGfqe5NoPopiVqAg&gsas=1&ahbb=1&rwg_token=ACgRB3e9WsBMuE6yvBY3ALSq5KHnJ9ICr0NDBeYAM0uCAezR_Z2F-jZh1f77md8Bh2JB5OnK1uGhYV710fbKBmz1GD7MueULBQ%3D%3D" target="_blank" rel="noopener noreferrer">Book Your Experience</a>
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
            {homeServices.items.map((service, index) => (
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
