import productsData from "@/data/products.json";
import type { CategoryId } from "@/lib/brand";

export type ProductType = "thai-concept" | "genuine" | "aftermarket";

export type ProductChannels = {
  shopee?: string | null;
  tiktokShop?: string | null;
  lazada?: string | null;
};

export type Product = {
  id: string;
  slug: string;
  title: string;
  description: string;
  price: number;
  currency: string;
  category: CategoryId;
  productType: ProductType;
  image: string;
  compatibility?: string;
  featured?: boolean;
  channels: ProductChannels;
};

const products = productsData as Product[];

export function getAllProducts(): Product[] {
  return products;
}

export function getFeaturedProducts(): Product[] {
  const featured = products.filter((p) => p.featured);
  return featured.sort((a, b) => {
    if (a.productType === "thai-concept" && b.productType !== "thai-concept")
      return -1;
    if (b.productType === "thai-concept" && a.productType !== "thai-concept")
      return 1;
    return 0;
  });
}

export function getProductBySlug(slug: string): Product | undefined {
  return products.find((p) => p.slug === slug);
}

export function getProductsByCategory(category: CategoryId): Product[] {
  return products.filter((p) => p.category === category);
}

export function formatPrice(price: number, currency = "PHP"): string {
  return new Intl.NumberFormat("en-PH", {
    style: "currency",
    currency,
    maximumFractionDigits: 0,
  }).format(price);
}

export function productTypeLabel(type: ProductType): string | null {
  switch (type) {
    case "thai-concept":
      return "Thai concept";
    case "genuine":
      return "Genuine";
    case "aftermarket":
      return "Aftermarket";
    default:
      return null;
  }
}

export type ProductTypeFilter = ProductType | "all";
