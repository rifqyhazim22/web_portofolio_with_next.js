import type { IndustryDetail } from "@/i18n/dictionaries";
import BaseLink from "./BaseLink";

interface IndustryDetailContentProps {
  detail: IndustryDetail;
  backHref: string;
  backLabel: string;
}

export default function IndustryDetailContent({ detail, backHref, backLabel }: IndustryDetailContentProps) {
  return (
    <div>
      <BaseLink className="pill" href={backHref}>
        {backLabel}
      </BaseLink>
      <h1 className="h1" style={{ marginTop: "10px" }}>
        {detail.title}
      </h1>
      <p className="sub" style={{ marginBottom: "14px" }}>
        {detail.intro}
      </p>

      <h2 className="h2">{detail.mindsetHeading}</h2>
      <div className="card">
        <p className="sub" style={{ margin: 0 }}>{detail.mindsetBody}</p>
      </div>

      <h2 className="h2" style={{ marginTop: "16px" }}>
        {detail.examplesHeading}
      </h2>
      <div className="grid grid-2">
        {detail.examples.map((item) => (
          <div className="card" key={item.title}>
            <div className="k">{item.title}</div>
            <div className="sub">{item.sub}</div>
          </div>
        ))}
      </div>

      <h2 className="h2" style={{ marginTop: "16px" }}>
        {detail.actionsHeading}
      </h2>
      <div className="grid grid-2">
        {detail.actions.map((item) => (
          <div className="card" key={item.title}>
            <div className="k">{item.title}</div>
            <div className="sub">{item.sub}</div>
          </div>
        ))}
      </div>
    </div>
  );
}
