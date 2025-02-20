
import { motion, AnimatePresence } from "framer-motion";
import { useState, useEffect } from "react";

const offers = [
  {
    id: 1,
    title: "Mix & Match",
    price: "₹2499",
    image: "/lovable-uploads/b5ea46d1-7f1e-4d52-9bea-f87c5ebe869a.png"
  },
  {
    id: 2,
    title: "Balayage",
    price: "₹3999",
    image: "/lovable-uploads/9651bd69-8c97-469b-9a0f-dae1ce0c6328.png"
  },
  {
    id: 3,
    title: "Hydra Glow",
    price: "₹1999",
    image: "/lovable-uploads/7a27304e-c7da-44d1-8dbc-13700c1fdb66.png"
  },
  {
    id: 4,
    title: "Hair Botox",
    price: "₹4499",
    image: "/lovable-uploads/9a2f0fd5-38f8-4965-b51f-220ffb1ad1f8.png"
  },
  {
    id: 5,
    title: "Classic Smoothening",
    price: "₹2999",
    image: "/lovable-uploads/e465a833-ca5f-4b02-9b1b-3fa6e811e03d.png"
  },
  {
    id: 6,
    title: "Ultimate Smoothening",
    price: "₹5500",
    image: "/lovable-uploads/d8f90cd0-77fd-4d78-a4e9-8be45c4a46b1.png"
  },
  {
    id: 7,
    title: "Gold Smoothening",
    price: "₹3999",
    image: "/lovable-uploads/3c08fed0-16c0-4442-88eb-1c05978fe4db.png"
  }
];

const ExclusiveOffers = () => {
  const [activeIndex, setActiveIndex] = useState(0);
  const [imagesLoaded, setImagesLoaded] = useState(false);

  useEffect(() => {
    const preloadImages = async () => {
      const imagePromises = offers.map((offer) => {
        return new Promise((resolve) => {
          const img = new Image();
          img.src = offer.image;
          img.onload = resolve;
        });
      });
      await Promise.all(imagePromises);
      setImagesLoaded(true);
    };
    preloadImages();
  }, []);

  useEffect(() => {
    const timer = setInterval(() => {
      setActiveIndex((prev) => (prev + 1) % offers.length);
    }, 3000);
    return () => clearInterval(timer);
  }, []);

  if (!imagesLoaded) {
    return <div className="h-[600px] flex items-center justify-center">Loading...</div>;
  }

  return (
    <div className="py-16 bg-gradient-to-b from-white to-gray-50">
      <div className="max-w-[1920px] mx-auto">
        <div className="text-center mb-12">
          <h2 className="text-5xl font-serif mb-4">Our Offers</h2>
        </div>

        <div className="relative h-[600px] w-full overflow-hidden">
          <div className="absolute inset-0 flex items-center justify-center perspective-[1000px]">
            <div 
              className="flex space-x-8" 
              style={{ 
                transform: `translateX(calc(-${activeIndex * 420}px + 50vw - 210px))`,
                transition: 'transform 0.75s cubic-bezier(0.4, 0, 0.2, 1)',
                willChange: 'transform',
              }}
            >
              {offers.map((offer, index) => {
                const isActive = index === activeIndex;
                const distance = Math.abs(index - activeIndex);
                const rotateY = (index - activeIndex) * 45;
                const translateZ = isActive ? 200 : -200 * distance;
                const opacity = isActive ? 1 : Math.max(0.3, 1 - distance * 0.3);

                return (
                  <motion.div
                    key={offer.id}
                    initial={false}
                    animate={{
                      rotateY: `${rotateY}deg`,
                      z: translateZ,
                      opacity,
                      scale: isActive ? 1.1 : 0.8,
                    }}
                    transition={{
                      duration: 0.75,
                      ease: [0.4, 0, 0.2, 1],
                    }}
                    style={{
                      perspective: 1000,
                      transformStyle: "preserve-3d",
                    }}
                    className="flex-shrink-0 cursor-pointer transform-gpu"
                    onClick={() => setActiveIndex(index)}
                  >
                    <motion.div 
                      className={`relative w-[400px] h-[400px] rounded-2xl overflow-hidden shadow-2xl 
                        ${isActive ? 'ring-4 ring-black ring-opacity-50' : ''}`}
                      animate={{
                        rotateZ: isActive ? [0, -2, 2, 0] : 0,
                      }}
                      transition={{
                        duration: 0.5,
                        repeat: isActive ? Infinity : 0,
                        repeatType: "reverse",
                      }}
                    >
                      <motion.img
                        src={offer.image}
                        alt={offer.title}
                        loading={isActive ? "eager" : "lazy"}
                        className="w-full h-full object-cover"
                        animate={{
                          scale: isActive ? [1, 1.05, 1] : 1,
                        }}
                        transition={{
                          duration: 3,
                          repeat: Infinity,
                          repeatType: "reverse",
                          ease: "easeInOut",
                        }}
                      />
                      <AnimatePresence>
                        {isActive && (
                          <motion.div 
                            initial={{ opacity: 0, y: 50 }}
                            animate={{ 
                              opacity: 1, 
                              y: 0,
                              transition: {
                                duration: 0.5,
                                delay: 0.2,
                              }
                            }}
                            exit={{ 
                              opacity: 0, 
                              y: 50,
                              transition: {
                                duration: 0.3,
                              }
                            }}
                            className="absolute bottom-0 left-0 right-0 p-6 bg-gradient-to-t from-black/80 via-black/50 to-transparent"
                          >
                            <motion.h3 
                              className="text-2xl font-semibold text-white"
                              initial={{ x: -20 }}
                              animate={{ x: 0 }}
                              transition={{ delay: 0.3 }}
                            >
                              {offer.title}
                            </motion.h3>
                            <motion.p 
                              className="text-xl mt-2 text-white"
                              initial={{ x: -20 }}
                              animate={{ x: 0 }}
                              transition={{ delay: 0.4 }}
                            >
                              {offer.price}
                            </motion.p>
                          </motion.div>
                        )}
                      </AnimatePresence>
                    </motion.div>
                  </motion.div>
                );
              })}
            </div>
          </div>
        </div>

        <div className="flex justify-center mt-8 space-x-2">
          {offers.map((_, index) => (
            <button
              key={index}
              onClick={() => setActiveIndex(index)}
              className={`w-2 h-2 rounded-full transition-all duration-300 ${
                index === activeIndex ? "bg-black w-8" : "bg-gray-300"
              }`}
            />
          ))}
        </div>
      </div>
    </div>
  );
};

export default ExclusiveOffers;
