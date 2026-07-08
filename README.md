# ADe Garage — Multi-Channel Brand Hub

Official website for **ADe Garage** (Tagum City motorcycle parts). Customers browse the catalog and order on **Shopee**, **TikTok Shop**, **Messenger**, or **Lazada** (coming soon).

Built with Next.js 15, Tailwind CSS 4, and Framer Motion.

## Quick start

```bash
npm install
npm run dev
```

Open [http://localhost:3000](http://localhost:3000).

## Project structure

```
app/                 Pages (home, shop, product detail)
components/          UI, layout, animated sections
data/products.json   Product catalog + channel links
docs/                Discovery, proposal, launch checklist
lib/                 Brand config, products helpers
public/logo.jpg      Facebook profile logo
```

## Updating products

Edit `data/products.json`. Each product supports per-channel URLs:

```json
{
  "channels": {
    "shopee": "https://shopee.ph/...",
    "tiktokShop": "https://www.tiktok.com/@ade_garage",
    "lazada": null
  }
}
```

Replace Unsplash `image` URLs with real Shopee CDN images when export is available.

## Docs

- [discovery.md](./docs/discovery.md) — channels & assets collected
- [proposal.md](./docs/proposal.md) — client proposal for Denver
- [LAUNCH.md](./docs/LAUNCH.md) — deploy & bio links
- [PHASE2-SHOPIFY.md](./docs/PHASE2-SHOPIFY.md) — optional checkout upgrade

## Deploy

See [docs/LAUNCH.md](./docs/LAUNCH.md). Set `NEXT_PUBLIC_SITE_URL` to your production domain.
