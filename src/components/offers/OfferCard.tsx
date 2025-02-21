
import { motion } from "framer-motion";

interface OfferCardProps {
  title: string;
  price: string;
  image: string;
  isActive: boolean;
  position: number;
  onClick: () => void;
}

const OfferCard = ({ title, price, image, isActive, position, onClick }: OfferCardProps) => {
  const isVisible = Math.abs(position) <= 1;

  if (!isVisible) return null;

  return (
    <motion.div
      initial={false}
      animate={{
        scale: isActive ? 1.1 : 0.8,
        x: position * 400,
        zIndex: isActive ? 2 : 1,
        opacity: isActive ? 1 : 0.5,
      }}
      transition={{
        type: "spring",
        stiffness: 300,
        damping: 30,
      }}
      className="absolute cursor-pointer"
      onClick={onClick}
    >
      <motion.div 
        className={`w-[400px] h-[400px] bg-white rounded-2xl overflow-hidden shadow-2xl
          ${isActive ? 'ring-4 ring-black ring-opacity-50' : ''}
          transition-shadow duration-300`}
        whileHover={{ scale: 1.02 }}
        style={{
          transformStyle: "preserve-3d",
          perspective: "1000px",
        }}
      >
        <div className="relative w-full h-full">
          <img
            src={image}
            alt={title}
            className="w-full h-full object-cover"
          />
          <div className="absolute bottom-0 left-0 right-0 p-6 bg-gradient-to-t from-black/80 via-black/50 to-transparent">
            <h3 className="text-2xl font-semibold text-white mb-2">
              {title}
            </h3>
            <p className="text-xl text-white">
              {price}
            </p>
          </div>
        </div>
      </motion.div>
    </motion.div>
  );
};

export default OfferCard;
