"use client";

import { motion, type HTMLMotionProps } from "framer-motion";
import { fadeUp, viewportOnce } from "@/lib/animations";

type RevealProps = HTMLMotionProps<"div"> & {
  delay?: number;
};

export default function Reveal({
  children,
  delay = 0,
  className,
  ...props
}: RevealProps) {
  return (
    <motion.div
      initial={fadeUp.initial}
      whileInView={fadeUp.animate}
      viewport={viewportOnce}
      transition={{ ...fadeUp.transition, delay }}
      className={className}
      {...props}
    >
      {children}
    </motion.div>
  );
}
