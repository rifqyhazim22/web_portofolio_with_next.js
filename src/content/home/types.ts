export interface HomeAction {
  label: string;
  href: string;
  variant?: "primary" | "outline";
}

export interface HomeHighlight {
  label: string;
  value: string;
}

export interface HomeLinkCard {
  href: string;
  title: string;
  sub: string;
}

export interface HomeHeroContent {
  name: string;
  title: string;
  tagline: string;
  summary: string;
  availability: string;
  actions: HomeAction[];
  highlights: HomeHighlight[];
  portraitSrc?: string;
  backgroundSrc?: string;
}

export interface HomeSection {
  heading: string;
  items: HomeLinkCard[];
}

export interface HomePlaybooksSection {
  heading: string;
  description: string;
  cta: HomeAction;
}

export interface HomeQuote {
  label: string;
  text: string;
}

export interface HomeUpdatesSection {
  heading: string;
  cta: HomeAction;
}

export interface HomeContent {
  hero: HomeHeroContent;
  quote: HomeQuote;
  whatIDo: HomeSection;
  playbooks: HomePlaybooksSection;
  learning: HomeSection;
  updates: HomeUpdatesSection;
}
