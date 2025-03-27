
import { useState, useEffect, useCallback, useMemo } from "react";
import OfferCard from "./offers/OfferCard";
import CarouselDots from "./offers/CarouselDots";
import { offers } from "./offers/offersData";

const ExclusiveOffers = () => {
  const [activeIndex, setActiveIndex] = useState(0);
  const [imagesLoaded, setImagesLoaded] = useState(false);
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

  // Progressive image loading strategy
  useEffect(() => {
    let isMounted = true;
    
    // First load only the images we need to display initially
    const initialImages = offers.slice(0, 3).map(offer => {
      return new Promise<void>((resolve) => {
        const img = new Image();
        img.src = offer.image;
        img.onload = () => resolve();
        img.onerror = () => resolve(); // Still resolve on error to avoid hanging
      });
    });

    Promise.all(initialImages)
      .then(() => {
        if (isMounted) {
          setImagesLoaded(true);
          
          // Then load the remaining images in the background
          setTimeout(() => {
            offers.slice(3).forEach((offer) => {
              const img = new Image();
              img.src = offer.image;
            });
          }, 1000); // Delay loading of remaining images
        }
      })
      .catch(() => {
        if (isMounted) {
          // Ensure we still show the component even if image loading fails
          setImagesLoaded(true);
        }
      });
      
    return () => {
      isMounted = false;
    };
  }, []);

  // Auto-rotate carousel
  useEffect(() => {
    const timer = setInterval(() => {
      setActiveIndex((prev) => (prev + 1) % offers.length);
    }, 5000);
    return () => clearInterval(timer);
  }, []);

  // Handle dot click
  const handleDotClick = useCallback((index: number) => {
    setActiveIndex(index);
  }, []);

  // Filter offers to only show current and adjacent offers for better performance
  const visibleOffers = useMemo(() => {
    return offers.filter((_, index) => Math.abs(index - activeIndex) <= 1);
  }, [activeIndex]);

  // Loading placeholder
  if (!imagesLoaded) {
    return (
      <div className="h-[600px] md:h-[600px] flex items-center justify-center">
        <div className="animate-pulse bg-gray-200 w-[300px] md:w-[400px] h-[300px] md:h-[400px] rounded-2xl"></div>
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
              {visibleOffers.map((offer, index) => {
                const position = offers.indexOf(offer) - activeIndex;
                return (
                  <OfferCard
                    key={offer.id}
                    title={offer.title.toString()}
                    price={offer.price}
                    image={offer.image}
                    isActive={offers.indexOf(offer) === activeIndex}
                    position={position}
                    onClick={() => setActiveIndex(offers.indexOf(offer))}
                  />
                );
              })}
            </div>
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
