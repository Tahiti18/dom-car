import { useAuditData } from "../i18n/AuditLanguageContext";

export function Section({ id, eyebrow, title, lead, children, tone = "light" }) {
  const { ui } = useAuditData();

  return (
    <section id={id} className={`report-section report-section--${tone}`}>
      <div className="section-kicker">{eyebrow}</div>
      <div className="section-heading-row">
        <h2>{title}</h2>
        <a
          className="section-anchor"
          href={`#${id}`}
          aria-label={`${ui.common.jumpTo} ${title}`}
        >
          #
        </a>
      </div>
      {lead ? <p className="section-lead">{lead}</p> : null}
      {children}
    </section>
  );
}

export function EvidenceNote({ children }) {
  const { ui } = useAuditData();

  return (
    <p className="evidence-note">
      {ui.common.evidenceNote}: {children ?? ui.common.notVerified}
    </p>
  );
}

export function Badge({ children, variant = "neutral" }) {
  return <span className={`badge badge--${variant}`}>{children}</span>;
}
