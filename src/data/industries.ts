export interface IndustrySummary {
  slug: string;
  title: string;
  summary: string;
}

export const industrySummaries: IndustrySummary[] = [
  {
    slug: "ai",
    title: "AI → AGI → ASI",
    summary: "Dari sistem spesifik ke kecerdasan umum & melampaui manusia: peluang & etika.",
  },
  {
    slug: "crypto",
    title: "Crypto in Finance",
    summary: "Blockchain, tokenisasi aset, smart contracts, dan model ekonomi baru.",
  },
  {
    slug: "biotech",
    title: "Biotechnology",
    summary: "Rekayasa genetika, terapi molekuler, pangan presisi, material hayati.",
  },
  {
    slug: "energy",
    title: "Renewable Energy",
    summary: "Surya, angin, air, geotermal, biomassa + baterai & smart grid.",
  },
  {
    slug: "space",
    title: "Space Exploration",
    summary: "Satelit, earth observation, eksplorasi planet, dan ekonomi orbit.",
  },
];
