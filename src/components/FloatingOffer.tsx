
import { motion } from "framer-motion";

const FloatingOffer = () => {
  return (
    <div className="floating-offer mt-16 overflow-hidden bg-black/90 backdrop-blur-sm">
      <motion.div
        initial={{ x: "100%" }}
        animate={{ x: "-100%" }}
        transition={{
          duration: 20,
          repeat: Infinity,
          ease: "linear",
        }}
        className="whitespace-nowrap font-libre text-lg md:text-xl text-white/90 py-4"
      >
        Special Offer: 20% off on all services • Book your appointment now
      </motion.div>
    </div>
  );
};

export default FloatingOffer;
