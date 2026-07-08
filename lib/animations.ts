export const spring = {
  type: "spring" as const,
  stiffness: 120,
  damping: 18,
};

export const springSoft = {
  type: "spring" as const,
  stiffness: 80,
  damping: 20,
};

export const easeOut = [0.16, 1, 0.3, 1] as const;

export const fadeUp = {
  initial: { opacity: 0, y: 32 },
  animate: { opacity: 1, y: 0 },
  transition: { duration: 0.6, ease: easeOut },
};

export const staggerContainer = {
  animate: {
    transition: {
      staggerChildren: 0.1,
      delayChildren: 0.15,
    },
  },
};

export const staggerItem = {
  initial: { opacity: 0, y: 24 },
  animate: { opacity: 1, y: 0, transition: { duration: 0.5, ease: easeOut } },
};

export const viewportOnce = {
  once: true,
  margin: "-80px" as const,
};
