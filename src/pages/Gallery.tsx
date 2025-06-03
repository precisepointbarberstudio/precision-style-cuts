import Navigation from "@/components/Navigation";
import Footer from "@/components/Footer";
import { useState } from "react";
import { Link } from "react-router-dom";
import { Button } from "@/components/ui/button";

const Gallery = () => {
  const [selectedFilter, setSelectedFilter] = useState("all");

  const filters = [
    { id: "all", label: "All Styles" },
    { id: "fades", label: "Fades" },
    { id: "beards", label: "Beard Work" }
  ];

  const galleryItems = [
    { id: 1, category: "beards", title: "Beard Sculpting", image: "/imgs/galleryPic1.jpg" },
    { id: 2, category: "fades", title: "Premium Fade", image: "/imgs/galleryPic2.jpg" },
    { id: 3, category: "beards", title: "Beard Sculpting", image: "/imgs/galleryPic3.jpg" },
    { id: 4, category: "beards", title: "Beard Sculpting", image: "/imgs/galleryPic4.jpg" },
    { id: 5, category: "fades", title: "Premium Fade", image: "/imgs/galleryPic5.jpg" },
    { id: 6, category: "fades", title: "Premium Fade", image: "/imgs/galleryPic6.jpg" },
    { id: 7, category: "fades", title: "Premium Fade", image: "/imgs/galleryPic8.jpg" },
    { id: 8, category: "fades", title: "Premium Fade", image: "/imgs/galleryPic9.jpg" },
    { id: 9, category: "fades", title: "Premium Fade", image: "/imgs/galleryPic10.jpg" },
    { id: 10, category: "fades", title: "Premium Fade", image: "/imgs/galleryPic11.jpg" },
    { id: 11, category: "fades", title: "Premium Fade", image: "/imgs/galleryPic12.jpg" },
    { id: 12, category: "fades", title: "Premium Fade", image: "/imgs/galleryPic13.jpg" }
  ];

  const filteredItems = selectedFilter === "all" 
    ? galleryItems 
    : galleryItems.filter(item => item.category === selectedFilter);

  return (
    <div className="min-h-screen bg-black text-white">
      <Navigation />
      
      {/* Hero Section */}
      <section className="pt-32 pb-20 text-center">
        <div className="max-w-4xl mx-auto px-4">
          <h1 className="text-5xl md:text-6xl font-playfair font-bold text-gold mb-6 animate-fade-in">
            Our Gallery
          </h1>
          <p className="text-xl text-gray-300 animate-fade-in max-w-2xl mx-auto">
            Witness the artistry and precision that defines every cut, fade, and style we create
          </p>
        </div>
      </section>

      {/* Filter Navigation */}
      <section className="py-8">
        <div className="max-w-7xl mx-auto px-4">
          <div className="flex justify-center">
            <div className="bg-jet-light p-2 rounded-lg border border-gray-800">
              <div className="flex space-x-1">
                {filters.map((filter) => (
                  <button
                    key={filter.id}
                    onClick={() => setSelectedFilter(filter.id)}
                    className={`px-6 py-3 font-medium transition-all duration-300 ${
                      selectedFilter === filter.id
                        ? "bg-gold text-black"
                        : "text-gray-300 hover:text-gold hover:bg-gray-800"
                    }`}
                  >
                    {filter.label}
                  </button>
                ))}
              </div>
            </div>
          </div>
        </div>
      </section>

      {/* Gallery Grid */}
      <section className="py-20">
        <div className="max-w-7xl mx-auto px-4">
          <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 xl:grid-cols-4 gap-6">
            {filteredItems.map((item, index) => (
              <div
                key={item.id}
                className="group relative overflow-hidden bg-jet-light aspect-square hover-lift"
                style={{ animationDelay: `${index * 0.1}s` }}
              >
                <img
                  src={item.image}
                  alt={item.title}
                  className="w-full h-full object-cover transition-all duration-500 group-hover:scale-110 filter grayscale group-hover:grayscale-0"
                />
                
                {/* Overlay */}
                <div className="absolute inset-0 bg-black/60 opacity-0 group-hover:opacity-100 transition-opacity duration-300 flex items-center justify-center">
                  <div className="text-center">
                    <h3 className="text-xl font-playfair font-bold text-gold mb-2">
                      {item.title}
                    </h3>
                    <div className="w-12 h-px bg-gold mx-auto"></div>
                  </div>
                </div>

                {/* Golden Border Glow on Hover */}
                <div className="absolute inset-0 border-2 border-transparent group-hover:border-gold/50 transition-all duration-300 pointer-events-none"></div>
              </div>
            ))}
          </div>
        </div>
      </section>

      {/* CTA Section */}
      <section className="py-32 text-center bg-jet-light">
        <div className="max-w-4xl mx-auto px-4">
          <h2 className="text-4xl md:text-5xl font-playfair font-bold text-gold mb-8">
            Ready for Your Transformation?
          </h2>
          <p className="text-xl text-gray-300 mb-12 max-w-2xl mx-auto">
            Join our gallery of satisfied clients and experience the precision that sets us apart
          </p>
          
          <div className="flex flex-col sm:flex-row gap-4 justify-center">
            <Button 
              asChild
              className="bg-gold hover:bg-gold-dark text-black font-semibold px-8 py-3 hover-lift golden-glow transition-all duration-300"
            >
              <a href="https://getsquire.com/discover/barbershop/precise-point-barber-studio-dartmouth?hl=en-CA&gei=0CI9aJzcGfqe5NoPopiVqAg&gsas=1&ahbb=1&rwg_token=ACgRB3e9WsBMuE6yvBY3ALSq5KHnJ9ICr0NDBeYAM0uCAezR_Z2F-jZh1f77md8Bh2JB5OnK1uGhYV710fbKBmz1GD7MueULBQ%3D%3D">Book Your Session</a>
            </Button>
            <Button 
              asChild
              variant="outline"
              className="border border-gold text-gold hover:bg-gold hover:text-black font-semibold px-8 py-3 transition-all duration-300"
            >
              <Link to="/services">View Services</Link>
            </Button>
          </div>
        </div>
      </section>

      <Footer />
    </div>
  );
};

export default Gallery;
