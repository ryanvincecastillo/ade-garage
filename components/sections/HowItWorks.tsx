"use client";

import { motion } from "framer-motion";
import Reveal from "@/components/motion/Reveal";
import { howItWorks } from "@/lib/brand";
import { staggerContainer, staggerItem } from "@/lib/animations";

export default function HowItWorks() {
  return (
    <section id="how-it-works" className="scroll-mt-20 bg-white py-20">
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
              whileHover={{ y: -4, boxShadow: "0 12px 40px rgba(0,200,240,0.12)" }}
              className="rounded-2xl border border-ade-border-light bg-gradient-to-br from-ade-cyan-light/40 to-white p-6 transition"
            >
              <span className="font-display text-4xl font-extrabold text-ade-cyan/30">
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
