"use client";

import { motion } from "framer-motion";
import { brand } from "@/lib/brand";
import Reveal from "@/components/motion/Reveal";

export default function SocialProof() {
  return (
    <section className="section-container py-20">
      <Reveal>
        <div className="garage-card overflow-hidden">
          <div className="grid lg:grid-cols-2">
            <div className="p-8 sm:p-10 lg:p-12">
              <p className="section-eyebrow">Trusted locally</p>
              <h2 className="section-title mt-2">
                {brand.site.followers} riders follow ADe Garage
              </h2>
              <p className="mt-4 text-ade-steel leading-relaxed">
                Based in Tagum City, serving riders across Mindanao and
                nationwide. Message us on Facebook if you&apos;re unsure a part
                fits your bike — we&apos;re happy to help before you order.
              </p>
              <div className="mt-6 flex flex-wrap gap-3">
                <a
                  href={brand.urls.facebook}
                  target="_blank"
                  rel="noopener noreferrer"
                  className="btn-primary"
                >
                  Follow on Facebook
                </a>
                <a
                  href={brand.urls.messenger}
                  target="_blank"
                  rel="noopener noreferrer"
                  className="btn-secondary"
                >
                  Message us
                </a>
              </div>
            </div>
            <motion.div
              initial={{ opacity: 0, x: 40 }}
              whileInView={{ opacity: 1, x: 0 }}
              viewport={{ once: true }}
              transition={{ duration: 0.6 }}
              className="relative min-h-[240px] bg-gradient-to-br from-ade-orange/20 via-ade-charcoal to-ade-charcoal lg:min-h-0"
            >
              <div className="absolute inset-0 flex items-center justify-center p-8">
                <blockquote className="max-w-md text-center text-lg font-medium italic text-white/90">
                  &ldquo;Quality parts, fast shipping. Order on Shopee or TikTok
                  — same trusted ADe Garage.&rdquo;
                </blockquote>
              </div>
            </motion.div>
          </div>
        </div>
      </Reveal>
    </section>
  );
}
