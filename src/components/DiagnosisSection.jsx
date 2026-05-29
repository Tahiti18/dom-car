import { Gauge, Route, Shield } from "lucide-react";
import { useAuditData } from "../i18n/AuditLanguageContext";
import { Section } from "./Section";

export function DiagnosisSection() {
  const { ui } = useAuditData();
  const section = ui.sections.diagnosis;
  const icons = [Shield, Route, Gauge];
  const cards = section.cards.map((card, index) => ({
    ...card,
    icon: icons[index],
  }));

  return (
    <Section
      id="strategic-diagnosis"
      eyebrow={section.eyebrow}
      title={section.title}
      lead={section.lead}
    >
      <div className="diagnosis-grid">
        {cards.map(({ icon: Icon, title, copy }) => (
          <article className="diagnosis-card" key={title}>
            <span>
              <Icon size={22} aria-hidden="true" />
            </span>
            <h3>{title}</h3>
            <p>{copy}</p>
          </article>
        ))}
      </div>
      <blockquote className="statement-block">{section.statement}</blockquote>
    </Section>
  );
}
