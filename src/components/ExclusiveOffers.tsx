
import { motion } from "framer-motion";
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

  useEffect(() => {
    const timer = setInterval(() => {
      setActiveIndex((prev) => (prev + 1) % offers.length);
    }, 5000);
    return () => clearInterval(timer);
  }, []);

  return (
    <div className="py-16 bg-gradient-to-b from-white to-gray-50">
      <div className="max-w-[1920px] mx-auto">
        <div className="text-center mb-12">
          <h2 className="text-5xl font-serif mb-4">Our Offers</h2>
        </div>

        <div className="relative h-[450px] w-full overflow-hidden">
          <div className="absolute inset-0 flex items-center justify-center">
            <div className="flex space-x-4 px-4" style={{ transform: `translateX(calc(-${activeIndex * 380}px + 50vw - 190px))` }}>
              {offers.map((offer, index) => {
                const isActive = index === activeIndex;
                const distance = Math.abs(index - activeIndex);
                const scale = isActive ? 1 : Math.max(0.7, 1 - distance * 0.15);
                const opacity = isActive ? 1 : Math.max(0.3, 1 - distance * 0.3);

                return (
                  <motion.div
                    key={offer.id}
                    initial={false}
                    animate={{
                      scale,
                      opacity,
                    }}
                    transition={{
                      duration: 0.5,
                      ease: "easeInOut"
                    }}
                    className="flex-shrink-0 cursor-pointer"
                    onClick={() => setActiveIndex(index)}
                  >
                    <div className={`relative w-[350px] h-[350px] rounded-2xl overflow-hidden shadow-2xl group transition-all duration-300 ${isActive ? 'ring-4 ring-black ring-opacity-50' : ''}`}>
                      <img
                        src={offer.image}
                        alt={offer.title}
                        className={`w-full h-full object-cover transition-transform duration-300 ${isActive ? 'scale-105' : 'scale-100'}`}
                        style={{
                          imageRendering: "crisp-edges",
                        }}
                      />
                      <div 
                        className={`absolute inset-0 bg-gradient-to-t from-black/60 via-black/20 to-transparent transition-opacity duration-300 ${
                          isActive ? 'opacity-0 group-hover:opacity-100' : 'opacity-100'
                        }`} 
                      />
                    </div>
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
                index === activeIndex ? "bg-black w-6" : "bg-gray-300"
              }`}
            />
          ))}
        </div>
      </div>
    </div>
  );
};

export default ExclusiveOffers;
