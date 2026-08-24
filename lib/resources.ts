// Resources hub content (docs/03-site-architecture.md, docs/06-seo-strategy.md).
// Kept as general, evergreen guidance rather than specific claims about
// fees, processing times or eligibility for any named scheme — those
// change and belong with the relevant official body, not this site.
export type Guide = {
  title: string;
  category: "Application assistance" | "Digital & IT";
  summary: string;
  body: string[];
};

export const guides: Guide[] = [
  {
    title: "What to bring to an application assistance appointment",
    category: "Application assistance",
    summary: "The paperwork that usually speeds things up, whatever you're applying for.",
    body: [
      "Most applications ask for similar basics: proof of identity (a passport, BRP or driving licence), proof of address (a recent bill or bank statement), and your National Insurance number if you have one.",
      "If you're following up on something already in progress, bring any reference numbers, letters or emails you've received — they help us see exactly where things stand.",
      "If you're not sure what's needed for your specific application, call or WhatsApp us beforehand and we'll let you know what to bring.",
    ],
  },
  {
    title: "How application assistance works at VIP e-Services",
    category: "Application assistance",
    summary: "What actually happens when you come to us for help with an application.",
    body: [
      "We start by talking through what you're applying for and what you've already got. From there we explain, in plain English, what the application is asking for and what documents or information you'll need.",
      "We help you complete the form or online application accurately, and explain each step as we go rather than just filling it in for you.",
      "We are not a government department and don't make decisions on applications. Once submitted, the outcome sits with the relevant department, council, employer or organisation — we can't guarantee approval or a particular timescale.",
    ],
  },
  {
    title: "Questions worth asking before you apply",
    category: "Application assistance",
    summary: "A short checklist to think through before starting any application.",
    body: [
      "Is this the right application for what you actually need? Some processes overlap and it's easy to start the wrong one.",
      "Do you have everything you're likely to be asked for, or is it worth gathering documents first?",
      "Is there a deadline attached? Some applications have time limits from a specific date, so it's worth checking before you start.",
      "If anything is unclear, ask us before you submit — it's easier to get an application right the first time than to correct it afterwards.",
    ],
  },
  {
    title: "Website basics for small East London businesses",
    category: "Digital & IT",
    summary: "What actually makes a small business website worth having.",
    body: [
      "A website doesn't need to be complicated to be useful. For most local businesses, the basics matter most: your services stated clearly, your contact details easy to find, and a design that works properly on a phone.",
      "Search engines and customers both favour sites that load quickly and clearly explain what you do and where you're based — generic, vague copy makes this harder, not easier.",
      "If you're not sure whether your current website is doing its job, that's a reasonable thing to ask us about — we can look at what you have and explain what would actually make a difference.",
    ],
  },
  {
    title: "Staying safe from scams when applying online",
    category: "Digital & IT",
    summary: "A few habits that protect you when dealing with official processes online.",
    body: [
      "Official government services don't usually ask for payment by gift card, bank transfer to a personal account, or under time pressure — treat any request like that as a warning sign.",
      "Check the website address carefully before entering personal details. Official UK government pages use gov.uk addresses.",
      "If you're ever unsure whether something is genuine, it's worth asking us or checking directly with the organisation involved before entering any personal or financial information.",
    ],
  },
];

export function getGuidesByCategory(category: Guide["category"]): Guide[] {
  return guides.filter((guide) => guide.category === category);
}
