type Props = React.PropsWithChildren<{ className?: string }>;

export default function SectionCard({ className = "", children }: Props) {
  return (
    <article className={`rounded-2xl bg-foreground p-10 ${className}`}>
      {children}
    </article>
  );
}
