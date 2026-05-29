import { useAuditData } from "../i18n/AuditLanguageContext";
import { EvidenceNote, Section } from "./Section";

export function SeoAudit() {
  const { technicalIssues, ui } = useAuditData();
  const section = ui.sections.seo;

  return (
    <Section
      id="seo-local"
      eyebrow={section.eyebrow}
      title={section.title}
      lead={section.lead}
    >
      <div className="two-column">
        <article className="panel">
          <h3>{section.risksTitle}</h3>
          <ul className="risk-list">
            {technicalIssues.slice(0, 5).map((issue) => (
              <li key={issue}>{issue}</li>
            ))}
          </ul>
        </article>
        <article className="panel">
          <h3>{section.localTitle}</h3>
          <p>{section.localBody}</p>
          <EvidenceNote>{section.evidence}</EvidenceNote>
        </article>
      </div>
    </Section>
  );
}

export function TechnicalHealthAudit() {
  const { technicalFixes, technicalIssues, ui } = useAuditData();
  const section = ui.sections.technical;

  return (
    <Section
      id="technical-health"
      eyebrow={section.eyebrow}
      title={section.title}
      lead={section.lead}
    >
      <div className="technical-grid">
        <article className="panel panel--dark">
          <h3>{section.investigationTitle}</h3>
          <ul className="check-list">
            {technicalIssues.map((issue) => (
              <li key={issue}>{issue}</li>
            ))}
          </ul>
        </article>
        <article className="panel">
          <h3>{section.fixesTitle}</h3>
          <ul className="check-list">
            {technicalFixes.map((fix) => (
              <li key={fix}>{fix}</li>
            ))}
          </ul>
        </article>
      </div>
      <EvidenceNote>{section.evidence}</EvidenceNote>
    </Section>
  );
}
