import { useAuditData } from "../i18n/AuditLanguageContext";
import { Section } from "./Section";

export function PremiumPositioning() {
  const { premiumImprovements, ui } = useAuditData();
  const section = ui.sections.premium;

  return (
    <Section
      id="premium-positioning"
      eyebrow={section.eyebrow}
      title={section.title}
      lead={section.lead}
    >
      <div className="panel premium-panel">
        <p>{section.body}</p>
      </div>
      <div className="improvement-grid">
        {premiumImprovements.map((item) => (
          <article key={item}>
            <span aria-hidden="true" />
            <p>{item}</p>
          </article>
        ))}
      </div>
    </Section>
  );
}
