
import { useState, useEffect, useCallback, useMemo } from "react";
import OfferCard from "./offers/OfferCard";
import CarouselDots from "./offers/CarouselDots";
import { offers } from "./offers/offersData";

const ExclusiveOffers = () => {
  const [activeIndex, setActiveIndex] = useState(0);
  const [isMobile, setIsMobile] = useState(false);

  // Detect device size
  useEffect(() => {
    const handleResize = () => {
      setIsMobile(window.innerWidth < 768);
    };

    handleResize();
    window.addEventListener('resize', handleResize);
    return () => window.removeEventListener('resize', handleResize);
  }, []);

  // Auto-rotate carousel with reduced frequency for better performance
  useEffect(() => {
    const timer = setInterval(() => {
      setActiveIndex((prev) => (prev + 1) % offers.length);
    }, 4000); // Reduced from 5000ms to 4000ms
    return () => clearInterval(timer);
  }, []);

  // Handle dot click
  const handleDotClick = useCallback((index: number) => {
    setActiveIndex(index);
  }, []);

  // Only render visible offers for better performance
  const visibleOffers = useMemo(() => {
    const getVisibleIndexes = () => {
      const indexes = [];
      for (let i = -1; i <= 1; i++) {
        const index = (activeIndex + i + offers.length) % offers.length;
        indexes.push(index);
      }
      return indexes;
    };
    
    return getVisibleIndexes().map(index => ({
      ...offers[index],
      originalIndex: index
    }));
  }, [activeIndex]);

  return (
    <div className="py-8 md:py-16 bg-gradient-to-b from-white to-gray-50 overflow-hidden">
      <div className="max-w-[1920px] mx-auto">
        <div className="text-center mb-8 md:mb-12">
          <h2 className="text-3xl md:text-5xl font-serif mb-4">Our Offers</h2>
        </div>

        <div className="relative h-[400px] md:h-[500px] w-full">
          <div className="flex items-center justify-center w-full h-full">
            {visibleOffers.map((offer) => {
              const position = offer.originalIndex - activeIndex;
              return (
                <OfferCard
                  key={offer.originalIndex}
                  title={offer.title.toString()}
                  price={offer.price}
                  image={offer.image}
                  isActive={offer.originalIndex === activeIndex}
                  position={position}
                  onClick={() => setActiveIndex(offer.originalIndex)}
                />
              );
            })}
          </div>
        </div>

        <CarouselDots
          total={offers.length}
          activeIndex={activeIndex}
          onDotClick={handleDotClick}
        />
      </div>
    </div>
  );
};

export default ExclusiveOffers;
