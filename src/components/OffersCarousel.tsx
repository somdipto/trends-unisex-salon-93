import {
  Carousel,
  CarouselContent,
  CarouselItem,
  CarouselNext,
  CarouselPrevious,
} from "@/components/ui/carousel";
import { motion } from "framer-motion";

const offers = [
  {
    title: "Ultimate Smoothening",
    description: "L'OREAL XTENSO or SCHWARZKOPF",
    features: ["POST WASH", "HAIR CUT", "OLAPLEX HAIR SPA COMPLEMENTARY"],
    price: "₹6,000",
    image: "/lovable-uploads/efe30971-b2b4-4b79-8c0c-0661a081fc1e.png"
  },
  {
    title: "Hair Botox",
    description: "MK or COPACABANA HAIR SMOOTHENING",
    features: ["FIXED PRICE EVERY HAIR LENGTH", "OLAPLEX HAIR SPA", "HAIR CUT"],
    price: "₹7,000",
    image: "/lovable-uploads/2f381dc8-c1bd-4599-b64a-21b65d1be8b3.png"
  },
  {
    title: "Mix & Match",
    description: "Makeover Package",
    features: [
      "Full arms Rica waxing",
      "Face clean-up",
      "Hair spa",
      "Face threading"
    ],
    price: "₹2,500",
    image: "/lovable-uploads/ccce83e8-1602-4f81-8ddc-a87a2dc11d4e.png"
  }
];

const OffersCarousel = () => {
  return (
    <div className="py-16 bg-white">
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
        <div className="text-center mb-12">
          <h2 className="text-5xl font-serif mb-4">Exclusive Offers</h2>
        </div>
        
        <Carousel className="w-full max-w-5xl mx-auto">
          <CarouselContent>
            {offers.map((offer, index) => (
              <CarouselItem key={index}>
                <motion.div
                  initial={{ opacity: 0, y: 20 }}
                  animate={{ opacity: 1, y: 0 }}
                  transition={{ delay: index * 0.1 }}
                  className="relative overflow-hidden rounded-lg"
                >
                  <img
                    src={offer.image}
                    alt={offer.title}
                    className="w-full aspect-[16/9] object-cover"
                  />
                  <div className="absolute inset-0 bg-gradient-to-t from-black/60 to-transparent">
                    <div className="absolute bottom-0 left-0 right-0 p-6 text-white">
                      <h3 className="text-3xl font-bold mb-2">{offer.title}</h3>
                      <p className="text-lg mb-2">{offer.description}</p>
                      <ul className="mb-4">
                        {offer.features.map((feature, idx) => (
                          <li key={idx} className="text-sm">• {feature}</li>
                        ))}
                      </ul>
                      <p className="text-2xl font-bold">{offer.price}</p>
                    </div>
                  </div>
                </motion.div>
              </CarouselItem>
            ))}
          </CarouselContent>
          <CarouselPrevious className="left-4" />
          <CarouselNext className="right-4" />
        </Carousel>
      </div>
    </div>
  );
};

export default OffersCarousel;