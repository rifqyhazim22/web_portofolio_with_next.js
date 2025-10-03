import BaseLink from "@/components/BaseLink";
import NextSteps from "@/components/NextSteps";
import { getDictionary } from "@/i18n/dictionaries";
import { getCurrentLanguage } from "@/lib/language";

export default async function HomePage() {
  const language = await getCurrentLanguage();
  const dictionary = getDictionary(language);
  const { home, updates, nextStepsHeading, navLabels } = dictionary;

  return (
    <div>
      <h1 className="h1">{home.heroName}</h1>
      <p className="sub">{home.heroRole}</p>
      <p>{home.heroDescription}</p>

      <div className="pills" style={{ margin: "10px 0 18px" }}>
        {home.ctas.map((cta) => (
          <BaseLink key={cta.href} href={cta.href} className="pill">
            {cta.label}
          </BaseLink>
        ))}
      </div>

      <section className="card">
        <div className="k" style={{ marginBottom: "6px" }}>
          {home.quotesLabel}
        </div>
        <div className="sub">{home.quote}</div>
      </section>

      <section>
        <h2 className="h2">{home.whatIDoHeading}</h2>
        <div className="grid grid-2">
          {home.whatIDo.map((item) => (
            <BaseLink key={item.href} className="tile" href={item.href}>
              <div className="k">{item.title}</div>
              <div className="sub">{item.sub}</div>
            </BaseLink>
          ))}
        </div>
      </section>

      <section>
        <h2 className="h2">{home.playbooksHeading}</h2>
        <p className="sub">{home.playbooksDescription}</p>
        <div className="pills" style={{ marginTop: "10px" }}>
          <BaseLink href={home.playbooksCta.href} className="pill">
            {home.playbooksCta.label}
          </BaseLink>
        </div>
      </section>

      <section>
        <h2 className="h2">{home.learningHeading}</h2>
        <div className="grid grid-2">
          {home.learningItems.map((item) => (
            <BaseLink key={item.href} href={item.href} className="tile">
              <div className="k">{item.title}</div>
              <div className="sub">{item.sub}</div>
            </BaseLink>
          ))}
        </div>
      </section>

      <section>
        <h2 className="h2">{home.updatesHeading}</h2>
        <div className="grid">
          {updates.list.map((item) => (
            <BaseLink key={item.href} className="tile" href={item.href}>
              <div className="k">{item.title}</div>
              <div className="sub">{item.summary}</div>
            </BaseLink>
          ))}
        </div>
        <div className="pills" style={{ marginTop: "12px" }}>
          <BaseLink href="/updates" className="pill">
            {home.updatesCta.label}
          </BaseLink>
        </div>
      </section>

      <div className="hr" />

      <NextSteps heading={nextStepsHeading} navLabels={navLabels} />
    </div>
  );
}
