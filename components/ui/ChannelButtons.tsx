"use client";

import type { Product } from "@/lib/products";
import { brand } from "@/lib/brand";
import { ExternalLink, MessageCircle, ShoppingBag } from "lucide-react";

type ChannelButtonsProps = {
  product: Product;
  layout?: "row" | "column";
  size?: "sm" | "md";
};

const channelConfig = {
  shopee: {
    label: "Order on Shopee",
    icon: ShoppingBag,
    className: "bg-gradient-to-r from-orange-500 to-red-500 text-white hover:from-orange-600 hover:to-red-600",
  },
  tiktokShop: {
    label: "Order on TikTok Shop",
    icon: ExternalLink,
    className: "bg-gradient-to-r from-gray-900 to-gray-700 text-white hover:from-black hover:to-gray-800",
  },
  lazada: {
    label: "Lazada — coming soon",
    icon: ShoppingBag,
    className: "bg-gray-200 text-gray-500 cursor-not-allowed",
  },
  messenger: {
    label: "Ask on Messenger",
    icon: MessageCircle,
    className: "bg-gradient-to-r from-blue-500 to-blue-600 text-white hover:from-blue-600 hover:to-blue-700",
  },
} as const;

export default function ChannelButtons({
  product,
  layout = "row",
  size = "md",
}: ChannelButtonsProps) {
  const padding = size === "sm" ? "px-3 py-2 text-xs" : "px-4 py-2.5 text-sm";
  const flexClass = layout === "row" ? "flex flex-wrap gap-2" : "flex flex-col gap-2";

  const items: Array<{
    key: keyof typeof channelConfig;
    href: string | null;
    disabled?: boolean;
  }> = [
    { key: "shopee", href: product.channels.shopee ?? brand.urls.shopee },
    { key: "tiktokShop", href: product.channels.tiktokShop ?? null },
    {
      key: "lazada",
      href: product.channels.lazada ?? null,
      disabled: !product.channels.lazada,
    },
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
        const Icon = config.icon;

        if (disabled || (key === "tiktokShop" && !href)) {
          if (key === "lazada") {
            return (
              <span
                key={key}
                className={`inline-flex items-center justify-center gap-2 rounded-xl font-semibold ${padding} ${config.className}`}
              >
                <Icon size={size === "sm" ? 14 : 16} />
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
            <Icon size={size === "sm" ? 14 : 16} />
            {config.label}
          </a>
        );
      })}
    </div>
  );
}
