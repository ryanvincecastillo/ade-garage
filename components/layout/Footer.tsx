import Image from "next/image";
import Link from "next/link";
import { brand, channels } from "@/lib/brand";
import { MapPin, Phone, Share2 } from "lucide-react";

export default function Footer() {
  return (
    <footer id="contact" className="bg-ade-charcoal text-white">
      <div className="section-container py-12">
        <div className="mb-10 flex flex-col gap-6 sm:flex-row sm:items-center sm:justify-between">
          <div className="flex items-center gap-3">
            <Image
              src="/logo.jpg"
              alt="ADe Garage"
              width={48}
              height={48}
              className="h-12 w-12 rounded-full ring-2 ring-ade-orange/30"
            />
            <div>
              <p className="font-display text-xl font-extrabold">ADe Garage</p>
              <p className="text-sm text-white/60">{brand.site.tagline}</p>
            </div>
          </div>
          <Link href="/shop" className="btn-primary w-fit">
            Browse all parts
          </Link>
        </div>

        <div className="grid gap-8 border-t border-white/10 pt-8 sm:grid-cols-2 lg:grid-cols-4">
          <div>
            <h3 className="mb-3 text-xs font-bold uppercase tracking-widest text-ade-orange">
              Shop channels
            </h3>
            <ul className="space-y-2.5">
              {channels.map((ch) => (
                <li key={ch.id}>
                  {ch.href ? (
                    <a
                      href={ch.href}
                      target="_blank"
                      rel="noopener noreferrer"
                      className="text-sm text-white/70 hover:text-white"
                    >
                      {ch.name}
                    </a>
                  ) : (
                    <span className="text-sm text-white/40">
                      {ch.name} (coming soon)
                    </span>
                  )}
                </li>
              ))}
            </ul>
          </div>
          <div>
            <h3 className="mb-3 text-xs font-bold uppercase tracking-widest text-ade-orange">
              Visit us
            </h3>
            <ul className="space-y-2.5 text-sm text-white/70">
              <li className="flex items-start gap-2">
                <MapPin size={16} className="mt-0.5 shrink-0 text-ade-orange" />
                {brand.site.location}
              </li>
              <li>
                <a
                  href={brand.urls.maps}
                  target="_blank"
                  rel="noopener noreferrer"
                  className="hover:text-white"
                >
                  Open in Google Maps
                </a>
              </li>
              <li className="flex items-center gap-2">
                <Phone size={16} className="text-ade-orange" />
                <a href={`tel:${brand.site.phone.replace(/\s/g, "")}`} className="hover:text-white">
                  {brand.site.phone}
                </a>
              </li>
              <li>{brand.site.hours}</li>
            </ul>
          </div>
          <div>
            <h3 className="mb-3 text-xs font-bold uppercase tracking-widest text-ade-orange">
              Social
            </h3>
            <ul className="space-y-2.5">
              <li>
                <a
                  href={brand.urls.facebook}
                  target="_blank"
                  rel="noopener noreferrer"
                  className="inline-flex items-center gap-2 text-sm text-white/70 hover:text-white"
                >
                  <Share2 size={16} />
                  Facebook
                </a>
              </li>
              <li>
                <a
                  href={brand.urls.tiktok}
                  target="_blank"
                  rel="noopener noreferrer"
                  className="text-sm text-white/70 hover:text-white"
                >
                  TikTok @ade_garage
                </a>
              </li>
              <li>
                <a
                  href={brand.urls.messenger}
                  target="_blank"
                  rel="noopener noreferrer"
                  className="text-sm text-white/70 hover:text-white"
                >
                  Messenger
                </a>
              </li>
            </ul>
          </div>
          <div>
            <h3 className="mb-3 text-xs font-bold uppercase tracking-widest text-ade-orange">
              Quick links
            </h3>
            <ul className="space-y-2.5">
              <li>
                <Link href="/shop" className="text-sm text-white/70 hover:text-white">
                  All products
                </Link>
              </li>
              <li>
                <Link href="/#channels" className="text-sm text-white/70 hover:text-white">
                  Where to buy
                </Link>
              </li>
              <li>
                <Link href="/#how-it-works" className="text-sm text-white/70 hover:text-white">
                  How ordering works
                </Link>
              </li>
            </ul>
          </div>
        </div>

        <div className="mt-8 border-t border-white/10 pt-6 text-center text-xs text-white/50">
          © {new Date().getFullYear()} ADe Garage · Tagum City · Ships nationwide
        </div>
      </div>
    </footer>
  );
}
