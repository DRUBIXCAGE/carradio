export interface KitOption {
  id: "vehicle" | "vehicle-home" | "radio-only";
  name: string;
  badge?: string;
  subtitle: string;
  price: number;
  originalPrice?: number;
  description: string;
  images: {
    src: string;
    alt: string;
    label: string;
  }[];
  included: string[];
}

export interface SpecificationItem {
  label: string;
  value: string;
}

export interface SpecificationGroup {
  category: string;
  items: SpecificationItem[];
}

export interface ProductDetail {
  id: string;
  title: string;
  modelNumber: string;
  sku: string;
  rating: number;
  reviewCount: number;
  description: string;
  highlightPoints: string[];
  kits: KitOption[];
  specifications: SpecificationGroup[];
}

export interface Accessory {
  id: string;
  title: string;
  modelNumber: string;
  price: number;
  originalPrice?: number;
  image: string;
  category: "Dock" | "Antenna" | "Audio" | "Power" | "Mount";
  description: string;
  rating: number;
  reviewCount: number;
  badge?: string;
  inStock: boolean;
}

export interface CartItem {
  id: string; // unique item id e.g. "onyx-ezr-vehicle" or accessory id
  productId: string;
  title: string;
  kitName?: string;
  modelNumber: string;
  price: number;
  originalPrice?: number;
  quantity: number;
  image: string;
  isKit?: boolean;
}

export interface Review {
  id: string;
  author: string;
  location?: string;
  rating: number;
  date: string;
  verified: boolean;
  title: string;
  comment: string;
  helpfulCount: number;
}

export interface FAQItem {
  id: string;
  question: string;
  answer: string;
  category: "Installation" | "Subscription" | "Features" | "Compatibility" | "Warranty & Shipping";
}

