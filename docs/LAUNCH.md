# ADe Garage — Launch Checklist

Use this after deploying to Vercel (or your host).

## Deploy

```bash
cd ade-garage
npm run build
npm run start   # local production test
```

### Vercel (recommended)

1. Push repo to GitHub
2. Import project at [vercel.com](https://vercel.com)
3. Set env: `NEXT_PUBLIC_SITE_URL=https://your-domain.com`
4. Deploy

## Domain

1. Register domain (e.g. `adegarage.ph`) in Denver's name
2. Point DNS to Vercel
3. Update `NEXT_PUBLIC_SITE_URL` in Vercel env

## Bio links — add website everywhere

| Platform | Where to add |
|---|---|
| **Facebook** | Page intro / About → Website |
| **Shopee** | Shop description → "Official site: https://..." |
| **TikTok** | Profile bio link |
| **TikTok Shop** | Shop profile if supported |
| **Messenger** | Auto-reply or pinned post with site link |

**Suggested bio line:**

> Official catalog: adegarage.com — order on Shopee, TikTok Shop, or message us!

## Train Denver (15 min)

1. Site is a **catalog hub** — he still updates products on Shopee/TikTok
2. When new listings go live, send Shopee/TikTok URLs for site update (or CSV re-import)
3. Lazada: flip "coming soon" when store launches
4. Fitment questions → Messenger (already linked)

## Post-launch updates

- Replace Unsplash placeholders with real Shopee product images (CSV import)
- Add per-product deep links in `data/products.json`
- Optional: simple admin or Shopee sync script (Phase 1.1)

## Phase 2 (future)

See [PHASE2-SHOPIFY.md](./PHASE2-SHOPIFY.md) for adding "Order on website" via Shopify Starter.
