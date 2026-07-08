import Link from "next/link";
import type { Product } from "@/lib/products";
import { formatPrice, productTypeLabel } from "@/lib/products";
import ChannelButtons from "@/components/ui/ChannelButtons";
import ProductImage from "@/components/ui/ProductImage";

type ProductCardProps = {
  product: Product;
};

export default function ProductCard({ product }: ProductCardProps) {
  const typeLabel = productTypeLabel(product.productType);

  return (
    <article className="garage-card group flex h-full flex-col overflow-hidden">
      <Link
        href={`/shop/${product.slug}`}
        className="relative aspect-[4/3] shrink-0 overflow-hidden bg-ade-charcoal-light"
      >
        <ProductImage
          src={product.image}
          alt={product.title}
          sizes="(max-width: 640px) 100vw, (max-width: 1024px) 50vw, 33vw"
        />
        <div className="absolute left-3 top-3 flex flex-col gap-1.5">
          {product.featured && (
            <span className="rounded-full bg-ade-orange px-2.5 py-1 text-[10px] font-bold uppercase tracking-wide text-white">
              Featured
            </span>
          )}
          {typeLabel && (
            <span
              className={`rounded-full px-2.5 py-1 text-[10px] font-bold uppercase tracking-wide ${
                product.productType === "thai-concept"
                  ? "bg-ade-accent/90 text-ade-charcoal"
                  : "bg-white/90 text-ade-charcoal"
              }`}
            >
              {typeLabel}
            </span>
          )}
        </div>
      </Link>

      <div className="flex min-h-0 flex-1 flex-col p-4 sm:p-5">
        <div className="min-h-[2.75rem]">
          <Link href={`/shop/${product.slug}`}>
            <h3 className="font-display line-clamp-2 text-base font-bold leading-snug text-ade-charcoal transition group-hover:text-ade-orange">
              {product.title}
            </h3>
          </Link>
        </div>

        <p className="mt-1 min-h-[1rem] text-xs text-ade-steel">
          {product.compatibility ?? "\u00A0"}
        </p>

        <p className="mt-2 font-display text-lg font-extrabold text-ade-orange">
          {formatPrice(product.price, product.currency)}
        </p>

        <div className="mt-auto pt-3">
          <ChannelButtons
            product={product}
            layout="column"
            size="sm"
            showAllChannels
          />
        </div>
      </div>
    </article>
  );
}
