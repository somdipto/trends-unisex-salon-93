
import Hero from "@/components/Hero";
import ImageCarousel from "@/components/ImageCarousel";
import ServicesMenu from "@/components/ServicesMenu";
import LocationMap from "@/components/LocationMap";
import Testimonials from "@/components/Testimonials";
import Navbar from "@/components/Navbar";
import Footer from "@/components/Footer";
import WhatsAppButton from "@/components/WhatsAppButton";
import FloatingOffer from "@/components/FloatingOffer";

const Index = () => {
  return (
    <div className="min-h-screen bg-white relative">
      <Navbar />
      <Hero />
      <FloatingOffer />
      <div className="relative z-0">
        <ImageCarousel />
        <ServicesMenu />
        <LocationMap />
        <Testimonials />
        <Footer />
        <WhatsAppButton />
      </div>
    </div>
  );
};

export default Index;
