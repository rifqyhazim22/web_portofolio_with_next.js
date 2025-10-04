import NextSteps from "@/components/NextSteps";
import UpdatesList from "@/components/UpdatesList";
import { getDictionary } from "@/i18n/dictionaries";
import { getCurrentLanguage } from "@/lib/language";

export default async function UpdatesPage() {
  const language = await getCurrentLanguage();
  const dictionary = getDictionary(language);
  const { updates, home, nextStepsHeading, navLabels } = dictionary;

  return (
    <div>
      <h1 className="h1">{updates.title}</h1>
      <p className="sub">{updates.intro}</p>

      <UpdatesList items={updates.list} showAllLink={false} allLinkLabel={home.updates.cta.label} />

      <hr />

      <NextSteps current="updates" heading={nextStepsHeading} navLabels={navLabels} />
    </div>
  );
}
