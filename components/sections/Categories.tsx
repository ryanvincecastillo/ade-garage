"use client";

import Link from "next/link";
import { motion } from "framer-motion";
import {
  Cog,
  Disc,
  Link2,
  Shield,
  Sparkles,
  Zap,
} from "lucide-react";
import Reveal from "@/components/motion/Reveal";
import { categories } from "@/lib/brand";
import { staggerContainer, staggerItem } from "@/lib/animations";

const iconMap = {
  shield: Shield,
  cog: Cog,
  zap: Zap,
  disc: Disc,
  link: Link2,
  sparkles: Sparkles,
};

export default function Categories() {
  return (
    <section className="relative overflow-hidden bg-ade-blue-deep py-20">
      <div className="pointer-events-none absolute inset-0 bg-[radial-gradient(ellipse_at_center,rgba(0,200,240,0.08)_0%,transparent_70%)]" />
      <div className="section-container relative">
        <Reveal className="mb-12 text-center">
          <p className="section-eyebrow">Categories</p>
          <h2 className="section-title mt-2 text-white">Shop by part type</h2>
        </Reveal>

        <motion.div
          variants={staggerContainer}
          initial="initial"
          whileInView="animate"
          viewport={{ once: true, margin: "-60px" }}
          className="grid gap-4 sm:grid-cols-2 lg:grid-cols-3"
        >
          {categories.map((cat) => {
            const Icon = iconMap[cat.icon as keyof typeof iconMap];
            return (
              <motion.div key={cat.id} variants={staggerItem}>
                <Link
                  href={`/shop?category=${cat.id}`}
                  className="group flex items-center gap-4 rounded-2xl border border-ade-border bg-ade-surface p-5 transition hover:-translate-y-1 hover:border-ade-cyan/40 hover:shadow-[0_0_30px_rgba(0,200,240,0.15)]"
                >
                  <motion.div
                    whileHover={{ rotate: [0, -8, 8, 0] }}
                    transition={{ duration: 0.5 }}
                    className="flex h-12 w-12 items-center justify-center rounded-xl bg-gradient-to-br from-ade-cyan to-ade-blue text-white"
                  >
                    <Icon size={22} />
                  </motion.div>
                  <span className="font-display text-lg font-bold text-white transition group-hover:text-ade-cyan">
                    {cat.label}
                  </span>
                </Link>
              </motion.div>
            );
          })}
        </motion.div>
      </div>
    </section>
  );
}
