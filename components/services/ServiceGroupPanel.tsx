import type { ServiceGroup } from "@/lib/service-groups";

type ServiceGroupPanelProps = {
  title?: string;
  groups: ServiceGroup[];
};

// Application-assistance services organised into labelled subgroups on
// warm paper cards — the "human" counterpart to the Digital & IT
// numbered-row list, so the two divisions never share a visual
// language even when reusing the same layout primitive.
export function ServiceGroupPanel({ title, groups }: ServiceGroupPanelProps) {
  return (
    <div>
      {title && <h3 className="text-xl font-semibold text-foreground">{title}</h3>}
      <div className={`grid items-start gap-6 sm:grid-cols-2 lg:grid-cols-3 ${title ? "mt-6" : ""}`}>
        {groups.map((group) => (
          <div key={group.label} className="border border-paper-line bg-paper p-6">
            <p className="text-sm font-semibold tracking-wide text-brass-ink uppercase">{group.label}</p>
            <ul className="mt-4 space-y-2.5">
              {group.services.map((service) => (
                <li key={service} className="text-sm leading-6 text-slate">
                  {service}
                </li>
              ))}
            </ul>
          </div>
        ))}
      </div>
    </div>
  );
}
