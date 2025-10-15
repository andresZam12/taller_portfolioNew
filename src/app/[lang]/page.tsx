// src/app/[lang]/page.tsx
import { getDictionary } from "../i18n/dictionaries";
import { Lang, languages } from "../i18n/config";
import LanguageSwitcher from "@/components/LanguageSwitcher";

import Avatar from "@/components/Avatar";
import Intro from "@/components/Intro";
import ToolPills from "@/components/ToolPillsList";      
import ExperienceCard from "@/components/ExperienceCard";
import SectionCard from "@/components/SectionCard";
import EducationItem from "@/components/EducationItem";
import LanguageFlags from "@/components/LanguageFlags";

export async function generateStaticParams() {
  return languages.map((lang) => ({ lang }));
}

export default async function Home({
  params,
}: {
  // En Next 15, params es asíncrono
  params: Promise<{ lang: Lang }>;
}) {
  const { lang } = await params;
  const dict = await getDictionary(lang);

  return (
    <div className="font-sans flex justify-center">
      <LanguageSwitcher currentLang={lang} />

      <main className="grid grid-cols-12 container mt-20 gap-10">
        <Avatar />
        <Intro text={dict.intro} />



        <ExperienceCard
          className="col-span-6"
          title={dict.sections.experience.freelance.title}
          role={dict.sections.experience.freelance.role}
          period={dict.sections.experience.freelance.period}
          bullets={dict.sections.experience.freelance.bullets}
        />

        <ExperienceCard
          className="col-span-6"
          title={dict.sections.experience.meetzed.title}
          role={dict.sections.experience.meetzed.role}
          period={dict.sections.experience.meetzed.period}
          bullets={dict.sections.experience.meetzed.bullets}
        />



        <SectionCard className="flex flex-col gap-4 items-center col-span-6 row-span-3">
          <EducationItem
            withDivider
            title={dict.sections.education.highSchool.title}
            field={dict.sections.education.highSchool.field}
            location={dict.sections.education.highSchool.location}
            period={dict.sections.education.highSchool.period}
          />
          <EducationItem
            withDivider
            title={dict.sections.education.diploma.title}
            field={dict.sections.education.diploma.field}
            location={dict.sections.education.diploma.location}
            period={dict.sections.education.diploma.period}
          />
          <EducationItem
            title={dict.sections.education.graduation.title}
            field={dict.sections.education.graduation.field}
            location={dict.sections.education.graduation.location}
            period={dict.sections.education.graduation.period}
          />
        </SectionCard>



        <LanguageFlags
          className="col-span-6"
          title={dict.sections.languages}
          flags={["🇧🇴", "🇬🇧", "🇺🇸"]}
        />
      </main>
    </div>
  );
}
