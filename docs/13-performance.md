# Performance

## Primary objective

The site should feel instant on mobile.

## Rules

- use next/image
- prefer AVIF/WebP where appropriate
- avoid huge background images
- minimise JavaScript
- avoid unnecessary third-party scripts
- lazy-load below-the-fold imagery
- preload only genuinely critical assets
- use font-display appropriately
- avoid layout shift
- reserve image dimensions
- keep animations lightweight

## Third-party services

Google Maps, reviews widgets, analytics and social embeds can hurt performance.

Prefer lightweight links or static representations until the user interacts.

Do not load a heavy map immediately if a simple address/map link is sufficient.

## QA

Before launch test:
- mobile
- desktop
- slow connection
- accessibility
- Lighthouse/PageSpeed
- broken links
- metadata
- sitemap
- redirects
