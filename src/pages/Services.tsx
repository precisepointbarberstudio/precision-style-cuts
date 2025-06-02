import Navigation from "@/components/Navigation";
import Footer from "@/components/Footer";
import { Button } from "@/components/ui/button";

const Services = () => {
  const services = [
    {
      id: "precision-cuts",
      title: "Precision Cuts",
      description: "Architectural styling with razor-sharp precision",
      price: "$85",
      features: ["Consultation & Analysis", "Custom Cut Design", "Style Finishing", "Product Recommendation"]
    },
    {
      id: "beard-sculpting",
      title: "Beard Sculpting",
      description: "Master-crafted beard design and maintenance",
      price: "$65",
      features: ["Beard Assessment", "Precision Trimming", "Shape Design", "Conditioning Treatment"]
    },
    {
      id: "perfect-fades",
      title: "Perfect Fades",
      description: "Seamless transitions that define excellence",
      price: "$75",
      features: ["Fade Consultation", "Precision Blending", "Edge Refinement", "Style Completion"]
    },
    {
      id: "hot-towel-shaves",
      title: "Hot Towel Shaves",
      description: "Traditional luxury meets modern technique",
      price: "$95",
      features: ["Pre-Shave Treatment", "Hot Towel Application", "Premium Razor Shave", "Post-Shave Care"]
    }
  ];

  return (
    <div className="min-h-screen bg-black text-white">
      <Navigation />
      
      {/* Hero Section */}
      <section className="pt-32 pb-20 text-center">
        <div className="max-w-4xl mx-auto px-4">
          <h1 className="text-5xl md:text-6xl font-playfair font-bold text-gold mb-6 animate-fade-in">
            Our Services
          </h1>
          <p className="text-xl text-gray-300 animate-fade-in max-w-2xl mx-auto">
            Each service is a masterpiece of precision, designed to elevate your style to new heights
          </p>
        </div>
      </section>

      {/* Services Grid */}
      <section className="py-20">
        <div className="max-w-7xl mx-auto px-4">
          <div className="grid grid-cols-1 md:grid-cols-2 gap-12">
            {services.map((service, index) => (
              <div
                key={service.id}
                className="relative bg-jet-light p-12 hover-lift border border-gray-800 hover:border-gold/50 transition-all duration-500 group"
                style={{ animationDelay: `${index * 0.1}s` }}
              >
                {/* Service Header */}
                <div className="mb-8">
                  <h3 className="text-3xl font-playfair font-bold text-gold mb-4 group-hover:text-gold-light transition-colors">
                    {service.title}
                  </h3>
                  <p className="text-gray-300 text-lg group-hover:text-white transition-colors">
                    {service.description}
                  </p>
                </div>

                {/* Price and Features - Always Visible */}
                <div className="border-t border-gold/30 pt-6">
                  <div className="flex justify-between items-center mb-6">
                    <span className="text-2xl font-playfair font-bold text-gold">
                      {service.price}
                    </span>
                    <span className="text-gray-400">Starting from</span>
                  </div>
                  
                  {/* Features */}
                  <ul className="space-y-3">
                    {service.features.map((feature, idx) => (
                      <li key={idx} className="text-gray-300 flex items-center group-hover:text-white transition-colors">
                        <div className="w-2 h-2 bg-gold rounded-full mr-3"></div>
                        {feature}
                      </li>
                    ))}
                  </ul>
                </div>

                {/* Hover Glow Effect */}
                <div className="absolute inset-0 bg-gradient-to-br from-gold/5 to-transparent opacity-0 group-hover:opacity-100 transition-opacity duration-500 pointer-events-none"></div>
              </div>
            ))}
          </div>
        </div>
      </section>

      {/* CTA Section */}
      <section className="py-32 text-center">
        <div className="max-w-4xl mx-auto px-4">
          <h2 className="text-4xl md:text-5xl font-playfair font-bold text-gold mb-8">
            Ready to Experience Excellence?
          </h2>
          <p className="text-xl text-gray-300 mb-12 max-w-2xl mx-auto">
            Book your appointment and discover what precision craftsmanship can do for your style
          </p>
          
          <Button 
            asChild
            size="lg"
            className="bg-gold hover:bg-gold-dark text-black font-semibold px-12 py-4 text-lg hover-lift golden-glow"
          >
            <a href="https://getsquire.com/discover/barbershop/precise-point-barber-studio-dartmouth?hl=en-CA&gei=0CI9aJzcGfqe5NoPopiVqAg&gsas=1&ahbb=1&rwg_token=ACgRB3e9WsBMuE6yvBY3ALSq5KHnJ9ICr0NDBeYAM0uCAezR_Z2F-jZh1f77md8Bh2JB5OnK1uGhYV710fbKBmz1GD7MueULBQ%3D%3D" target="_blank" rel="noopener noreferrer">Book Your Experience</a>
          </Button>
        </div>
      </section>

      <Footer />
    </div>
  );
};

export default Services;
