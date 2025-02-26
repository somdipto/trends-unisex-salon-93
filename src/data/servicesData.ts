
import { Service } from "../types/services";

export const services: Service[] = [
  {
    name: "Hair Care Package",
    originalPrice: 2999,
    discountedPrice: 1999,
    services: [
      { name: "Hair Spa", price: 999 },
      { name: "Hair Cut", price: 599 },
      { name: "Hair Color", price: 1499 }
    ]
  },
  {
    name: "Skin Care Package",
    originalPrice: 3999,
    discountedPrice: 2499,
    services: [
      { name: "Facial", price: 1299 },
      { name: "Clean Up", price: 799 },
      { name: "De-Tan", price: 999 }
    ]
  },
  {
    name: "Bridal Package",
    originalPrice: 14999,
    discountedPrice: 9999,
    services: [
      { name: "Pre-Bridal Facial", price: 2999 },
      { name: "Bridal Makeup", price: 5999 },
      { name: "Hair Styling", price: 3999 }
    ]
  },
  {
    name: "Essential Package",
    originalPrice: 1000,
    discountedPrice: 699,
    services: [
      { name: "Hair Cut", price: 200 },
      { name: "Beard", price: 100 },
      { name: "De-tan", price: 600 },
      { name: "Wash", price: 100 }
    ]
  },
  {
    name: "Premium Package",
    originalPrice: 3990,
    discountedPrice: 3770,
    services: [
      { name: "Lotus Facial", price: 3500 },
      { name: "Hair Cut", price: 700 },
      { name: "Face De-tan", price: 600 },
      { name: "Eyebrow + Upper Lip", price: 80 },
      { name: "Oil Massage", price: 500 }
    ]
  },
  {
    name: "Refresh Package",
    originalPrice: 1400,
    discountedPrice: 999,
    services: [
      { name: "Hair Cut", price: 200 },
      { name: "Beard", price: 100 },
      { name: "De-tan", price: 600 },
      { name: "Oil Massage", price: 400 },
      { name: "Hair Wash", price: 100 }
    ]
  },
  {
    name: "Spa Package",
    originalPrice: 2400,
    discountedPrice: 1785,
    services: [
      { name: "Hair Cut", price: 200 },
      { name: "Beard", price: 100 },
      { name: "Hair Spa", price: 1000 },
      { name: "Clean-up", price: 500 }
    ]
  },
  {
    name: "Color Package",
    originalPrice: 2800,
    discountedPrice: 2200,
    services: [
      { name: "Hair Cut", price: 200 },
      { name: "Color", price: 700 },
      { name: "Beard", price: 100 },
      { name: "De-tan", price: 600 },
      { name: "Facial", price: 1000 }
    ]
  },
  {
    name: "Complete Care Package",
    originalPrice: 2400,
    discountedPrice: 1999,
    services: [
      { name: "Hair Cut", price: 200 },
      { name: "Beard", price: 100 },
      { name: "Manicure", price: 500 },
      { name: "Pedicure", price: 1200 },
      { name: "Oil Massage", price: 400 }
    ]
  }
];
