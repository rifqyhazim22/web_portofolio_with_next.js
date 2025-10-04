import type { NavKey, NavLabelKey } from "@/data/navLinks";
import { navLinks } from "@/data/navLinks";
import BaseLink from "./BaseLink";

interface NextStepsProps {
  current?: NavKey;
  heading: string;
  navLabels: Record<NavLabelKey, string>;
}

export default function NextSteps({ current, heading, navLabels }: NextStepsProps) {
  const links = navLinks.filter((link) => link.key !== current);

  return (
    <section>
      <h2 className="h2">{heading}</h2>
      <div className="pills" style={{ marginTop: "8px" }}>
        {links.map((link) => (
          <BaseLink key={link.href} className="pill" href={link.href}>
            {navLabels[link.key]}
          </BaseLink>
        ))}
      </div>
    </section>
  );
}
