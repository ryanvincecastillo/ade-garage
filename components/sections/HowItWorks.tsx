"use client";

import { motion } from "framer-motion";
import Reveal from "@/components/motion/Reveal";
import { howItWorks } from "@/lib/brand";
import { staggerContainer, staggerItem } from "@/lib/animations";

export default function HowItWorks() {
  return (
    <section id="how-it-works" className="border-y border-ade-border bg-white py-20">
      <div className="section-container">
        <Reveal className="mb-12 text-center">
          <p className="section-eyebrow">How it works</p>
          <h2 className="section-title mt-2">Browse here, order anywhere</h2>
        </Reveal>

        <motion.ol
          variants={staggerContainer}
          initial="initial"
          whileInView="animate"
          viewport={{ once: true, margin: "-60px" }}
          className="grid gap-6 md:grid-cols-3"
        >
          {howItWorks.map((step) => (
            <motion.li
              key={step.step}
              variants={staggerItem}
              className="rounded-2xl border border-ade-border bg-ade-orange-light/30 p-6"
            >
              <span className="font-display text-4xl font-extrabold text-ade-orange/40">
                {String(step.step).padStart(2, "0")}
              </span>
              <h3 className="font-display mt-2 text-lg font-bold text-ade-charcoal">
                {step.title}
              </h3>
              <p className="mt-2 text-sm leading-relaxed text-ade-steel">
                {step.description}
              </p>
            </motion.li>
          ))}
        </motion.ol>
      </div>
    </section>
  );
}
