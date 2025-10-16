// src/components/Header.tsx
import ThemeToggle from "@/components/ThemeToggle";
import LanguageSwitcher from "@/components/LanguageSwitcher";
import type { Lang } from "@/app/i18n/config"; // <-- importa el tipo correcto

type Props = { lang: Lang };

export default function Header({ lang }: Props) {
  return (
    <header className="container max-w-6xl lg:max-w-7xl flex items-center justify-between py-4 gap-3">
      <LanguageSwitcher currentLang={lang} />
      <ThemeToggle />
    </header>
  );
}
