import NextSteps from "@/components/NextSteps";
import IndustryDetailContent from "@/components/IndustryDetailContent";
import { getDictionary } from "@/i18n/dictionaries";
import { getCurrentLanguage } from "@/lib/language";

const slug = "energy" as const;

export default async function EnergyIndustryPage() {
  const language = await getCurrentLanguage();
  const dictionary = getDictionary(language);
  const detail = dictionary.industryDetails[slug];

  return (
    <div>
      <IndustryDetailContent
        detail={detail}
        backHref="/industry"
        backLabel={dictionary.general.backToIndustry}
      />

      <hr />

      <NextSteps current="industry" heading={dictionary.nextStepsHeading} navLabels={dictionary.navLabels} />
    </div>
  );
}
