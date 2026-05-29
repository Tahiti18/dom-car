import { useAuditData } from "../i18n/AuditLanguageContext";
import { EvidenceNote, Section } from "./Section";

export function BusinessModel() {
  const { modelSignals, statusLabels, ui } = useAuditData();
  const section = ui.sections.businessModel;

  return (
    <Section
      id="business-model"
      eyebrow={section.eyebrow}
      title={section.title}
      lead={section.lead}
    >
      <div className="two-column">
        <article className="panel">
          <h3>{section.signalsTitle}</h3>
          <ul className="pill-list">
            {modelSignals.map((signal) => (
              <li key={signal}>{signal}</li>
            ))}
          </ul>
        </article>
        <article className="panel panel--accent">
          <h3>{section.explanationTitle}</h3>
          <p>{section.explanation}</p>
          <EvidenceNote>{section.evidence}</EvidenceNote>
        </article>
      </div>
      <div className="label-strip">
        {statusLabels.map((label) => (
          <span key={label}>{label}</span>
        ))}
      </div>
    </Section>
  );
}
