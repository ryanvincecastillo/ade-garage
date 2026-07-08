"use client";

import Reveal from "@/components/motion/Reveal";
import { brand } from "@/lib/brand";
import { MapPin, MessageCircle } from "lucide-react";

export default function SocialProof() {
  return (
    <section className="section-container py-20">
      <Reveal>
        <div className="overflow-hidden rounded-2xl border border-ade-border bg-ade-charcoal text-white shadow-[0_8px_40px_rgba(0,0,0,0.3)]">
          <div className="grid lg:grid-cols-2">
            <div className="p-8 sm:p-10">
              <p className="text-xs font-bold uppercase tracking-widest text-ade-cyan">
                Visit us
              </p>
              <h2 className="font-display mt-2 text-2xl font-bold sm:text-3xl">
                {brand.site.followers} riders trust ADe Garage
              </h2>
              <p className="mt-4 flex items-start gap-2 text-white/70">
                <MapPin size={18} className="mt-0.5 shrink-0 text-ade-cyan" />
                {brand.site.location} — serving riders nationwide
              </p>
              <p className="mt-3 text-sm text-white/60">
                Not sure a part fits? Message us before you order — we know
                Raider, Ninja, and Thai concept setups.
              </p>
              <div className="mt-6 flex flex-wrap gap-3">
                <a
                  href={brand.urls.facebook}
                  target="_blank"
                  rel="noopener noreferrer"
                  className="btn-primary"
                >
                  Facebook page
                </a>
                <a
                  href={brand.urls.maps}
                  target="_blank"
                  rel="noopener noreferrer"
                  className="btn-secondary border-white/20 bg-white/10 text-white hover:bg-white/20"
                >
                  Open in Maps
                </a>
                <a
                  href={brand.urls.messenger}
                  target="_blank"
                  rel="noopener noreferrer"
                  className="inline-flex items-center gap-2 rounded-xl border border-[#0084FF]/40 bg-[#0084FF]/15 px-5 py-2.5 text-sm font-bold text-white transition hover:bg-[#0084FF]/25"
                >
                  <MessageCircle size={16} />
                  Messenger
                </a>
              </div>
            </div>
            <div className="flex flex-col justify-center gap-4 bg-gradient-to-br from-ade-cyan/15 via-ade-blue/20 to-ade-charcoal p-8 sm:p-10">
              <p className="text-sm font-semibold uppercase tracking-widest text-ade-cyan">
                Order on
              </p>
              <ul className="space-y-2 text-white/80">
                <li>Shopee — shopee.ph/ade_garage</li>
                <li>TikTok Shop — @ade_garage</li>
                <li>Lazada — coming soon</li>
              </ul>
            </div>
          </div>
        </div>
      </Reveal>
    </section>
  );
}
