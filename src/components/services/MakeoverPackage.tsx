
import { motion } from "framer-motion";
import { handleBooking } from "@/utils/booking";

interface MakeoverPackageProps {
  makeoverPackage: {
    name: string;
    originalPrice: number;
    discountedPrice: number;
    services: string[];
  };
}

export const MakeoverPackage = ({ makeoverPackage }: MakeoverPackageProps) => {
  return (
    <motion.div
      initial={{ opacity: 0, y: 20 }}
      animate={{ opacity: 1, y: 0 }}
      transition={{ delay: 0.3 }}
      className="bg-black text-white rounded-lg p-8 mb-12"
    >
      <div className="max-w-3xl mx-auto text-center">
        <h2 className="text-3xl font-libre mb-6">{makeoverPackage.name}</h2>
        <div className="flex items-center justify-center gap-4 mb-6">
          <span className="text-3xl font-bold text-green-400">
            ₹{makeoverPackage.discountedPrice}
          </span>
          <span className="text-gray-400 line-through text-xl">
            ₹{makeoverPackage.originalPrice}
          </span>
          <span className="text-green-400">
            Save ₹{makeoverPackage.originalPrice - makeoverPackage.discountedPrice}
          </span>
        </div>
        <div className="grid grid-cols-2 md:grid-cols-3 gap-4 mb-8">
          {makeoverPackage.services.map((service) => (
            <div key={service} className="text-sm">
              • {service}
            </div>
          ))}
        </div>
        <button
          onClick={() => handleBooking(makeoverPackage.name, makeoverPackage.discountedPrice)}
          className="bg-white text-black px-8 py-3 rounded-md hover:bg-gray-100 transition-colors"
        >
          Book Complete Makeover
        </button>
      </div>
    </motion.div>
  );
};

