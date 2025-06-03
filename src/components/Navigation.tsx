import { useState } from "react";
import { Link, useLocation } from "react-router-dom";
import { Menu, X } from "lucide-react";
import { Button } from "@/components/ui/button";
const Navigation = () => {
  const [isOpen, setIsOpen] = useState(false);
  const location = useLocation();
  const navItems = [{
    name: "Home",
    path: "/"
  }, {
    name: "Services",
    path: "/services"
  }, {
    name: "Gallery",
    path: "/gallery"
  }, {
    name: "About",
    path: "/about"
  }, {
    name: "Contact",
    path: "/contact"
  }];
  const isActive = (path: string) => location.pathname === path;
  return <nav className="fixed top-0 left-0 right-0 z-50 bg-black/90 backdrop-blur-sm">
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
        <div className="flex justify-between items-center h-38">
          {/* Logo */}
          <Link to="/" className="flex items-center">
            <img src="/lovable-uploads/4df19e55-f560-4ac7-a5f3-833e2da81afd.png" alt="Precise Point Barber Studio" className="h-20 w-auto object-contain" />
          </Link>

          {/* Desktop Navigation */}
          <div className="hidden md:flex items-center space-x-8">
            {navItems.map(item => <Link key={item.name} to={item.path} className={`text-sm font-medium transition-colors duration-200 ${isActive(item.path) ? "text-gold" : "text-white hover:text-gold"}`}>
                {item.name}
              </Link>)}
            <Button asChild className="bg-gold hover:bg-gold-dark text-black font-semibold">
              <a href="https://getsquire.com/discover/barbershop/precise-point-barber-studio-dartmouth?hl=en-CA&gei=0CI9aJzcGfqe5NoPopiVqAg&gsas=1&ahbb=1&rwg_token=ACgRB3e9WsBMuE6yvBY3ALSq5KHnJ9ICr0NDBeYAM0uCAezR_Z2F-jZh1f77md8Bh2JB5OnK1uGhYV710fbKBmz1GD7MueULBQ%3D%3D">
                Book Now
              </a>
            </Button>
          </div>

          {/* Mobile menu button */}
          <div className="md:hidden">
            <button onClick={() => setIsOpen(!isOpen)} className="text-white hover:text-gold transition-colors">
              {isOpen ? <X size={24} /> : <Menu size={24} />}
            </button>
          </div>
        </div>

        {/* Mobile Navigation */}
        {isOpen && <div className="md:hidden absolute top-24 left-0 right-0 bg-black/95 backdrop-blur-sm border-t border-gold/20">
            <div className="px-4 py-6 space-y-4">
              {navItems.map(item => <Link key={item.name} to={item.path} onClick={() => setIsOpen(false)} className={`block text-lg font-medium transition-colors duration-200 ${isActive(item.path) ? "text-gold" : "text-white hover:text-gold"}`}>
                  {item.name}
                </Link>)}
              <Button asChild className="w-full bg-gold hover:bg-gold-dark text-black font-semibold mt-4">
                <a href="https://getsquire.com/discover/barbershop/precise-point-barber-studio-dartmouth?hl=en-CA&gei=0CI9aJzcGfqe5NoPopiVqAg&gsas=1&ahbb=1&rwg_token=ACgRB3e9WsBMuE6yvBY3ALSq5KHnJ9ICr0NDBeYAM0uCAezR_Z2F-jZh1f77md8Bh2JB5OnK1uGhYV710fbKBmz1GD7MueULBQ%3D%3D" onClick={() => setIsOpen(false)}>
                  Book Now
                </a>
              </Button>
            </div>
          </div>}
      </div>
    </nav>;
};
export default Navigation;