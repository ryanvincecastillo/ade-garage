"use client";

import Link from "next/link";
import Image from "next/image";
import { motion } from "framer-motion";
import { MapPin, Sparkles, Truck, Wrench } from "lucide-react";
import HeroPlatformDock from "@/components/sections/HeroPlatformDock";
import HeroAmbient from "@/components/sections/HeroAmbient";

const trustPills = [
  { icon: Sparkles, text: "Thai concept bestsellers" },
  { icon: Wrench, text: "Genuine parts" },
  { icon: Truck, text: "Ships nationwide" },
  { icon: MapPin, text: "Tagum pickup" },
];

export default function Hero() {
  return (
    <section className="hero-workshop-bg relative overflow-hidden pt-16">
      <HeroAmbient />

      <div className="section-container relative py-14 sm:py-20 lg:py-24">
        <div className="grid items-center gap-10 lg:grid-cols-2 lg:gap-14">
          <motion.div
            initial={{ opacity: 0, y: 28 }}
            animate={{ opacity: 1, y: 0 }}
            transition={{ duration: 0.6, ease: [0.16, 1, 0.3, 1] }}
          >
            <motion.div
              animate={{ y: [0, -6, 0] }}
              transition={{ duration: 5, repeat: Infinity, ease: "easeInOut" }}
              className="mb-6 inline-flex"
            >
              <div className="relative">
                <div className="absolute -inset-2 animate-pulse-glow rounded-2xl bg-ade-cyan/30 blur-xl" />
                <div className="relative flex h-20 w-20 items-center justify-center overflow-hidden rounded-2xl bg-ade-charcoal-light ring-2 ring-ade-cyan/40 sm:h-24 sm:w-24">
                  <Image
                    src="/logo.png"
                    alt="ADe Garage"
                    width={96}
                    height={96}
                    className="h-full w-full object-contain p-1"
                    priority
                  />
                </div>
              </div>
            </motion.div>

            <p className="mb-4 inline-flex items-center gap-2 rounded-full border border-ade-cyan/30 bg-ade-cyan/10 px-3 py-1 text-xs font-semibold text-ade-cyan">
              <MapPin size={12} />
              Tagum City · Nationwide shipping
            </p>

            <h1 className="font-display text-4xl font-extrabold leading-[1.08] tracking-tight text-white sm:text-5xl lg:text-[3.25rem]">
              Thai concept &{" "}
              <span className="text-gradient-cyan animate-shimmer bg-gradient-to-r from-ade-cyan via-ade-chrome to-ade-cyan">
                quality parts
              </span>
              <br className="hidden sm:block" /> for every ride.
            </h1>

            <p className="mt-5 max-w-lg text-base leading-relaxed text-white/65 sm:text-lg">
              Raider, Ninja, and underbone favorites — order on Shopee, TikTok
              Shop, or message us. Same trusted ADe Garage, your platform.
            </p>

            <div className="mt-8">
              <motion.div whileHover={{ scale: 1.03 }} whileTap={{ scale: 0.97 }}>
                <Link href="/shop" className="btn-primary px-8 py-3.5 text-base">
                  Browse catalog
                </Link>
              </motion.div>
            </div>

            <div className="mt-8 flex flex-wrap gap-2">
              {trustPills.map((pill, i) => (
                <motion.span
                  key={pill.text}
                  initial={{ opacity: 0, y: 12 }}
                  animate={{ opacity: 1, y: 0 }}
                  transition={{ delay: 0.4 + i * 0.08 }}
                  whileHover={{ scale: 1.05, borderColor: "rgba(0,200,240,0.4)" }}
                  className="inline-flex items-center gap-1.5 rounded-full border border-white/10 bg-white/5 px-3 py-1.5 text-xs font-medium text-white/75 backdrop-blur-sm"
                >
                  <pill.icon size={12} className="text-ade-cyan" />
                  {pill.text}
                </motion.span>
              ))}
            </div>
          </motion.div>

          <motion.div
            initial={{ opacity: 0, y: 28 }}
            animate={{ opacity: 1, y: 0 }}
            transition={{ delay: 0.15, duration: 0.6, ease: [0.16, 1, 0.3, 1] }}
          >
            <p className="mb-3 text-xs font-bold uppercase tracking-widest text-ade-cyan/60">
              Order on
            </p>
            <HeroPlatformDock />
          </motion.div>
        </div>
      </div>
    </section>
  );
}
