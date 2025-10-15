export default function Intro({ text }: { text: string }) {
  return (
    <p className="p-5 text-2xl text-white col-span-9 rounded-2xl bg-foreground">
      {text}
    </p>
  );
}
