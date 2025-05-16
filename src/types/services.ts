
export interface Service {
  name: string;
  originalPrice: number;
  discountedPrice: number;
  services: ServiceItem[];
}

export interface ServiceItem {
  name: string;
  price: number;
}

export interface MakeoverPackage {
  name: string;
  originalPrice: number;
  discountedPrice: number;
  services: string[];
}

export interface Offer {
  id: string;
  title: string;
  description: string;
  features: string[];
  price: string;
  icon: string; // Added the icon property to match usage in OffersCarousel
}
