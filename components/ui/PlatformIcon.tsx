import Image from "next/image";

type Platform = "shopee" | "tiktok" | "lazada" | "messenger";

type PlatformIconProps = {
  platform: Platform;
  size?: number;
  className?: string;
  /** Use white variant on colored button backgrounds */
  variant?: "color" | "white";
};

const iconPaths: Record<
  Platform,
  { color: string; white?: string; wide?: boolean }
> = {
  shopee: {
    color: "/icons/shopee.svg",
    white: "/icons/shopee-white.svg",
  },
  tiktok: {
    color: "/icons/tiktok-white.svg",
    white: "/icons/tiktok-white.svg",
  },
  lazada: {
    color: "/icons/lazada.svg",
    wide: true,
  },
  messenger: {
    color: "/icons/messenger.svg",
    white: "/icons/messenger-white.svg",
  },
};

export default function PlatformIcon({
  platform,
  size = 24,
  className = "",
  variant = "color",
}: PlatformIconProps) {
  const config = iconPaths[platform];
  const src =
    variant === "white" && config.white ? config.white : config.color;

  if (config.wide) {
    const width = Math.round(size * 2.2);
    return (
      <Image
        src={src}
        alt=""
        width={width}
        height={size}
        className={`object-contain object-left ${className}`}
        aria-hidden
        unoptimized
      />
    );
  }

  return (
    <Image
      src={src}
      alt=""
      width={size}
      height={size}
      className={`object-contain ${className}`}
      aria-hidden
      unoptimized
    />
  );
}

export type { Platform };
