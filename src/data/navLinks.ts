export const navLinks = [
  { href: "/about", key: "about" },
  { href: "/updates", key: "updates" },
  { href: "/industry", key: "industry" },
  { href: "/works", key: "works" },
  { href: "/projects", key: "projects" },
  { href: "/contact", key: "contact" },
] as const;

export const headerNav = [
  { type: "link", href: "/about", key: "about" },
  {
    type: "menu",
    key: "services",
    children: [
      { href: "/works", key: "works" },
      { href: "/projects", key: "projects" },
    ],
  },
  { type: "link", href: "/industry", key: "industry" },
  { type: "link", href: "/updates", key: "updates" },
  { type: "link", href: "/contact", key: "contact" },
] as const;

export type NavLink = (typeof navLinks)[number];
export type NavKey = NavLink["key"];
export type HeaderNavItem = (typeof headerNav)[number];
export type HeaderNavMenu = Extract<HeaderNavItem, { type: "menu" }>;
export type HeaderNavChild = HeaderNavMenu["children"][number];
export type NavLabelKey = NavKey | HeaderNavMenu["key"];
