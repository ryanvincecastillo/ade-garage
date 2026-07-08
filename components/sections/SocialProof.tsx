"use client";

import Reveal from "@/components/motion/Reveal";
import { brand } from "@/lib/brand";
import { MapPin, MessageCircle } from "lucide-react";

export default function SocialProof() {
  return (
    <section className="bg-[#f4f7fb] py-20">
      <div className="section-container">
        <Reveal>
          <div className="overflow-hidden rounded-2xl border border-ade-border-light bg-white shadow-[0_8px_32px_rgba(0,0,0,0.06)]">
            <div className="grid lg:grid-cols-2">
              <div className="p-8 sm:p-10">
                <p className="text-xs font-bold uppercase tracking-widest text-ade-cyan">
                  Visit us
                </p>
                <h2 className="font-display mt-2 text-2xl font-bold text-ade-charcoal sm:text-3xl">
                  {brand.site.followers} riders trust ADe Garage
                </h2>
                <p className="mt-4 flex items-start gap-2 text-ade-steel">
                  <MapPin size={18} className="mt-0.5 shrink-0 text-ade-cyan" />
                  {brand.site.location} — serving riders nationwide
                </p>
                <p className="mt-3 text-sm text-ade-steel">
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
                    className="btn-secondary"
                  >
                    Open in Maps
                  </a>
                  <a
                    href={brand.urls.messenger}
                    target="_blank"
                    rel="noopener noreferrer"
                    className="inline-flex items-center gap-2 rounded-xl border border-[#0084FF]/30 bg-[#0084FF]/10 px-5 py-2.5 text-sm font-bold text-[#0084FF] transition hover:bg-[#0084FF]/15"
                  >
                    <MessageCircle size={16} />
                    Messenger
                  </a>
                </div>
              </div>
              <div className="flex flex-col justify-center gap-4 border-t border-ade-border-light bg-gradient-to-br from-ade-cyan-light/60 to-white p-8 sm:p-10 lg:border-l lg:border-t-0">
                <p className="text-sm font-semibold uppercase tracking-widest text-ade-cyan">
                  Order on
                </p>
                <ul className="space-y-2 text-ade-charcoal">
                  <li>Shopee — shopee.ph/ade_garage</li>
                  <li>TikTok Shop — @ade_garage</li>
                  <li className="text-ade-steel">Lazada — coming soon</li>
                </ul>
              </div>
            </div>
          </div>
        </Reveal>
      </div>
    </section>
  );
}
