
import { motion } from "framer-motion";
import { useState, useEffect, useRef } from "react";
import { ColorThief } from "color-thief-browser";

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
  const [dominantColor, setDominantColor] = useState<string>('rgba(0, 0, 0, 0.1)');
  const [isMobile, setIsMobile] = useState(false);
  const imgRef = useRef<HTMLImageElement>(null);
  const colorThiefRef = useRef<ColorThief | null>(null);

  useEffect(() => {
    const handleResize = () => {
      setIsMobile(window.innerWidth < 768);
    };
    
    handleResize();
    window.addEventListener('resize', handleResize);
    return () => window.removeEventListener('resize', handleResize);
  }, []);

  useEffect(() => {
    if (!colorThiefRef.current) {
      colorThiefRef.current = new ColorThief();
    }
    
    const img = new Image();
    img.crossOrigin = "Anonymous";
    img.src = image;
    img.onload = () => {
      try {
        if (colorThiefRef.current) {
          const color = colorThiefRef.current.getColor(img);
          setDominantColor(`rgba(${color[0]}, ${color[1]}, ${color[2]}, 0.3)`);
        }
      } catch (error) {
        console.error("Error extracting color:", error);
      }
    };
  }, [image]);

  const cardSize = isMobile ? {
    width: 280,
    height: 280
  } : {
    width: 400,
    height: 400
  };

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
            alt=""
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
