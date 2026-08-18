# Technical Architecture

## Recommended stack

Next.js with TypeScript.

Use the App Router.

Tailwind CSS for styling.

shadcn/ui only for components that genuinely improve consistency/accessibility.

MDX or structured local content for service/resource pages.

## Rendering

Prefer server-rendered/static content.

Do not make the entire site a client component.

Use client components only when interactivity requires them.

## Data

No database required for v1.

Store:
- services
- resource articles
- navigation data
- FAQs
- career content

as typed content/configuration.

## Forms

Contact form can initially submit to a simple server endpoint or trusted email/form provider.

Requirements:
- spam protection
- validation
- clear success/error states
- privacy notice
- no unnecessary personal-data collection

## Images

Use next/image.

Optimise:
- dimensions
- formats
- lazy loading
- responsive sizes

Do not ship huge original photographs.

## SEO

Use Next.js metadata APIs.

Create:
- sitemap
- robots
- canonical URLs
- OG images
- structured data

## Security

- validate all form input
- do not expose secrets client-side
- rate-limit public endpoints
- avoid storing documents unless genuinely required
- never put API keys in frontend code

## Analytics

Add analytics only after consent requirements and the client's preferred provider are confirmed.

## Performance target

Aim for excellent Core Web Vitals.

Do not sacrifice performance for decorative animation.

## Deployment

Suitable options include Vercel or another reliable Next.js host.

The final hosting choice can be made before launch.
