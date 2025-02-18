import { useState } from "react";
import { useToast } from "@/hooks/use-toast";
import { motion } from "framer-motion";
import { Send, Phone, Mail, MapPin, Instagram, MessageCircle } from "lucide-react";
import { Link } from 'react-router-dom';

const ContactForm = () => {
  const { toast } = useToast();
  const [formData, setFormData] = useState({
    name: "",
    email: "",
    phone: "",
    message: "",
  });

  const handleSubmit = (e: React.FormEvent) => {
    e.preventDefault();
    const whatsappNumber = "+919071331124";
    const message = `Name: ${formData.name}%0AEmail: ${formData.email}%0APhone: ${formData.phone}%0AMessage: ${formData.message}`;
    const whatsappUrl = `https://wa.me/${whatsappNumber}?text=${message}`;
    window.open(whatsappUrl, '_blank');

    toast({
      title: "Message forwarded to WhatsApp!",
      description: "We'll get back to you as soon as possible.",
    });
    setFormData({ name: "", email: "", phone: "", message: "" });
  };

  const handleChange = (
    e: React.ChangeEvent<HTMLInputElement | HTMLTextAreaElement>
  ) => {
    const { name, value } = e.target;
    setFormData((prev) => ({ ...prev, [name]: value }));
  };

  return (
    <div className="py-16 bg-gradient-to-b from-gray-50 to-white">
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
        <motion.div
          initial={{ opacity: 0, y: 20 }}
          animate={{ opacity: 1, y: 0 }}
          transition={{ duration: 0.6 }}
          className="text-center mb-12"
        >
          <h2 className="text-4xl font-libre mb-4">Get in Touch</h2>
          <p className="text-gray-600 font-libre">We'd love to hear from you</p>
        </motion.div>

        <div className="grid md:grid-cols-2 gap-12">
          <motion.div
            initial={{ opacity: 0, x: -20 }}
            animate={{ opacity: 1, x: 0 }}
            transition={{ duration: 0.5 }}
            className="bg-white/80 backdrop-blur-xl p-8 rounded-lg shadow-lg"
          >
            <form onSubmit={handleSubmit} className="space-y-6">
              <div>
                <label
                  htmlFor="name"
                  className="block text-sm font-medium text-gray-700"
                >
                  Name
                </label>
                <input
                  type="text"
                  id="name"
                  name="name"
                  value={formData.name}
                  onChange={handleChange}
                  required
                  className="mt-1 block w-full rounded-md border-gray-300 shadow-sm focus:border-black focus:ring-black transition-colors"
                />
              </div>

              <div>
                <label
                  htmlFor="email"
                  className="block text-sm font-medium text-gray-700"
                >
                  Email
                </label>
                <input
                  type="email"
                  id="email"
                  name="email"
                  value={formData.email}
                  onChange={handleChange}
                  required
                  className="mt-1 block w-full rounded-md border-gray-300 shadow-sm focus:border-black focus:ring-black transition-colors"
                />
              </div>

              <div>
                <label
                  htmlFor="phone"
                  className="block text-sm font-medium text-gray-700"
                >
                  Phone
                </label>
                <input
                  type="tel"
                  id="phone"
                  name="phone"
                  value={formData.phone}
                  onChange={handleChange}
                  className="mt-1 block w-full rounded-md border-gray-300 shadow-sm focus:border-black focus:ring-black transition-colors"
                />
              </div>

              <div>
                <label
                  htmlFor="message"
                  className="block text-sm font-medium text-gray-700"
                >
                  Message
                </label>
                <textarea
                  id="message"
                  name="message"
                  value={formData.message}
                  onChange={handleChange}
                  rows={4}
                  required
                  className="mt-1 block w-full rounded-md border-gray-300 shadow-sm focus:border-black focus:ring-black transition-colors"
                />
              </div>

              <motion.button
                whileHover={{ scale: 1.02, backgroundColor: "#FFFFFF", color: "#000000" }}
                whileTap={{ scale: 0.98 }}
                type="submit"
                className="w-full bg-black text-white py-3 px-6 rounded-md transition-all duration-300 border border-black hover:bg-white hover:text-black flex items-center justify-center space-x-2"
              >
                <Send size={18} />
                <span>Send Message</span>
              </motion.button>
            </form>
          </motion.div>

          <motion.div
            initial={{ opacity: 0, x: 20 }}
            animate={{ opacity: 1, x: 0 }}
            transition={{ duration: 0.5 }}
            className="space-y-8"
          >
            <div className="bg-white/80 backdrop-blur-xl p-6 rounded-lg shadow-lg">
              <div className="flex items-center space-x-4">
                <div className="bg-black p-3 rounded-full">
                  <Phone className="text-white" size={24} />
                </div>
                <div>
                  <h3 className="font-semibold">Phone</h3>
                  <p className="text-gray-600">+91 63665 47532</p>
                </div>
              </div>
            </div>

            <div className="bg-white/80 backdrop-blur-xl p-6 rounded-lg shadow-lg">
              <div className="flex items-center space-x-4">
                <div className="bg-black p-3 rounded-full">
                  <Mail className="text-white" size={24} />
                </div>
                <div>
                  <h3 className="font-semibold">Email</h3>
                  <p className="text-gray-600">TrendsUnisex@gmail.com</p>
                </div>
              </div>
            </div>

            <div className="bg-white/80 backdrop-blur-xl p-6 rounded-lg shadow-lg">
              <div className="flex items-center space-x-4">
                <div className="bg-black p-3 rounded-full">
                  <MapPin className="text-white" size={24} />
                </div>
                <div>
                  <h3 className="font-semibold">Location</h3>
                  <Link
                    to={"/location"}
                    className="mt-5 inline-flex items-center justify-center px-4 py-2 bg-gray-100 hover:bg-black text-black hover:text-white font-medium rounded-lg transition-all duration-300 focus:outline-none focus:ring-2 focus:ring-offset-2 active:bg-gray-800"
                  >
                    Visit us
                  </Link>
                </div>
              </div>
            </div>

            <div className="flex justify-center space-x-6">
              <a
                href="https://wa.me/917633894003"
                target="_blank"
                rel="noopener noreferrer"
                className="bg-black p-4 rounded-full hover:bg-white hover:text-black text-white transition-all duration-300 border border-black"
              >
                <MessageCircle size={24} />
              </a>
              <a
                href="https://instagram.com/trends_unisex"
                target="_blank"
                rel="noopener noreferrer"
                className="bg-black p-4 rounded-full hover:bg-white hover:text-black text-white transition-all duration-300 border border-black"
              >
                <Instagram size={24} />
              </a>
            </div>
          </motion.div>
        </div>
      </div>
    </div>
  );
};

export default ContactForm;
