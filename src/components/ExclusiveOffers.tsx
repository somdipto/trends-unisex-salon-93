
import { useState, useEffect, useMemo, useCallback } from "react";
import OfferCard from "./offers/OfferCard";
import CarouselDots from "./offers/CarouselDots";
import { offers } from "./offers/offersData";

const ExclusiveOffers = () => {
  const [activeIndex, setActiveIndex] = useState(0);
  const [imagesLoaded, setImagesLoaded] = useState(false);
  const [isMobile, setIsMobile] = useState(false);

  // Memoize visible offers to prevent unnecessary rerenders
  const visibleOffers = useMemo(() => {
    return offers.map((offer, index) => ({
      ...offer,
      position: index - activeIndex,
      isActive: index === activeIndex,
      isVisible: Math.abs(index - activeIndex) <= 1
    }));
  }, [activeIndex]);

  // Handle window resize
  useEffect(() => {
    const handleResize = () => {
      setIsMobile(window.innerWidth < 768);
    };

    handleResize();
    window.addEventListener('resize', handleResize);
    return () => window.removeEventListener('resize', handleResize);
  }, []);

  // Optimize image loading - load visible images first, then others
  useEffect(() => {
    const initialImagesToLoad = 3; // Load first 3 images initially
    
    // Preload the most important images first (the active one and adjacent)
    const priorityIndices = [
      activeIndex,
      (activeIndex + 1) % offers.length,
      (activeIndex - 1 + offers.length) % offers.length
    ];
    
    const uniquePriorityIndices = [...new Set(priorityIndices)];
    
    const imagePromises = uniquePriorityIndices.map((index) => {
      return new Promise((resolve) => {
        const img = new Image();
        img.src = offers[index].image;
        img.onload = resolve;
        img.onerror = resolve; // Still resolve on error to avoid hanging
      });
    });

    Promise.all(imagePromises).then(() => {
      setImagesLoaded(true);
      
      // Load remaining images after initial render
      const remainingIndices = Array.from(
        { length: offers.length },
        (_, i) => i
      ).filter(i => !uniquePriorityIndices.includes(i));
      
      // Use requestIdleCallback or setTimeout to load the rest without blocking UI
      if (window.requestIdleCallback) {
        window.requestIdleCallback(() => {
          loadRemainingImages(remainingIndices);
        });
      } else {
        setTimeout(() => {
          loadRemainingImages(remainingIndices);
        }, 200);
      }
    });
  }, []);

  const loadRemainingImages = (indices) => {
    indices.forEach((index) => {
      const img = new Image();
      img.src = offers[index].image;
    });
  };

  // Auto-rotate carousel
  useEffect(() => {
    const timer = setInterval(() => {
      setActiveIndex((prev) => (prev + 1) % offers.length);
    }, 5000);
    return () => clearInterval(timer);
  }, []);

  const handleCardClick = useCallback((index) => {
    setActiveIndex(index);
  }, []);

  // Loading state
  if (!imagesLoaded) {
    return (
      <div className="py-8 md:py-16 bg-gradient-to-b from-white to-gray-50 overflow-hidden">
        <div className="max-w-[1920px] mx-auto">
          <div className="text-center mb-8 md:mb-12">
            <h2 className="text-3xl md:text-5xl font-serif mb-4">Our Offers</h2>
          </div>
          <div className="h-[400px] md:h-[500px] flex items-center justify-center">
            <div className="animate-pulse bg-gray-200 w-[300px] md:w-[400px] h-[300px] md:h-[400px] rounded-2xl"></div>
          </div>
        </div>
      </div>
    );
  }

  return (
    <div className="py-8 md:py-16 bg-gradient-to-b from-white to-gray-50 overflow-hidden">
      <div className="max-w-[1920px] mx-auto">
        <div className="text-center mb-8 md:mb-12">
          <h2 className="text-3xl md:text-5xl font-serif mb-4">Our Offers</h2>
        </div>

        <div className="relative h-[400px] md:h-[500px] w-full">
          <div className="absolute inset-0 flex items-center justify-center">
            <div className="flex items-center justify-center w-full">
              {visibleOffers
                .filter(offer => offer.isVisible)
                .map((offer) => (
                  <OfferCard
                    key={offer.id}
                    title={offer.title}
                    price={offer.price}
                    image={offer.image}
                    isActive={offer.isActive}
                    position={offer.position}
                    onClick={() => handleCardClick(offers.findIndex(o => o.id === offer.id))}
                  />
                ))}
            </div>
          </div>
        </div>

        <CarouselDots
          total={offers.length}
          activeIndex={activeIndex}
          onDotClick={setActiveIndex}
        />
      </div>
    </div>
  );
};

export default ExclusiveOffers;
