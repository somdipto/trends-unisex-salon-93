
import { motion } from "framer-motion";
import { useEffect, useState } from "react";

const heroImages = [
  {
    url: "/lovable-uploads/a2be9e10-67aa-47ca-84e0-9dbefa526c51.png",
    alt: "Modern salon interior with styling chairs"
  },
  {
    url: "/lovable-uploads/d926fc70-365f-464d-9e4b-41e880c68453.png",
    alt: "Salon hallway with elegant design"
  },
  {
    url: "/lovable-uploads/3514baad-2fe3-4ba3-92ee-94ed33d12139.png",
    alt: "Professional salon workspace"
  },
  {
    url: "/lovable-uploads/a7399b2a-a922-4a4c-93c0-a68b39139609.png",
    alt: "Trends Unisex Salon storefront"
  }
];

const Hero = () => {
  const [currentImage, setCurrentImage] = useState(0);
  const whatsappNumber = "+917633894003";
  const whatsappUrl = `https://wa.me/${whatsappNumber}`;

  useEffect(() => {
    const timer = setInterval(() => {
      setCurrentImage((prev) => (prev + 1) % heroImages.length);
    }, 5000);
    return () => clearInterval(timer);
  }, []);

  return (
    <div className="relative h-[75vh] md:h-[85vh] flex items-center justify-center overflow-hidden">
      {heroImages.map((image, index) => (
        <motion.div
          key={image.url}
          initial={{ opacity: 0 }}
          animate={{ 
            opacity: currentImage === index ? 1 : 0,
            scale: currentImage === index ? 1 : 1.1
          }}
          transition={{ duration: 1.5 }}
          className="absolute inset-0"
        >
          <div className="relative w-full h-full">
            <img
              src={image.url}
              alt={image.alt}
              className="w-full h-full object-cover"
              style={{
                objectPosition: "center center"
              }}
            />
            <div className="absolute inset-0 bg-black/40 backdrop-blur-[2px]" />
          </div>
        </motion.div>
      ))}
      
      <div className="relative z-10 text-center text-white px-4 max-w-4xl mx-auto">
        <motion.div
          initial={{ opacity: 0, y: 20 }}
          animate={{ opacity: 1, y: 0 }}
          transition={{ duration: 0.8, delay: 0.5 }}
          className="space-y-6"
        >
          <motion.h1 
            className="text-4xl md:text-6xl lg:text-7xl font-libre mb-6 leading-tight"
            whileHover={{ scale: 1.02 }}
            transition={{ type: "spring", stiffness: 300 }}
          >
            Elevate Your Style
          </motion.h1>
          <motion.p 
            className="text-lg md:text-xl lg:text-2xl mb-8 max-w-2xl mx-auto font-libre"
            initial={{ opacity: 0 }}
            animate={{ opacity: 1 }}
            transition={{ delay: 0.8 }}
          >
            Experience premium hair care and styling at Trends Unisex Salon
          </motion.p>
          <motion.a
            href={whatsappUrl}
            target="_blank"
            rel="noopener noreferrer"
            className="inline-block bg-white text-black px-8 py-4 rounded-full text-lg font-libre hover:bg-gray-100 transition-all duration-300"
            whileHover={{ scale: 1.05 }}
            whileTap={{ scale: 0.95 }}
          >
            Book Appointment
          </motion.a>
        </motion.div>
      </div>
    </div>
  );
};

export default Hero;
