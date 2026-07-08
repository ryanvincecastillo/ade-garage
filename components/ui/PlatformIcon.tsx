type Platform = "shopee" | "tiktok" | "lazada" | "messenger";

type PlatformIconProps = {
  platform: Platform;
  size?: number;
  className?: string;
};

export default function PlatformIcon({
  platform,
  size = 24,
  className = "",
}: PlatformIconProps) {
  const shared = {
    width: size,
    height: size,
    className,
    "aria-hidden": true as const,
  };

  switch (platform) {
    case "shopee":
      return (
        <svg {...shared} viewBox="0 0 24 24" fill="#EE4D2D">
          <path d="M12.596 3.001C9.268 3.001 6.578 5.691 6.578 9.019c0 1.665.656 3.178 1.725 4.293L3 21.001l7.823-5.247a6.518 6.518 0 001.773.245c3.328 0 6.018-2.69 6.018-6.018 0-3.328-2.69-6.018-6.018-6.018zm0 10.485a4.47 4.47 0 01-4.467-4.467c0-2.465 2.002-4.467 4.467-4.467s4.467 2.002 4.467 4.467-2.002 4.467-4.467 4.467z" />
        </svg>
      );
    case "tiktok":
      return (
        <svg {...shared} viewBox="0 0 24 24" fill="currentColor">
          <path d="M19.59 6.69a4.83 4.83 0 01-3.77-4.25V2h-3.45v13.67a2.89 2.89 0 01-2.88 2.5 2.89 2.89 0 01-2.89-2.89 2.89 2.89 0 012.89-2.89c.28 0 .54.04.79.1V9.01a6.27 6.27 0 00-.79-.05 6.34 6.34 0 00-6.34 6.34 6.34 6.34 0 006.34 6.34 6.34 6.34 0 006.33-6.34V8.69a8.18 8.18 0 004.78 1.52V6.76a4.85 4.85 0 01-1.01-.07z" />
        </svg>
      );
    case "lazada":
      return (
        <svg {...shared} viewBox="0 0 24 24" fill="#0F146D">
          <path d="M12 2.5 4.5 6v12L12 21.5 19.5 18V6L12 2.5zm0 2.2 5.5 2.8v8.5L12 18.8l-5.5-2.8V7.5L12 4.7zM12 9a3 3 0 100 6 3 3 0 000-6z" />
        </svg>
      );
    case "messenger":
      return (
        <svg {...shared} viewBox="0 0 24 24" fill="#0084FF">
          <path d="M12 2C6.477 2 2 6.145 2 11.243c0 2.906 1.446 5.502 3.707 7.17V22l3.371-1.851A9.9 9.9 0 0012 20.486c5.523 0 10-4.145 10-9.243S17.523 2 12 2zm1.055 12.414-2.564-2.736-5.01 2.736L10.9 9.07l2.628 2.736 4.938-2.736-5.411 5.344z" />
        </svg>
      );
  }
}

export type { Platform };
