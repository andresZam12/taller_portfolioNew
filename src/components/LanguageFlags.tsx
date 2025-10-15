export default function LanguageFlags({
  title,
  flags,
  className = "",
}: {
  title: string;
  flags: string[]; // puedes pasar emojis "🇧🇴", etc.
  className?: string;
}) {
  return (
    <ul className={`flex gap-4 items-center rounded-2xl bg-foreground p-10 ${className}`}>
      <li className="text-white text-xl font-bold border-r pr-4">{title}</li>
      {flags.map((f) => (
        <li key={f} className="text-4xl">
          {f}
        </li>
      ))}
    </ul>
  );
}
