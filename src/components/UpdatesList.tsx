import BaseLink from "./BaseLink";
import type { UpdateItem } from "@/i18n/dictionaries";

interface UpdatesListProps {
  items: UpdateItem[];
  showAllLink?: boolean;
  allLinkLabel: string;
}

export default function UpdatesList({ items, showAllLink = true, allLinkLabel }: UpdatesListProps) {
  return (
    <>
      <div className="grid" style={{ marginTop: "14px" }}>
        {items.map((item) => (
          <BaseLink key={item.href} className="card" href={item.href}>
            <div className="k">{item.title}</div>
            <div className="sub">{item.summary}</div>
          </BaseLink>
        ))}
      </div>
      {showAllLink && (
        <div style={{ marginTop: "14px" }}>
          <BaseLink className="pill" href="/updates">
            {allLinkLabel}
          </BaseLink>
        </div>
      )}
    </>
  );
}
