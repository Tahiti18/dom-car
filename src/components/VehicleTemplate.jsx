import { useAuditData } from "../i18n/AuditLanguageContext";
import { Section } from "./Section";

export function VehicleListingQuality() {
  const { vehicleTemplateBlocks, ui } = useAuditData();
  const section = ui.sections.vehicleListing;

  return (
    <Section
      id="vehicle-listing"
      eyebrow={section.eyebrow}
      title={section.title}
      lead={section.lead}
    >
      <div className="vehicle-layout">
        <div className="vehicle-demo" aria-label={section.previewTitle}>
          <div className="vehicle-demo-media">
            <span>{section.previewLabel}</span>
          </div>
          <div className="vehicle-demo-body">
            <div>
              <h3>{section.previewTitle}</h3>
              <p>{section.previewBody}</p>
            </div>
            <div className="vehicle-demo-badges">
              {section.previewBadges.map((badge) => (
                <span key={badge}>{badge}</span>
              ))}
            </div>
          </div>
        </div>
        <div className="vehicle-blocks">
          {vehicleTemplateBlocks.slice(0, 8).map((block, index) => (
            <article key={block.title}>
              <span>{String(index + 1).padStart(2, "0")}</span>
              <h3>{block.title}</h3>
              <p>{block.detail}</p>
            </article>
          ))}
        </div>
      </div>
    </Section>
  );
}

export function IdealVehiclePageTemplate() {
  const { vehicleTemplateBlocks, ui } = useAuditData();
  const section = ui.sections.vehicleTemplate;

  return (
    <Section
      id="vehicle-template"
      eyebrow={section.eyebrow}
      title={section.title}
      lead={section.lead}
    >
      <div className="timeline-list">
        {vehicleTemplateBlocks.map((block, index) => (
          <article key={block.title}>
            <span>{String(index + 1).padStart(2, "0")}</span>
            <div>
              <h3>{block.title}</h3>
              <p>{block.detail}</p>
            </div>
          </article>
        ))}
      </div>
    </Section>
  );
}
