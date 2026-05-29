import { useAuditData } from "../i18n/AuditLanguageContext";
import { Section } from "./Section";

export function OpportunityRoadmap() {
  const { roadmap, ui } = useAuditData();
  const section = ui.sections.roadmap;

  return (
    <Section
      id="roadmap"
      eyebrow={section.eyebrow}
      title={section.title}
      lead={section.lead}
    >
      <div className="roadmap">
        {roadmap.map((phase) => (
          <article className="roadmap-card" key={phase.horizon}>
            <div>
              <span>{phase.timing}</span>
              <h3>{phase.horizon}</h3>
            </div>
            <ul>
              {phase.items.map((item) => (
                <li key={item}>{item}</li>
              ))}
            </ul>
          </article>
        ))}
      </div>
    </Section>
  );
}
