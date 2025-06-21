import React, { useState, useEffect } from 'react';
import { motion } from 'framer-motion';
import { Scissors, Award, Sparkles } from 'lucide-react';

// Using a placeholder image from a CDN
const salonImage = 'https://images.unsplash.com/photo-1605497788044-5a32c7078486?ixlib=rb-4.0.3&ixid=M3wxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHx8fA%3D%3D&auto=format&fit=crop&w=987&q=80';

// Simple error boundary component
class ErrorBoundary extends React.Component<{children: React.ReactNode}, {hasError: boolean}> {
  constructor(props: {children: React.ReactNode}) {
    super(props);
    this.state = { hasError: false };
  }

  static getDerivedStateFromError(error: any) {
    return { hasError: true };
  }

  componentDidCatch(error: any, errorInfo: any) {
    console.error("Error in OffersCarousel:", error, errorInfo);
  }

  render() {
    if (this.state.hasError) {
      return (
        <div className="bg-rose-50 p-4 rounded-lg text-center">
          <p className="text-rose-600">Something went wrong with this component.</p>
        </div>
      );
    }

    return this.props.children;
  }
}

interface Offer {
  id: string;
  title: string;
  description: string;
  features: string[];
  price: string;
  highlight?: string;
}

// Animation variants for the content
const fadeInUp = {
  hidden: { opacity: 0, y: 20 },
  visible: { 
    opacity: 1, 
    y: 0,
    transition: { duration: 0.6, ease: "easeOut" }
  }
};

const staggerContainer = {
  hidden: { opacity: 0 },
  visible: {
    opacity: 1,
    transition: {
      staggerChildren: 0.1,
      delayChildren: 0.2
    }
  }
};

const OffersCarousel = () => {
  const [isHovered, setIsHovered] = useState(false);
  
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

  // Get icon component
  const getIconComponent = () => (
    <div className="relative">
      <div className="absolute inset-0 bg-gradient-to-br from-rose-100 to-purple-100 rounded-full blur-md -z-10"></div>
      <div className="relative rounded-full bg-white/90 p-5 shadow-lg backdrop-blur-sm">
        <Scissors className="h-10 w-10 text-rose-500" />
      </div>
    </div>
  );
  
  return (
    <section className="relative py-16 md:py-24 overflow-hidden bg-gradient-to-b from-gray-50 to-white">
      {/* Decorative elements */}
      <div className="absolute inset-0 overflow-hidden">
        <div className="absolute -top-40 -right-40 w-80 h-80 bg-rose-100 rounded-full mix-blend-multiply filter blur-3xl opacity-20"></div>
        <div className="absolute -bottom-40 -left-40 w-80 h-80 bg-purple-100 rounded-full mix-blend-multiply filter blur-3xl opacity-20"></div>
        <div className="absolute top-1/4 -right-20 w-96 h-96 bg-blue-50 rounded-full mix-blend-multiply filter blur-3xl opacity-20"></div>
      </div>

      <div className="relative max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
        {/* Section Header */}
        <motion.div 
          initial="hidden"
          whileInView="visible"
          viewport={{ once: true }}
          variants={staggerContainer}
          className="text-center mb-12 md:mb-16 px-4"
        >
          <motion.span 
            variants={fadeInUp}
            className="inline-block px-6 py-2 bg-gradient-to-r from-rose-50 to-purple-50 text-rose-600 rounded-full text-sm font-medium mb-4 shadow-sm border border-rose-100"
          >
            Exclusive Offer
          </motion.span>
          
          <motion.h2 
            variants={fadeInUp}
            className="text-3xl sm:text-4xl md:text-5xl font-serif font-bold text-gray-900 mb-4"
          >
            Premium <span className="text-rose-600">Hair Care</span> Experience
          </motion.h2>
          
          <motion.p 
            variants={fadeInUp}
            className="text-base sm:text-lg text-gray-600 max-w-2xl mx-auto"
          >
            Indulge in our exclusive hair treatments designed to transform your look and boost your confidence.
            Limited time offers - book your session today!
          </motion.p>
        </motion.div>

        {/* Offer Card */}
        <motion.div 
          className="relative max-w-6xl mx-auto"
          initial={{ opacity: 0, y: 30 }}
          whileInView={{ opacity: 1, y: 0, transition: { delay: 0.2 } }}
          viewport={{ once: true }}
        >
          <div className="bg-white/80 backdrop-blur-sm rounded-2xl shadow-2xl overflow-hidden flex flex-col lg:flex-row border border-white/20">
            {/* Image Section */}
            <div className="w-full lg:w-1/2 h-64 md:h-96 lg:h-auto relative overflow-hidden">
              <div className="absolute inset-0 bg-gradient-to-br from-rose-50 to-purple-50">
                <img 
                  src={salonImage} 
                  alt="Premium Hair Styling"
                  className="w-full h-full object-cover object-center"
                />
              </div>
              <div className="absolute inset-0 bg-gradient-to-t from-black/30 to-transparent"></div>
              <div className="absolute bottom-0 left-0 right-0 p-6 text-white text-center">
                <motion.div
                  initial={{ opacity: 0, y: 20 }}
                  animate={{ opacity: 1, y: 0 }}
                  transition={{ delay: 0.6 }}
                >
                  <Award className="w-8 h-8 mx-auto mb-2 text-rose-200" />
                  <p className="text-sm font-medium text-rose-100">
                    Award-Winning Stylists • Premium Products • Luxurious Experience
                  </p>
                </motion.div>
              </div>
            </div>
            
            {/* Content Section */}
            <div className="w-full lg:w-1/2 p-8 md:p-10 lg:p-12 flex flex-col">
              <div className="mb-6">
                <motion.div 
                  className="inline-block mb-6"
                  initial={{ scale: 0.9, opacity: 0 }}
                  whileInView={{ scale: 1, opacity: 1 }}
                  viewport={{ once: true }}
                  transition={{ delay: 0.2, type: 'spring' }}
                >
                  {getIconComponent()}
                </motion.div>
                
                <motion.h3 
                  className="text-2xl md:text-3xl lg:text-4xl font-bold text-gray-900 mb-4"
                  initial={{ y: 20, opacity: 0 }}
                  whileInView={{ y: 0, opacity: 1 }}
                  viewport={{ once: true }}
                  transition={{ delay: 0.3 }}
                >
                  {offer.title}
                </motion.h3>
                
                <motion.p 
                  className="text-lg text-gray-600 mb-6 leading-relaxed"
                  initial={{ opacity: 0, y: 10 }}
                  whileInView={{ opacity: 1, y: 0 }}
                  viewport={{ once: true }}
                  transition={{ delay: 0.4 }}
                >
                  {offer.description}
                </motion.p>
                
                <motion.div 
                  className="mb-8"
                  initial={{ opacity: 0, y: 10 }}
                  whileInView={{ opacity: 1, y: 0 }}
                  viewport={{ once: true }}
                  transition={{ delay: 0.5 }}
                >
                  <h4 className="text-sm font-semibold text-gray-500 uppercase tracking-wider mb-4">
                    What's Included
                  </h4>
                  <ul className="space-y-3">
                    {offer.features.map((feature, index) => (
                      <motion.li 
                        key={index}
                        className="flex items-start"
                        initial={{ opacity: 0, x: -10 }}
                        whileInView={{ opacity: 1, x: 0 }}
                        viewport={{ once: true }}
                        transition={{ delay: 0.5 + (index * 0.1) }}
                      >
                        <span className="flex-shrink-0 w-1.5 h-1.5 bg-rose-400 rounded-full mt-2.5 mr-3"></span>
                        <span className="text-gray-700">{feature}</span>
                      </motion.li>
                    ))}
                  </ul>
                </motion.div>
              </div>
              
              <div className="mt-auto">
                <div className="flex flex-col sm:flex-row items-center justify-between gap-4">
                  <motion.div
                    initial={{ scale: 0.9, opacity: 0 }}
                    whileInView={{ scale: 1, opacity: 1 }}
                    viewport={{ once: true }}
                    transition={{ delay: 0.7, type: 'spring' }}
                    className="text-2xl font-bold text-rose-600"
                  >
                    {offer.price}
                  </motion.div>
                  
                  <motion.a
                    href="https://wa.me/919987654321?text=Hi%20Trends%20Unisex%20Salon%2C%20I'd%20like%20to%20book%20an%20appointment"
                    target="_blank"
                    rel="noopener noreferrer"
                    className="w-full sm:w-auto px-8 py-3.5 bg-gradient-to-r from-rose-500 to-pink-500 hover:from-rose-600 hover:to-pink-600 text-white rounded-lg font-medium text-center shadow-lg hover:shadow-xl transition-all duration-300 transform hover:-translate-y-0.5 focus:outline-none focus:ring-2 focus:ring-offset-2 focus:ring-rose-400"
                    whileHover={{ scale: 1.02 }}
                    whileTap={{ scale: 0.98 }}
                    initial={{ opacity: 0, y: 10 }}
                    whileInView={{ opacity: 1, y: 0 }}
                    viewport={{ once: true }}
                    transition={{ delay: 0.8 }}
                  >
                    Book Now on WhatsApp
                  </motion.a>
                </div>
                
                {offer.highlight && (
                  <motion.div 
                    className="mt-4 text-center sm:text-right"
                    initial={{ opacity: 0, y: 10 }}
                    whileInView={{ opacity: 1, y: 0 }}
                    viewport={{ once: true }}
                    transition={{ delay: 0.9 }}
                  >
                    <span className="inline-flex items-center px-3 py-1 rounded-full text-xs font-medium bg-rose-100 text-rose-700">
                      <Sparkles className="w-3.5 h-3.5 mr-1.5" />
                      {offer.highlight}
                    </span>
                  </motion.div>
                )}
              </div>
            </div>
            
            {/* Right Section - Image */}
            <div className="w-full lg:w-1/2 h-64 md:h-80 lg:h-auto relative overflow-hidden">
              {/* Creative gradient background instead of image */}
              <div className="absolute inset-0 bg-gradient-to-br from-rose-100 via-purple-50 to-pink-100">
                {/* Animated gradient orbs */}
                <motion.div 
                  className="absolute top-1/4 left-1/4 w-32 h-32 bg-rose-200 rounded-full mix-blend-multiply filter blur-xl opacity-70"
                  animate={{ 
                    scale: [1, 1.2, 1],
                    x: [0, 10, 0],
                    y: [0, -10, 0]
                  }}
                  transition={{ 
                    duration: 6, 
                    repeat: Infinity,
                    ease: "easeInOut"
                  }}
                />
                <motion.div 
                  className="absolute bottom-1/4 right-1/4 w-24 h-24 bg-purple-200 rounded-full mix-blend-multiply filter blur-xl opacity-70"
                  animate={{ 
                    scale: [1, 1.3, 1],
                    x: [0, -15, 0],
                    y: [0, 15, 0]
                  }}
                  transition={{ 
                    duration: 8, 
                    repeat: Infinity,
                    ease: "easeInOut",
                    delay: 1
                  }}
                />
                <motion.div 
                  className="absolute top-3/4 left-1/2 w-20 h-20 bg-pink-200 rounded-full mix-blend-multiply filter blur-xl opacity-60"
                  animate={{ 
                    scale: [1, 1.1, 1],
                    rotate: [0, 180, 360]
                  }}
                  transition={{ 
                    duration: 10, 
                    repeat: Infinity,
                    ease: "linear"
                  }}
                />
              </div>
              
              {/* Elegant pattern overlay */}
              <div className="absolute inset-0">
                <svg className="w-full h-full opacity-10" viewBox="0 0 400 400">
                  <defs>
                    <pattern id="salon-pattern" x="0" y="0" width="40" height="40" patternUnits="userSpaceOnUse">
                      <circle cx="20" cy="20" r="2" fill="currentColor" className="text-rose-400"/>
                      <path d="M10,20 Q20,10 30,20 Q20,30 10,20" fill="none" stroke="currentColor" strokeWidth="0.5" className="text-rose-300"/>
                    </pattern>
                  </defs>
                  <rect width="100%" height="100%" fill="url(#salon-pattern)"/>
                </svg>
              </div>
              
              {/* Content overlay */}
              <div className="absolute inset-0 bg-gradient-to-t from-black/20 to-transparent"></div>
              <div className="absolute inset-0 flex flex-col justify-center items-center text-center p-6">
                <motion.div
                  initial={{ opacity: 0, y: 20 }}
                  whileInView={{ opacity: 1, y: 0 }}
                  viewport={{ once: true }}
                  transition={{ delay: 0.6 }}
                  className="bg-white/90 backdrop-blur-sm rounded-2xl p-6 shadow-lg"
                >
                  <Award className="w-10 h-10 mx-auto mb-3 text-rose-500" />
                  <h4 className="text-lg font-bold text-gray-800 mb-2">Premium Salon Experience</h4>
                  <p className="text-sm text-gray-600 mb-3">
                    Award-Winning Stylists
                  </p>
                  <div className="flex justify-center space-x-1">
                    {[...Array(5)].map((_, i) => (
                      <motion.div
                        key={i}
                        initial={{ opacity: 0, scale: 0.5 }}
                        whileInView={{ opacity: 1, scale: 1 }}
                        viewport={{ once: true }}
                        transition={{ delay: 0.7 + (i * 0.1) }}
                      >
                        <Sparkles className="w-4 h-4 text-yellow-400" />
                      </motion.div>
                    ))}
                  </div>
                </motion.div>
              </div>
            </div>
          </div>
        </motion.div>
      </div>
    </section>
  );
};

export { ErrorBoundary };
export default OffersCarousel;
