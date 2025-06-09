
import { useState, useEffect } from "react";
import { offers } from "./offers/offersData";
import { motion } from "framer-motion";

const ExclusiveOffers = () => {
  const [imagesLoaded, setImagesLoaded] = useState(false);

  // Progressive image loading strategy
  useEffect(() => {
    let isMounted = true;
    
    // Load all images
    const allImages = offers.map(offer => {
      return new Promise<void>((resolve) => {
        const img = new Image();
        img.src = offer.image;
        img.onload = () => resolve();
        img.onerror = () => resolve(); // Still resolve on error to avoid hanging
      });
    });

    Promise.all(allImages)
      .then(() => {
        if (isMounted) {
          setImagesLoaded(true);
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

  // Loading placeholder
  if (!imagesLoaded) {
    return (
      <div className="h-[600px] md:h-[600px] flex items-center justify-center">
        <div className="animate-pulse bg-gray-200 w-[300px] md:w-[400px] h-[300px] md:h-[400px] rounded-2xl"></div>
      </div>
    );
  }

  return (
    <div className="py-8 md:py-16 bg-gradient-to-b from-white to-gray-50">
      <div className="max-w-[1920px] mx-auto px-4 sm:px-6 lg:px-8">
        <div className="text-center mb-8 md:mb-12">
          <h2 className="text-3xl md:text-5xl font-serif mb-4">Our Offers</h2>
        </div>

        <div className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-3 xl:grid-cols-4 gap-6 max-w-7xl mx-auto">
          {offers.map((offer, index) => (
            <motion.div
              key={offer.id}
              initial={{ opacity: 0, y: 20 }}
              animate={{ opacity: 1, y: 0 }}
              transition={{ 
                duration: 0.5, 
                delay: index * 0.1,
                type: "spring",
                stiffness: 100
              }}
              whileHover={{ 
                scale: 1.05,
                transition: { duration: 0.2 }
              }}
              className="group cursor-pointer"
            >
              <div className="bg-white rounded-2xl shadow-lg overflow-hidden border border-gray-100 hover:shadow-xl transition-all duration-300">
                <div className="relative aspect-square overflow-hidden">
                  <img
                    src={offer.image}
                    alt={offer.title.toString()}
                    className="w-full h-full object-cover group-hover:scale-110 transition-transform duration-500"
                    loading="lazy"
                  />
                  <div className="absolute inset-0 bg-black bg-opacity-0 group-hover:bg-opacity-20 transition-all duration-300" />
                </div>
                
                <div className="p-6">
                  <div className="text-center">
                    <h3 className="text-xl font-semibold mb-2 text-gray-900">
                      {offer.title}
                    </h3>
                    <p className="text-2xl font-bold text-pink-600 mb-4">
                      {offer.price}
                    </p>
                    <a 
                      href={`https://wa.me/+919071331124?text=Hi, I'm interested in the ${offer.title} offer for ${offer.price}. Can I book an appointment?`}
                      target="_blank" 
                      rel="noopener noreferrer"
                      className="inline-block px-6 py-2 bg-black text-white rounded-lg hover:bg-gray-800 transition-colors duration-200 font-medium"
                    >
                      Book Now
                    </a>
                  </div>
                </div>
              </div>
            </motion.div>
          ))}
        </div>
      </div>
    </div>
  );
};

export default ExclusiveOffers;
