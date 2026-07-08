import Image from "next/image";
import Link from "next/link";
import { notFound } from "next/navigation";
import { ArrowLeft } from "lucide-react";
import MotionProvider from "@/components/motion/MotionProvider";
import Header from "@/components/layout/Header";
import Footer from "@/components/layout/Footer";
import ChannelButtons from "@/components/ui/ChannelButtons";
import { formatPrice, getAllProducts, getProductBySlug } from "@/lib/products";
import { categories } from "@/lib/brand";

type Props = {
  params: Promise<{ slug: string }>;
};

export function generateStaticParams() {
  return getAllProducts().map((p) => ({ slug: p.slug }));
}

export async function generateMetadata({ params }: Props) {
  const { slug } = await params;
  const product = getProductBySlug(slug);
  if (!product) return { title: "Product not found" };
  return {
    title: `${product.title} | ADe Garage`,
    description: product.description,
  };
}

export default async function ProductPage({ params }: Props) {
  const { slug } = await params;
  const product = getProductBySlug(slug);
  if (!product) notFound();

  const categoryLabel =
    categories.find((c) => c.id === product.category)?.label ?? product.category;

  return (
    <MotionProvider>
      <Header />
      <main className="min-h-screen pt-16">
        <div className="section-container py-8">
          <Link
            href="/shop"
            className="mb-6 inline-flex items-center gap-2 text-sm font-medium text-ade-steel hover:text-ade-orange"
          >
            <ArrowLeft size={16} />
            Back to catalog
          </Link>

          <div className="grid gap-10 lg:grid-cols-2">
            <div className="relative aspect-square overflow-hidden rounded-2xl bg-ade-charcoal-light">
              <Image
                src={product.image}
                alt={product.title}
                fill
                className="object-cover"
                sizes="(max-width: 1024px) 100vw, 50vw"
                priority
              />
            </div>

            <div>
              <p className="text-xs font-bold uppercase tracking-widest text-ade-orange">
                {categoryLabel}
              </p>
              <h1 className="font-display mt-2 text-2xl font-extrabold text-ade-charcoal sm:text-3xl">
                {product.title}
              </h1>
              <p className="font-display mt-4 text-3xl font-extrabold text-ade-orange">
                {formatPrice(product.price, product.currency)}
              </p>
              {product.compatibility && (
                <p className="mt-3 rounded-lg bg-ade-orange-light px-4 py-2 text-sm text-ade-charcoal">
                  Fits: {product.compatibility}
                </p>
              )}
              <p className="mt-4 leading-relaxed text-ade-steel">
                {product.description}
              </p>
              <p className="mt-2 text-sm text-ade-steel">
                Not sure if this fits? Message us on Messenger before ordering.
              </p>

              <div className="mt-8">
                <h2 className="mb-3 font-display text-lg font-bold text-ade-charcoal">
                  Where to order
                </h2>
                <ChannelButtons product={product} layout="column" />
              </div>
            </div>
          </div>
        </div>
      </main>
      <Footer />
    </MotionProvider>
  );
}
