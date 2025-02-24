
import { motion } from "framer-motion";
import { useEffect, useState } from "react";

const heroImages = [
  {
    url: "/lovable-uploads/b3ba3ee8-bc91-4435-a5ec-7e064c5416d0.png",
    alt: "Modern salon interior",
    position: "center 30%"
  },
  {
    url: "/lovable-uploads/4b5da105-2cc3-46b2-a5ed-d95e263a3c1a.png",
    alt: "Luxury salon interior",
    position: "center 40%"
  },
  {
    url: "/lovable-uploads/374ad3e9-2987-40aa-9ba5-d2dc2ed40a0c.png",
    alt: "Contemporary salon",
    position: "center 35%"
  },
  {
    url: "/lovable-uploads/4b8789a3-c86f-40ce-964e-e74c05d20b42.png",
    alt: "Professional styling",
    position: "center 25%"
  }
];

const Hero = () => {
  const [currentImage, setCurrentImage] = useState(0);
  const whatsappUrl = `https://wa.me/+919071331124`;

  useEffect(() => {
    const timer = setInterval(() => {
      setCurrentImage((prev) => (prev + 1) % heroImages.length);
    }, 5000);
    return () => clearInterval(timer);
  }, []);

  return (
    <div className="relative h-[85vh] md:h-screen flex items-center justify-center overflow-hidden">
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
              style={{ objectPosition: image.position }}
            />
            <div className="absolute inset-0 bg-black/30 backdrop-blur-[1px]" />
          </div>
        </motion.div>
      ))}
      
      <div className="relative z-10 text-center text-white px-4">
        <motion.div
          initial={{ opacity: 0, y: 20 }}
          animate={{ opacity: 1, y: 0 }}
          transition={{ duration: 0.8 }}
          className="space-y-6"
        >
          <h1 className="text-5xl md:text-7xl font-libre mb-4 leading-tight">
            Trends
          </h1>
          <motion.a
            href={whatsappUrl}
            target="_blank"
            rel="noopener noreferrer"
            className="inline-block bg-white/10 backdrop-blur-md text-white px-8 py-4 rounded-full text-lg border border-white/20 transition-all duration-300 hover:bg-white/20"
            whileHover={{ y: -4 }}
            whileTap={{ y: 0 }}
          >
            Book Now
          </motion.a>
        </motion.div>
      </div>
    </div>
  );
};

export default Hero;
