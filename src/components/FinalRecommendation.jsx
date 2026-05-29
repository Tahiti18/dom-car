import { useAuditData } from "../i18n/AuditLanguageContext";
import { Section } from "./Section";

export function FinalRecommendation() {
  const { ui } = useAuditData();
  const section = ui.sections.final;

  return (
    <Section
      id="final-recommendation"
      eyebrow={section.eyebrow}
      title={section.title}
      lead={section.lead}
      tone="dark"
    >
      <div className="final-card">
        <p>{section.body}</p>
      </div>
    </Section>
  );
}
