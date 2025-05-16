import React, { useState } from 'react';
import {
  Carousel,
  CarouselContent,
  CarouselItem,
  CarouselNext,
  CarouselPrevious,
  type CarouselApi
} from "@/components/ui/carousel";
import { motion, AnimatePresence } from "framer-motion";
import { Offer } from "@/types/services";
import { Scissors, Star, Award, Heart } from "lucide-react"; // Using available icons from lucide-react
import { handleBooking } from "@/utils/booking";

const offers: Offer[] = [
  {
    id: "1",
    title: "Premium Styling Experience",
    description: "Experience luxury styling with our expert team",
    features: ["Modern Equipment", "Professional Staff", "Luxurious Ambiance"],
    price: "Starting from ₹499",
    icon: "styling"
  },
  {
    id: "2",
    title: "Elegant Salon Interior",
    description: "Perfectly designed space for your comfort",
    features: ["Marble Interiors", "LED Mirrors", "Premium Chairs"],
    price: "Visit Us Today",
    icon: "interior"
  },
  {
    id: "3",
    title: "Modern Salon Experience",
    description: "State-of-the-art facilities for the best care",
    features: ["Latest Equipment", "Trained Professionals", "Premium Products"],
    price: "Book Now",
    icon: "experience"
  },
  {
    id: "4",
    title: "The Trends Unisex Salon",
    description: "Your destination for complete beauty care",
    features: ["L'OREAL Products", "Professional Services", "Affordable Prices"],
    price: "Visit Us Today",
    icon: "salon"
  }
];

const OffersCarousel = () => {
  const [activeIndex, setActiveIndex] = useState(0);
  const [carouselApi, setCarouselApi] = useState<CarouselApi>();

  const getIconComponent = (iconName: string) => {
    switch (iconName) {
      case "styling":
        return <Scissors className="h-12 w-12 text-pink-400" />;
      case "interior":
        return <Heart className="h-12 w-12 text-emerald-400" />; // Changed from Spa to Heart
      case "experience":
        return <Star className="h-12 w-12 text-purple-400" />; // Changed from Flower to Star
      case "salon":
        return <Award className="h-12 w-12 text-amber-400" />;
      default:
        return <Scissors className="h-12 w-12 text-pink-400" />;
    }
  };
  
  // Update carousel index when selection changes
  const handleCarouselSelect = () => {
    if (!carouselApi) return;
    setActiveIndex(carouselApi.selectedScrollSnap());
  };

  // Connect the onSelect handler when the carousel API becomes available
  React.useEffect(() => {
    if (!carouselApi) return;
    
    carouselApi.on("select", handleCarouselSelect);
    // Cleanup event listener on unmount
    return () => {
      carouselApi.off("select", handleCarouselSelect);
    };
  }, [carouselApi]);
  
  return (
    <div className="py-16 bg-gradient-to-b from-white to-gray-50">
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
        <div className="text-center mb-16">
          <motion.div
            initial={{ opacity: 0, y: 20 }}
            animate={{ opacity: 1, y: 0 }}
            transition={{ duration: 0.5 }}
          >
            <h2 className="text-5xl font-serif mb-4">Exclusive Offers</h2>
            <p className="text-gray-600 max-w-2xl mx-auto text-lg">
              Experience premium services tailored to enhance your natural beauty at Trends Unisex Salon.
            </p>
          </motion.div>
        </div>
        
        <Carousel 
          className="w-full max-w-5xl mx-auto"
          opts={{
            align: "start",
            loop: true,
            skipSnaps: false,
            duration: 10,
            startIndex: activeIndex
          }}
          setApi={setCarouselApi}
        >
          <CarouselContent>
            <AnimatePresence mode="wait">
              {offers.map((offer) => (
                <CarouselItem key={offer.id}>
                  <motion.div
                    initial={{ opacity: 0 }}
                    animate={{ opacity: 1 }}
                    exit={{ opacity: 0 }}
                    transition={{ duration: 0.3 }}
                    className="p-8"
                  >
                    <div className="bg-white rounded-2xl shadow-lg overflow-hidden border border-gray-100">
                      <div className="flex flex-col md:flex-row">
                        {/* Left side - Icon and price */}
                        <div className="w-full md:w-1/3 bg-gradient-to-br from-rose-50 to-purple-50 p-8 flex flex-col justify-center items-center text-center">
                          <div className="rounded-full bg-white p-6 shadow-md mb-6">
                            {getIconComponent(offer.icon)}
                          </div>
                          <h3 className="text-3xl font-bold mb-2">{offer.title}</h3>
                          <p className="text-2xl font-light text-gray-800">{offer.price}</p>
                        </div>
                        
                        {/* Right side - Content */}
                        <div className="w-full md:w-2/3 p-8">
                          <p className="text-xl mb-6 text-gray-600">{offer.description}</p>
                          <div className="border-t border-gray-100 pt-6">
                            <h4 className="font-medium text-gray-900 mb-4">Features:</h4>
                            <ul className="grid grid-cols-1 md:grid-cols-2 gap-4">
                              {offer.features.map((feature, idx) => (
                                <li key={idx} className="flex items-center">
                                  <span className="mr-2 text-pink-500">•</span>
                                  <span>{feature}</span>
                                </li>
                              ))}
                            </ul>
                          </div>
                          <div className="mt-8">
                            <a 
                              href={`https://wa.me/+919071331124?text=Hi, I'm interested in the ${offer.title} offer. Can I book an appointment?`}
                              target="_blank" 
                              rel="noopener noreferrer"
                              className="px-8 py-3 bg-black text-white rounded-md hover:bg-gray-800 transition-colors inline-block"
                            >
                              Book Appointment
                            </a>
                          </div>
                        </div>
                      </div>
                    </div>
                  </motion.div>
                </CarouselItem>
              ))}
            </AnimatePresence>
          </CarouselContent>
          <div className="flex justify-center mt-8 gap-4">
            <CarouselPrevious className="relative inset-0 translate-y-0 bg-black text-white hover:bg-gray-800 hover:text-white" />
            <div className="flex space-x-2 items-center">
              {offers.map((_, index) => (
                <button
                  key={index}
                  onClick={() => {
                    setActiveIndex(index);
                    carouselApi?.scrollTo(index);
                  }}
                  className={`w-2 h-2 rounded-full transition-all ${
                    index === activeIndex 
                      ? "bg-black w-6" 
                      : "bg-gray-300 hover:bg-gray-400"
                  }`}
                  aria-label={`Go to slide ${index + 1}`}
                />
              ))}
            </div>
            <CarouselNext className="relative inset-0 translate-y-0 bg-black text-white hover:bg-gray-800 hover:text-white" />
          </div>
        </Carousel>
      </div>
    </div>
  );
};

export default OffersCarousel;
