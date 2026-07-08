"use client";

import { useMemo, useState } from "react";
import { useSearchParams } from "next/navigation";
import { Search } from "lucide-react";
import MotionProvider from "@/components/motion/MotionProvider";
import Header from "@/components/layout/Header";
import Footer from "@/components/layout/Footer";
import ProductCard from "@/components/ui/ProductCard";
import Reveal from "@/components/motion/Reveal";
import { categories, type CategoryId } from "@/lib/brand";
import { getAllProducts } from "@/lib/products";

export default function ShopContent() {
  const searchParams = useSearchParams();
  const initialCategory = searchParams.get("category") as CategoryId | null;
  const [query, setQuery] = useState("");
  const [category, setCategory] = useState<CategoryId | "all">(
    initialCategory ?? "all",
  );

  const products = useMemo(() => {
    let list = getAllProducts();
    if (category !== "all") {
      list = list.filter((p) => p.category === category);
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
  }, [category, query]);

  return (
    <MotionProvider>
      <Header />
      <main className="min-h-screen pt-16">
        <div className="border-b border-ade-border bg-ade-charcoal py-12 text-white">
          <div className="section-container">
            <Reveal>
              <p className="text-xs font-bold uppercase tracking-widest text-ade-orange">
                Catalog
              </p>
              <h1 className="font-display mt-2 text-3xl font-extrabold sm:text-4xl">
                Motorcycle parts
              </h1>
              <p className="mt-2 max-w-2xl text-white/70">
                Browse our lineup and order on Shopee, TikTok Shop, or
                Messenger. Lazada coming soon.
              </p>
            </Reveal>
          </div>
        </div>

        <div className="section-container py-10">
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
                className="w-full rounded-xl border border-ade-border bg-white py-3 pl-10 pr-4 text-sm outline-none focus:border-ade-orange focus:ring-2 focus:ring-ade-orange/20"
              />
            </div>
            <div className="flex flex-wrap gap-2">
              <button
                type="button"
                onClick={() => setCategory("all")}
                className={`rounded-full px-4 py-2 text-sm font-semibold transition ${
                  category === "all"
                    ? "bg-ade-orange text-white"
                    : "bg-white text-ade-steel ring-1 ring-ade-border hover:ring-ade-orange"
                }`}
              >
                All
              </button>
              {categories.map((cat) => (
                <button
                  key={cat.id}
                  type="button"
                  onClick={() => setCategory(cat.id)}
                  className={`rounded-full px-4 py-2 text-sm font-semibold transition ${
                    category === cat.id
                      ? "bg-ade-orange text-white"
                      : "bg-white text-ade-steel ring-1 ring-ade-border hover:ring-ade-orange"
                  }`}
                >
                  {cat.label}
                </button>
              ))}
            </div>
          </div>

          {products.length === 0 ? (
            <p className="py-16 text-center text-ade-steel">
              No parts found. Try another search or category.
            </p>
          ) : (
            <div className="grid gap-6 sm:grid-cols-2 lg:grid-cols-3 xl:grid-cols-4">
              {products.map((product, i) => (
                <Reveal key={product.id} delay={Math.min(i * 0.05, 0.4)}>
                  <ProductCard product={product} />
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
