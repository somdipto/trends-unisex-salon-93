
import { motion } from "framer-motion";
import { useEffect, useState } from "react";

// Define hero image with proper attributes
const heroImage = {
  url: "/lovable-uploads/5fc03f98-eee3-486a-a086-a7449791916f.png",
  alt: "Woman with flowing black hair on beige background",
  position: {
    desktop: "center center",
    mobile: "center center" // Centered position works better for this image
  },
  scale: {
    desktop: 1,
    mobile: 1 // Changed back to 1 (no zoom out) for mobile view as requested
  }
};

const Hero = () => {
  const [imageLoaded, setImageLoaded] = useState(false);
  const [isMobile, setIsMobile] = useState(false);
  const whatsappNumber = "+919071331124";
  const whatsappUrl = `https://wa.me/${whatsappNumber}`;

  // Check if device is mobile
  useEffect(() => {
    const checkIsMobile = () => {
      setIsMobile(window.innerWidth <= 768);
    };
    
    // Initial check
    checkIsMobile();
    
    // Listen for window resize events
    window.addEventListener('resize', checkIsMobile);
    
    // Clean up event listener
    return () => window.removeEventListener('resize', checkIsMobile);
  }, []);

  // Improved image preloading
  useEffect(() => {
    const img = new Image();
    
    img.onload = () => {
      setImageLoaded(true);
    };
    
    img.onerror = () => {
      console.error(`Failed to load image: ${heroImage.url}`);
      // Mark as loaded anyway to avoid blocking the UI
      setImageLoaded(true);
    };
    
    // Start loading the image
    img.src = heroImage.url;
    
    return () => {
      // Clean up
      img.onload = null;
      img.onerror = null;
    };
  }, []);

  return (
    <div className="relative h-[85vh] md:h-screen flex items-center justify-center overflow-hidden">
      {/* Render a lightweight placeholder while image is loading */}
      {!imageLoaded && (
        <div className="absolute inset-0 bg-gradient-to-b from-gray-900 to-gray-800 animate-pulse" />
      )}
      
      <motion.div
        initial={false}
        animate={{ 
          opacity: imageLoaded ? 1 : 0,
          scale: 1
        }}
        transition={{ 
          duration: 0.8,
          ease: "easeInOut"
        }}
        className="absolute inset-0"
      >
        <div className="relative w-full h-full">
          <div className="w-full h-full overflow-hidden">
            <img
              src={heroImage.url}
              alt={heroImage.alt}
              className="w-full h-full object-cover"
              style={{ 
                objectPosition: isMobile ? heroImage.position.mobile : heroImage.position.desktop,
                transform: isMobile ? `scale(${heroImage.scale.mobile})` : `scale(${heroImage.scale.desktop})`,
                transformOrigin: "center center"
              }}
              loading="eager"
              decoding="async"
            />
          </div>
          <div 
            className="absolute inset-0"
            style={{
              background: "linear-gradient(to bottom, rgba(0,0,0,0.2) 0%, rgba(0,0,0,0.2) 50%, rgba(0,0,0,0.3) 100%)"
            }}
          />
        </div>
      </motion.div>
      
      <div className="relative z-10 text-center text-white px-4 max-w-4xl mx-auto">
        <motion.div
          initial={{ opacity: 0, y: 20 }}
          animate={{ opacity: imageLoaded ? 1 : 0, y: imageLoaded ? 0 : 20 }}
          transition={{ duration: 0.8 }}
          className="space-y-6 md:space-y-8"
        >
          <h1 className="text-4xl md:text-6xl lg:text-7xl font-libre mb-4 md:mb-6 leading-tight font-bold">
            Elevate Your Style
          </h1>
          <motion.p 
            className="text-lg md:text-xl lg:text-2xl mb-8 md:mb-10 max-w-2xl mx-auto font-libre"
            initial={{ opacity: 0 }}
            animate={{ opacity: imageLoaded ? 1 : 0 }}
            transition={{ delay: 0.3 }}
          >
            Experience premium hair care and styling at Trends Unisex Salon
          </motion.p>
          <motion.a
            href={whatsappUrl}
            target="_blank"
            rel="noopener noreferrer"
            className="inline-block bg-white/10 backdrop-blur-md text-white px-8 md:px-10 py-4 md:py-5 rounded-full text-lg md:text-xl font-libre border border-white/20 transition-all duration-300 shadow-lg hover:shadow-2xl relative overflow-hidden group"
            style={{
              background: 'linear-gradient(to right, rgba(255, 255, 255, 0.1), rgba(255, 255, 255, 0.05))'
            }}
            whileHover={{ 
              y: -4,
              transition: { duration: 0.2 }
            }}
            whileTap={{ y: 0 }}
          >
            <div className="absolute inset-0 bg-gradient-to-r from-white/20 to-transparent opacity-0 group-hover:opacity-100 transition-opacity duration-300" />
            <span className="relative z-10">Book Appointment</span>
          </motion.a>
        </motion.div>
      </div>
    </div>
  );
};

export default Hero;
