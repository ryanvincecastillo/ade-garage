"use client";

import type { Product } from "@/lib/products";
import { brand } from "@/lib/brand";
import PlatformIcon, { type Platform } from "@/components/ui/PlatformIcon";

type ChannelButtonsProps = {
  product: Product;
  layout?: "row" | "column";
  size?: "sm" | "md";
};

const channelConfig = {
  shopee: {
    label: "Order on Shopee",
    platform: "shopee" as Platform,
    className:
      "bg-[#EE4D2D] text-white hover:bg-[#d73211] border border-[#EE4D2D]",
  },
  tiktokShop: {
    label: "Order on TikTok Shop",
    platform: "tiktok" as Platform,
    className:
      "bg-ade-charcoal text-white hover:bg-black border border-ade-charcoal",
  },
  lazada: {
    label: "Lazada — coming soon",
    platform: "lazada" as Platform,
    className: "bg-gray-100 text-gray-400 cursor-not-allowed border border-gray-200",
  },
  messenger: {
    label: "Ask on Messenger",
    platform: "messenger" as Platform,
    className:
      "bg-[#0084FF] text-white hover:bg-[#0073e6] border border-[#0084FF]",
  },
} as const;

export default function ChannelButtons({
  product,
  layout = "row",
  size = "md",
}: ChannelButtonsProps) {
  const padding = size === "sm" ? "px-3 py-2 text-xs" : "px-4 py-2.5 text-sm";
  const flexClass = layout === "row" ? "flex flex-wrap gap-2" : "flex flex-col gap-2";
  const iconSize = size === "sm" ? 16 : 18;

  const items: Array<{
    key: keyof typeof channelConfig;
    href: string | null;
    disabled?: boolean;
  }> = [
    { key: "shopee", href: product.channels.shopee ?? brand.urls.shopee },
    { key: "tiktokShop", href: product.channels.tiktokShop ?? null },
    { key: "lazada", href: product.channels.lazada ?? null, disabled: true },
    {
      key: "messenger",
      href: `${brand.urls.messenger}?text=${encodeURIComponent(
        `Hi ADe Garage! I'm interested in: ${product.title}. Does this fit my bike?`,
      )}`,
    },
  ];

  return (
    <div className={flexClass}>
      {items.map(({ key, href, disabled }) => {
        const config = channelConfig[key];

        if (key === "tiktokShop" && !href) return null;

        if (disabled || (key === "lazada" && !href)) {
          if (key === "lazada") {
            return (
              <span
                key={key}
                className={`inline-flex items-center justify-center gap-2 rounded-xl font-semibold ${padding} ${config.className}`}
              >
                <PlatformIcon platform={config.platform} size={iconSize} />
                {config.label}
              </span>
            );
          }
          return null;
        }

        return (
          <a
            key={key}
            href={href!}
            target="_blank"
            rel="noopener noreferrer"
            className={`inline-flex items-center justify-center gap-2 rounded-xl font-semibold shadow-sm transition hover:shadow-md active:scale-[0.98] ${padding} ${config.className}`}
          >
            <PlatformIcon platform={config.platform} size={iconSize} />
            {config.label}
          </a>
        );
      })}
    </div>
  );
}
