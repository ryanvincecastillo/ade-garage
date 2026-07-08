"use client";

import { motion } from "framer-motion";
import Reveal from "@/components/motion/Reveal";
import { howItWorks } from "@/lib/brand";
import { staggerContainer, staggerItem } from "@/lib/animations";

export default function HowItWorks() {
  return (
    <section id="how-it-works" className="bg-ade-charcoal py-20 text-white">
      <div className="section-container">
        <Reveal className="mb-12 text-center">
          <p className="text-xs font-bold uppercase tracking-widest text-ade-orange">
            How it works
          </p>
          <h2 className="font-display mt-2 text-2xl font-bold tracking-tight sm:text-3xl lg:text-4xl">
            Browse here, order anywhere
          </h2>
        </Reveal>

        <motion.ol
          variants={staggerContainer}
          initial="initial"
          whileInView="animate"
          viewport={{ once: true, margin: "-60px" }}
          className="grid gap-8 md:grid-cols-3"
        >
          {howItWorks.map((step) => (
            <motion.li
              key={step.step}
              variants={staggerItem}
              className="relative rounded-2xl border border-white/10 bg-white/5 p-6 backdrop-blur"
            >
              <span className="font-display text-5xl font-extrabold text-ade-orange/30">
                {String(step.step).padStart(2, "0")}
              </span>
              <h3 className="font-display mt-2 text-xl font-bold">{step.title}</h3>
              <p className="mt-2 text-sm leading-relaxed text-white/70">
                {step.description}
              </p>
            </motion.li>
          ))}
        </motion.ol>
      </div>
    </section>
  );
}
