import type { TimelineItem } from "@/content/about/types";

interface TimelineProps {
  items: TimelineItem[];
}

export default function Timeline({ items }: TimelineProps) {
  return (
    <div className="timeline">
      {items.map((item, index) => (
        <article key={item.id} className="timeline__item">
          <div className="timeline__marker" aria-hidden="true" />
          <div className="timeline__meta">
            <span className="timeline__period">{item.period}</span>
            <span className="timeline__index">{String(index + 1).padStart(2, "0")}</span>
          </div>
          <h3 className="timeline__title">{item.title}</h3>
          <p className="timeline__description">{item.description}</p>
        </article>
      ))}
    </div>
  );
}
