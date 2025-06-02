
import { useState } from "react";
import Navigation from "@/components/Navigation";
import Footer from "@/components/Footer";
import { Button } from "@/components/ui/button";
import { Input } from "@/components/ui/input";
import { Label } from "@/components/ui/label";
import { Select, SelectContent, SelectItem, SelectTrigger, SelectValue } from "@/components/ui/select";
import { Calendar } from "@/components/ui/calendar";
import { Popover, PopoverContent, PopoverTrigger } from "@/components/ui/popover";
import { CalendarIcon, Check } from "lucide-react";
import { format } from "date-fns";
import { cn } from "@/lib/utils";
import { toast } from "@/hooks/use-toast";

const Booking = () => {
  const [date, setDate] = useState<Date>();
  const [selectedService, setSelectedService] = useState<string>("");
  const [name, setName] = useState("");
  const [email, setEmail] = useState("");
  const [phone, setPhone] = useState("");
  const [step, setStep] = useState(1);

  const services = [
    { value: "precision-cuts", label: "Precision Cuts", price: "$85" },
    { value: "beard-sculpting", label: "Beard Sculpting", price: "$65" },
    { value: "perfect-fades", label: "Perfect Fades", price: "$75" },
    { value: "hot-towel-shaves", label: "Hot Towel Shaves", price: "$95" }
  ];

  const timeSlots = [
    "9:00 AM", "10:00 AM", "11:00 AM", "12:00 PM",
    "1:00 PM", "2:00 PM", "3:00 PM", "4:00 PM",
    "5:00 PM", "6:00 PM", "7:00 PM"
  ];

  const [selectedTime, setSelectedTime] = useState("");

  const handleSubmit = (e: React.FormEvent) => {
    e.preventDefault();
    
    if (!name || !email || !phone || !selectedService || !date || !selectedTime) {
      toast({
        title: "Please fill in all fields",
        description: "All information is required to complete your booking.",
        variant: "destructive"
      });
      return;
    }

    setStep(4);
    toast({
      title: "Booking Confirmed!",
      description: "Your appointment has been scheduled. We'll send you a confirmation email shortly.",
    });
  };

  if (step === 4) {
    return (
      <div className="min-h-screen bg-black text-white">
        <Navigation />
        
        <section className="pt-32 pb-20 min-h-screen flex items-center justify-center">
          <div className="max-w-2xl mx-auto px-4 text-center">
            <div className="bg-jet-light p-12 border border-gold/30 animate-fade-in">
              <div className="w-20 h-20 bg-gold rounded-full flex items-center justify-center mx-auto mb-8">
                <Check size={40} className="text-black" />
              </div>
              
              <h1 className="text-4xl font-playfair font-bold text-gold mb-6">
                Booking Confirmed
              </h1>
              
              <div className="space-y-4 text-gray-300 mb-8">
                <p><strong className="text-white">Service:</strong> {services.find(s => s.value === selectedService)?.label}</p>
                <p><strong className="text-white">Date:</strong> {date ? format(date, "PPP") : ""}</p>
                <p><strong className="text-white">Time:</strong> {selectedTime}</p>
                <p><strong className="text-white">Name:</strong> {name}</p>
              </div>
              
              <p className="text-lg text-gray-300 mb-8">
                We'll send you a confirmation email with all the details. 
                We look forward to crafting your perfect style.
              </p>
              
              <Button 
                asChild
                className="bg-gold hover:bg-gold-dark text-black font-semibold"
              >
                <a href="/">Return Home</a>
              </Button>
            </div>
          </div>
        </section>
        
        <Footer />
      </div>
    );
  }

  return (
    <div className="min-h-screen bg-black text-white">
      <Navigation />
      
      {/* Hero Section */}
      <section className="pt-32 pb-12 text-center">
        <div className="max-w-4xl mx-auto px-4">
          <h1 className="text-5xl md:text-6xl font-playfair font-bold text-gold mb-6 animate-fade-in">
            Book Your Experience
          </h1>
          <p className="text-xl text-gray-300 animate-fade-in">
            Reserve your appointment for precision craftsmanship
          </p>
        </div>
      </section>

      {/* Progress Indicator */}
      <div className="max-w-2xl mx-auto px-4 mb-12">
        <div className="flex items-center justify-center space-x-4">
          {[1, 2, 3].map((num) => (
            <div key={num} className="flex items-center">
              <div className={`w-8 h-8 rounded-full flex items-center justify-center text-sm font-semibold ${
                step >= num ? 'bg-gold text-black' : 'bg-gray-700 text-gray-400'
              }`}>
                {num}
              </div>
              {num < 3 && (
                <div className={`w-16 h-px ${step > num ? 'bg-gold' : 'bg-gray-700'}`}></div>
              )}
            </div>
          ))}
        </div>
        <div className="flex justify-between mt-2 text-sm text-gray-400">
          <span>Details</span>
          <span>Date & Time</span>
          <span>Confirm</span>
        </div>
      </div>

      {/* Booking Form */}
      <section className="pb-20">
        <div className="max-w-2xl mx-auto px-4">
          <form onSubmit={handleSubmit} className="bg-jet-light p-8 md:p-12 border border-gray-800">
            
            {step === 1 && (
              <div className="space-y-8 animate-fade-in">
                <h2 className="text-2xl font-playfair font-bold text-gold mb-8">Your Information</h2>
                
                <div className="space-y-2">
                  <Label htmlFor="name" className="text-gold">Full Name</Label>
                  <Input
                    id="name"
                    value={name}
                    onChange={(e) => setName(e.target.value)}
                    className="bg-black border-gray-700 focus:border-gold text-white"
                    placeholder="Enter your full name"
                  />
                </div>

                <div className="space-y-2">
                  <Label htmlFor="email" className="text-gold">Email</Label>
                  <Input
                    id="email"
                    type="email"
                    value={email}
                    onChange={(e) => setEmail(e.target.value)}
                    className="bg-black border-gray-700 focus:border-gold text-white"
                    placeholder="Enter your email"
                  />
                </div>

                <div className="space-y-2">
                  <Label htmlFor="phone" className="text-gold">Phone Number</Label>
                  <Input
                    id="phone"
                    value={phone}
                    onChange={(e) => setPhone(e.target.value)}
                    className="bg-black border-gray-700 focus:border-gold text-white"
                    placeholder="Enter your phone number"
                  />
                </div>

                <div className="space-y-2">
                  <Label className="text-gold">Select Service</Label>
                  <Select value={selectedService} onValueChange={setSelectedService}>
                    <SelectTrigger className="bg-black border-gray-700 focus:border-gold text-white">
                      <SelectValue placeholder="Choose your service" />
                    </SelectTrigger>
                    <SelectContent className="bg-black border-gray-700">
                      {services.map((service) => (
                        <SelectItem key={service.value} value={service.value} className="text-white hover:bg-gray-800">
                          <div className="flex justify-between w-full">
                            <span>{service.label}</span>
                            <span className="text-gold ml-4">{service.price}</span>
                          </div>
                        </SelectItem>
                      ))}
                    </SelectContent>
                  </Select>
                </div>

                <Button 
                  type="button"
                  onClick={() => setStep(2)}
                  disabled={!name || !email || !phone || !selectedService}
                  className="w-full bg-gold hover:bg-gold-dark text-black font-semibold"
                >
                  Next: Select Date & Time
                </Button>
              </div>
            )}

            {step === 2 && (
              <div className="space-y-8 animate-fade-in">
                <h2 className="text-2xl font-playfair font-bold text-gold mb-8">Choose Date & Time</h2>
                
                <div className="space-y-2">
                  <Label className="text-gold">Select Date</Label>
                  <Popover>
                    <PopoverTrigger asChild>
                      <Button
                        variant="outline"
                        className={cn(
                          "w-full justify-start text-left font-normal bg-black border-gray-700 hover:bg-gray-900",
                          !date && "text-muted-foreground"
                        )}
                      >
                        <CalendarIcon className="mr-2 h-4 w-4" />
                        {date ? format(date, "PPP") : <span>Pick a date</span>}
                      </Button>
                    </PopoverTrigger>
                    <PopoverContent className="w-auto p-0 bg-black border-gray-700" align="start">
                      <Calendar
                        mode="single"
                        selected={date}
                        onSelect={setDate}
                        disabled={(date) => date < new Date()}
                        initialFocus
                        className="pointer-events-auto"
                      />
                    </PopoverContent>
                  </Popover>
                </div>

                <div className="space-y-2">
                  <Label className="text-gold">Available Times</Label>
                  <div className="grid grid-cols-3 gap-3">
                    {timeSlots.map((time) => (
                      <Button
                        key={time}
                        type="button"
                        variant={selectedTime === time ? "default" : "outline"}
                        className={`${
                          selectedTime === time 
                            ? "bg-gold text-black hover:bg-gold-dark" 
                            : "bg-black border-gray-700 text-white hover:bg-gray-900"
                        }`}
                        onClick={() => setSelectedTime(time)}
                      >
                        {time}
                      </Button>
                    ))}
                  </div>
                </div>

                <div className="flex space-x-4">
                  <Button 
                    type="button"
                    variant="outline"
                    onClick={() => setStep(1)}
                    className="flex-1 border-gray-700 text-white hover:bg-gray-900"
                  >
                    Back
                  </Button>
                  <Button 
                    type="button"
                    onClick={() => setStep(3)}
                    disabled={!date || !selectedTime}
                    className="flex-1 bg-gold hover:bg-gold-dark text-black font-semibold"
                  >
                    Review Booking
                  </Button>
                </div>
              </div>
            )}

            {step === 3 && (
              <div className="space-y-8 animate-fade-in">
                <h2 className="text-2xl font-playfair font-bold text-gold mb-8">Confirm Your Booking</h2>
                
                <div className="bg-black p-6 space-y-4 border border-gray-700">
                  <div className="flex justify-between">
                    <span className="text-gray-300">Service:</span>
                    <span className="text-white">{services.find(s => s.value === selectedService)?.label}</span>
                  </div>
                  <div className="flex justify-between">
                    <span className="text-gray-300">Price:</span>
                    <span className="text-gold font-semibold">{services.find(s => s.value === selectedService)?.price}</span>
                  </div>
                  <div className="flex justify-between">
                    <span className="text-gray-300">Date:</span>
                    <span className="text-white">{date ? format(date, "PPP") : ""}</span>
                  </div>
                  <div className="flex justify-between">
                    <span className="text-gray-300">Time:</span>
                    <span className="text-white">{selectedTime}</span>
                  </div>
                  <div className="flex justify-between">
                    <span className="text-gray-300">Name:</span>
                    <span className="text-white">{name}</span>
                  </div>
                  <div className="flex justify-between">
                    <span className="text-gray-300">Email:</span>
                    <span className="text-white">{email}</span>
                  </div>
                </div>

                <div className="flex space-x-4">
                  <Button 
                    type="button"
                    variant="outline"
                    onClick={() => setStep(2)}
                    className="flex-1 border-gray-700 text-white hover:bg-gray-900"
                  >
                    Back
                  </Button>
                  <Button 
                    type="submit"
                    className="flex-1 bg-gold hover:bg-gold-dark text-black font-semibold"
                  >
                    Confirm Booking
                  </Button>
                </div>
              </div>
            )}
          </form>
        </div>
      </section>

      <Footer />
    </div>
  );
};

export default Booking;
