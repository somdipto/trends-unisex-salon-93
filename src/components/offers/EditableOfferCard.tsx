
import { motion } from "framer-motion";
import { useState, useEffect, useMemo } from "react";
import OfferImage from "./OfferImage";

interface EditableOfferCardProps {
  id: number;
  title: string;
  price: string;
  image: string;
  isActive: boolean;
  position: number;
  onClick: () => void;
}

const EditableOfferCard = ({
  id,
  title,
  price,
  image,
  isActive,
  position,
  onClick
}: EditableOfferCardProps) => {
  const [isMobile, setIsMobile] = useState(false);
  
  const isVisible = useMemo(() => Math.abs(position) <= 1, [position]);

  useEffect(() => {
    const handleResize = () => {
      setIsMobile(window.innerWidth < 768);
    };
    
    handleResize();
    window.addEventListener('resize', handleResize);
    return () => window.removeEventListener('resize', handleResize);
  }, []);

  const cardSize = useMemo(() => {
    return isMobile ? {
      width: 280,
      height: 280
    } : {
      width: 400,
      height: 400
    };
  }, [isMobile]);

  if (!isVisible) return null;

  const shadowColor = isActive ? 'rgba(0, 0, 0, 0.25)' : 'rgba(0, 0, 0, 0.15)';

  return (
    <div 
      className="editable-offer-card"
      data-offer-id={id}
      data-testid={`offer-card-${id}`}
    >
      <motion.div
        initial={false}
        animate={{
          scale: isActive ? 1.1 : 0.8,
          x: position * (isMobile ? cardSize.width + 20 : cardSize.width),
          zIndex: isActive ? 2 : 1,
          opacity: isActive ? 1 : 0.7
        }}
        transition={{
          type: "spring",
          stiffness: 200,
          damping: 25
        }}
        className="absolute cursor-pointer touch-none"
        onClick={onClick}
      >
        <motion.div
          className="overflow-hidden rounded-2xl transition-shadow duration-300"
          style={{
            width: cardSize.width,
            height: cardSize.height,
            boxShadow: isActive
              ? `0 20px 25px -5px ${shadowColor}, 0 8px 10px -6px ${shadowColor}`
              : `0 10px 15px -3px ${shadowColor}, 0 4px 6px -4px ${shadowColor}`
          }}
          whileHover={{
            scale: 1.02
          }}
        >
          <OfferImage 
            image={image}
            title={title}
            isActive={isActive}
          />
          
          {/* Offer details overlay */}
          <div className="absolute bottom-0 left-0 right-0 bg-gradient-to-t from-black/80 to-transparent p-6">
            <h3 className="text-white text-xl font-semibold mb-2">{title}</h3>
            <p className="text-white/90 text-lg">{price}</p>
          </div>
        </motion.div>
      </motion.div>
    </div>
  );
};

export default EditableOfferCard;
