"use client";

import { motion } from "framer-motion";
import { ExternalLink, MessageCircle, ShoppingBag } from "lucide-react";
import Reveal from "@/components/motion/Reveal";
import { channels } from "@/lib/brand";
import { staggerContainer, staggerItem } from "@/lib/animations";

const icons = {
  shopee: ShoppingBag,
  tiktokShop: ExternalLink,
  lazada: ShoppingBag,
  messenger: MessageCircle,
};

export default function ShopYourWay() {
  return (
    <section id="channels" className="section-container py-20">
      <Reveal className="mb-12 text-center">
        <p className="section-eyebrow">Shop your way</p>
        <h2 className="section-title mt-2">Order on your favorite platform</h2>
        <p className="mx-auto mt-3 max-w-2xl text-ade-steel">
          ADe Garage is on Shopee, TikTok Shop, and soon Lazada. Pick where
          you&apos;re most comfortable checking out — same trusted shop, your
          choice.
        </p>
      </Reveal>

      <motion.div
        variants={staggerContainer}
        initial="initial"
        whileInView="animate"
        viewport={{ once: true, margin: "-60px" }}
        className="grid gap-5 sm:grid-cols-2 lg:grid-cols-4"
      >
        {channels.map((channel) => {
          const Icon = icons[channel.id];
          const isDisabled = !channel.available || !channel.href;

          const inner = (
            <>
              <div
                className={`mb-4 flex h-12 w-12 items-center justify-center rounded-xl bg-gradient-to-br ${channel.color} text-white shadow-lg`}
              >
                <Icon size={22} />
              </div>
              <h3 className="font-display text-lg font-bold text-ade-charcoal">
                {channel.name}
                {"comingSoon" in channel && channel.comingSoon && (
                  <span className="ml-2 rounded-full bg-ade-orange/10 px-2 py-0.5 text-[10px] font-bold uppercase text-ade-orange">
                    Soon
                  </span>
                )}
              </h3>
              <p className="mt-2 text-sm leading-relaxed text-ade-steel">
                {channel.description}
              </p>
              {!isDisabled && (
                <span className="mt-4 inline-flex items-center gap-1 text-sm font-semibold text-ade-orange">
                  Visit store
                  <ExternalLink size={14} />
                </span>
              )}
            </>
          );

          return (
            <motion.div key={channel.id} variants={staggerItem}>
              {isDisabled ? (
                <div className="garage-card h-full p-6 opacity-75">{inner}</div>
              ) : (
                <a
                  href={channel.href!}
                  target="_blank"
                  rel="noopener noreferrer"
                  className="garage-card block h-full p-6 transition hover:-translate-y-1 hover:shadow-xl"
                >
                  {inner}
                </a>
              )}
            </motion.div>
          );
        })}
      </motion.div>
    </section>
  );
}
