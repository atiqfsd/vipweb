# Claude Code Rules

## Mission

Build a bespoke, production-quality website for VIP e-Services.

Do not behave like a template generator.

## Before coding

1. Read all files in /docs.
2. Inspect the current repository.
3. Preserve useful existing assets only when they meet the new design.
4. Identify missing information rather than inventing it.
5. Build the information architecture before polishing individual components.

## Non-negotiable

Never invent:
- employees
- testimonials
- awards
- qualifications
- partnerships
- prices
- statistics
- government affiliations
- success rates
- vacancies
- customer logos

If information is missing, use a clear placeholder/content TODO for the owner rather than fabricated content.

## Brand

Use the existing VIP e-Services identity as the starting point.

Provisional colours are in 01-brand.md.

Do not redesign the logo.

## Design

The site must NOT look like:
- an AI SaaS landing page
- a startup template
- a crypto site
- a futuristic cyber-security site
- a government website

Use strong typography, whitespace, photography, restrained cards and clear hierarchy.

## Copy

Use UK English.

Write specific, useful copy.

Avoid generic marketing filler.

Do not repeatedly use:
- premium
- elite
- seamless
- cutting-edge
- revolutionary
- transformative
- unlock
- elevate

## Application-assistance services

Always make it clear that VIP e-Services assists customers with applications.

Do not imply that VIP e-Services is an official government body.

## SEO

Do not create thin pages merely for keywords.

Every indexable page must have a real purpose and useful content.

Prioritise East London local intent.

## Components

Create reusable components where repetition exists.

Do not over-abstract.

## Responsive

Build mobile-first.

Phone/WhatsApp/contact actions should be very easy to access.

## Accessibility

Follow the accessibility requirements in 12-accessibility.md.

## Performance

Follow 13-performance.md.

## Images

Use the image strategy in 09-image-strategy.md.

Do not generate or source random imagery merely to fill space.

## Development process

Work in stages:

### Stage 1
Foundation:
- Next.js setup
- typography
- colour tokens
- global styles
- header/footer
- routing

### Stage 2
Homepage and services architecture.

### Stage 3
Service detail pages.

### Stage 4
About, Careers, Resources and Contact.

### Stage 5
SEO, structured data, performance and accessibility.

### Stage 6
Visual QA and content QA.

Do not try to build every page and every animation simultaneously.

## Content TODOs

Use clearly marked TODO comments/files for information awaiting client confirmation.

Do not silently make assumptions.

## Quality bar

Before considering the build finished:
- test all routes
- test mobile
- test keyboard navigation
- test forms
- test metadata
- test structured data
- test sitemap
- test redirects
- test images
- run performance checks
- remove placeholder text
- remove fake content
- check all phone/email/address information
