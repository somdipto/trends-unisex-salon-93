
import { motion } from "framer-motion";
import Navbar from "@/components/Navbar";
import { ServiceCard } from "@/components/services/ServiceCard";
import { MakeoverPackage } from "@/components/services/MakeoverPackage";
import { CustomPackage } from "@/components/services/CustomPackage";
import { services, makeoverPackage } from "@/data/servicesData";

const Services = () => {
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
            <ServiceCard key={service.name} service={service} index={index} />
          ))}
        </div>

        <MakeoverPackage makeoverPackage={makeoverPackage} />
        <CustomPackage />
      </div>
    </div>
  );
};

export default Services;

