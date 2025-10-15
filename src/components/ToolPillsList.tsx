// src/components/PillsList.tsx
export type PillsListProps = {
  title: string;
  items: string[];
  className?: string;
};

export default function PillsList({ title, items, className = "" }: PillsListProps) {
  return (
    <ul className={`flex items-center gap-4 p-5 rounded-2xl bg-foreground ${className}`}>
      <li className="text-white text-lg font-bold border-r pr-4">{title}</li>
      {items.map((item) => (
        <li key={item} className="px-3 py-1 rounded-full bg-muted text-muted-foreground">
          {item}
        </li>
      ))}
    </ul>
  );
}
