
import { motion } from "framer-motion";

interface OfferCardProps {
  title: string;
  price: string;
  image: string;
  isActive: boolean;
  position: number;
  onClick: () => void;
}

const OfferCard = ({ image, isActive, position, onClick }: OfferCardProps) => {
  const isVisible = Math.abs(position) <= 1;

  if (!isVisible) return null;

  return (
    <motion.div
      initial={false}
      animate={{
        scale: isActive ? 1.1 : 0.8,
        x: position * 400,
        zIndex: isActive ? 2 : 1,
        opacity: isActive ? 1 : 0.7,
      }}
      transition={{
        type: "spring",
        stiffness: 200, // Reduced from 300 for slower movement
        damping: 25, // Reduced from 30 for slower movement
      }}
      className="absolute cursor-pointer"
      onClick={onClick}
    >
      <motion.div 
        className={`w-[400px] h-[400px] bg-white rounded-2xl overflow-hidden
          ${isActive ? 'shadow-2xl' : 'shadow-lg'}
          transition-shadow duration-500`}
        whileHover={{ scale: 1.02 }}
        style={{
          transformStyle: "preserve-3d",
          perspective: "1000px",
        }}
      >
        <div className="relative w-full h-full">
          <img
            src={image}
            alt=""
            className="w-full h-full object-cover"
          />
        </div>
      </motion.div>
    </motion.div>
  );
};

export default OfferCard;

