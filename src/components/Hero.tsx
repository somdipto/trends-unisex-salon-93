
import { motion } from "framer-motion";
import { useEffect, useState } from "react";

const heroImages = [
  {
    url: "/lovable-uploads/b3ba3ee8-bc91-4435-a5ec-7e064c5416d0.png",
    alt: "Modern salon interior with elegant arched mirrors and wood accents"
  },
  {
    url: "/lovable-uploads/4b5da105-2cc3-46b2-a5ed-d95e263a3c1a.png",
    alt: "Luxury salon with marble floors and pendant lighting"
  },
  {
    url: "/lovable-uploads/374ad3e9-2987-40aa-9ba5-d2dc2ed40a0c.png",
    alt: "Contemporary salon with natural decor and green elements"
  },
  {
    url: "/lovable-uploads/4b8789a3-c86f-40ce-964e-e74c05d20b42.png",
    alt: "Professional salon client with styled blonde waves"
  }
];

const Hero = () => {
  const [currentImage, setCurrentImage] = useState(0);
  const whatsappNumber = "+919071331124";
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
                objectPosition: "center 20%"
              }}
            />
            <div className="absolute inset-0 bg-black/30 backdrop-blur-[1px]" />
          </div>
        </motion.div>
      ))}
      
      <div className="relative z-10 text-center text-white px-4 max-w-4xl mx-auto">
        <motion.div
          initial={{ opacity: 0, y: 20 }}
          animate={{ opacity: 1, y: 0 }}
          transition={{ duration: 0.8, delay: 0.5 }}
          className="space-y-8"
        >
          <motion.h1 
            className="text-5xl md:text-7xl lg:text-8xl font-libre mb-6 leading-tight font-bold"
            whileHover={{ scale: 1.02 }}
            transition={{ type: "spring", stiffness: 300 }}
          >
            Elevate Your Style
          </motion.h1>
          <motion.p 
            className="text-xl md:text-2xl lg:text-3xl mb-10 max-w-2xl mx-auto font-libre"
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
            className="inline-block bg-white/10 backdrop-blur-md text-white px-10 py-5 rounded-full text-xl font-libre border border-white/20 transition-all duration-300 shadow-lg hover:shadow-2xl relative overflow-hidden group"
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
