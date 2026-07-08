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
    iconSize: 26,
  },
  {
    id: "tiktok" as const,
    name: "TikTok Shop",
    subtitle: "Checkout in-app",
    href: brand.urls.tiktokShop,
    disabled: false,
    iconBg: "bg-black",
    iconVariant: "white" as const,
    iconSize: 22,
  },
  {
    id: "lazada" as const,
    name: "Lazada",
    subtitle: "Coming soon",
    href: null,
    disabled: true,
    iconBg: "bg-white",
    iconVariant: "color" as const,
    iconSize: 20,
  },
  {
    id: "messenger" as const,
    name: "Messenger",
    subtitle: "Ask fitment first",
    href: brand.urls.messenger,
    disabled: false,
    iconBg: "bg-[#0084FF]",
    iconVariant: "white" as const,
    iconSize: 24,
  },
];

const cardBase =
  "flex h-[7.75rem] flex-col justify-between rounded-2xl border p-4 backdrop-blur";

const cardActive =
  "border-white/15 bg-white/10 transition hover:border-ade-cyan/50 hover:bg-white/15 hover:shadow-[0_0_24px_rgba(0,200,240,0.2)] active:scale-[0.98]";

const cardDisabled =
  "cursor-not-allowed border-white/10 bg-white/5 opacity-60";

function PlatformCardContent({
  platform,
}: {
  platform: (typeof platforms)[number];
}) {
  return (
    <>
      <div
        className={`flex h-11 w-11 shrink-0 items-center justify-center rounded-xl ${platform.iconBg}`}
      >
        <PlatformIcon
          platform={platform.id}
          size={platform.iconSize}
          variant={platform.iconVariant}
        />
      </div>
      <div className="min-h-[2.75rem]">
        <p className="font-display text-sm font-bold leading-tight text-white">
          {platform.name}
          {platform.disabled && (
            <span className="ml-1.5 rounded bg-white/10 px-1.5 py-0.5 text-[9px] font-bold uppercase tracking-wide text-white/60">
              Soon
            </span>
          )}
        </p>
        <p className="mt-0.5 line-clamp-2 text-xs leading-snug text-white/55">
          {platform.subtitle}
        </p>
      </div>
    </>
  );
}

export default function HeroPlatformDock() {
  return (
    <motion.div
      variants={staggerContainer}
      initial="initial"
      animate="animate"
      className="grid grid-cols-2 gap-3 sm:gap-4"
    >
      {platforms.map((p) => (
        <motion.div
          key={p.id}
          variants={staggerItem}
          className="h-[7.75rem]"
          whileHover={p.disabled ? undefined : { scale: 1.02 }}
        >
          {p.disabled || !p.href ? (
            <div className={`${cardBase} ${cardDisabled}`}>
              <PlatformCardContent platform={p} />
            </div>
          ) : (
            <a
              href={p.href}
              target="_blank"
              rel="noopener noreferrer"
              className={`${cardBase} ${cardActive}`}
            >
              <PlatformCardContent platform={p} />
            </a>
          )}
        </motion.div>
      ))}
    </motion.div>
  );
}
