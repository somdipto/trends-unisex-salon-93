
import { motion, AnimatePresence } from "framer-motion";
import { useEffect, useState } from "react";
import { ChevronLeft, ChevronRight } from "lucide-react";
import { cn } from "@/lib/utils";

const services = [
  {
    id: 1,
    title: "Mix & Match",
    description: "Full service makeover package",
    price: "₹2499",
    features: ["Full legs Rica waxing", "Underarms Rica waxing", "Face clean-up", "Face De-tan", "Neck De-tan", "Hair spa", "Hair Cut", "Face threading"],
    image: "/lovable-uploads/bbf985ce-d683-4c08-8e2a-a2eb40e79ff6.png"
  },
  {
    id: 2,
    title: "Balayage",
    description: "Hilight & Ombre L'oreal Hair Spa",
    price: "₹3999",
    image: "/lovable-uploads/6d48f668-abbc-4839-bae3-b0d79ac059f5.png"
  },
  {
    id: 3,
    title: "Hydra Glow",
    description: "Premium facial treatment",
    price: "₹1999",
    features: ["Remove dead cells", "Cleansing", "Tight the Skin", "Add Radiant Glow", "Reduce Fine lines"],
    image: "/lovable-uploads/41b4e7ec-081f-4e9f-b486-6c5d06bf5225.png"
  },
  {
    id: 4,
    title: "Hair Botox",
    description: "Copacabana Hair Smoothening",
    price: "₹4499",
    image: "/lovable-uploads/efe424a0-f10d-4194-b1e2-b14096c23edd.png"
  },
  {
    id: 5,
    title: "Classic Smoothening",
    description: "L'OREAL XTENSO or SCHWARZKOPF GLATT",
    price: "₹2999",
    image: "/lovable-uploads/b51a7a9a-bbca-43aa-91df-9747d0cd91cd.png"
  },
  {
    id: 6,
    title: "Ultimate Smoothening",
    description: "Premium hair treatment package",
    price: "₹5500",
    features: ["POST WASH", "HAIR CUT", "3 L'OREAL HAIR SPA - COMPLIMENTARY"],
    image: "/lovable-uploads/6ee91d73-d457-43f6-be98-8bcabd23bee6.png"
  },
  {
    id: 7,
    title: "Gold Smoothening",
    description: "Luxury hair treatment",
    price: "₹3999",
    features: ["POST WASH", "HAIR CUT", "HAIR SPA - COMPLIMENTARY"],
    image: "/lovable-uploads/a9f8cfaf-b7ce-46c9-9b02-7a1ea3e00753.png"
  }
];

const ServicesCarousel = () => {
  const [activeIndex, setActiveIndex] = useState(0);
  const [direction, setDirection] = useState(0);

  const slideVariants = {
    enter: (direction: number) => ({
      x: direction > 0 ? 1000 : -1000,
      opacity: 0,
      rotateY: direction > 0 ? -45 : 45,
      scale: 0.8
    }),
    center: {
      zIndex: 1,
      x: 0,
      opacity: 1,
      rotateY: 0,
      scale: 1
    },
    exit: (direction: number) => ({
      zIndex: 0,
      x: direction < 0 ? 1000 : -1000,
      opacity: 0,
      rotateY: direction < 0 ? 45 : -45,
      scale: 0.8
    })
  };

  const swipeConfidenceThreshold = 10000;
  const swipePower = (offset: number, velocity: number) => {
    return Math.abs(offset) * velocity;
  };

  const paginate = (newDirection: number) => {
    setDirection(newDirection);
    setActiveIndex((prevIndex) => (prevIndex + newDirection + services.length) % services.length);
  };

  return (
    <div className="relative h-screen w-full overflow-hidden bg-gradient-to-b from-gray-900 to-gray-800 perspective-1000">
      <div className="absolute inset-0 flex items-center justify-center">
        <AnimatePresence initial={false} custom={direction}>
          <motion.div
            key={activeIndex}
            custom={direction}
            variants={slideVariants}
            initial="enter"
            animate="center"
            exit="exit"
            transition={{
              x: { type: "spring", stiffness: 300, damping: 30 },
              opacity: { duration: 0.2 },
              rotateY: { duration: 0.5 }
            }}
            drag="x"
            dragConstraints={{ left: 0, right: 0 }}
            dragElastic={1}
            onDragEnd={(e, { offset, velocity }) => {
              const swipe = swipePower(offset.x, velocity.x);

              if (swipe < -swipeConfidenceThreshold) {
                paginate(1);
              } else if (swipe > swipeConfidenceThreshold) {
                paginate(-1);
              }
            }}
            className="absolute w-full max-w-4xl"
          >
            <div className="relative aspect-[16/9] overflow-hidden rounded-xl bg-white/10 backdrop-blur-md">
              <img
                src={services[activeIndex].image}
                alt={services[activeIndex].title}
                className="h-full w-full object-cover"
              />
              <div className="absolute inset-0 bg-gradient-to-t from-black/60 to-transparent">
                <div className="absolute bottom-0 left-0 right-0 p-8 text-white">
                  <h2 className="text-4xl font-bold mb-2">{services[activeIndex].title}</h2>
                  <p className="text-xl mb-4">{services[activeIndex].description}</p>
                  {services[activeIndex].features && (
                    <ul className="mb-4 space-y-1">
                      {services[activeIndex].features.map((feature, index) => (
                        <li key={index} className="text-sm text-gray-300">• {feature}</li>
                      ))}
                    </ul>
                  )}
                  <p className="text-3xl font-bold">{services[activeIndex].price}</p>
                </div>
              </div>
            </div>
          </motion.div>
        </AnimatePresence>

        <button
          className="absolute left-4 z-10 rounded-full bg-white/10 p-3 backdrop-blur-md transition-all hover:bg-white/20"
          onClick={() => paginate(-1)}
        >
          <ChevronLeft className="h-6 w-6 text-white" />
        </button>

        <button
          className="absolute right-4 z-10 rounded-full bg-white/10 p-3 backdrop-blur-md transition-all hover:bg-white/20"
          onClick={() => paginate(1)}
        >
          <ChevronRight className="h-6 w-6 text-white" />
        </button>
      </div>

      <div className="absolute bottom-8 left-1/2 z-10 flex -translate-x-1/2 space-x-2">
        {services.map((_, index) => (
          <button
            key={index}
            onClick={() => {
              setDirection(index > activeIndex ? 1 : -1);
              setActiveIndex(index);
            }}
            className={cn(
              "h-2 w-2 rounded-full transition-all",
              activeIndex === index ? "bg-white" : "bg-white/50"
            )}
          />
        ))}
      </div>
    </div>
  );
};

export default ServicesCarousel;
