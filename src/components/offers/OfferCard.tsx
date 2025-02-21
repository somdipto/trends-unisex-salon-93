
import { motion } from "framer-motion";
import { useState, useEffect, useRef } from "react";
import ColorThief from "color-thief-browser";

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
  const [dominantColor, setDominantColor] = useState<string>('rgba(0, 0, 0, 0.1)');
  const imgRef = useRef<HTMLImageElement>(null);

  useEffect(() => {
    const img = new Image();
    img.crossOrigin = "Anonymous";
    img.src = image;
    
    img.onload = () => {
      const colorThief = new ColorThief();
      try {
        const color = colorThief.getColor(img);
        setDominantColor(`rgba(${color[0]}, ${color[1]}, ${color[2]}, 0.3)`);
      } catch (error) {
        console.error("Error extracting color:", error);
      }
    };
  }, [image]);

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
        stiffness: 200,
        damping: 25,
      }}
      className="absolute cursor-pointer"
      onClick={onClick}
    >
      <motion.div 
        className="w-[400px] h-[400px] bg-white rounded-2xl overflow-hidden transition-shadow duration-500"
        whileHover={{ scale: 1.02 }}
        style={{
          transformStyle: "preserve-3d",
          perspective: "1000px",
          boxShadow: isActive 
            ? `0 20px 25px -5px ${dominantColor}, 0 8px 10px -6px ${dominantColor}`
            : `0 10px 15px -3px ${dominantColor}, 0 4px 6px -4px ${dominantColor}`,
        }}
      >
        <div className="relative w-full h-full">
          <img
            ref={imgRef}
            src={image}
            alt=""
            className="w-full h-full object-cover"
            loading="eager"
            decoding="async"
          />
        </div>
      </motion.div>
    </motion.div>
  );
};

export default OfferCard;
