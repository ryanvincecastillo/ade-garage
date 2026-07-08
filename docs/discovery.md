# ADe Garage — Channel Discovery

Collected for Phase 1 multi-channel brand hub build.

## Business

| Field | Value |
|---|---|
| **Brand** | ADe Garage |
| **Owner** | Denver Mark Aben |
| **Location** | Prk. 6 San Miguel (Campo 4), Tagum City, Philippines |
| **Phone** | +63 985 447 5429 |
| **Hours** | Always open |
| **Focus** | Motorcycle parts & accessories (genuine & aftermarket) |
| **Shipping** | Nationwide (courier) + Tagum pickup |

## Channels

| Channel | URL | Status |
|---|---|---|
| Facebook | https://www.facebook.com/profile.php?id=100076223739550 | Active (~1.5K followers) |
| Messenger | https://m.me/100076223739550 | Active |
| Shopee (primary) | https://shopee.ph/ade_garage | Active |
| Shopee (secondary) | https://shopee.ph/ade_garageshop | Confirm with Denver |
| TikTok | https://www.tiktok.com/@ade_garage | Active |
| TikTok Shop | https://www.tiktok.com/@ade_garage | Active (shop via profile) |
| Lazada | — | Planned — show "Coming soon" |
| Own website checkout | — | Phase 2 (Shopify Starter ~$5/mo) |

## Brand assets

- **Logo:** Downloaded from Facebook Graph API → `public/logo.jpg`
- **Cover / hero:** CSS gradient + motorcycle garage aesthetic (v1); replace with shop video when Denver provides clips
- **Product photos:** Placeholder Unsplash motorcycle-part imagery until Shopee CSV export with image URLs is imported

## Catalog notes

- Primary import source: Shopee Seller Centre export from `ade_garage`
- Sample products seeded in `data/products.json` based on Facebook posts (Raider 150 body cover, Yasaki hub set, etc.)
- Per-product deep links: update `channels.shopee` / `channels.tiktokShop` when Denver provides listing URLs
- Not every SKU exists on every channel — UI shows only available buttons

## Open items for Denver

1. Which Shopee store is canonical (`ade_garage` vs `ade_garageshop`)?
2. TikTok Shop product deep links (bulk export or sample URLs)
3. Lazada launch timeline
4. Preferred domain (`adegarage.ph` or similar)
5. Shop video / real product photos for hero gallery
