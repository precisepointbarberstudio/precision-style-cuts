
import Navigation from "@/components/Navigation";
import Footer from "@/components/Footer";
import { Button } from "@/components/ui/button";

const About = () => {
  return (
    <div className="min-h-screen bg-black text-white">
      <Navigation />
      
      {/* Hero Section */}
      <section className="pt-32 pb-20 text-center">
        <div className="max-w-4xl mx-auto px-4">
          <h1 className="text-5xl md:text-6xl font-playfair font-bold text-gold mb-6 animate-fade-in">
            About Us
          </h1>
          <p className="text-xl text-gray-300 animate-fade-in max-w-2xl mx-auto">
            Where tradition meets innovation, and every cut is a masterpiece
          </p>
        </div>
      </section>

      {/* Story Section */}
      <section className="py-20">
        <div className="max-w-6xl mx-auto px-4">
          <div className="grid grid-cols-1 lg:grid-cols-2 gap-16 items-center">
            <div className="animate-fade-in">
              <h2 className="text-4xl font-playfair font-bold text-gold mb-8">
                Our Story
              </h2>
              <div className="space-y-6 text-lg text-gray-300 leading-relaxed">
                <p>
                  Founded on the principle that every man deserves to look and feel his absolute best, 
                  Precise Point Barber Studio represents the pinnacle of modern barbering excellence.
                </p>
                <p>
                  We've cultivated a space where surgical precision meets artistic vision, 
                  where traditional craftsmanship embraces contemporary style. Every cut, 
                  every shave, every detail is executed with the meticulous attention that 
                  has become our signature.
                </p>
                <p>
                  Our commitment extends beyond hair—we craft confidence, sculpt character, 
                  and deliver an experience that transforms not just how you look, but how you feel.
                </p>
              </div>
            </div>
            
            <div className="animate-fade-in">
              <div className="relative">
                <div className="aspect-[4/5] bg-jet-light border border-gold/30 p-8">
                  <div className="w-full h-full bg-gradient-to-br from-gold/10 to-transparent flex items-center justify-center">
                    <div className="text-center">
                      <div className="text-6xl font-playfair font-bold text-gold mb-4">15+</div>
                      <div className="text-lg text-gray-300">Years of Excellence</div>
                    </div>
                  </div>
                </div>
                <div className="absolute -bottom-4 -right-4 w-24 h-24 border border-gold/50"></div>
              </div>
            </div>
          </div>
        </div>
      </section>

      {/* Divider */}
      <div className="w-full h-px bg-gradient-to-r from-transparent via-gold to-transparent my-20"></div>

      {/* Barber Section */}
      <section className="py-20">
        <div className="max-w-4xl mx-auto px-4">
          <div className="text-center mb-16">
            <h2 className="text-4xl md:text-5xl font-playfair font-bold text-gold mb-8">
              Meet Our Master
            </h2>
            <p className="text-xl text-gray-300 max-w-2xl mx-auto">
              Years of experience and a passion for perfection in every service
            </p>
          </div>

          <div className="flex justify-center">
            <div className="group animate-fade-in hover-lift max-w-md">
              <div className="relative overflow-hidden mb-6">
                <img
                  src="https://images.unsplash.com/photo-1472099645785-5658abf4ff4e?w=400&h=500&fit=crop&crop=face"
                  alt="Nate J."
                  className="w-full aspect-[4/5] object-cover filter grayscale group-hover:grayscale-0 transition-all duration-500"
                />
                <div className="absolute inset-0 bg-gradient-to-t from-black/80 via-transparent to-transparent opacity-0 group-hover:opacity-100 transition-opacity duration-300"></div>
                <div className="absolute bottom-0 left-0 right-0 p-6 transform translate-y-full group-hover:translate-y-0 transition-transform duration-300">
                  <p className="text-white text-sm leading-relaxed">
                    Master barber with precision cutting techniques and artistic vision
                  </p>
                </div>
              </div>

              <div className="text-center">
                <h3 className="text-2xl font-playfair font-bold text-gold mb-2">
                  Nate J.
                </h3>
                <p className="text-gray-300 mb-1">Master Barber</p>
                <p className="text-sm text-gray-400">Expert in All Services</p>
              </div>
            </div>
          </div>
        </div>
      </section>

      {/* Values Section */}
      <section className="py-32 bg-jet-light">
        <div className="max-w-6xl mx-auto px-4">
          <div className="text-center mb-16">
            <h2 className="text-4xl md:text-5xl font-playfair font-bold text-gold mb-8">
              Our Values
            </h2>
          </div>

          <div className="grid grid-cols-1 md:grid-cols-3 gap-12">
            {[
              {
                title: "Precision",
                description: "Every cut is calculated, every detail matters. We believe in surgical precision applied to the art of barbering."
              },
              {
                title: "Excellence",
                description: "We never compromise on quality. From our tools to our techniques, everything reflects our commitment to excellence."
              },
              {
                title: "Innovation",
                description: "While respecting traditional craftsmanship, we continuously evolve our methods to stay at the forefront of style."
              }
            ].map((value, index) => (
              <div
                key={value.title}
                className="text-center animate-fade-in"
                style={{ animationDelay: `${index * 0.2}s` }}
              >
                <div className="w-16 h-16 bg-gold rounded-full flex items-center justify-center mx-auto mb-6">
                  <div className="w-6 h-6 bg-black rounded-full"></div>
                </div>
                <h3 className="text-2xl font-playfair font-bold text-gold mb-4">
                  {value.title}
                </h3>
                <p className="text-gray-300 leading-relaxed">
                  {value.description}
                </p>
              </div>
            ))}
          </div>
        </div>
      </section>

      {/* CTA Section */}
      <section className="py-32 text-center">
        <div className="max-w-4xl mx-auto px-4">
          <h2 className="text-4xl md:text-5xl font-playfair font-bold text-gold mb-8">
            Experience the Difference
          </h2>
          <p className="text-xl text-gray-300 mb-12 max-w-2xl mx-auto">
            Join the ranks of discerning gentlemen who trust us with their style
          </p>
          
          <Button 
            asChild
            size="lg"
            className="bg-gold hover:bg-gold-dark text-black font-semibold px-12 py-4 text-lg hover-lift golden-glow"
          >
            <a href="https://getsquire.com/discover/barbershop/precise-point-barber-studio-dartmouth?hl=en-CA&gei=0CI9aJzcGfqe5NoPopiVqAg&gsas=1&ahbb=1&rwg_token=ACgRB3e9WsBMuE6yvBY3ALSq5KHnJ9ICr0NDBeYAM0uCAezR_Z2F-jZh1f77md8Bh2JB5OnK1uGhYV710fbKBmz1GD7MueULBQ%3D%3D">Book Your Experience</a>
            </Button>
        </div>
      </section>

      <Footer />
    </div>
  );
};

export default About;
