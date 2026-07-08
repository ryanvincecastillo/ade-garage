import Link from "next/link";
import Reveal from "@/components/motion/Reveal";
import ProductCard from "@/components/ui/ProductCard";
import { getFeaturedProducts } from "@/lib/products";

export default function FeaturedProducts() {
  const products = getFeaturedProducts();

  return (
    <section className="section-container py-20">
      <Reveal className="mb-10 flex flex-col items-start justify-between gap-4 sm:flex-row sm:items-end">
        <div>
          <p className="section-eyebrow">Featured</p>
          <h2 className="section-title mt-2">Popular parts</h2>
          <p className="mt-2 max-w-xl text-ade-steel">
            Best sellers from our Shopee and TikTok Shop — order on your
            preferred platform.
          </p>
        </div>
        <Link href="/shop" className="btn-secondary shrink-0">
          View all parts
        </Link>
      </Reveal>

      <div className="grid gap-6 sm:grid-cols-2 lg:grid-cols-4">
        {products.map((product, i) => (
          <Reveal key={product.id} delay={i * 0.08}>
            <ProductCard product={product} />
          </Reveal>
        ))}
      </div>
    </section>
  );
}
