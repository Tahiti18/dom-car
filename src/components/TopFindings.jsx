import { useAuditData } from "../i18n/AuditLanguageContext";
import { Badge, Section } from "./Section";

export function TopFindings() {
  const { topFindings, ui } = useAuditData();
  const section = ui.sections.topFindings;

  return (
    <Section
      id="top-findings"
      eyebrow={section.eyebrow}
      title={section.title}
      lead={section.lead}
    >
      <div className="findings-grid">
        {topFindings.map((finding) => (
          <article className="finding-card" key={finding.number}>
            <div className="finding-number">{finding.number}</div>
            <Badge variant="slate">{finding.theme}</Badge>
            <h3>{finding.title}</h3>
            <p>
              <strong>{ui.common.whyItMatters}:</strong> {finding.impact}
            </p>
          </article>
        ))}
      </div>
    </Section>
  );
}
