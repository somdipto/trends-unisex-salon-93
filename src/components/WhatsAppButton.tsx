
import { MessageCircle } from "lucide-react";
import { motion } from "framer-motion";

const WhatsAppButton = () => {
  const whatsappNumber = "+919071331124";
  const whatsappUrl = `https://wa.me/${whatsappNumber}`;

  return (
    <motion.div
      initial={{ scale: 0 }}
      animate={{ scale: 1 }}
      whileHover={{ scale: 1.1 }}
      className="fixed bottom-6 right-6 z-50"
    >
      <a
        href={whatsappUrl}
        target="_blank"
        rel="noopener noreferrer"
        className="flex items-center justify-center w-14 h-14 bg-green-500 rounded-full shadow-lg hover:bg-green-600 transition-colors duration-250"
        aria-label="Chat on WhatsApp"
      >
        <MessageCircle className="w-8 h-8 text-white" />
      </a>
    </motion.div>
  );
};

export default WhatsAppButton;
