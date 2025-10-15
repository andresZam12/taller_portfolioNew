export default function EducationItem({
  title,
  field,
  location,
  period,
  withDivider = false,
}: {
  title: string;
  field: string;
  location: string;
  period: string;
  withDivider?: boolean;
}) {
  return (
    <article
      className={`flex items-center justify-between w-full ${
        withDivider ? "border-b border-b-grey pb-8" : ""
      }`}
    >
      <span className="flex flex-col">
        <h2 className="text-white text-3xl font-bold">{title}</h2>
        <p className="text-grey text-lg">{field}</p>
        <p className="text-grey text-sm">{location}</p>
      </span>
      <span className="bg-background rounded-lg text-white text-sm p-4">
        {period}
      </span>
    </article>
  );
}
