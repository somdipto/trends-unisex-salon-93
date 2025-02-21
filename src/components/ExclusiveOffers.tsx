
import { useState, useEffect } from "react";
import OfferCard from "./offers/OfferCard";
import CarouselDots from "./offers/CarouselDots";
import { offers } from "./offers/offersData";

const ExclusiveOffers = () => {
  const [activeIndex, setActiveIndex] = useState(0);
  const [imagesLoaded, setImagesLoaded] = useState(false);

  useEffect(() => {
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
    });
  }, []);

  useEffect(() => {
    const timer = setInterval(() => {
      setActiveIndex((prev) => (prev + 1) % offers.length);
    }, 5000);
    return () => clearInterval(timer);
  }, []);

  if (!imagesLoaded) {
    return (
      <div className="h-[600px] flex items-center justify-center">
        <div className="animate-pulse bg-gray-200 w-[400px] h-[400px] rounded-2xl"></div>
      </div>
    );
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
              {offers.map((offer, index) => (
                <OfferCard
                  key={offer.id}
                  title={offer.title}
                  price={offer.price}
                  image={offer.image}
                  isActive={index === activeIndex}
                  position={index - activeIndex}
                  onClick={() => setActiveIndex(index)}
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
