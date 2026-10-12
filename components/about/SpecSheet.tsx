import { aboutContent, type AboutSkills } from "@/lib/content/about";
import { aboutSection } from "@/lib/content/site";

export function SpecSheet() {
  const keys = Object.keys(aboutSection.skillLabels) as (keyof AboutSkills)[];
  const rows = [
    { label: aboutSection.roleLabel, value: aboutContent.title },
    ...keys.map((k) => ({ label: aboutSection.skillLabels[k], value: aboutContent.skills[k].join(", ") })),
    { label: aboutSection.locationLabel, value: aboutContent.location },
  ];

  return (
    <dl aria-label={aboutSection.specTitle} className="border-b border-contour">
      {rows.map((row) => (
        <div key={row.label} className="grid grid-cols-[8rem_1fr] gap-4 border-t border-contour py-4">
          <dt className="text-sm font-medium text-graphite">{row.label}</dt>
          <dd>{row.value}</dd>
        </div>
      ))}
    </dl>
  );
}
