
import { motion } from "framer-motion";
import { useState } from "react";

interface OfferImageProps {
  image: string;
  title: string;
  isActive: boolean;
  onLoad?: () => void;
}

const OfferImage = ({ image, title, isActive, onLoad }: OfferImageProps) => {
  const [imageLoaded, setImageLoaded] = useState(false);

  const handleImageLoad = () => {
    setImageLoaded(true);
    onLoad?.();
  };

  return (
    <div className="relative w-full h-full bg-gray-100 overflow-hidden rounded-2xl">
      {/* Loading placeholder */}
      {!imageLoaded && (
        <div className="absolute inset-0 bg-gradient-to-br from-gray-200 to-gray-300 animate-pulse" />
      )}
      
      {/* Individual editable image */}
      <motion.img
        src={image}
        alt={title}
        loading={isActive ? "eager" : "lazy"}
        decoding="async"
        fetchPriority={isActive ? "high" : "low"}
        className={`w-full h-full object-cover transition-opacity duration-300 ${
          imageLoaded ? 'opacity-100' : 'opacity-0'
        }`}
        onLoad={handleImageLoad}
        onError={handleImageLoad}
        initial={{ opacity: 0 }}
        animate={{ opacity: imageLoaded ? 1 : 0 }}
        transition={{ duration: 0.3 }}
      />
    </div>
  );
};

export default OfferImage;
