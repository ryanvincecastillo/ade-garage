"use client";

import { useRef, useState } from "react";
import Link from "next/link";
import {
  motion,
  useMotionValue,
  useSpring,
  useTransform,
} from "framer-motion";
import type { Product } from "@/lib/products";
import { formatPrice, productTypeLabel } from "@/lib/products";
import ChannelButtons from "@/components/ui/ChannelButtons";
import ProductImage from "@/components/ui/ProductImage";
import { springSoft } from "@/lib/animations";
import { ArrowUpRight } from "lucide-react";

type ProductRevealCardProps = {
  product: Product;
};

export default function ProductRevealCard({ product }: ProductRevealCardProps) {
  const cardRef = useRef<HTMLDivElement>(null);
  const [hovered, setHovered] = useState(false);

  const pointerX = useMotionValue(0);
  const pointerY = useMotionValue(0);

  const rotateX = useSpring(
    useTransform(pointerY, [-0.5, 0.5], [6, -6]),
    springSoft,
  );
  const rotateY = useSpring(
    useTransform(pointerX, [-0.5, 0.5], [-6, 6]),
    springSoft,
  );

  const glareX = useSpring(
    useTransform(pointerX, [-0.5, 0.5], [0, 100]),
    springSoft,
  );
  const glareY = useSpring(
    useTransform(pointerY, [-0.5, 0.5], [0, 100]),
    springSoft,
  );

  const handlePointerMove = (e: React.PointerEvent) => {
    if (!cardRef.current) return;
    const rect = cardRef.current.getBoundingClientRect();
    pointerX.set((e.clientX - rect.left) / rect.width - 0.5);
    pointerY.set((e.clientY - rect.top) / rect.height - 0.5);
  };

  const resetPointer = () => {
    pointerX.set(0);
    pointerY.set(0);
    setHovered(false);
  };

  const typeLabel = productTypeLabel(product.productType);

  return (
    <motion.article
      ref={cardRef}
      onPointerMove={handlePointerMove}
      onPointerEnter={() => setHovered(true)}
      onPointerLeave={resetPointer}
      style={{
        rotateX,
        rotateY,
        transformPerspective: 1200,
        transformStyle: "preserve-3d",
      }}
      className="group relative h-full [transform-style:preserve-3d]"
    >
      <div
        className={`relative flex h-full flex-col overflow-hidden rounded-2xl border bg-ade-surface transition-all duration-500 ${
          hovered
            ? "border-ade-cyan/50 shadow-[0_0_40px_rgba(0,200,240,0.3)]"
            : "border-ade-border shadow-[0_4px_24px_rgba(0,0,0,0.3)]"
        }`}
      >
        {/* Cyan edge glow */}
        <div
          className={`pointer-events-none absolute -inset-px rounded-2xl bg-gradient-to-br from-ade-cyan/30 via-transparent to-ade-blue/30 opacity-0 transition-opacity duration-500 ${
            hovered ? "opacity-100" : ""
          }`}
        />

        <Link
          href={`/shop/${product.slug}`}
          className="relative aspect-[4/3] shrink-0 overflow-hidden bg-ade-charcoal-light"
        >
          <motion.div
            animate={{ scale: hovered ? 1.1 : 1 }}
            transition={{ duration: 0.7, ease: [0.16, 1, 0.3, 1] }}
            className="absolute inset-0"
          >
            <ProductImage
              src={product.image}
              alt={product.title}
              sizes="(max-width: 640px) 100vw, (max-width: 1024px) 50vw, 33vw"
            />
          </motion.div>

          {/* Glare sweep */}
          <motion.div
            style={{
              background: `radial-gradient(circle at ${glareX}% ${glareY}%, rgba(0,200,240,0.25) 0%, transparent 55%)`,
            }}
            className="pointer-events-none absolute inset-0"
          />

          <div className="absolute inset-0 bg-gradient-to-t from-ade-charcoal via-ade-charcoal/30 to-transparent" />

          <div className="absolute left-3 top-3 z-10 flex flex-col gap-1.5">
            {product.featured && (
              <motion.span
                initial={{ opacity: 0, x: -8 }}
                animate={{ opacity: 1, x: 0 }}
                className="rounded-full bg-gradient-to-r from-ade-cyan to-ade-blue px-2.5 py-1 text-[10px] font-bold uppercase tracking-wide text-white shadow-lg"
              >
                Featured
              </motion.span>
            )}
            {typeLabel && (
              <span
                className={`rounded-full px-2.5 py-1 text-[10px] font-bold uppercase tracking-wide ${
                  product.productType === "thai-concept"
                    ? "bg-ade-accent text-ade-charcoal"
                    : "bg-white/90 text-ade-charcoal"
                }`}
              >
                {typeLabel}
              </span>
            )}
          </div>

          {/* Sliding reveal panel — 21st.dev style */}
          <motion.div
            initial={false}
            animate={{ y: hovered ? "0%" : "100%" }}
            transition={{ type: "spring", stiffness: 320, damping: 32 }}
            className="absolute inset-x-0 bottom-0 z-20 border-t border-ade-cyan/25 bg-ade-charcoal/95 p-4 backdrop-blur-md"
          >
            <p className="line-clamp-2 text-xs leading-relaxed text-white/65">
              {product.description}
            </p>
            <span className="mt-2 inline-flex items-center gap-1 text-xs font-bold text-ade-cyan">
              View full details
              <ArrowUpRight size={12} />
            </span>
          </motion.div>
        </Link>

        <div className="relative flex min-h-0 flex-1 flex-col p-4 sm:p-5">
          <div className="min-h-[2.75rem]">
            <Link href={`/shop/${product.slug}`}>
              <h3 className="font-display line-clamp-2 text-base font-bold leading-snug text-white transition group-hover:text-ade-cyan">
                {product.title}
              </h3>
            </Link>
          </div>

          <p className="mt-1 min-h-[1rem] text-xs text-ade-steel">
            {product.compatibility ?? "\u00A0"}
          </p>

          <motion.p
            animate={{ scale: hovered ? 1.02 : 1 }}
            className="mt-2 font-display text-lg font-extrabold text-gradient-cyan"
          >
            {formatPrice(product.price, product.currency)}
          </motion.p>

          <motion.div
            initial={false}
            animate={{ opacity: hovered ? 1 : 0.85, y: hovered ? 0 : 4 }}
            transition={{ duration: 0.3 }}
            className="mt-auto pt-3"
          >
            <ChannelButtons
              product={product}
              layout="column"
              size="sm"
              showAllChannels
            />
          </motion.div>
        </div>
      </div>
    </motion.article>
  );
}
