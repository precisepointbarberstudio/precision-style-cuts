import Navigation from "@/components/Navigation";
import Footer from "@/components/Footer";
import { Button } from "@/components/ui/button";

const Services = () => {
  const services = [
    {
      id: "haircut",
      title: "HAIRCUT",
      duration: "45min",
      price: "$50"
    },
    {
      id: "beard-trim-addon",
      title: "Beard Trim Added to Your Haircut",
      duration: "25 – 30 mins",
      price: "$10 – $15"
    },
    {
      id: "haircut-youth",
      title: "Haircut Ages 16 & Under",
      duration: "45min",
      price: "$40"
    },
    {
      id: "buzzcut",
      title: "BUZZCUT",
      duration: "35min",
      price: "$35"
    },
    {
      id: "beard-trim-only",
      title: "Beard Trim Only",
      duration: "25min",
      price: "$35"
    },
    {
      id: "apprentice-haircut",
      title: "Apprentice HAIRCUT",
      duration: "1h",
      price: "$30"
    }
  ];

  const bookingUrl = "https://getsquire.com/discover/barbershop/precise-point-barber-studio-dartmouth?hl=en-CA&gei=0CI9aJzcGfqe5NoPopiVqAg&gsas=1&ahbb=1&rwg_token=ACgRB3e9WsBMuE6yvBY3ALSq5KHnJ9ICr0NDBeYAM0uCAezR_Z2F-jZh1f77md8Bh2JB5OnK1uGhYV710fbKBmz1GD7MueULBQ%3D%3D";

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
            Professional barbering services with precision and style
          </p>
        </div>
      </section>

      {/* Services List */}
      <section className="py-20">
        <div className="max-w-4xl mx-auto px-4">
          <div className="space-y-8">
            {services.map((service, index) => (
              <a
                key={service.id}
                href={bookingUrl}
                className="block"
                target="_blank"
                rel="noopener noreferrer"
              >
                <div
                  className="rounded-2xl bg-jet-light p-8 border border-white/10 hover:border-white/20 hover:bg-[#1a1a1a] transition-colors duration-300 cursor-pointer"
                  style={{ animationDelay: `${index * 0.1}s` }}
                >
                  <div className="flex flex-col md:flex-row md:items-center md:justify-between">
                    <div className="mb-4 md:mb-0">
                      <h3 className="text-2xl font-playfair font-bold text-gold mb-2">
                        {service.title}
                      </h3>
                      <p className="text-sm uppercase tracking-widest text-gray-400">
                        {service.duration}
                      </p>
                    </div>
                    <div className="text-right">
                      <span className="text-3xl font-playfair font-bold text-gold">
                        {service.price}
                      </span>
                    </div>
                  </div>
                </div>
              </a>
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
            <a href={bookingUrl}>Book Your Experience</a>
          </Button>
        </div>
      </section>

      <Footer />
    </div>
  );
};

export default Services;
