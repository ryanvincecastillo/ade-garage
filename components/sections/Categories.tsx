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
    <section className="bg-ade-orange-light/50 py-20">
      <div className="section-container">
        <Reveal className="mb-12 text-center">
          <p className="section-eyebrow">Categories</p>
          <h2 className="section-title mt-2">Shop by part type</h2>
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
                  className="garage-card flex items-center gap-4 p-5 transition hover:-translate-y-0.5 hover:shadow-lg"
                >
                  <div className="flex h-12 w-12 items-center justify-center rounded-xl bg-ade-charcoal text-ade-orange">
                    <Icon size={22} />
                  </div>
                  <span className="font-display text-lg font-bold text-ade-charcoal">
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
