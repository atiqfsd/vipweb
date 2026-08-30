# Image Generation Prompts

Prompt pack for the ~8 images defined in [09-image-strategy.md](09-image-strategy.md).

Use these only to fill gaps the client cannot photograph. Real photos of the
Barking Road office, interior and team always take priority. Generated people
must never be captioned or implied to be actual VIP e-Services staff — the
prompts are written to keep people mid-distance, cropped or turned away so the
frame reads as "a workplace like this", not "here is our team".

## How to use

1. Generate with any capable image tool (ChatGPT / DAL·E, Midjourney, Adobe
   Firefly). Firefly and DAL·E tend to give the most believable, un-stylised UK
   documentary look.
2. Generate at roughly 2× the target size, then downscale and compress at
   [squoosh.app](https://squoosh.app) to WebP.
3. Save with the filename listed under each prompt into `public/images/`.
4. Commit and push — the GitHub Action deploys them.

## Shared style (prepend to every prompt)

> Realistic UK documentary editorial photography, shot on a full-frame camera
> with a 35mm or 50mm lens, natural window light, softly overcast daylight,
> true-to-life colour, gentle contrast, fine natural grain. Cool navy, slate and
> off-white tones with only occasional muted cyan accents; warm neutral tones
> where noted. Calm, understated, professional. A small independent professional
> services office in East London — modest, tidy, real, not a corporate tech
> campus. Diverse East London people (including South Asian and Black British
> people) shown naturally and respectfully.

## Shared negative prompt (append to every prompt)

> No neon, no blue glow, no futuristic holographic UI, no glassmorphism, no
> purple or teal gradient lighting, no floating 3D objects, no fake dashboards or
> invented charts, no readable text or logos on screens, no brand logos, no
> government logos or crests, no official letterheads, no certificates on walls,
> no visible passports, ID cards, bank statements or personal data, no posed
> corporate headshots, no exaggerated smiling stock-photo poses, no handshake
> cliché, no oversaturation, no HDR, no tilt-shift, no lens flare, no watermark.

---

## 1. Homepage hero — `hero-barking-road.webp`
**Aspect 4:5 (portrait), target 1200×1500.** Used in `components/home/Hero.tsx`.

> A small modern professional services office interior near a busy East London
> high street. Mid-shot: a person in smart-casual clothes at a clean desk with a
> laptop and a notepad, seen from the side or slightly behind, working — face not
> the focus. Large window behind showing a blurred Victorian high-street parade
> and buses. Plain walls, one shelf, a plant. Daylight. Quiet, focused mood.

## 2. Digital & IT category hero — `digital-it.webp`
**Aspect 4:3, target 1200×900.** Used in the Digital & IT `CategoryHero`.

> Two colleagues at a desk reviewing work on a single laptop in a plain small
> office, viewed over the shoulder from behind so faces are not visible. One
> points at the screen (screen content indistinct, no readable UI). A second
> monitor shows blurred code-like text. Notebook, coffee cup, pen. Natural light
> from the left. Practical, collaborative, unshowy.

## 3. Web & software development — `web-development.webp`
**Aspect 4:3, target 1200×900.** Service detail / section use.

> Close, tabletop-level shot of a developer's hands on a laptop keyboard, a
> mechanical notebook with hand-drawn wireframe sketches beside it, a phone
> propped showing an indistinct website layout. Warm wooden desk, soft daylight,
> shallow depth of field. No readable text on any screen. Focused craft, not
> lifestyle.

## 4. Cybersecurity — `cybersecurity.webp`
**Aspect 4:3, target 1200×900.** Cybersecurity service use.

> A person at a desk in a plain office reviewing a printed checklist against a
> laptop, pen in hand, mid-distance and slightly turned away. Neutral, orderly
> workspace with a locked filing cabinet and a small router on a shelf. Calm
> daylight. Conveys diligence and process — not hooded-hacker imagery, no green
> code rain, no dark server room.

## 5. Application assistance hero — `application-assistance.webp`
**Aspect 4:3, target 1200×900.** Used in the Benefits & Housing / Work
Applications `CategoryHero`. Warm-toned.

> An adviser and a member of the public sitting together at the same side of a
> desk in a modest advice office, both looking at a tablet the adviser is
> holding. Shot from behind and to the side so faces are soft or unseen. Warm
> neutral tones, off-white walls, a window with net curtains and daylight. Papers
> face-down on the desk, nothing readable. Supportive, patient, human.

## 6. Benefits & housing consultation — `benefits-housing-consultation.webp`
**Aspect 8:5, target 1600×1000.** Homepage / consultancy section. Warm-toned.

> Wide shot of a small, tidy advice-office meeting corner: two simple chairs and
> a round table by a large window looking onto an East London residential street.
> One person seated is mid-conversation with an adviser whose back is to camera.
> A blank notepad and two mugs on the table. Warm daylight, plants on the sill,
> a coat on a hook. Welcoming, informal, local.

## 7. Careers / team — `careers-team.webp`
**Aspect 3:2, target 1400×900.** Careers page.

> A small team of three or four people in a relaxed standing conversation beside
> a desk in a plain office, holding mugs and a notebook, mid-laugh but natural
> not posed, seen from the side. Mixed ages and backgrounds, smart-casual dress.
> Daylight from a large window, high-street rooftops visible outside. Friendly,
> grounded, real workplace.

## 8. East London local atmosphere — `east-london-highstreet.webp`
**Aspect 7:5, target 1400×1000.** Homepage "Based on Barking Road" band and the
Contact page.

> Street-level view of a Victorian shopping parade on a wide East London road on
> an ordinary weekday: red double-decker bus, independent shopfronts with plain
> unbranded signage, people walking, plane trees, overcast sky. Documentary,
> slightly muted colour, no single business identifiable. Captures the everyday
> character of Newham / Barking Road without any real signage or logos.

---

## Consistency checklist before committing

- All eight look like the same photographer on the same day (light, grain, grade).
- No readable screen content, signage, logos, crests or personal documents.
- No person is framed as an identifiable individual portrait.
- Warm-toned set (5, 6) sits beside the cool-toned set without clashing.
- Each file is WebP, hero < 200 KB, others < 120 KB.
