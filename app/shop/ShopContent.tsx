"use client";

import { useMemo, useState } from "react";
import { useSearchParams } from "next/navigation";
import { Search } from "lucide-react";
import MotionProvider from "@/components/motion/MotionProvider";
import Header from "@/components/layout/Header";
import Footer from "@/components/layout/Footer";
import ProductRevealCard from "@/components/ui/ProductRevealCard";
import Reveal from "@/components/motion/Reveal";
import { categories, type CategoryId } from "@/lib/brand";
import { getAllProducts, type ProductTypeFilter } from "@/lib/products";

export default function ShopContent() {
  const searchParams = useSearchParams();
  const initialCategory = searchParams.get("category") as CategoryId | null;
  const [query, setQuery] = useState("");
  const [category, setCategory] = useState<CategoryId | "all">(
    initialCategory ?? "all",
  );
  const [productType, setProductType] = useState<ProductTypeFilter>("all");

  const products = useMemo(() => {
    let list = getAllProducts();
    if (category !== "all") {
      list = list.filter((p) => p.category === category);
    }
    if (productType !== "all") {
      list = list.filter((p) => p.productType === productType);
    }
    if (query.trim()) {
      const q = query.toLowerCase();
      list = list.filter(
        (p) =>
          p.title.toLowerCase().includes(q) ||
          p.description.toLowerCase().includes(q) ||
          p.compatibility?.toLowerCase().includes(q),
      );
    }
    return list;
  }, [category, productType, query]);

  return (
    <MotionProvider>
      <Header />
      <main className="min-h-screen bg-[#f4f7fb] pt-16">
        <div className="hero-workshop-bg relative overflow-hidden py-12 text-white">
          <div className="pointer-events-none absolute inset-0 bg-[radial-gradient(ellipse_at_right,rgba(0,200,240,0.12)_0%,transparent_60%)]" />
          <div className="section-container relative">
            <Reveal>
              <p className="text-xs font-bold uppercase tracking-widest text-ade-cyan">
                Catalog
              </p>
              <h1 className="font-display mt-2 text-3xl font-extrabold sm:text-4xl">
                Thai concept & motorcycle parts
              </h1>
              <p className="mt-2 max-w-2xl text-white/70">
                Browse our lineup and order on Shopee, TikTok Shop, or
                Messenger. Lazada coming soon.
              </p>
            </Reveal>
          </div>
        </div>

        <div className="section-container py-10">
          <div className="mb-6 flex gap-2 overflow-x-auto pb-1">
            {(
              [
                { id: "all", label: "All types" },
                { id: "thai-concept", label: "Thai concept" },
                { id: "genuine", label: "Genuine" },
              ] as const
            ).map((t) => (
              <button
                key={t.id}
                type="button"
                onClick={() => setProductType(t.id)}
                className={`shrink-0 rounded-full px-4 py-2 text-sm font-semibold transition ${
                  productType === t.id
                    ? "bg-ade-accent text-ade-charcoal shadow-md"
                    : "bg-white text-ade-steel ring-1 ring-ade-border-light hover:ring-ade-cyan"
                }`}
              >
                {t.label}
              </button>
            ))}
          </div>

          <div className="mb-8 flex flex-col gap-4 lg:flex-row lg:items-center lg:justify-between">
            <div className="relative max-w-md flex-1">
              <Search
                size={18}
                className="absolute left-3.5 top-1/2 -translate-y-1/2 text-ade-steel"
              />
              <input
                type="search"
                value={query}
                onChange={(e) => setQuery(e.target.value)}
                placeholder="Search parts, models..."
                className="w-full rounded-xl border border-ade-border-light bg-white py-3 pl-10 pr-4 text-sm outline-none focus:border-ade-cyan focus:ring-2 focus:ring-ade-cyan/20"
              />
            </div>
            <div className="flex flex-wrap gap-2 overflow-x-auto pb-1 lg:flex-wrap lg:overflow-visible">
              <button
                type="button"
                onClick={() => setCategory("all")}
                className={`rounded-full px-4 py-2 text-sm font-semibold transition ${
                  category === "all"
                    ? "bg-gradient-to-r from-ade-cyan to-ade-blue text-white shadow-md"
                    : "bg-white text-ade-steel ring-1 ring-ade-border-light hover:ring-ade-cyan"
                }`}
              >
                All categories
              </button>
              {categories.map((cat) => (
                <button
                  key={cat.id}
                  type="button"
                  onClick={() => setCategory(cat.id)}
                  className={`shrink-0 rounded-full px-4 py-2 text-sm font-semibold transition ${
                    category === cat.id
                      ? "bg-gradient-to-r from-ade-cyan to-ade-blue text-white shadow-md"
                      : "bg-white text-ade-steel ring-1 ring-ade-border-light hover:ring-ade-cyan"
                  }`}
                >
                  {cat.label}
                </button>
              ))}
            </div>
          </div>

          {products.length === 0 ? (
            <p className="py-16 text-center text-ade-steel">
              No parts found. Try another search or filter.
            </p>
          ) : (
            <div className="grid items-stretch gap-6 sm:grid-cols-2 lg:grid-cols-3 xl:grid-cols-4">
              {products.map((product, i) => (
                <Reveal key={product.id} delay={Math.min(i * 0.05, 0.4)} className="h-full">
                  <ProductRevealCard product={product} />
                </Reveal>
              ))}
            </div>
          )}
        </div>
      </main>
      <Footer />
    </MotionProvider>
  );
}
