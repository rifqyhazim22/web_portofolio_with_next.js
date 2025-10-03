export const navLinks = [
  { href: "/about", label: "About", key: "about" },
  { href: "/updates", label: "Updates", key: "updates" },
  { href: "/industry", label: "Playbooks", key: "industry" },
  { href: "/works", label: "Works", key: "works" },
  { href: "/projects", label: "Projects", key: "projects" },
  { href: "/contact", label: "Contact", key: "contact" },
] as const;

export type NavKey = (typeof navLinks)[number]["key"];
