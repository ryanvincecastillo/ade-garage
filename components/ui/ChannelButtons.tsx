"use client";

import Link from "next/link";
import type { Product } from "@/lib/products";
import { brand } from "@/lib/brand";
import PlatformIcon, { type Platform } from "@/components/ui/PlatformIcon";

type ChannelButtonsProps = {
  product: Product;
  layout?: "row" | "column";
  size?: "sm" | "md";
  /** Keep card heights equal by always rendering all four channel rows */
  showAllChannels?: boolean;
  /** Grid cards: show primary channels + link to product page */
  compact?: boolean;
  theme?: "light" | "dark";
};

const channelConfig = {
  shopee: {
    label: "Order on Shopee",
    shortLabel: "Shopee",
    platform: "shopee" as Platform,
    className:
      "bg-[#EE4D2D] text-white hover:bg-[#d73211] border border-[#EE4D2D]",
    iconVariant: "white" as const,
  },
  tiktokShop: {
    label: "Order on TikTok Shop",
    shortLabel: "TikTok Shop",
    platform: "tiktok" as Platform,
    className:
      "bg-ade-charcoal text-white hover:bg-black border border-ade-charcoal",
    iconVariant: "white" as const,
  },
  lazada: {
    label: "Lazada — coming soon",
    shortLabel: "Lazada",
    platform: "lazada" as Platform,
    className: "bg-gray-100 text-gray-400 cursor-not-allowed border border-gray-200",
    iconVariant: "color" as const,
  },
  messenger: {
    label: "Ask on Messenger",
    shortLabel: "Messenger",
    platform: "messenger" as Platform,
    className:
      "bg-[#0084FF] text-white hover:bg-[#0073e6] border border-[#0084FF]",
    iconVariant: "white" as const,
  },
} as const;

export default function ChannelButtons({
  product,
  layout = "row",
  size = "md",
  showAllChannels = false,
  compact = false,
  theme = "light",
}: ChannelButtonsProps) {
  const padding = size === "sm" ? "px-3 py-2 text-xs" : "px-4 py-2.5 text-sm";
  const flexClass =
    layout === "row" ? "flex flex-wrap gap-2" : "flex flex-col gap-2";
  const iconSize = size === "sm" ? 18 : 20;

  if (compact) {
    return (
      <div className={flexClass}>
        <a
          href={product.channels.shopee ?? brand.urls.shopee}
          target="_blank"
          rel="noopener noreferrer"
          className={`inline-flex w-full items-center justify-center gap-2 rounded-xl font-semibold shadow-sm transition hover:shadow-md active:scale-[0.98] ${padding} ${channelConfig.shopee.className}`}
        >
          <PlatformIcon platform="shopee" size={iconSize} variant="white" />
          {channelConfig.shopee.shortLabel}
        </a>
        <a
          href={`${brand.urls.messenger}?text=${encodeURIComponent(
            `Hi ADe Garage! I'm interested in: ${product.title}. Does this fit my bike?`,
          )}`}
          target="_blank"
          rel="noopener noreferrer"
          className={`inline-flex w-full items-center justify-center gap-2 rounded-xl font-semibold shadow-sm transition hover:shadow-md active:scale-[0.98] ${padding} ${channelConfig.messenger.className}`}
        >
          <PlatformIcon platform="messenger" size={iconSize} variant="white" />
          {channelConfig.messenger.shortLabel}
        </a>
        <Link
          href={`/shop/${product.slug}`}
          className={`inline-flex w-full items-center justify-center gap-1 rounded-xl border py-2 text-xs font-semibold transition hover:border-ade-cyan hover:text-ade-cyan ${
            theme === "light"
              ? "border-ade-border-light text-ade-steel"
              : "border-ade-border text-ade-steel"
          }`}
        >
          All order options →
        </Link>
      </div>
    );
  }

  const items: Array<{
    key: keyof typeof channelConfig;
    href: string | null;
    disabled?: boolean;
    label?: string;
  }> = [
    { key: "shopee", href: product.channels.shopee ?? brand.urls.shopee },
    {
      key: "tiktokShop",
      href: product.channels.tiktokShop ?? null,
      disabled: showAllChannels && !product.channels.tiktokShop,
      label:
        showAllChannels && !product.channels.tiktokShop
          ? "Not on TikTok Shop"
          : undefined,
    },
    {
      key: "lazada",
      href: product.channels.lazada ?? null,
      disabled: true,
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
      {items.map(({ key, href, disabled, label }) => {
        const config = channelConfig[key];
        const displayLabel = label ?? config.label;

        if (key === "tiktokShop" && !href && !showAllChannels) return null;

        if (disabled && key === "lazada") {
          return (
            <span
              key={key}
              className={`inline-flex w-full items-center justify-center gap-2 rounded-xl font-semibold ${padding} ${config.className}`}
            >
              <PlatformIcon
                platform={config.platform}
                size={iconSize}
                variant={config.iconVariant}
              />
              {displayLabel}
            </span>
          );
        }

        if (disabled) {
          return (
            <span
              key={key}
              className={`inline-flex w-full items-center justify-center gap-2 rounded-xl font-semibold ${padding} bg-gray-100 text-gray-400 border border-gray-200 cursor-not-allowed`}
            >
              {key !== "tiktokShop" && (
                <PlatformIcon
                  platform={config.platform}
                  size={iconSize}
                  variant={config.iconVariant}
                />
              )}
              {displayLabel}
            </span>
          );
        }

        return (
          <a
            key={key}
            href={href!}
            target="_blank"
            rel="noopener noreferrer"
            className={`inline-flex w-full items-center justify-center gap-2 rounded-xl font-semibold shadow-sm transition hover:shadow-md active:scale-[0.98] ${padding} ${config.className}`}
          >
            <PlatformIcon
              platform={config.platform}
              size={iconSize}
              variant={config.iconVariant}
            />
            {displayLabel}
          </a>
        );
      })}
    </div>
  );
}
