"use client";

import { motion } from "framer-motion";
import PlatformIcon from "@/components/ui/PlatformIcon";
import { brand } from "@/lib/brand";
import { staggerContainer, staggerItem } from "@/lib/animations";

const activePlatforms = [
  {
    id: "shopee" as const,
    name: "Shopee",
    subtitle: "Vouchers & buyer protection",
    href: brand.urls.shopee,
    iconBg: "bg-white",
    iconVariant: "color" as const,
    iconBox: "h-11 w-11",
    iconSize: 28,
  },
  {
    id: "tiktok" as const,
    name: "TikTok Shop",
    subtitle: "Checkout in-app",
    href: brand.urls.tiktokShop,
    iconBg: "bg-black",
    iconVariant: "white" as const,
    iconBox: "h-11 w-11",
    iconSize: 24,
  },
  {
    id: "messenger" as const,
    name: "Messenger",
    subtitle: "Ask fitment first",
    href: brand.urls.messenger,
    iconBg: "bg-[#0084FF]",
    iconVariant: "white" as const,
    iconBox: "h-11 w-11",
    iconSize: 26,
  },
];

export default function HeroPlatformDock() {
  return (
    <motion.div
      variants={staggerContainer}
      initial="initial"
      animate="animate"
      className="space-y-3"
    >
      <div className="grid grid-cols-1 gap-3 sm:grid-cols-3 sm:gap-4">
        {activePlatforms.map((p) => (
          <motion.div key={p.id} variants={staggerItem} whileHover={{ scale: 1.02 }}>
            <a
              href={p.href}
              target="_blank"
              rel="noopener noreferrer"
              className="flex items-center gap-3 rounded-2xl border border-white/15 bg-white/10 p-4 backdrop-blur transition hover:border-ade-cyan/50 hover:bg-white/15 hover:shadow-[0_0_24px_rgba(0,200,240,0.2)] active:scale-[0.98] sm:flex-col sm:items-start sm:p-5"
            >
              <div
                className={`flex shrink-0 items-center justify-center rounded-xl ${p.iconBg} ${p.iconBox}`}
              >
                <PlatformIcon
                  platform={p.id}
                  size={p.iconSize}
                  variant={p.iconVariant}
                />
              </div>
              <div className="min-w-0 flex-1">
                <p className="font-display text-sm font-bold text-white sm:text-base">
                  {p.name}
                </p>
                <p className="text-xs text-white/55">{p.subtitle}</p>
              </div>
            </a>
          </motion.div>
        ))}
      </div>

      <p className="text-center text-xs text-white/40">
        Lazada coming soon — follow us on Facebook for updates
      </p>
    </motion.div>
  );
}
