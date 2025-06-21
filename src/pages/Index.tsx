
import { memo, lazy, Suspense } from "react";
import Hero from "@/components/Hero";
import ServicesMenu from "@/components/ServicesMenu";
import ExclusiveOffers from "@/components/ExclusiveOffers";
import Navbar from "@/components/Navbar";
import FloatingOffer from "@/components/FloatingOffer";
import WhatsAppButton from "@/components/WhatsAppButton";
import { Toaster } from "@/components/ui/toaster";

// Import OffersCarousel directly instead of using lazy loading
import OffersCarousel, { ErrorBoundary } from "@/components/OffersCarousel";

// Lazy load components that are not immediately visible
// Use default import format to ensure compatibility
const LocationMap = lazy(() => import("@/components/LocationMap"));
const Testimonials = lazy(() => import("@/components/Testimonials"));
const Footer = lazy(() => import("@/components/Footer"));

// Memoize the main content to prevent unnecessary re-renders
const MainContent = memo(() => {
  return (
    <div className="relative z-0 space-y-16">
      <ServicesMenu />
      <ExclusiveOffers />
      {/* Wrap OffersCarousel with ErrorBoundary */}
      <ErrorBoundary>
        <OffersCarousel />
      </ErrorBoundary>
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
      <WhatsAppButton />
      <Toaster />
    </div>
  );
};

export default Index;
