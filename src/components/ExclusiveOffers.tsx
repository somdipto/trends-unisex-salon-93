import { useState, useMemo, useCallback, useEffect } from "react";
import { motion, AnimatePresence } from "framer-motion";
import { ChevronLeft, ChevronRight } from "lucide-react";
import OfferCard from "./offers/OfferCard";
import CarouselDots from "./offers/CarouselDots";
import { offers } from "./offers/offersData";

interface Offer {
  id: number;
  title: string;
  price: string;
  image: string;
  originalIndex?: number;
}

const AUTO_ADVANCE_DELAY = 5000; // 5 seconds

const ExclusiveOffers = () => {
  const [activeIndex, setActiveIndex] = useState(0);
  const [isMobile, setIsMobile] = useState(false);
  const [isHovered, setIsHovered] = useState(false);
  const [touchStartX, setTouchStartX] = useState<number | null>(null);

  // Detect device size
  useEffect(() => {
    const handleResize = () => {
      setIsMobile(window.innerWidth < 768);
    };

    handleResize();
    window.addEventListener('resize', handleResize);
    const timer = setInterval(() => {
      setActiveIndex(prev => (prev === offers.length - 1 ? 0 : prev + 1));
    }, AUTO_ADVANCE_DELAY);

    return () => clearInterval(timer);
  }, [isHovered]);

  // Calculate visible offers with proper typing
  const visibleOffers = useMemo<Offer[]>(() => {
    const totalOffers = offers.length;
    
    return [-1, 0, 1].map(offset => {
      let index = activeIndex + offset;
      // Handle wrapping around
      if (index < 0) index = totalOffers - 1;
      if (index >= totalOffers) index = 0;
      
      return {
        ...offers[index],
        originalIndex: index
      };
    });
  }, [activeIndex]);

  const goToPrev = useCallback(() => {
    setActiveIndex(prev => (prev === 0 ? offers.length - 1 : prev - 1));
  }, []);

  const goToNext = useCallback(() => {
    setActiveIndex(prev => (prev === offers.length - 1 ? 0 : prev + 1));
  }, []);

  // Touch event handlers
  const handleTouchStart = (e: React.TouchEvent) => {
    setTouchStartX(e.touches[0].clientX);
  };

  const handleTouchMove = (e: React.TouchEvent) => {
    if (touchStartX === null) return;
    
    const touchEndX = e.touches[0].clientX;
    const diff = touchStartX - touchEndX;
    
    // Only trigger on significant horizontal swipe
    if (Math.abs(diff) > 50) {
      if (diff > 0) {
        goToNext();
      } else {
        goToPrev();
      }
      setTouchStartX(null);
    }
  };

  // Handle keyboard navigation
  useEffect(() => {
    const handleKeyDown = (e: KeyboardEvent) => {
      if (e.key === 'ArrowLeft') {
        goToPrev();
      } else if (e.key === 'ArrowRight') {
        goToNext();
      }
    };

    window.addEventListener('keydown', handleKeyDown);
    return () => window.removeEventListener('keydown', handleKeyDown);
  }, [goToPrev, goToNext]);

  return (
    <section 
      className="relative w-full py-16 overflow-hidden bg-white"
      aria-label="Exclusive offers"
    >
      <div className="container mx-auto px-4">
        <h2 className="text-3xl md:text-4xl font-bold text-center mb-8 md:mb-12 text-gray-900">
          Our Exclusive Offers
        </h2>
        
        <div 
          className="relative h-[500px] md:h-[600px] w-full"
          onMouseEnter={() => setIsHovered(true)}
          onMouseLeave={() => setIsHovered(false)}
          onTouchStart={handleTouchStart}
          onTouchMove={handleTouchMove}
          onTouchEnd={() => setTouchStartX(null)}
        >
          <div className="flex items-center justify-center w-full h-full">
            <AnimatePresence mode="wait" initial={false}>
              {visibleOffers.map((offer, index) => {
                const position = index - 1; // -1, 0, 1 for positioning
                return (
                  <OfferCard
                    key={`${offer.id}-${offer.originalIndex}`}
                    title={offer.title}
                    price={offer.price}
                    image={offer.image}
                    isActive={offer.originalIndex === activeIndex}
                    position={position}
                    onClick={() => setActiveIndex(offer.originalIndex!)}
                  />
                );
              })}
            </AnimatePresence>
          </div>

          {/* Navigation Buttons */}
          <button
            onClick={goToPrev}
            className="absolute left-2 md:left-4 top-1/2 -translate-y-1/2 z-10 p-2 rounded-full bg-white/80 backdrop-blur-sm shadow-lg hover:bg-gray-100 transition-all duration-300 transform hover:scale-110 focus:outline-none focus:ring-2 focus:ring-rose-500 focus:ring-opacity-50"
            aria-label="Previous offer"
          >
            <ChevronLeft className="w-6 h-6 text-gray-800" />
          </button>
          <button
            onClick={goToNext}
            className="absolute right-2 md:right-4 top-1/2 -translate-y-1/2 z-10 p-2 rounded-full bg-white/80 backdrop-blur-sm shadow-lg hover:bg-gray-100 transition-all duration-300 transform hover:scale-110 focus:outline-none focus:ring-2 focus:ring-rose-500 focus:ring-opacity-50"
            aria-label="Next offer"
          >
            <ChevronRight className="w-6 h-6 text-gray-800" />
          </button>

          {/* Dots indicator */}
          <div className="absolute bottom-4 left-1/2 -translate-x-1/2 flex space-x-2 z-10">
            {offers.map((_, index) => (
              <button
                key={index}
                onClick={() => setActiveIndex(index)}
                className={`w-2.5 h-2.5 rounded-full transition-all ${
                  index === activeIndex ? 'bg-rose-600 w-6' : 'bg-gray-300 hover:bg-gray-400'
                }`}
                aria-label={`Go to offer ${index + 1}`}
              />
            ))}
          </div>
        </div>
      </div>
    </section>
  );
};

export default ExclusiveOffers;
