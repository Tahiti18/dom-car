import { AlertTriangle, CheckCircle2 } from "lucide-react";
import { useAuditData } from "../i18n/AuditLanguageContext";
import { Badge, EvidenceNote, Section } from "./Section";

export function ExecutiveSummary() {
  const { executiveRisks, positiveAssets, ui } = useAuditData();
  const section = ui.sections.executiveSummary;

  return (
    <Section
      id="executive-summary"
      eyebrow={section.eyebrow}
      title={section.title}
      lead={section.lead}
    >
      <div className="two-column">
        <article className="panel panel--dark">
          <Badge variant="blue">{section.coreIssue}</Badge>
          <h3>{section.coreTitle}</h3>
          <p>{section.coreBody}</p>
          <EvidenceNote>{section.coreEvidence}</EvidenceNote>
        </article>
        <article className="panel">
          <Badge variant="gold">{section.strategicMessage}</Badge>
          <h3>{section.strategicTitle}</h3>
          <p>{section.strategicBody}</p>
        </article>
      </div>

      <div className="split-lists">
        <div>
          <h3>
            <CheckCircle2 size={20} aria-hidden="true" /> {section.assetsTitle}
          </h3>
          <ul className="check-list">
            {positiveAssets.map((asset) => (
              <li key={asset}>{asset}</li>
            ))}
          </ul>
        </div>
        <div>
          <h3>
            <AlertTriangle size={20} aria-hidden="true" />{" "}
            {section.weaknessesTitle}
          </h3>
          <ul className="risk-list">
            {executiveRisks.map((risk) => (
              <li key={risk}>{risk}</li>
            ))}
          </ul>
        </div>
      </div>
    </Section>
  );
}
