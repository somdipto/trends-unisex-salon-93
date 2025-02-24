import { motion } from "framer-motion";
import { Button } from "./ui/button";
import {
  Carousel,
  CarouselContent,
  CarouselItem,
  CarouselNext,
  CarouselPrevious,
} from "@/components/ui/carousel";

const services = [
  {
    name: "Professional Haircut",
    description: "Expert haircuts tailored to your style",
    price: "₹999",
    image: "https://images.unsplash.com/photo-1560066984-138dadb4c035?ixlib=rb-1.2.1&auto=format&fit=crop&w=1950&q=80",
  },
  {
    name: "Hair Treatment",
    description: "Revitalize your hair with premium treatments",
    price: "₹1,499",
    image: "https://images.unsplash.com/photo-1527799820374-dcf8d9d4a388?ixlib=rb-1.2.1&auto=format&fit=crop&w=1950&q=80",
  },
  {
    name: "Premium Styling",
    description: "Complete hair transformation with expert styling",
    price: "₹1,999",
    image: "https://images.unsplash.com/photo-1522337360788-8b13dee7a37e?ixlib=rb-1.2.1&auto=format&fit=crop&w=1950&q=80",
  },
];

const ServicesMenu = () => {
  return (
    <div className="py-16 bg-white">
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
        <div className="text-center mb-12">
          <h2 className="text-5xl font-serif mb-4">Our Services</h2>
        </div>

        <Carousel className="w-full max-w-5xl mx-auto">
          <CarouselContent>
            {services.map((service, index) => (
              <CarouselItem key={service.name} className="md:basis-1/2 lg:basis-1/3">
                <motion.div
                  initial={{ opacity: 0, y: 20 }}
                  animate={{ opacity: 1, y: 0 }}
                  transition={{ delay: index * 0.1 }}
                  className="bg-white rounded-lg overflow-hidden shadow-lg border border-gray-200 m-2"
                >
                  <div className="aspect-[4/3] relative overflow-hidden">
                    <img
                      src={service.image}
                      alt={service.name}
                      className="w-full h-full object-cover transform hover:scale-105 transition-transform duration-300"
                    />
                  </div>
                  <div className="p-6">
                    <h3 className="text-xl font-serif mb-2">{service.name}</h3>
                    <p className="text-lg font-bold mb-2">{service.price}</p>
                    <p className="text-gray-600 mb-6">{service.description}</p>
                    <Button variant="outline" className="w-full hover:bg-black hover:text-white transition-colors">
                      Book now
                    </Button>
                  </div>
                </motion.div>
              </CarouselItem>
            ))}
          </CarouselContent>
          <CarouselPrevious className="left-4" />
          <CarouselNext className="right-4" />
        </Carousel>
      </div>
    </div>
  );
};

export default ServicesMenu;