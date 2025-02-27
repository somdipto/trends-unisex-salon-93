
import { motion } from "framer-motion";
import { Button } from "./ui/button";
import {
  Carousel,
  CarouselContent,
  CarouselItem,
  CarouselNext,
  CarouselPrevious,
} from "@/components/ui/carousel";
import { services } from "@/data/servicesData";
import { handleBooking } from "@/utils/booking";

const ServicesMenu = () => {
  return (
    <div className="py-16 bg-white">
      <div className="max-w-6xl mx-auto px-4 sm:px-6 lg:px-8">
        <div className="text-center mb-12">
          <h2 className="text-4xl font-serif mb-4">Services</h2>
          <p className="text-gray-600 max-w-2xl mx-auto">
            Choose from our carefully curated service packages
          </p>
        </div>

        <Carousel className="w-full max-w-5xl mx-auto">
          <CarouselContent>
            {services.map((service, index) => (
              <CarouselItem key={service.name} className="md:basis-1/2 lg:basis-1/3">
                <motion.div
                  initial={{ opacity: 0, y: 20 }}
                  animate={{ opacity: 1, y: 0 }}
                  transition={{ delay: index * 0.1 }}
                  className="bg-white rounded-lg overflow-hidden shadow-sm border border-gray-100 m-2 h-full group"
                >
                  <div className="p-6 flex flex-col h-full">
                    <h3 className="text-xl font-libre mb-3">{service.name}</h3>
                    <div className="flex items-center gap-2 mb-4">
                      <span className="text-2xl font-bold text-blue-600">
                        ₹{service.discountedPrice}
                      </span>
                      <span className="text-gray-500 line-through text-sm">
                        ₹{service.originalPrice}
                      </span>
                      <span className="text-blue-600 text-sm">
                        Save ₹{service.originalPrice - service.discountedPrice}
                      </span>
                    </div>
                    <div className="flex-grow">
                      <ul className="space-y-2 mb-4">
                        {service.services.map((item) => (
                          <li key={item.name} className="flex justify-between text-sm">
                            <span>{item.name}</span>
                            <span className="text-gray-600">₹{item.price}</span>
                          </li>
                        ))}
                      </ul>
                    </div>
                    <Button 
                      variant="outline" 
                      onClick={() => handleBooking(service.name, service.discountedPrice)}
                      className="w-full bg-black text-white hover:bg-gray-800 transition-colors"
                    >
                      Book Now
                    </Button>
                  </div>
                </motion.div>
              </CarouselItem>
            ))}
          </CarouselContent>
          <CarouselPrevious className="absolute -left-12 lg:-left-14" />
          <CarouselNext className="absolute -right-12 lg:-right-14" />
        </Carousel>
      </div>
    </div>
  );
};

export default ServicesMenu;
