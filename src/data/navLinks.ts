export const navLinks = [
  { href: "/about", key: "about" },
  { href: "/updates", key: "updates" },
  { href: "/industry", key: "industry" },
  { href: "/works", key: "works" },
  { href: "/projects", key: "projects" },
  { href: "/contact", key: "contact" },
] as const;

export type NavLink = (typeof navLinks)[number];
export type NavKey = NavLink["key"];
