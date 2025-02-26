
import {
  Carousel,
  CarouselContent,
  CarouselItem,
  CarouselNext,
  CarouselPrevious,
} from "@/components/ui/carousel";
import { motion, AnimatePresence } from "framer-motion";
import { Offer } from "@/types/services";
import { useEffect, useState } from "react";

const offers: Offer[] = [
  {
    id: "1",
    title: "Premium Styling Experience",
    description: "Experience luxury styling with our expert team",
    features: ["Modern Equipment", "Professional Staff", "Luxurious Ambiance"],
    price: "Starting from ₹499",
    image: "/lovable-uploads/4c8fa5a2-d105-4e57-9e8f-76940f1a4d52.png"
  },
  {
    id: "2",
    title: "Elegant Salon Interior",
    description: "Perfectly designed space for your comfort",
    features: ["Marble Interiors", "LED Mirrors", "Premium Chairs"],
    price: "Visit Us Today",
    image: "/lovable-uploads/63222189-68c0-4207-8339-7278ccceb239.png"
  },
  {
    id: "3",
    title: "Modern Salon Experience",
    description: "State-of-the-art facilities for the best care",
    features: ["Latest Equipment", "Trained Professionals", "Premium Products"],
    price: "Book Now",
    image: "/lovable-uploads/a6a8280e-065a-4e36-9c48-59bc08e15848.png"
  },
  {
    id: "4",
    title: "The Trends Unisex Salon",
    description: "Your destination for complete beauty care",
    features: ["L'OREAL Products", "Professional Services", "Affordable Prices"],
    price: "Visit Us Today",
    image: "/lovable-uploads/54f91a2c-0856-4f75-99af-01609e950736.png"
  }
];

const OffersCarousel = () => {
  const [imagesLoaded, setImagesLoaded] = useState(false);

  useEffect(() => {
    // Preload all images
    const preloadImages = async () => {
      const imagePromises = offers.map((offer) => {
        return new Promise((resolve) => {
          const img = new Image();
          img.src = offer.image;
          img.onload = resolve;
        });
      });

      await Promise.all(imagePromises);
      setImagesLoaded(true);
    };

    preloadImages();
  }, []);

  if (!imagesLoaded) {
    return (
      <div className="py-16 bg-white">
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
          <div className="text-center mb-12">
            <h2 className="text-5xl font-serif mb-4">Exclusive Offers</h2>
          </div>
          <div className="animate-pulse w-full max-w-5xl mx-auto aspect-[16/9] bg-gray-200 rounded-lg"></div>
        </div>
      </div>
    );
  }
  
  return (
    <div className="py-16 bg-white">
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
        <div className="text-center mb-12">
          <h2 className="text-5xl font-serif mb-4">Exclusive Offers</h2>
        </div>
        
        <Carousel 
          className="w-full max-w-5xl mx-auto"
          opts={{
            align: "start",
            loop: true,
            skipSnaps: false,
            duration: 20, // Faster transition duration
            startIndex: 0
          }}
        >
          <CarouselContent>
            <AnimatePresence mode="wait">
              {offers.map((offer, index) => (
                <CarouselItem key={offer.id}>
                  <motion.div
                    initial={{ opacity: 0 }}
                    animate={{ opacity: 1 }}
                    exit={{ opacity: 0 }}
                    transition={{ duration: 0.3 }}
                    className="relative overflow-hidden rounded-lg"
                  >
                    <img
                      src={offer.image}
                      alt={offer.title}
                      className="w-full aspect-[16/9] object-cover"
                      loading="eager"
                      decoding="async"
                    />
                    <div className="absolute inset-0 bg-gradient-to-t from-black/60 to-transparent">
                      <div className="absolute bottom-0 left-0 right-0 p-6 text-white">
                        <h3 className="text-3xl font-bold mb-2">{offer.title}</h3>
                        <p className="text-lg mb-2">{offer.description}</p>
                        <ul className="mb-4">
                          {offer.features.map((feature, idx) => (
                            <li key={idx} className="text-sm">• {feature}</li>
                          ))}
                        </ul>
                        <p className="text-2xl font-bold">{offer.price}</p>
                      </div>
                    </div>
                  </motion.div>
                </CarouselItem>
              ))}
            </AnimatePresence>
          </CarouselContent>
          <CarouselPrevious className="left-4" />
          <CarouselNext className="right-4" />
        </Carousel>
      </div>
    </div>
  );
};

export default OffersCarousel;
