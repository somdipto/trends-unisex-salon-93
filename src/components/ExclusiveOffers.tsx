
import { useState, useEffect, useCallback } from "react";
import CarouselDots from "./offers/CarouselDots";
import Offer1 from "./offers/Offer1";
import Offer2 from "./offers/Offer2";
import Offer3 from "./offers/Offer3";
import Offer4 from "./offers/Offer4";
import Offer5 from "./offers/Offer5";
import Offer6 from "./offers/Offer6";
import Offer7 from "./offers/Offer7";

const ExclusiveOffers = () => {
  const [activeIndex, setActiveIndex] = useState(0);
  const totalOffers = 7;

  // Auto-rotate carousel
  useEffect(() => {
    const timer = setInterval(() => {
      setActiveIndex((prev) => (prev + 1) % totalOffers);
    }, 4000);
    return () => clearInterval(timer);
  }, []);

  // Handle dot click
  const handleDotClick = useCallback((index: number) => {
    setActiveIndex(index);
  }, []);

  // Individual offer components array for easier management
  const offers = [
    { id: 1, Component: Offer1 },
    { id: 2, Component: Offer2 },
    { id: 3, Component: Offer3 },
    { id: 4, Component: Offer4 },
    { id: 5, Component: Offer5 },
    { id: 6, Component: Offer6 },
    { id: 7, Component: Offer7 }
  ];

  return (
    <div className="py-8 md:py-16 bg-gradient-to-b from-white to-gray-50 overflow-hidden">
      <div className="max-w-[1920px] mx-auto">
        <div className="text-center mb-8 md:mb-12">
          <h2 className="text-3xl md:text-5xl font-serif mb-4">Our Offers</h2>
        </div>

        <div className="relative h-[400px] md:h-[500px] w-full">
          <div className="flex items-center justify-center w-full h-full">
            {offers.map(({ id, Component }, index) => {
              const position = index - activeIndex;
              const isVisible = Math.abs(position) <= 1;
              
              if (!isVisible) return null;
              
              return (
                <Component
                  key={id}
                  isActive={index === activeIndex}
                  position={position}
                  onClick={() => setActiveIndex(index)}
                />
              );
            })}
          </div>
        </div>

        <CarouselDots
          total={totalOffers}
          activeIndex={activeIndex}
          onDotClick={handleDotClick}
        />
      </div>
    </div>
  );
};

export default ExclusiveOffers;
