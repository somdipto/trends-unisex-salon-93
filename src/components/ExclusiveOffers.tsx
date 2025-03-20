
import { useState, useEffect, useRef, memo } from "react";
import OfferCard from "./offers/OfferCard";
import CarouselDots from "./offers/CarouselDots";
import { offers } from "./offers/offersData";

const ExclusiveOffers = () => {
  const [activeIndex, setActiveIndex] = useState(0);
  const [imagesLoaded, setImagesLoaded] = useState(false);
  const [isMobile, setIsMobile] = useState(false);
  const imagesPreloaded = useRef(false);

  useEffect(() => {
    const handleResize = () => {
      setIsMobile(window.innerWidth < 768);
    };

    handleResize();
    window.addEventListener('resize', handleResize);
    return () => window.removeEventListener('resize', handleResize);
  }, []);

  useEffect(() => {
    if (!imagesPreloaded.current) {
      // Only load the first 3 images initially for faster rendering
      const imagePromises = offers.slice(0, 3).map((offer) => {
        return new Promise((resolve) => {
          const img = new Image();
          img.src = offer.image;
          img.onload = resolve;
        });
      });

      Promise.all(imagePromises).then(() => {
        setImagesLoaded(true);
        // Load remaining images after initial render
        offers.slice(3).forEach((offer) => {
          const img = new Image();
          img.src = offer.image;
        });
        imagesPreloaded.current = true;
      });
    }
  }, []);

  useEffect(() => {
    const timer = setInterval(() => {
      setActiveIndex((prev) => (prev + 1) % offers.length);
    }, 5000);
    return () => clearInterval(timer);
  }, []);

  if (!imagesLoaded) {
    return (
      <div className="h-[600px] md:h-[600px] flex items-center justify-center">
        <div className="animate-pulse bg-gray-200 w-[300px] md:w-[400px] h-[300px] md:h-[400px] rounded-2xl"></div>
      </div>
    );
  }

  // Calculate the visible offers (show current and adjacent)
  const visibleOffers = offers.map((offer, index) => {
    const position = index - activeIndex;
    
    // Adjust for circular navigation
    // When at the beginning, the last item should appear on the left
    // When at the end, the first item should appear on the right
    let adjustedPosition = position;
    
    if (activeIndex === 0 && index === offers.length - 1) {
      adjustedPosition = -1;
    } else if (activeIndex === offers.length - 1 && index === 0) {
      adjustedPosition = 1;
    }
    
    return {
      ...offer,
      position: adjustedPosition,
      isActive: index === activeIndex
    };
  }).filter(offer => Math.abs(offer.position) <= 1);

  return (
    <div className="py-8 md:py-16 bg-gradient-to-b from-white to-gray-50 overflow-hidden">
      <div className="max-w-[1920px] mx-auto">
        <div className="text-center mb-8 md:mb-12">
          <h2 className="text-3xl md:text-5xl font-serif mb-4">Our Offers</h2>
        </div>

        <div className="relative h-[400px] md:h-[500px] w-full">
          <div className="absolute inset-0 flex items-center justify-center">
            <div className="flex items-center justify-center w-full">
              {visibleOffers.map((offer) => (
                <OfferCard
                  key={offer.id}
                  title={offer.title}
                  price={offer.price}
                  image={offer.image}
                  isActive={offer.isActive}
                  position={offer.position}
                  onClick={() => setActiveIndex(Number(offer.id) - 1)}
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

export default memo(ExclusiveOffers);
