export const brand = {
  colors: {
    cyan: "#00C8F0",
    cyanLight: "#E6FBFF",
    blue: "#1E4FD0",
    blueDeep: "#0A1628",
    charcoal: "#0B0F14",
    charcoalLight: "#1A2230",
    surface: "#121820",
    steel: "#8B9CB3",
    chrome: "#C8D4E0",
    white: "#FFFFFF",
    accent: "#F5C400",
  },
  site: {
    name: "ADe Garage",
    tagline: "Thai concept & quality motorcycle parts — shipped nationwide",
    location: "Prk. 6 San Miguel (Campo 4), Tagum City",
    phone: "+63 985 447 5429",
    hours: "Always open",
    followers: "1.5K+",
  },
  urls: {
    site: process.env.NEXT_PUBLIC_SITE_URL ?? "https://adegarage.vercel.app",
    facebook:
      "https://www.facebook.com/profile.php?id=100076223739550",
    messenger: "https://m.me/100076223739550",
    shopee: "https://shopee.ph/ade_garage",
    shopeeAlt: "https://shopee.ph/ade_garageshop",
    tiktok: "https://www.tiktok.com/@ade_garage",
    tiktokShop: "https://www.tiktok.com/@ade_garage",
    lazada: null as string | null,
    maps:
      "https://www.google.com/maps/search/?api=1&query=Prk+6+San+Miguel+Tagum+City",
  },
} as const;

export const channels = [
  {
    id: "shopee",
    name: "Shopee",
    description: "Order with Shopee buyer protection & vouchers",
    href: brand.urls.shopee,
    color: "from-orange-500 to-red-500",
    available: true,
  },
  {
    id: "tiktokShop",
    name: "TikTok Shop",
    description: "Shop from our TikTok — fast checkout in-app",
    href: brand.urls.tiktokShop,
    color: "from-gray-900 to-gray-700",
    available: true,
  },
  {
    id: "lazada",
    name: "Lazada",
    description: "Coming soon — another way to order nationwide",
    href: null,
    color: "from-blue-600 to-indigo-700",
    available: false,
    comingSoon: true,
  },
  {
    id: "messenger",
    name: "Messenger",
    description: "Ask if a part fits your bike before you buy",
    href: brand.urls.messenger,
    color: "from-blue-500 to-blue-600",
    available: true,
  },
] as const;

export const categories = [
  { id: "body", label: "Body Parts", icon: "shield" },
  { id: "engine", label: "Engine", icon: "cog" },
  { id: "electrical", label: "Electrical", icon: "zap" },
  { id: "brakes", label: "Brakes", icon: "disc" },
  { id: "chain", label: "Chain & Drive", icon: "link" },
  { id: "accessories", label: "Accessories", icon: "sparkles" },
] as const;

export const trustItems = [
  "Thai concept bestsellers",
  "Genuine parts",
  "Ships nationwide",
  "Tagum pickup available",
] as const;

export const howItWorks = [
  {
    step: 1,
    title: "Browse the catalog",
    description: "Find parts by category or search on adegarage.com.",
  },
  {
    step: 2,
    title: "Pick your platform",
    description: "Order on Shopee, TikTok Shop, or message us on Messenger.",
  },
  {
    step: 3,
    title: "We pack & ship",
    description: "Nationwide delivery via courier — or pickup in Tagum City.",
  },
] as const;

export type CategoryId = (typeof categories)[number]["id"];
export type ChannelId = "shopee" | "tiktokShop" | "lazada" | "messenger";
