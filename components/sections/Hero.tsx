"use client";

import { useRef } from "react";
import Image from "next/image";
import Link from "next/link";
import { motion, useScroll, useTransform } from "framer-motion";
import { MapPin, Package, Truck } from "lucide-react";
import { brand, trustItems } from "@/lib/brand";

export default function Hero() {
  const sectionRef = useRef<HTMLElement>(null);
  const { scrollYProgress } = useScroll({
    target: sectionRef,
    offset: ["start start", "end start"],
  });
  const bgY = useTransform(scrollYProgress, [0, 1], ["0%", "25%"]);
  const contentY = useTransform(scrollYProgress, [0, 1], [0, 80]);

  return (
    <section
      ref={sectionRef}
      className="relative min-h-[92vh] overflow-hidden pt-16"
    >
      <motion.div style={{ y: bgY }} className="absolute inset-0">
        <Image
          src="https://images.unsplash.com/photo-1558981403-c5f9899a28bc?w=1920&q=80"
          alt=""
          fill
          className="object-cover"
          priority
          sizes="100vw"
        />
        <div className="absolute inset-0 bg-gradient-to-r from-ade-charcoal via-ade-charcoal/85 to-ade-charcoal/40" />
        <div className="absolute inset-0 bg-gradient-to-t from-ade-charcoal via-transparent to-ade-charcoal/30" />
        <div className="hero-grid absolute inset-0 opacity-30" />
      </motion.div>

      <motion.div
        style={{ y: contentY }}
        className="section-container relative flex min-h-[calc(92vh-4rem)] flex-col justify-center py-16"
      >
        <div className="grid items-center gap-12 lg:grid-cols-2">
          <motion.div
            initial={{ opacity: 0, y: 40 }}
            animate={{ opacity: 1, y: 0 }}
            transition={{ duration: 0.7, ease: [0.16, 1, 0.3, 1] }}
          >
            <div className="mb-5 flex flex-wrap gap-2">
              <span className="glass-pill flex items-center gap-1.5">
                <MapPin size={12} />
                Tagum City · Ships nationwide
              </span>
              <span className="glass-pill flex items-center gap-1.5 bg-ade-orange/90 text-white">
                <Truck size={12} />
                Multiple ways to order
              </span>
            </div>

            <h1 className="font-display text-4xl font-extrabold leading-[1.08] tracking-tight text-white sm:text-5xl lg:text-6xl">
              Your trusted{" "}
              <span className="text-ade-orange">motorcycle parts</span> hub
            </h1>
            <p className="mt-5 max-w-lg text-base leading-relaxed text-white/75 sm:text-lg">
              Browse genuine and quality parts for Raider, Ninja, and more.
              Order on Shopee, TikTok Shop, or message us — we ship anywhere in
              the Philippines.
            </p>

            <div className="mt-8 flex flex-wrap gap-3">
              <Link href="/shop" className="btn-primary px-8 py-3.5">
                Browse parts
              </Link>
              <a
                href={brand.urls.shopee}
                target="_blank"
                rel="noopener noreferrer"
                className="btn-secondary border-white/20 bg-white/10 text-white backdrop-blur hover:bg-white/20"
              >
                Shop on Shopee
              </a>
            </div>
          </motion.div>

          <motion.div
            initial={{ opacity: 0, scale: 0.9 }}
            animate={{ opacity: 1, scale: 1 }}
            transition={{ delay: 0.2, duration: 0.7, ease: [0.16, 1, 0.3, 1] }}
            className="relative hidden justify-center lg:flex"
          >
            <motion.div
              animate={{ y: [0, -12, 0] }}
              transition={{ duration: 4, repeat: Infinity, ease: "easeInOut" }}
              className="relative"
            >
              <div className="glow-ring absolute -inset-4 rounded-full" />
              <Image
                src="/logo.jpg"
                alt="ADe Garage logo"
                width={320}
                height={320}
                className="relative z-10 h-72 w-72 rounded-full object-cover ring-4 ring-ade-orange/50 shadow-2xl"
                priority
              />
            </motion.div>
          </motion.div>
        </div>

        <motion.div
          initial={{ opacity: 0, y: 24 }}
          animate={{ opacity: 1, y: 0 }}
          transition={{ delay: 0.5 }}
          className="mt-12 flex flex-wrap gap-4"
        >
          {trustItems.map((item, i) => (
            <motion.span
              key={item}
              initial={{ opacity: 0, y: 16 }}
              animate={{ opacity: 1, y: 0 }}
              transition={{ delay: 0.6 + i * 0.1 }}
              className="glass-pill flex items-center gap-2"
            >
              <Package size={13} />
              {item}
            </motion.span>
          ))}
        </motion.div>
      </motion.div>
    </section>
  );
}
