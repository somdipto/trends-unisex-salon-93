
import { motion } from "framer-motion";
import { useState, useEffect, useMemo } from "react";

interface OfferCardProps {
  title: string;
  price: string;
  image: string;
  isActive: boolean;
  position: number;
  onClick: () => void;
}

const OfferCard = ({
  image,
  isActive,
  position,
  onClick
}: OfferCardProps) => {
  const [imageLoaded, setImageLoaded] = useState(false);
  const [isMobile, setIsMobile] = useState(false);
  
  // Use useMemo to determine if the card should be visible
  const isVisible = useMemo(() => Math.abs(position) <= 1, [position]);

  // Handle responsive layout
  useEffect(() => {
    const handleResize = () => {
      setIsMobile(window.innerWidth < 768);
    };
    
    handleResize();
    window.addEventListener('resize', handleResize);
    return () => window.removeEventListener('resize', handleResize);
  }, []);

  // Calculate card size based on device
  const cardSize = useMemo(() => {
    return isMobile ? {
      width: 280,
      height: 280
    } : {
      width: 400,
      height: 400
    };
  }, [isMobile]);

  // Don't render if not visible
  if (!isVisible) return null;

  // Optimized shadow color without complex calculations
  const shadowColor = isActive ? 'rgba(0, 0, 0, 0.25)' : 'rgba(0, 0, 0, 0.15)';

  return (
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
        <div className="relative w-full h-full bg-gray-100">
          {/* Loading placeholder */}
          {!imageLoaded && (
            <div className="absolute inset-0 bg-gradient-to-br from-gray-200 to-gray-300 animate-pulse" />
          )}
          
          {/* Optimized image with better loading */}
          <img
            src={image}
            alt="Offer"
            loading={isActive ? "eager" : "lazy"}
            decoding="async"
            {...(isActive ? { 'data-fetchpriority': 'high' } : { 'data-fetchpriority': 'low' })}
            className={`w-full h-full object-cover transition-opacity duration-300 ${
              imageLoaded ? 'opacity-100' : 'opacity-0'
            }`}
            onLoad={() => setImageLoaded(true)}
            onError={() => setImageLoaded(true)} // Show placeholder on error
          />
        </div>
      </motion.div>
    </motion.div>
  );
};

export default OfferCard;
