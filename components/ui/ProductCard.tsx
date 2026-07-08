import Image from "next/image";
import Link from "next/link";
import type { Product } from "@/lib/products";
import { formatPrice } from "@/lib/products";
import ChannelButtons from "@/components/ui/ChannelButtons";

type ProductCardProps = {
  product: Product;
};

export default function ProductCard({ product }: ProductCardProps) {
  return (
    <article className="garage-card group flex flex-col overflow-hidden">
      <Link href={`/shop/${product.slug}`} className="relative aspect-[4/3] overflow-hidden bg-ade-charcoal-light">
        <Image
          src={product.image}
          alt={product.title}
          fill
          className="object-cover transition duration-500 group-hover:scale-105"
          sizes="(max-width: 640px) 100vw, (max-width: 1024px) 50vw, 33vw"
        />
        {product.featured && (
          <span className="absolute left-3 top-3 rounded-full bg-ade-orange px-2.5 py-1 text-[10px] font-bold uppercase tracking-wide text-white">
            Featured
          </span>
        )}
      </Link>
      <div className="flex flex-1 flex-col p-4 sm:p-5">
        <Link href={`/shop/${product.slug}`}>
          <h3 className="font-display line-clamp-2 text-base font-bold leading-snug text-ade-charcoal transition group-hover:text-ade-orange">
            {product.title}
          </h3>
        </Link>
        {product.compatibility && (
          <p className="mt-1 text-xs text-ade-steel">{product.compatibility}</p>
        )}
        <p className="mt-2 font-display text-lg font-extrabold text-ade-orange">
          {formatPrice(product.price, product.currency)}
        </p>
        <div className="mt-4 mt-auto pt-3">
          <ChannelButtons product={product} size="sm" />
        </div>
      </div>
    </article>
  );
}
