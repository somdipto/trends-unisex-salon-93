
import { motion } from "framer-motion";
import Navbar from "@/components/Navbar";

const Contact = () => {
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
          <h1 className="text-4xl font-bold mb-4">Contact Us</h1>
          <p className="text-gray-600">Get in touch with our team</p>
        </motion.div>

        <div className="grid md:grid-cols-2 gap-12">
          <motion.div
            initial={{ opacity: 0, x: -20 }}
            animate={{ opacity: 1, x: 0 }}
            transition={{ duration: 0.5 }}
            className="space-y-6"
          >
            <div>
              <h2 className="text-2xl font-semibold mb-4">Get In Touch</h2>
              <p className="text-gray-600">
                Have questions? We'd love to hear from you. Call us or visit our social media pages.
              </p>
            </div>

            <div>
              <h3 className="text-xl font-semibold mb-2">Follow Us</h3>
              <div className="flex space-x-4">
                <a 
                  href="https://www.instagram.com/the_trends_salon_malleswaram" 
                  target="_blank" 
                  rel="noopener noreferrer" 
                  className="text-gray-600 hover:text-black"
                >
                  Instagram
                </a>
                <a 
                  href="https://www.facebook.com/people/The-Trends-unisex-salon/61570822178102" 
                  target="_blank" 
                  rel="noopener noreferrer" 
                  className="text-gray-600 hover:text-black"
                >
                  Facebook
                </a>
              </div>
            </div>

            <div>
              <h3 className="text-xl font-semibold mb-2">Contact Info</h3>
              <div className="space-y-2 text-gray-600">
                <p>Email: trendsunisexsalon8@gmail.com</p>
                <p>Phone: +91 90713 31124 (Malleswaram)</p>
              </div>
            </div>
          </motion.div>

          <motion.div
            initial={{ opacity: 0, x: 20 }}
            animate={{ opacity: 1, x: 0 }}
            transition={{ duration: 0.5 }}
            className="bg-gray-50 p-8 rounded-lg shadow-sm"
          >
            <h2 className="text-2xl font-semibold mb-6">Our Branches</h2>
            
            <div className="space-y-6">
              <div>
                <h3 className="text-xl font-semibold mb-2">Malleshwaram</h3>
                <p className="text-gray-600">
                  +91 90713 31124
                </p>
                <p className="text-gray-600 mt-1">
                  #7, 3rd Main Road, Malleshwaram, Bangalore - 560003
                </p>
              </div>
              
              <div>
                <h3 className="text-xl font-semibold mb-2">Rajajinagar</h3>
                <p className="text-gray-600">
                  +91 81233 28824
                </p>
                <p className="text-gray-600 mt-1">
                  Rajajinagar, Bangalore
                </p>
              </div>
              
              <div>
                <h3 className="text-xl font-semibold mb-2">Hebbal</h3>
                <p className="text-gray-600">
                  +91 63628 56410
                </p>
                <p className="text-gray-600 mt-1">
                  Hebbal, Bangalore
                </p>
              </div>
            </div>
          </motion.div>
        </div>
      </div>
    </div>
  );
};

export default Contact;
