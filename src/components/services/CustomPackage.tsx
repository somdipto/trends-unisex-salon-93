
import { motion } from "framer-motion";
import { handleBooking } from "@/utils/booking";

export const CustomPackage = () => {
  return (
    <motion.div
      initial={{ opacity: 0, y: 20 }}
      animate={{ opacity: 1, y: 0 }}
      transition={{ delay: 0.4 }}
      className="text-center py-12 bg-gradient-to-r from-purple-50 to-pink-50 rounded-lg"
    >
      <h2 className="text-3xl font-libre mb-4">Mix & Match Services</h2>
      <p className="text-gray-600 mb-6">
        Choose any 5 services and get an additional 20% off the package price
      </p>
      <button
        onClick={() => handleBooking("Mix & Match Package", 0)}
        className="bg-black text-white px-8 py-3 rounded-md hover:bg-gray-800 transition-colors"
      >
        Create Your Package
      </button>
    </motion.div>
  );
};

