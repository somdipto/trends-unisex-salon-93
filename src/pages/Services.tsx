
import { motion } from "framer-motion";
import Navbar from "@/components/Navbar";
import { Card } from "@/components/ui/card";

const Services = () => {
  const services = [
    {
      name: "Basic Package",
      originalPrice: 1000,
      discountedPrice: 699,
      services: [
        { name: "Hair Cut", price: 200 },
        { name: "Beard", price: 100 },
        { name: "De-tan", price: 600 },
        { name: "Wash", price: 100 },
      ],
    },
    {
      name: "Premium Package",
      originalPrice: 1400,
      discountedPrice: 999,
      services: [
        { name: "Hair Cut", price: 200 },
        { name: "Beard", price: 100 },
        { name: "De-tan", price: 600 },
        { name: "Oil Massage", price: 400 },
        { name: "Hair Wash", price: 100 },
      ],
    },
    {
      name: "Spa Package",
      originalPrice: 2400,
      discountedPrice: 1785,
      services: [
        { name: "Hair Cut", price: 200 },
        { name: "Beard", price: 100 },
        { name: "Hair Spa", price: 1000 },
        { name: "Clean-up", price: 800 },
      ],
    },
    {
      name: "Color Package",
      originalPrice: 2800,
      discountedPrice: 2200,
      services: [
        { name: "Hair Cut", price: 200 },
        { name: "Color", price: 700 },
        { name: "Beard", price: 100 },
        { name: "De-tan", price: 600 },
        { name: "Facial", price: 1000 },
      ],
    },
    {
      name: "Luxury Package",
      originalPrice: 5900,
      discountedPrice: 3770,
      services: [
        { name: "Lotus Facial", price: 3500 },
        { name: "Hair Cut", price: 700 },
        { name: "Face De-tan", price: 600 },
        { name: "Eyebrow + Upper Lip", price: 80 },
        { name: "Oil Massage", price: 500 },
      ],
    },
    {
      name: "Wellness Package",
      originalPrice: 2400,
      discountedPrice: 1999,
      services: [
        { name: "Hair Cut", price: 200 },
        { name: "Beard", price: 100 },
        { name: "Manicure", price: 500 },
        { name: "Pedicure", price: 1200 },
        { name: "Oil Massage", price: 400 },
      ],
    },
  ];

  const makeoverPackage = {
    name: "Complete Makeover Package",
    originalPrice: 5000,
    discountedPrice: 2499,
    services: [
      "Full Arms Rica Waxing",
      "Full Legs Rica Waxing",
      "Under Arms Rica Waxing",
      "Face Clean-up",
      "Face De-tan",
      "Neck De-tan",
      "Hair Spa",
      "Hair Cut",
      "Face Threading",
    ],
  };

  const handleBooking = () => {
    window.open('https://wa.me/917633894003', '_blank');
  };

  return (
    <div className="min-h-screen bg-gray-50">
      <Navbar />
      <div className="pt-20 px-4 sm:px-6 lg:px-8 max-w-7xl mx-auto">
        <motion.div
          initial={{ opacity: 0, y: 20 }}
          animate={{ opacity: 1, y: 0 }}
          transition={{ duration: 0.6 }}
          className="text-center mb-12"
        >
          <h1 className="text-4xl font-libre mb-4">Our Services</h1>
          <p className="text-gray-600 max-w-2xl mx-auto">
            Choose from our carefully curated service packages
          </p>
        </motion.div>

        <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-6 mb-12">
          {services.map((service, index) => (
            <motion.div
              key={service.name}
              initial={{ opacity: 0, y: 20 }}
              animate={{ opacity: 1, y: 0 }}
              transition={{ delay: index * 0.1 }}
            >
              <Card className="p-6 h-full flex flex-col">
                <h3 className="text-xl font-libre mb-3">{service.name}</h3>
                <div className="flex items-center gap-2 mb-4">
                  <span className="text-2xl font-bold text-green-600">
                    ₹{service.discountedPrice}
                  </span>
                  <span className="text-gray-500 line-through text-sm">
                    ₹{service.originalPrice}
                  </span>
                  <span className="text-green-600 text-sm">
                    Save ₹{service.originalPrice - service.discountedPrice}
                  </span>
                </div>
                <div className="flex-grow">
                  <ul className="space-y-2 mb-4">
                    {service.services.map((item) => (
                      <li key={item.name} className="flex justify-between text-sm">
                        <span>{item.name}</span>
                        <span className="text-gray-600">₹{item.price}</span>
                      </li>
                    ))}
                  </ul>
                </div>
                <button
                  onClick={handleBooking}
                  className="w-full bg-black text-white py-2 rounded-md hover:bg-gray-800 transition-colors"
                >
                  Book Now
                </button>
              </Card>
            </motion.div>
          ))}
        </div>

        <motion.div
          initial={{ opacity: 0, y: 20 }}
          animate={{ opacity: 1, y: 0 }}
          transition={{ delay: 0.3 }}
          className="bg-black text-white rounded-lg p-8 mb-12"
        >
          <div className="max-w-3xl mx-auto text-center">
            <h2 className="text-3xl font-libre mb-6">{makeoverPackage.name}</h2>
            <div className="flex items-center justify-center gap-4 mb-6">
              <span className="text-3xl font-bold text-green-400">
                ₹{makeoverPackage.discountedPrice}
              </span>
              <span className="text-gray-400 line-through text-xl">
                ₹{makeoverPackage.originalPrice}
              </span>
              <span className="text-green-400">
                Save ₹{makeoverPackage.originalPrice - makeoverPackage.discountedPrice}
              </span>
            </div>
            <div className="grid grid-cols-2 md:grid-cols-3 gap-4 mb-8">
              {makeoverPackage.services.map((service) => (
                <div key={service} className="text-sm">
                  • {service}
                </div>
              ))}
            </div>
            <button
              onClick={handleBooking}
              className="bg-white text-black px-8 py-3 rounded-md hover:bg-gray-100 transition-colors"
            >
              Book Complete Makeover
            </button>
          </div>
        </motion.div>

        <motion.div
          initial={{ opacity: 0, y: 20 }}
          animate={{ opacity: 1, y: 0 }}
          transition={{ delay: 0.4 }}
          className="text-center py-12 bg-gradient-to-r from-purple-50 to-pink-50 rounded-lg"
        >
          <h2 className="text-3xl font-libre mb-4">Mix & Match Services</h2>
          <p className="text-gray-600 mb-6">
            Choose any 5 services and get an additional 20% off the package price
          </p>
          <button
            onClick={handleBooking}
            className="bg-black text-white px-8 py-3 rounded-md hover:bg-gray-800 transition-colors"
          >
            Create Your Package
          </button>
        </motion.div>
      </div>
    </div>
  );
};

export default Services;
