import { Service, MakeoverPackage } from "../types/services";

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
  }
];

export const makeoverPackage: MakeoverPackage = {
  name: "Complete Makeover Package",
  originalPrice: 7999,
  discountedPrice: 5999,
  services: [
    "Hair Spa Treatment",
    "Professional Makeup",
    "Manicure & Pedicure",
    "Facial Treatment",
    "Hair Styling"
  ]
};
