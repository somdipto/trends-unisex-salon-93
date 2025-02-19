
import Hero from "@/components/Hero";
import ServicesCarousel from "@/components/ServicesCarousel";
import ExclusiveOffers from "@/components/ExclusiveOffers";
import LocationMap from "@/components/LocationMap";
import Testimonials from "@/components/Testimonials";
import ContactForm from "@/components/ContactForm";
import Navbar from "@/components/Navbar";
import Footer from "@/components/Footer";
import WhatsAppButton from "@/components/WhatsAppButton";
import FloatingOffer from "@/components/FloatingOffer";

const Index = () => {
  return (
    <div className="min-h-screen bg-white">
      <Navbar />
      <Hero />
      <FloatingOffer />
      <ServicesCarousel />
      <ExclusiveOffers />
      <LocationMap />
      <Testimonials />
      <ContactForm />
      <Footer />
      <WhatsAppButton />
    </div>
  );
};

export default Index;
