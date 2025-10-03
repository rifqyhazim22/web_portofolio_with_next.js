import BaseLink from "@/components/BaseLink";
import NextSteps from "@/components/NextSteps";
import { getDictionary } from "@/i18n/dictionaries";
import { getCurrentLanguage } from "@/lib/language";

export default async function AboutPage() {
  const language = await getCurrentLanguage();
  const dictionary = getDictionary(language);
  const { about, nextStepsHeading, navLabels } = dictionary;

  return (
    <div>
      <section style={{ marginTop: "10px" }}>
        <h1 className="h1">{about.title}</h1>
        <p className="sub" style={{ maxWidth: "70ch" }}>{about.intro}</p>
      </section>

      <hr />

      <section>
        <h2 className="h2">{about.philosophyHeading}</h2>
        <div className="card">
          <p className="sub" style={{ margin: 0 }}>{about.philosophyBody}</p>
        </div>
      </section>

      <hr />

      <section>
        <h2 className="h2">{about.workHeading}</h2>
        <div className="grid grid-3" style={{ marginTop: "10px" }}>
          {about.workItems.map((item) => (
            <BaseLink
              key={item.href}
              className="card"
              href={item.href}
              style={{ textDecoration: "none", color: "inherit" }}
            >
              <div className="k">{item.title}</div>
              <div className="sub">{item.sub}</div>
            </BaseLink>
          ))}
        </div>
      </section>

      <hr />

      <section>
        <h2 className="h2">{about.learningHeading}</h2>
        <div className="grid grid-3" style={{ marginTop: "10px" }}>
          {about.learningItems.map((item) => (
            <BaseLink
              key={item.href}
              className="card"
              href={item.href}
              style={{ textDecoration: "none", color: "inherit" }}
            >
              <div className="k">{item.title}</div>
              {item.sub ? <div className="sub">{item.sub}</div> : null}
            </BaseLink>
          ))}
        </div>
      </section>

      <hr />

      <NextSteps current="about" heading={nextStepsHeading} navLabels={navLabels} />
    </div>
  );
}
