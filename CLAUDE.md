# VIP e-Services — Claude Code Project Instructions

## 1. Project

This is the website redesign for VIP e-Services.

Business name:
VIP e-Services

Address:
134B Barking Road
London
E6 3BD

Phone:
+44 7881 948169

Email:
info@vipeservices.co.uk

Primary service area:
East London

Languages:
English
Urdu
Hindi
Punjabi

---

## 2. Read the documentation first

Before making significant changes to the project, read the relevant files inside `/docs`.

The documentation is the source of truth for:

- business information
- site architecture
- services
- SEO
- design direction
- content
- accessibility
- performance
- careers
- technical architecture
- image strategy

Do not ignore the documentation and create your own website structure.

---

## 3. Business positioning

VIP e-Services should primarily be positioned as:

A Digital & IT company that also provides consultancy and application assistance.

The website should clearly communicate two sides of the business:

### Digital & IT Solutions

VIP e-Services actually provides these services.

Examples include technology, digital, IT and related professional services.

### Consultancy & Application Assistance

VIP e-Services helps customers complete applications.

This is NOT an official government service.

Never imply that VIP e-Services:

- is a government department
- represents the government
- makes government decisions
- guarantees application approval
- is officially affiliated with a government department unless verified

Use accurate language such as:

"We help you complete your application."

---

## 4. Geographic focus

The primary market is East London.

Do not pretend the business operates nationwide unless the owner explicitly confirms this later.

Local SEO should be important, but do not keyword-stuff the website.

---

## 5. Never invent information

This is extremely important.

Never invent:

- employees
- staff names
- qualifications
- testimonials
- reviews
- awards
- certifications
- partnerships
- statistics
- customer numbers
- success rates
- prices
- government affiliations
- company achievements
- job vacancies
- client logos

If information is unavailable, use a clear TODO or placeholder.

Never manufacture content just to make a page look complete.

---

## 6. Design philosophy

The website must NOT look like generic AI-generated website design.

Avoid:

- purple gradients
- excessive gradients
- glassmorphism
- futuristic blobs
- excessive rounded cards
- fake dashboards
- neon cyberpunk visuals
- excessive animations
- generic SaaS layouts
- huge meaningless statistics
- fake testimonials
- stock-photo-heavy layouts
- repetitive card grids

The website should feel deliberately designed.

Target feeling:

Modern UK technology company
+
trusted local professional service.

The visual language should be:

- professional
- confident
- modern
- clear
- human
- locally grounded
- premium but approachable

Use strong typography, whitespace, editorial layouts, photography and restrained visual details.

---

## 7. Brand

Use the existing VIP e-Services website as the initial source for the brand identity.

Do not invent a completely unrelated brand.

Brand colours and visual references are documented in:

`docs/01-brand.md`

The owner may change the branding later, so keep colours and design tokens centralised and easy to modify.

---

## 8. Technical stack

Use:

- Next.js
- TypeScript
- App Router
- Tailwind CSS
- Server Components by default
- reusable React components
- next/image
- Next.js Metadata API
- sitemap
- robots.txt
- structured data where appropriate

Do not add a database unless a real requirement exists.

Do not add unnecessary dependencies.

Prefer simple, maintainable solutions.

---

## 9. Component architecture

Build reusable components rather than duplicating markup.

Components should be organised logically.

Potential shared components include:

- Header
- Footer
- Container
- Button
- Section
- Breadcrumbs
- ServiceCard
- ServiceCategory
- CTA
- ContactBlock
- FAQ
- Testimonial
- PageHero

Only create components when they genuinely improve reuse or maintainability.

Do not over-engineer the application.

---

## 10. Content

Content should sound like a real UK business.

Use:

- clear English
- short sentences
- natural language
- specific explanations
- useful information
- customer-focused copy

Avoid:

- corporate buzzwords
- meaningless marketing claims
- excessive "seamless", "empowering", "innovative", "cutting-edge"
- AI-sounding filler
- repetitive paragraphs

Do not write copy simply to increase word count.

---

## 11. Images

Images should feel coherent across the website.

Do not use random stock images.

When image generation is required, create images that match the actual page composition.

Do not generate fake photographs of VIP e-Services staff.

Do not imply that generated people are actual employees.

Prefer realistic professional photography with an East London/local-business context where appropriate.

---

## 12. Conversion

The primary customer journey is:

Customer reads about a service
→ understands how VIP e-Services can help
→ calls or visits the office.

Primary contact actions:

- Call
- WhatsApp
- Email
- Visit office

Do NOT add appointment booking.

---

## 13. Careers

The Careers page should initially communicate:

"Work with VIP e-Services"

The owner will provide actual job vacancies later.

Do not invent vacancies.

The architecture should allow real vacancies to be added later without redesigning the entire website.

---

## 14. SEO

SEO is important, particularly for East London searches.

However:

DO NOT create thin pages purely for SEO keywords.

Each indexable page must have genuine useful content.

Use:

- descriptive URLs
- proper title tags
- meta descriptions
- semantic headings
- internal linking
- structured data where appropriate
- canonical URLs
- sitemap
- robots.txt
- local business information

Use natural language.

Never keyword stuff.

---

## 15. Accessibility

Follow WCAG 2.2 AA principles where practical.

Ensure:

- semantic HTML
- keyboard navigation
- visible focus states
- sufficient colour contrast
- accessible forms
- meaningful alt text
- logical heading hierarchy
- reduced-motion support
- touch-friendly controls

---

## 16. Performance

Performance matters.

Prioritise:

- Core Web Vitals
- optimised images
- next/image
- minimal client-side JavaScript
- Server Components where possible
- lazy loading where appropriate
- minimal third-party scripts
- clean CSS

Do not add animations or libraries that negatively affect performance without a clear reason.

---

## 17. Responsive design

The website must be designed for:

- mobile
- tablet
- laptop
- large desktop

Do not treat mobile as an afterthought.

The mobile layout should be intentionally designed rather than simply shrinking the desktop layout.

---

## 18. Development workflow

Work in stages.

Do NOT build the entire website in one huge change.

Preferred sequence:

### Stage 0
Audit project and documentation.

### Stage 1
Design system and foundation.

### Stage 2
Header, footer and homepage.

### Stage 3
Services architecture.

### Stage 4
Service detail pages.

### Stage 5
About, Careers and Contact.

### Stage 6
Resources/content.

### Stage 7
SEO, structured data, accessibility and performance.

### Stage 8
Final visual QA.

After every stage:

1. Run the development server.
2. Check for errors.
3. Check desktop.
4. Check mobile.
5. Check navigation.
6. Check accessibility.
7. Fix problems before continuing.

---

## 19. Do not blindly follow your first design

The first implementation is not automatically good.

If a layout feels generic, repetitive or AI-generated, improve it.

Prefer:

- strong hierarchy
- varied section composition
- meaningful whitespace
- restrained cards
- good photography
- typography-led design
- subtle visual details

Do not add complexity simply to make the site look impressive.

---

## 20. Code quality

Write production-quality code.

Avoid:

- duplicated code
- giant components
- unnecessary state
- unnecessary client components
- hardcoded repeated values
- inline styles when Tailwind/design tokens are more appropriate
- unnecessary dependencies

Keep the code understandable.

---

## 21. Before major changes

Before implementing a major feature:

1. Read the relevant documentation.
2. Understand existing components.
3. Check whether a reusable component already exists.
4. Implement the smallest clean solution.
5. Test it.

Do not rewrite unrelated parts of the project.

---

## 22. Final standard

The finished website should feel like it was created by an experienced designer and developer for a real UK business.

It must not feel like:

"AI generated a website."

Quality is more important than speed.