"use client";

import { useState } from "react";
import Image from "next/image";

type ProductImageProps = {
  src: string;
  alt: string;
  fill?: boolean;
  className?: string;
  sizes?: string;
  priority?: boolean;
};

export default function ProductImage({
  src,
  alt,
  fill = true,
  className = "object-cover",
  sizes,
  priority,
}: ProductImageProps) {
  const [imgSrc, setImgSrc] = useState(src);
  const fallback = "/images/product-fallback.svg";

  return (
    <Image
      src={imgSrc}
      alt={alt}
      fill={fill}
      className={className}
      sizes={sizes}
      priority={priority}
      onError={() => {
        if (imgSrc !== fallback) setImgSrc(fallback);
      }}
      unoptimized={imgSrc.endsWith(".svg")}
    />
  );
}
