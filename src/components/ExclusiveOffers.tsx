
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

        <div className="relative h-[500px] w-full overflow-hidden">
          <div className="absolute inset-0 flex items-center justify-center">
            <div className="flex items-center justify-center w-full">
              {offers.map((offer, index) => {
                const position = index - activeIndex;
                const isActive = position === 0;
                const isVisible = Math.abs(position) <= 1;

                if (!isVisible) return null;

                return (
                  <motion.div
                    key={offer.id}
                    initial={false}
                    animate={{
                      scale: isActive ? 1.1 : 0.8,
                      x: position * 400,
                      zIndex: isActive ? 2 : 1,
                      opacity: isActive ? 1 : 0.5,
                    }}
                    transition={{
                      type: "spring",
                      stiffness: 300,
                      damping: 30,
                    }}
                    className="absolute cursor-pointer"
                    onClick={() => setActiveIndex(index)}
                  >
                    <motion.div 
                      className={`w-[400px] h-[400px] bg-white rounded-2xl overflow-hidden shadow-2xl
                        ${isActive ? 'ring-4 ring-black ring-opacity-50' : ''}
                        transition-shadow duration-300`}
                      whileHover={{ scale: 1.02 }}
                      style={{
                        transformStyle: "preserve-3d",
                        perspective: "1000px",
                      }}
                    >
                      <div className="relative w-full h-full">
                        <img
                          src={offer.image}
                          alt={offer.title}
                          className="w-full h-full object-cover"
                        />
                        <div className="absolute bottom-0 left-0 right-0 p-6 bg-gradient-to-t from-black/80 via-black/50 to-transparent">
                          <h3 className="text-2xl font-semibold text-white mb-2">
                            {offer.title}
                          </h3>
                          <p className="text-xl text-white">
                            {offer.price}
                          </p>
                        </div>
                      </div>
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
