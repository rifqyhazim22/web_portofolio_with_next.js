import BaseLink from "./BaseLink";
import type { UpdateItem } from "@/data/updates";
import { updates as defaultUpdates } from "@/data/updates";

type UpdatesListProps = {
  items?: UpdateItem[];
  showAllLink?: boolean;
};

export default function UpdatesList({
  items = defaultUpdates,
  showAllLink = true,
}: UpdatesListProps) {
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
            Lihat semua Updates →
          </BaseLink>
        </div>
      )}
    </>
  );
}
