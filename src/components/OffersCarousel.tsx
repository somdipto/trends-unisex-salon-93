
import React from "react";
import {
  Carousel,
  CarouselContent,
  CarouselItem,
  CarouselNext,
  CarouselPrevious,
} from "@/components/ui/carousel";

const OffersCarousel = () => {
  const offerImages = [
    {
      url: "/lovable-uploads/4ccdcb60-8705-451c-a8c0-ddc0555f1013.png",
      alt: "Modern salon interior with LED mirrors",
      title: "Premium Styling",
      description: "Experience luxury hair care in our newly renovated space"
    },
    {
      url: "/lovable-uploads/58c55978-86a3-4814-b698-15f3811a0c16.png",
      alt: "Salon corridor with decorative balloons",
      title: "Elegant Ambiance",
      description: "Walk through our beautifully designed salon"
    },
    {
      url: "/lovable-uploads/e2ff299d-4982-491a-b855-e0dfe56ed622.png",
      alt: "Professional styling area",
      title: "Expert Care",
      description: "Our skilled stylists await to transform your look"
    },
    {
      url: "/lovable-uploads/7992b83a-7ea4-4cd3-bafc-0e5113c9399e.png",
      alt: "Salon entrance with branding",
      title: "Welcome to Trends",
      description: "Your destination for premium beauty services"
    }
  ];

  return (
    <section className="py-12 bg-white">
      <div className="container mx-auto px-4">
        <h2 className="text-3xl md:text-4xl font-serif text-center mb-8">
          Special Offers
        </h2>
        
        <Carousel className="w-full max-w-5xl mx-auto">
          <CarouselContent>
            {offerImages.map((offer, index) => (
              <CarouselItem key={index}>
                <div className="relative h-[400px] rounded-xl overflow-hidden">
                  <img
                    src={offer.url}
                    alt={offer.alt}
                    className="w-full h-full object-cover"
                  />
                  <div className="absolute inset-0 bg-black/40 backdrop-blur-[1px]" />
                  <div className="absolute inset-0 flex flex-col justify-end p-8">
                    <h3 className="text-2xl font-serif text-white mb-2">
                      {offer.title}
                    </h3>
                    <p className="text-white/90">
                      {offer.description}
                    </p>
                  </div>
                </div>
              </CarouselItem>
            ))}
          </CarouselContent>
          <CarouselPrevious className="hidden md:flex" />
          <CarouselNext className="hidden md:flex" />
        </Carousel>
      </div>
    </section>
  );
};

export default OffersCarousel;
