
import Hero from "@/components/Hero";
import ImageCarousel from "@/components/ImageCarousel";
import ServicesMenu from "@/components/ServicesMenu";
import ExclusiveOffers from "@/components/ExclusiveOffers";
import LocationMap from "@/components/LocationMap";
import Testimonials from "@/components/Testimonials";
import ContactForm from "@/components/ContactForm";
import Navbar from "@/components/Navbar";
import OffersCarousel from "@/components/OffersCarousel";
import Footer from "@/components/Footer";
import WhatsAppButton from "@/components/WhatsAppButton";
import FloatingOffer from "@/components/FloatingOffer";

const Index = () => {
  return (
    <div className="min-h-screen bg-white no-horizontal-scroll">
      <Navbar />
      <Hero />
      <FloatingOffer />
      <div className="max-w-screen overflow-hidden">
        <ImageCarousel />
        <ServicesMenu />
        <ExclusiveOffers />
        <OffersCarousel />
        <LocationMap />
        <Testimonials />
        <ContactForm />
        <Footer />
        <WhatsAppButton />
      </div>
    </div>
  );
};

export default Index;
