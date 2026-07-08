"use client";

import { useEffect, useState } from "react";
import Image from "next/image";
import Link from "next/link";
import { AnimatePresence, motion } from "framer-motion";
import { Menu, X } from "lucide-react";
import { spring } from "@/lib/animations";

const navLinks = [
  { href: "/shop", label: "Shop" },
  { href: "/#how-it-works", label: "How it works" },
  { href: "/#contact", label: "Contact" },
];

export default function Header() {
  const [scrolled, setScrolled] = useState(false);
  const [hidden, setHidden] = useState(false);
  const [menuOpen, setMenuOpen] = useState(false);
  const [lastY, setLastY] = useState(0);

  useEffect(() => {
    const onScroll = () => {
      const y = window.scrollY;
      setScrolled(y > 20);
      setHidden(y > lastY && y > 120);
      setLastY(y);
    };
    window.addEventListener("scroll", onScroll, { passive: true });
    return () => window.removeEventListener("scroll", onScroll);
  }, [lastY]);

  return (
    <motion.header
      initial={{ y: 0 }}
      animate={{ y: hidden ? -80 : 0 }}
      transition={spring}
      className={`fixed inset-x-0 top-0 z-50 backdrop-blur-xl transition-shadow duration-300 ${
        scrolled
          ? "bg-ade-charcoal/95 shadow-[0_1px_0_rgba(255,107,0,0.15)]"
          : "bg-ade-charcoal/80"
      }`}
    >
      <div className="section-container flex h-16 items-center justify-between">
        <Link href="/" className="flex items-center gap-2.5">
          <div className="flex h-10 w-10 items-center justify-center overflow-hidden rounded-lg bg-white/10 ring-1 ring-white/15">
            <Image
              src="/logo.png"
              alt="ADe Garage"
              width={40}
              height={40}
              className="h-full w-full object-contain p-0.5"
              priority
            />
          </div>
          <span className="font-display text-lg font-extrabold tracking-tight text-white">
            ADe Garage
          </span>
        </Link>

        <nav className="hidden items-center gap-7 lg:flex">
          {navLinks.map((link) => (
            <Link
              key={link.href}
              href={link.href}
              className="text-sm font-medium text-white/70 transition hover:text-ade-orange"
            >
              {link.label}
            </Link>
          ))}
          <motion.div whileTap={{ scale: 0.96 }}>
            <Link href="/shop" className="btn-primary">
              Browse parts
            </Link>
          </motion.div>
        </nav>

        <div className="flex items-center gap-2 lg:hidden">
          <Link href="/shop" className="btn-primary px-4 py-2 text-xs">
            Shop
          </Link>
          <button
            type="button"
            className="rounded-lg p-2 text-white"
            onClick={() => setMenuOpen((o) => !o)}
            aria-label="Toggle menu"
          >
            {menuOpen ? <X size={22} /> : <Menu size={22} />}
          </button>
        </div>
      </div>

      <AnimatePresence>
        {menuOpen && (
          <motion.div
            initial={{ opacity: 0, height: 0 }}
            animate={{ opacity: 1, height: "auto" }}
            exit={{ opacity: 0, height: 0 }}
            className="overflow-hidden border-t border-white/10 bg-ade-charcoal lg:hidden"
          >
            <div className="section-container flex flex-col gap-1 py-3">
              {navLinks.map((link, i) => (
                <motion.div
                  key={link.href}
                  initial={{ opacity: 0, x: -16 }}
                  animate={{ opacity: 1, x: 0 }}
                  transition={{ delay: i * 0.05 }}
                >
                  <Link
                    href={link.href}
                    className="block rounded-xl px-3 py-2.5 text-sm font-medium text-white/80 hover:bg-white/5"
                    onClick={() => setMenuOpen(false)}
                  >
                    {link.label}
                  </Link>
                </motion.div>
              ))}
            </div>
          </motion.div>
        )}
      </AnimatePresence>
    </motion.header>
  );
}
