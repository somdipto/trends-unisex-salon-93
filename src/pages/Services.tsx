
import { motion } from "framer-motion";
import Navbar from "@/components/Navbar";
import { Button } from "@/components/ui/button";

const Services = () => {
  const services = [
    {
      name: "Regular Cut & Style",
      originalPrice: 1499,
      discountedPrice: 999,
      image: "/lovable-uploads/efe30971-b2b4-4b79-8c0c-0661a081fc1e.png",
      details: [
        "Professional haircut",
        "Basic styling",
        "Hair wash",
        "Style consultation",
      ],
      highlight: false,
    },
    {
      name: "Premium Hair Makeover",
      originalPrice: 2499,
      discountedPrice: 1499,
      image: "/lovable-uploads/2f381dc8-c1bd-4599-b64a-21b65d1be8b3.png",
      details: [
        "Advanced haircut",
        "Premium styling",
        "Deep conditioning",
        "Color consultation",
        "Hair treatment",
      ],
      highlight: true,
    },
    {
      name: "Deluxe Full Service",
      originalPrice: 3999,
      discountedPrice: 1999,
      image: "/lovable-uploads/ccce83e8-1602-4f81-8ddc-a87a2dc11d4e.png",
      details: [
        "Premium haircut",
        "Complex styling",
        "Color services",
        "Treatment therapy",
        "Style consultation",
        "Hair care kit",
      ],
      highlight: false,
    },
  ];

  const handleBooking = () => {
    window.open('https://wa.me/917633894003', '_blank');
  };

  return (
    <div className="min-h-screen bg-white">
      <Navbar />
      <div className="pt-20 px-4 sm:px-6 lg:px-8 max-w-7xl mx-auto">
        <motion.div
          initial={{ opacity: 0, y: 20 }}
          animate={{ opacity: 1, y: 0 }}
          transition={{ duration: 0.6 }}
          className="text-center mb-12"
        >
          <h1 className="text-5xl font-libre mb-4">Our Services</h1>
          <p className="text-gray-600 max-w-2xl mx-auto">
            Experience premium hair care with our expertly crafted service packages
          </p>
        </motion.div>

        <div className="grid grid-cols-1 md:grid-cols-3 gap-8 mb-16">
          {services.map((service, index) => (
            <motion.div
              key={service.name}
              initial={{ opacity: 0, y: 20 }}
              animate={{ opacity: 1, y: 0 }}
              transition={{ delay: index * 0.1 }}
              className={`bg-white rounded-xl overflow-hidden shadow-lg hover:shadow-xl transition-all duration-300 ${
                service.highlight ? 'ring-2 ring-purple-500' : ''
              }`}
            >
              <div className="aspect-square mb-4 overflow-hidden">
                <motion.img
                  whileHover={{ scale: 1.05 }}
                  transition={{ duration: 0.3 }}
                  src={service.image}
                  alt={service.name}
                  className="w-full h-full object-cover"
                />
              </div>
              <div className="p-6">
                <h3 className="text-xl font-libre mb-2">{service.name}</h3>
                <div className="flex items-center gap-2 mb-4">
                  <span className="text-2xl font-bold">
                    ₹{service.discountedPrice}
                  </span>
                  <span className="text-gray-500 line-through text-sm">
                    ₹{service.originalPrice}
                  </span>
                  <span className="text-green-600 text-sm">
                    Save ₹{service.originalPrice - service.discountedPrice}
                  </span>
                </div>
                <ul className="space-y-2 mb-6">
                  {service.details.map((detail) => (
                    <motion.li
                      key={detail}
                      initial={{ opacity: 0 }}
                      whileInView={{ opacity: 1 }}
                      className="text-sm text-gray-600 flex items-center"
                    >
                      <span className="mr-2">•</span> {detail}
                    </motion.li>
                  ))}
                </ul>
                <motion.button
                  whileHover={{ scale: 1.02, backgroundColor: "#FFFFFF", color: "#000000" }}
                  whileTap={{ scale: 0.98 }}
                  onClick={handleBooking}
                  className="w-full bg-black text-white py-3 px-6 rounded-md transition-all duration-300 border border-black hover:bg-white hover:text-black"
                >
                  Book now
                </motion.button>
              </div>
            </motion.div>
          ))}
        </div>

        <motion.div
          initial={{ opacity: 0, y: 20 }}
          animate={{ opacity: 1, y: 0 }}
          transition={{ delay: 0.3 }}
          className="text-center py-16 bg-black text-white rounded-lg relative overflow-hidden"
          style={{
            backgroundImage: "url('/lovable-uploads/f6e63a05-16bc-41c2-be4b-08f24de54830.png')",
            backgroundSize: "cover",
            backgroundPosition: "center",
          }}
        >
          <div className="absolute inset-0 bg-black/50 backdrop-blur-sm"></div>
          <div className="relative z-10 max-w-3xl mx-auto">
            <h2 className="text-4xl font-libre mb-4">Mix & Match Services</h2>
            <p className="mb-8 text-lg">
              Choose any 5 services and get an additional 20% off the package price.
              Contact us to create your custom package.
            </p>
            <motion.button
              whileHover={{ scale: 1.05, backgroundColor: "#FFFFFF", color: "#000000" }}
              whileTap={{ scale: 0.98 }}
              onClick={handleBooking}
              className="bg-transparent text-white border-2 border-white py-3 px-8 rounded-md hover:bg-white hover:text-black transition-all duration-300"
            >
              Create Your Package
            </motion.button>
          </div>
        </motion.div>
      </div>
    </div>
  );
};

export default Services;
