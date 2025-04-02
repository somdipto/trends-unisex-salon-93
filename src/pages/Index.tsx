import { memo, lazy, Suspense } from "react";
import Hero from "@/components/Hero";
import ServicesMenu from "@/components/ServicesMenu";
import ExclusiveOffers from "@/components/ExclusiveOffers";
import Navbar from "@/components/Navbar";
import FloatingOffer from "@/components/FloatingOffer";
import { Toaster } from "@/components/ui/toaster";

// Lazy load components that are not immediately visible
const LocationMap = lazy(() => import("@/components/LocationMap"));
const Testimonials = lazy(() => import("@/components/Testimonials"));
const Footer = lazy(() => import("@/components/Footer"));
const WhatsAppButton = lazy(() => import("@/components/WhatsAppButton"));
const OffersCarousel = lazy(() => import("@/components/OffersCarousel"));

// Memoize the main content to prevent unnecessary re-renders
const MainContent = memo(() => {
  return (
    <div className="relative z-0 space-y-16">
      <ServicesMenu />
      <ExclusiveOffers />
      <Suspense fallback={<div className="h-64 w-full bg-gray-100 animate-pulse rounded-lg" />}>
        <OffersCarousel />
      </Suspense>
      <Suspense fallback={<div className="h-64 w-full bg-gray-100 animate-pulse rounded-lg" />}>
        <LocationMap />
      </Suspense>
      <Suspense fallback={<div className="h-64 w-full bg-gray-100 animate-pulse rounded-lg" />}>
        <Testimonials />
      </Suspense>
      <Suspense fallback={<div className="h-32 w-full bg-gray-100 animate-pulse rounded-lg" />}>
        <Footer />
      </Suspense>
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
      <Suspense fallback={null}>
        <WhatsAppButton />
      </Suspense>
      <Toaster />
    </div>
  );
};

export default Index;
