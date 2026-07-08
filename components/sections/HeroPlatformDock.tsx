"use client";

import { motion } from "framer-motion";
import PlatformIcon from "@/components/ui/PlatformIcon";
import { brand } from "@/lib/brand";
import { staggerContainer, staggerItem } from "@/lib/animations";

const platforms = [
  {
    id: "shopee" as const,
    name: "Shopee",
    subtitle: "Vouchers & buyer protection",
    href: brand.urls.shopee,
    disabled: false,
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
    disabled: false,
    iconBg: "bg-black",
    iconVariant: "white" as const,
    iconBox: "h-11 w-11",
    iconSize: 24,
  },
  {
    id: "lazada" as const,
    name: "Lazada",
    subtitle: "Coming soon",
    href: null,
    disabled: true,
    iconBg: "bg-white",
    iconVariant: "color" as const,
    iconBox: "h-11 w-[4.5rem]",
    iconSize: 22,
  },
  {
    id: "messenger" as const,
    name: "Messenger",
    subtitle: "Ask fitment first",
    href: brand.urls.messenger,
    disabled: false,
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
      className="grid grid-cols-2 gap-3 sm:gap-4"
    >
      {platforms.map((p) => {
        const inner = (
          <>
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
              <p className="font-display truncate text-sm font-bold text-white sm:text-base">
                {p.name}
                {p.disabled && (
                  <span className="ml-1.5 rounded bg-white/10 px-1.5 py-0.5 text-[9px] font-bold uppercase tracking-wide text-white/60">
                    Soon
                  </span>
                )}
              </p>
              <p className="truncate text-xs text-white/50">{p.subtitle}</p>
            </div>
          </>
        );

        return (
          <motion.div key={p.id} variants={staggerItem}>
            {p.disabled || !p.href ? (
              <div className="flex items-center gap-3 rounded-2xl border border-white/10 bg-white/5 p-4 opacity-60">
                {inner}
              </div>
            ) : (
              <a
                href={p.href}
                target="_blank"
                rel="noopener noreferrer"
                className="flex items-center gap-3 rounded-2xl border border-white/15 bg-white/10 p-4 backdrop-blur transition hover:border-ade-orange/40 hover:bg-white/15 active:scale-[0.98]"
              >
                {inner}
              </a>
            )}
          </motion.div>
        );
      })}
    </motion.div>
  );
}
