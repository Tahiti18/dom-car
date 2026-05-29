import { useAuditData } from "../i18n/AuditLanguageContext";
import { Section } from "./Section";

function scoreClass(score) {
  if (score >= 6) return "score--strong";
  if (score >= 4) return "score--mid";
  return "score--low";
}

export function Scorecard() {
  const { scorecardItems, ui } = useAuditData();
  const section = ui.sections.scorecard;

  return (
    <Section
      id="final-scorecard"
      eyebrow={section.eyebrow}
      title={section.title}
      lead={section.lead}
    >
      <div className="score-grid" data-testid="scorecard-grid">
        {scorecardItems.map((item) => (
          <article className="score-card" key={item.area}>
            <div className="score-card-top">
              <h3>{item.area}</h3>
              <span
                className={`score-badge ${scoreClass(item.score)}`}
                aria-label={`${item.area} ${section.scoreLabel} ${item.score} ${section.outOf}`}
              >
                <strong>{item.score}</strong><span>/10</span>
              </span>
            </div>
            <p>{item.reason}</p>
          </article>
        ))}
      </div>
    </Section>
  );
}
