# Phase 2 — Optional Shopify checkout

**Status:** Not implemented (future upgrade when Denver has budget)

## Goal

Add **"Order on website"** as another channel button alongside Shopee, TikTok Shop, and Lazada — without rebuilding the site.

## Steps (when ready)

1. Create Shopify store on Ryan's account — **Starter plan (~$5 USD/mo)**
2. Import catalog from `data/products.json` / Shopee CSV into Shopify
3. Add `channels.website` field to product model
4. Update `ChannelButtons.tsx` with new button → Shopify Buy Button or checkout URL
5. Add Denver as Staff; transfer ownership when ready
6. Reconnect PayMongo under Denver's business details

## Estimated effort

~3–5 days after Phase 1 is live.

## Code touchpoints

- `lib/brand.ts` — add `shopifyStore` URL
- `components/ui/ChannelButtons.tsx` — website checkout button
- `data/products.json` — optional `channels.website` per SKU

No changes required until Denver approves monthly cost.
