import type { CapabilityCluster } from "@/content/about/types";

interface CapabilitiesGridProps {
  clusters: CapabilityCluster[];
}

export default function CapabilitiesGrid({ clusters }: CapabilitiesGridProps) {
  return (
    <div className="capabilities">
      {clusters.map((cluster) => (
        <article key={cluster.title} className="capabilities__item">
          <h3 className="capabilities__title">{cluster.title}</h3>
          <p className="capabilities__description">{cluster.description}</p>
          <ul className="capabilities__tags">
            {cluster.items.map((item) => (
              <li key={item}>{item}</li>
            ))}
          </ul>
        </article>
      ))}
    </div>
  );
}
