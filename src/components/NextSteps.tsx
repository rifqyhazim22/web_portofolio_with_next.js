import type { NavKey } from "@/data/navLinks";
import { navLinks } from "@/data/navLinks";
import BaseLink from "./BaseLink";

type NextStepsProps = {
  current?: NavKey;
};

export default function NextSteps({ current }: NextStepsProps) {
  const links = navLinks.filter((link) => link.key !== current);

  return (
    <section>
      <h2 className="h2">Jelajah Berikutnya</h2>
      <div className="pills" style={{ marginTop: "8px" }}>
        {links.map((link) => (
          <BaseLink key={link.href} className="pill" href={link.href}>
            {link.label}
          </BaseLink>
        ))}
      </div>
    </section>
  );
}
