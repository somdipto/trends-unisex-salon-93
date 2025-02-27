
import { Service } from "../types/services";

export const services: Service[] = [
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
      { name: "Regular Manicure", price: 500 },
      { name: "Regular Pedicure", price: 500 },
      { name: "Foot Massage", price: 500 },
      { name: "Oil Massage", price: 400 }
    ]
  }
];
