import React, { useState, useEffect } from 'react';
import { motion } from 'framer-motion';
import { Scissors, Award, Sparkles, Star } from 'lucide-react';

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
  hidden: { opacity: 0, y: 30 },
  visible: { 
    opacity: 1, 
    y: 0,
    transition: { duration: 0.8, ease: "easeOut" }
  }
};

const staggerContainer = {
  hidden: { opacity: 0 },
  visible: {
    opacity: 1,
    transition: {
      staggerChildren: 0.15,
      delayChildren: 0.3
    }
  }
};

const floatingAnimation = {
  animate: {
    y: [0, -10, 0],
    transition: {
      duration: 3,
      repeat: Infinity,
      ease: "easeInOut"
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
    <motion.div 
      className="relative"
      variants={floatingAnimation}
      animate="animate"
    >
      <div className="absolute inset-0 bg-gradient-to-br from-rose-200 to-purple-200 rounded-full blur-xl opacity-60 -z-10"></div>
      <div className="relative rounded-full bg-white/95 p-6 shadow-xl backdrop-blur-sm border border-white/50">
        <Scissors className="h-12 w-12 text-rose-500" />
      </div>
    </motion.div>
  );
  
  return (
    <section className="relative py-20 md:py-32 overflow-hidden">
      {/* Enhanced Background */}
      <div className="absolute inset-0 bg-gradient-to-br from-rose-50 via-white to-purple-50"></div>
      
      {/* Decorative elements */}
      <div className="absolute inset-0 overflow-hidden pointer-events-none">
        <div className="absolute -top-40 -right-40 w-96 h-96 bg-gradient-to-br from-rose-200 to-pink-200 rounded-full mix-blend-multiply filter blur-3xl opacity-30 animate-pulse"></div>
        <div className="absolute -bottom-40 -left-40 w-96 h-96 bg-gradient-to-br from-purple-200 to-blue-200 rounded-full mix-blend-multiply filter blur-3xl opacity-30 animate-pulse" style={{ animationDelay: '1s' }}></div>
        <div className="absolute top-1/4 -right-20 w-80 h-80 bg-gradient-to-br from-yellow-100 to-orange-100 rounded-full mix-blend-multiply filter blur-3xl opacity-20 animate-pulse" style={{ animationDelay: '2s' }}></div>
      </div>

      {/* Floating decoration elements */}
      <motion.div 
        className="absolute top-20 left-10 text-rose-200"
        animate={{ rotate: 360 }}
        transition={{ duration: 20, repeat: Infinity, ease: "linear" }}
      >
        <Sparkles className="w-8 h-8 opacity-40" />
      </motion.div>
      <motion.div 
        className="absolute bottom-20 right-10 text-purple-200"
        animate={{ rotate: -360 }}
        transition={{ duration: 25, repeat: Infinity, ease: "linear" }}
      >
        <Star className="w-6 h-6 opacity-40" />
      </motion.div>

      <div className="relative max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
        {/* Enhanced Section Header */}
        <motion.div 
          initial="hidden"
          whileInView="visible"
          viewport={{ once: true }}
          variants={staggerContainer}
          className="text-center mb-16 md:mb-20"
        >
          <motion.span 
            variants={fadeInUp}
            className="inline-flex items-center px-8 py-3 bg-gradient-to-r from-rose-100 via-purple-50 to-pink-100 text-rose-700 rounded-full text-sm font-semibold mb-6 shadow-lg border border-rose-200/50 backdrop-blur-sm"
          >
            <Sparkles className="w-4 h-4 mr-2" />
            Exclusive Premium Offer
            <Award className="w-4 h-4 ml-2" />
          </motion.span>
          
          <motion.h2 
            variants={fadeInUp}
            className="text-4xl sm:text-5xl md:text-6xl font-serif font-bold text-gray-900 mb-6 leading-tight"
          >
            Transform Your 
            <span className="block text-transparent bg-clip-text bg-gradient-to-r from-rose-600 via-pink-600 to-purple-600">
              Beauty Experience
            </span>
          </motion.h2>
          
          <motion.p 
            variants={fadeInUp}
            className="text-lg sm:text-xl text-gray-600 max-w-3xl mx-auto leading-relaxed"
          >
            Indulge in our exclusive hair treatments designed to transform your look and boost your confidence.
            <span className="block mt-2 font-semibold text-rose-600">Limited time offers - book your session today!</span>
          </motion.p>
        </motion.div>

        {/* Enhanced Offer Card */}
        <motion.div 
          className="relative max-w-6xl mx-auto"
          initial={{ opacity: 0, y: 50 }}
          whileInView={{ opacity: 1, y: 0, transition: { delay: 0.3, duration: 0.8 } }}
          viewport={{ once: true }}
          onMouseEnter={() => setIsHovered(true)}
          onMouseLeave={() => setIsHovered(false)}
        >
          <div className="relative">
            {/* Card glow effect */}
            <div className="absolute inset-0 bg-gradient-to-r from-rose-300 via-purple-300 to-pink-300 rounded-3xl blur-xl opacity-20 -z-10 transform scale-105"></div>
            
            <div className="bg-white/90 backdrop-blur-lg rounded-3xl shadow-2xl overflow-hidden border border-white/50 transition-all duration-500 hover:shadow-3xl hover:scale-[1.02]">
              <div className="flex flex-col lg:flex-row">
                {/* Enhanced Image Section */}
                <div className="w-full lg:w-1/2 h-80 md:h-96 lg:h-auto relative overflow-hidden">
                  <div className="absolute inset-0 bg-gradient-to-br from-rose-100 to-purple-100">
                    <img 
                      src={salonImage} 
                      alt="Premium Hair Styling"
                      className="w-full h-full object-cover object-center transition-transform duration-700 hover:scale-110"
                    />
                  </div>
                  <div className="absolute inset-0 bg-gradient-to-t from-black/40 via-transparent to-transparent"></div>
                  
                  {/* Floating stats */}
                  <motion.div
                    className="absolute top-6 right-6 bg-white/95 backdrop-blur-sm rounded-2xl p-4 shadow-lg"
                    initial={{ opacity: 0, scale: 0.8 }}
                    animate={{ opacity: 1, scale: 1 }}
                    transition={{ delay: 1 }}
                  >
                    <div className="flex items-center space-x-1 mb-1">
                      {[...Array(5)].map((_, i) => (
                        <Star key={i} className="w-4 h-4 text-yellow-400 fill-current" />
                      ))}
                    </div>
                    <p className="text-xs font-semibold text-gray-700">5.0 Rating</p>
                  </motion.div>

                  <div className="absolute bottom-0 left-0 right-0 p-8">
                    <motion.div
                      initial={{ opacity: 0, y: 20 }}
                      animate={{ opacity: 1, y: 0 }}
                      transition={{ delay: 0.8 }}
                      className="text-center"
                    >
                      <Award className="w-10 h-10 mx-auto mb-3 text-rose-300" />
                      <p className="text-white font-semibold text-lg mb-2">Award-Winning Excellence</p>
                      <p className="text-rose-200 text-sm">
                        Premium Stylists • Luxury Products • Unforgettable Experience
                      </p>
                    </motion.div>
                  </div>
                </div>
                
                {/* Enhanced Content Section */}
                <div className="w-full lg:w-1/2 p-10 md:p-12 lg:p-16 flex flex-col justify-center">
                  <motion.div 
                    className="mb-8"
                    initial={{ opacity: 0, x: 30 }}
                    whileInView={{ opacity: 1, x: 0 }}
                    viewport={{ once: true }}
                    transition={{ delay: 0.4 }}
                  >
                    {getIconComponent()}
                  </motion.div>
                  
                  <motion.h3 
                    className="text-3xl md:text-4xl lg:text-5xl font-bold text-gray-900 mb-6 leading-tight"
                    initial={{ opacity: 0, y: 20 }}
                    whileInView={{ opacity: 1, y: 0 }}
                    viewport={{ once: true }}
                    transition={{ delay: 0.5 }}
                  >
                    {offer.title}
                  </motion.h3>
                  
                  <motion.p 
                    className="text-xl text-gray-600 mb-8 leading-relaxed"
                    initial={{ opacity: 0, y: 15 }}
                    whileInView={{ opacity: 1, y: 0 }}
                    viewport={{ once: true }}
                    transition={{ delay: 0.6 }}
                  >
                    {offer.description}
                  </motion.p>
                  
                  <motion.div 
                    className="mb-10"
                    initial={{ opacity: 0, y: 15 }}
                    whileInView={{ opacity: 1, y: 0 }}
                    viewport={{ once: true }}
                    transition={{ delay: 0.7 }}
                  >
                    <h4 className="text-sm font-bold text-gray-500 uppercase tracking-wider mb-6 flex items-center">
                      <Sparkles className="w-4 h-4 mr-2 text-rose-400" />
                      What's Included
                    </h4>
                    <ul className="space-y-4">
                      {offer.features.map((feature, index) => (
                        <motion.li 
                          key={index}
                          className="flex items-center group"
                          initial={{ opacity: 0, x: -20 }}
                          whileInView={{ opacity: 1, x: 0 }}
                          viewport={{ once: true }}
                          transition={{ delay: 0.7 + (index * 0.1) }}
                        >
                          <div className="flex-shrink-0 w-6 h-6 bg-gradient-to-r from-rose-400 to-pink-400 rounded-full flex items-center justify-center mr-4 group-hover:scale-110 transition-transform">
                            <span className="w-2 h-2 bg-white rounded-full"></span>
                          </div>
                          <span className="text-gray-700 text-lg">{feature}</span>
                        </motion.li>
                      ))}
                    </ul>
                  </motion.div>
                  
                  <div className="flex flex-col sm:flex-row items-center justify-between gap-6">
                    <motion.div
                      initial={{ scale: 0.8, opacity: 0 }}
                      whileInView={{ scale: 1, opacity: 1 }}
                      viewport={{ once: true }}
                      transition={{ delay: 0.9, type: 'spring' }}
                      className="text-3xl font-bold text-transparent bg-clip-text bg-gradient-to-r from-rose-600 to-pink-600"
                    >
                      {offer.price}
                    </motion.div>
                    
                    <motion.a
                      href="https://wa.me/919987654321?text=Hi%20Trends%20Unisex%20Salon%2C%20I'd%20like%20to%20book%20an%20appointment"
                      target="_blank"
                      rel="noopener noreferrer"
                      className="relative group w-full sm:w-auto px-10 py-4 bg-gradient-to-r from-rose-500 via-pink-500 to-purple-500 hover:from-rose-600 hover:via-pink-600 hover:to-purple-600 text-white rounded-2xl font-semibold text-lg text-center shadow-xl hover:shadow-2xl transition-all duration-300 transform hover:-translate-y-1 focus:outline-none focus:ring-4 focus:ring-rose-300 focus:ring-opacity-50 overflow-hidden"
                      whileHover={{ scale: 1.05 }}
                      whileTap={{ scale: 0.98 }}
                      initial={{ opacity: 0, y: 20 }}
                      whileInView={{ opacity: 1, y: 0 }}
                      viewport={{ once: true }}
                      transition={{ delay: 1 }}
                    >
                      <span className="relative z-10">Book Now on WhatsApp</span>
                      <div className="absolute inset-0 bg-gradient-to-r from-white/20 to-transparent opacity-0 group-hover:opacity-100 transition-opacity duration-300"></div>
                    </motion.a>
                  </div>
                  
                  {offer.highlight && (
                    <motion.div 
                      className="mt-6 flex justify-center sm:justify-end"
                      initial={{ opacity: 0, y: 10 }}
                      whileInView={{ opacity: 1, y: 0 }}
                      viewport={{ once: true }}
                      transition={{ delay: 1.1 }}
                    >
                      <span className="inline-flex items-center px-6 py-2 rounded-full text-sm font-semibold bg-gradient-to-r from-rose-100 to-pink-100 text-rose-700 border border-rose-200 shadow-md">
                        <Sparkles className="w-4 h-4 mr-2 animate-pulse" />
                        {offer.highlight}
                      </span>
                    </motion.div>
                  )}
                </div>
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
