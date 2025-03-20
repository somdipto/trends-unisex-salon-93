
import { memo } from "react";
import Hero from "@/components/Hero";
import ImageCarousel from "@/components/ImageCarousel";
import ServicesMenu from "@/components/ServicesMenu";
import ExclusiveOffers from "@/components/ExclusiveOffers";
import LocationMap from "@/components/LocationMap";
import Testimonials from "@/components/Testimonials";
import Navbar from "@/components/Navbar";
import OffersCarousel from "@/components/OffersCarousel";
import Footer from "@/components/Footer";
import WhatsAppButton from "@/components/WhatsAppButton";
import FloatingOffer from "@/components/FloatingOffer";

// Memoize the main content to prevent unnecessary re-renders
const MainContent = memo(() => {
  return (
    <div className="relative z-0 space-y-16">
      <ServicesMenu />
      <ExclusiveOffers />
      <OffersCarousel />
      <LocationMap />
      <Testimonials />
      <Footer />
      <WhatsAppButton />
    </div>
  );
});

MainContent.displayName = "MainContent";

const Index = () => {
  return (
    <div className="min-h-screen bg-white relative">
      <Navbar />
      <Hero />
      <FloatingOffer />
      <MainContent />
    </div>
  );
};

export default Index;
