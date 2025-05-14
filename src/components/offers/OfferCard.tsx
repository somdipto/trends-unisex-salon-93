
import { motion } from "framer-motion";
import { useState, useEffect, useRef, useMemo } from "react";

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
  // Use a fixed color palette instead of extracting from images
  const [dominantColor, setDominantColor] = useState<string>('rgba(0, 0, 0, 0.1)');
  const [isMobile, setIsMobile] = useState(false);
  const imgRef = useRef<HTMLImageElement>(null);
  
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

  // Use predefined color palette based on position instead of color extraction
  useEffect(() => {
    if (!isVisible) return;
    
    // Create a simple palette of semi-transparent colors
    const colors = [
      'rgba(66, 135, 245, 0.3)',   // blue
      'rgba(245, 157, 66, 0.3)',   // orange
      'rgba(66, 245, 108, 0.3)',   // green
      'rgba(245, 66, 87, 0.3)',    // red
      'rgba(194, 66, 245, 0.3)',   // purple
    ];
    
    // Use position to select color from palette, handle negative positions
    const colorIndex = Math.abs(position) % colors.length;
    setDominantColor(colors[colorIndex]);
  }, [image, isVisible, position]);

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

  // Don't render if not visible, but do this after all hooks are called
  if (!isVisible) return null;

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
        className="overflow-hidden rounded-2xl transition-shadow duration-500"
        style={{
          width: cardSize.width,
          height: cardSize.height,
          transformStyle: "preserve-3d",
          perspective: "1000px",
          boxShadow: isActive
            ? `0 20px 25px -5px ${dominantColor}, 0 8px 10px -6px ${dominantColor}`
            : `0 10px 15px -3px ${dominantColor}, 0 4px 6px -4px ${dominantColor}`
        }}
        whileHover={{
          scale: 1.02
        }}
      >
        <div className="relative w-full h-full">
          <img
            ref={imgRef}
            src={image}
            alt="Offer"
            loading="eager"
            decoding="async"
            className="w-full h-full object-cover"
          />
        </div>
      </motion.div>
    </motion.div>
  );
};

export default OfferCard;
