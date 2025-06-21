
import React from 'react';
import { Scissors, Award, Sparkles, Star } from 'lucide-react';

// Using a placeholder image from a CDN
const salonImage = 'https://images.unsplash.com/photo-1605497788044-5a32c7078486?ixlib=rb-4.0.3&ixid=M3wxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHx8fA%3D%3D&auto=format&fit=crop&w=987&q=80';

interface Offer {
  id: string;
  title: string;
  description: string;
  features: string[];
  price: string;
  highlight?: string;
}

const OffersCarousel = () => {
  // Single offer data
  const offer = {
    id: "premium-styling",
    title: "Premium Hair Styling",
    description: "Experience our signature hair styling service that combines modern techniques with premium products for a look that lasts.",
    features: [
      "Expert stylist consultation",
      "Customized hair treatment", 
      "Professional blowout & styling",
      "Complimentary hair care tips"
    ],
    price: "Starting from ₹999",
    highlight: "Limited Time Offer"
  };

  return (
    <section className="relative py-16 md:py-20 overflow-hidden">
      {/* Simple Background */}
      <div className="absolute inset-0 bg-gradient-to-br from-rose-50 to-purple-50"></div>

      <div className="relative max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
        {/* Section Header */}
        <div className="text-center mb-12 md:mb-16">
          <span className="inline-flex items-center px-6 py-2 bg-rose-100 text-rose-700 rounded-full text-sm font-semibold mb-4">
            <Sparkles className="w-4 h-4 mr-2" />
            Exclusive Premium Offer
            <Award className="w-4 h-4 ml-2" />
          </span>
          
          <h2 className="text-3xl sm:text-4xl md:text-5xl font-serif font-bold text-gray-900 mb-4 leading-tight">
            Transform Your 
            <span className="block text-rose-600">
              Beauty Experience
            </span>
          </h2>
          
          <p className="text-lg text-gray-600 max-w-2xl mx-auto leading-relaxed">
            Indulge in our exclusive hair treatments designed to transform your look and boost your confidence.
            <span className="block mt-2 font-semibold text-rose-600">Limited time offers - book your session today!</span>
          </p>
        </div>

        {/* Offer Card */}
        <div className="relative max-w-5xl mx-auto">
          <div className="bg-white rounded-2xl shadow-lg overflow-hidden border border-gray-200">
            <div className="flex flex-col lg:flex-row">
              {/* Image Section */}
              <div className="w-full lg:w-1/2 h-80 md:h-96 lg:h-auto relative overflow-hidden">
                <img 
                  src={salonImage} 
                  alt="Premium Hair Styling"
                  className="w-full h-full object-cover object-center"
                  loading="lazy"
                />
                <div className="absolute inset-0 bg-black/20"></div>
                
                {/* Simple rating badge */}
                <div className="absolute top-4 right-4 bg-white/95 rounded-xl p-3 shadow-md">
                  <div className="flex items-center space-x-1 mb-1">
                    {[...Array(5)].map((_, i) => (
                      <Star key={i} className="w-3 h-3 text-yellow-400 fill-current" />
                    ))}
                  </div>
                  <p className="text-xs font-semibold text-gray-700">5.0 Rating</p>
                </div>

                <div className="absolute bottom-4 left-4 right-4 text-center">
                  <Award className="w-8 h-8 mx-auto mb-2 text-white" />
                  <p className="text-white font-semibold text-lg">Award-Winning Excellence</p>
                </div>
              </div>
              
              {/* Content Section */}
              <div className="w-full lg:w-1/2 p-8 md:p-10 lg:p-12 flex flex-col justify-center">
                <div className="mb-6">
                  <div className="w-16 h-16 bg-rose-100 rounded-full flex items-center justify-center mb-4">
                    <Scissors className="h-8 w-8 text-rose-500" />
                  </div>
                </div>
                
                <h3 className="text-2xl md:text-3xl lg:text-4xl font-bold text-gray-900 mb-4 leading-tight">
                  {offer.title}
                </h3>
                
                <p className="text-lg text-gray-600 mb-6 leading-relaxed">
                  {offer.description}
                </p>
                
                <div className="mb-8">
                  <h4 className="text-sm font-bold text-gray-500 uppercase tracking-wider mb-4 flex items-center">
                    <Sparkles className="w-4 h-4 mr-2 text-rose-400" />
                    What's Included
                  </h4>
                  <ul className="space-y-3">
                    {offer.features.map((feature, index) => (
                      <li key={index} className="flex items-center">
                        <div className="flex-shrink-0 w-5 h-5 bg-rose-400 rounded-full flex items-center justify-center mr-3">
                          <span className="w-2 h-2 bg-white rounded-full"></span>
                        </div>
                        <span className="text-gray-700">{feature}</span>
                      </li>
                    ))}
                  </ul>
                </div>
                
                <div className="flex flex-col sm:flex-row items-center justify-between gap-4">
                  <div className="text-2xl font-bold text-rose-600">
                    {offer.price}
                  </div>
                  
                  <a
                    href="https://wa.me/919987654321?text=Hi%20Trends%20Unisex%20Salon%2C%20I'd%20like%20to%20book%20an%20appointment"
                    target="_blank"
                    rel="noopener noreferrer"
                    className="w-full sm:w-auto px-8 py-3 bg-rose-500 hover:bg-rose-600 text-white rounded-xl font-semibold text-center shadow-md hover:shadow-lg transition-all duration-200"
                  >
                    Book Now on WhatsApp
                  </a>
                </div>
                
                {offer.highlight && (
                  <div className="mt-4 flex justify-center sm:justify-end">
                    <span className="inline-flex items-center px-4 py-2 rounded-full text-sm font-semibold bg-rose-100 text-rose-700">
                      <Sparkles className="w-4 h-4 mr-2" />
                      {offer.highlight}
                    </span>
                  </div>
                )}
              </div>
            </div>
          </div>
        </div>
      </div>
    </section>
  );
};

export default OffersCarousel;
