"use client";

import Link from "next/link";
import { motion } from "framer-motion";
import { MapPin, MessageCircle, Sparkles, Truck, Wrench } from "lucide-react";
import HeroPlatformDock from "@/components/sections/HeroPlatformDock";
import HeroAmbient from "@/components/sections/HeroAmbient";
import { brand } from "@/lib/brand";

const trustPills = [
  { icon: Sparkles, text: "Thai concept bestsellers" },
  { icon: Wrench, text: "Genuine parts" },
  { icon: Truck, text: "Ships nationwide" },
];

export default function Hero() {
  return (
    <section className="hero-workshop-bg relative overflow-hidden scroll-mt-16 pt-16">
      <HeroAmbient />

      <div className="section-container relative py-12 sm:py-16 lg:py-20">
        <div className="grid items-center gap-10 lg:grid-cols-2 lg:gap-14">
          <motion.div
            initial={{ opacity: 0, y: 28 }}
            animate={{ opacity: 1, y: 0 }}
            transition={{ duration: 0.6, ease: [0.16, 1, 0.3, 1] }}
          >
            <p className="mb-5 inline-flex items-center gap-2 rounded-full border border-ade-cyan/40 bg-ade-cyan/15 px-3 py-1.5 text-xs font-semibold text-ade-cyan">
              <MapPin size={12} />
              Tagum City · Nationwide shipping
            </p>

            <h1 className="font-display text-4xl font-extrabold leading-[1.08] tracking-tight text-white sm:text-5xl lg:text-[3.25rem]">
              Thai concept &{" "}
              <span className="text-gradient-cyan">quality parts</span>
              <br className="hidden sm:block" /> for every ride.
            </h1>

            <p className="mt-5 max-w-lg text-base leading-relaxed text-white/70 sm:text-lg">
              Raider, Ninja, and underbone favorites — browse our catalog, then
              order on Shopee, TikTok Shop, or Messenger.
            </p>

            <div className="mt-8 flex flex-wrap items-center gap-3">
              <motion.div whileHover={{ scale: 1.03 }} whileTap={{ scale: 0.97 }}>
                <Link href="/shop" className="btn-primary px-8 py-3.5 text-base">
                  Browse parts
                </Link>
              </motion.div>
              <a
                href={brand.urls.messenger}
                target="_blank"
                rel="noopener noreferrer"
                className="btn-outline-light inline-flex items-center gap-2 px-6 py-3.5 text-base"
              >
                <MessageCircle size={16} />
                Ask fitment
              </a>
            </div>

            <div className="mt-8 flex flex-wrap gap-2">
              {trustPills.map((pill, i) => (
                <motion.span
                  key={pill.text}
                  initial={{ opacity: 0, y: 12 }}
                  animate={{ opacity: 1, y: 0 }}
                  transition={{ delay: 0.3 + i * 0.08 }}
                  className="inline-flex items-center gap-1.5 rounded-full border border-ade-cyan/25 bg-ade-cyan/10 px-3 py-1.5 text-xs font-medium text-white/90"
                >
                  <pill.icon size={12} className="text-ade-cyan" />
                  {pill.text}
                </motion.span>
              ))}
            </div>
          </motion.div>

          <motion.div
            id="channels"
            className="scroll-mt-20"
            initial={{ opacity: 0, y: 28 }}
            animate={{ opacity: 1, y: 0 }}
            transition={{ delay: 0.15, duration: 0.6, ease: [0.16, 1, 0.3, 1] }}
          >
            <p className="mb-3 text-xs font-bold uppercase tracking-widest text-ade-cyan">
              Where to buy
            </p>
            <HeroPlatformDock />
          </motion.div>
        </div>
      </div>
    </section>
  );
}
