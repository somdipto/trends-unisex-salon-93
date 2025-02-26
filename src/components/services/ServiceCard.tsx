
import { motion } from "framer-motion";
import { Card } from "@/components/ui/card";
import { handleBooking } from "@/utils/booking";

interface ServiceCardProps {
  service: {
    name: string;
    originalPrice: number;
    discountedPrice: number;
    services: Array<{ name: string; price: number }>;
  };
  index: number;
}

export const ServiceCard = ({ service, index }: ServiceCardProps) => {
  return (
    <motion.div
      initial={{ opacity: 0, y: 20 }}
      animate={{ opacity: 1, y: 0 }}
      transition={{ delay: index * 0.1 }}
    >
      <Card className="p-6 h-full flex flex-col">
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
        <button
          onClick={() => handleBooking(service.name, service.discountedPrice)}
          className="w-full bg-black text-white py-2 rounded-md hover:bg-gray-800 transition-colors"
        >
          Book Now
        </button>
      </Card>
    </motion.div>
  );
};
