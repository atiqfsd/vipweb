import { ServiceRow } from "@/components/services/ServiceRow";
import type { DigitalService } from "@/lib/services";

type ServiceRowListProps = {
  services: DigitalService[];
  className?: string;
};

// Numbered-row rendering of the Digital & IT catalogue, shared between
// the homepage, services index and the digital-it category page.
export function ServiceRowList({ services, className = "" }: ServiceRowListProps) {
  return (
    <div className={className}>
      {services.map((service, index) => (
        <ServiceRow key={service.slug} index={index + 1} name={service.name} description={service.shortDescription} />
      ))}
    </div>
  );
}
