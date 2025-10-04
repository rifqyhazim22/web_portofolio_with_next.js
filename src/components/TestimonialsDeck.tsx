import BaseLink from "./BaseLink";
import type { TestimonialItem } from "@/content/about/types";

interface TestimonialsDeckProps {
  items: TestimonialItem[];
  cta: { label: string; href: string };
}

export default function TestimonialsDeck({ items, cta }: TestimonialsDeckProps) {
  return (
    <div className="testimonials">
      <div className="testimonials__grid">
        {items.map((item) => (
          <figure key={item.name} className="testimonials__card">
            <blockquote>{item.quote}</blockquote>
            <figcaption>
              <div className="testimonials__name">{item.name}</div>
              <div className="testimonials__role">{item.role}</div>
            </figcaption>
          </figure>
        ))}
      </div>
      <BaseLink href={cta.href} className="pill testimonials__cta">
        {cta.label}
      </BaseLink>
    </div>
  );
}
