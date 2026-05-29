import { ArrowRight, ShieldCheck, Wrench, MapPin } from "lucide-react";
import { useAuditData } from "../i18n/AuditLanguageContext";

export function AuditHero() {
  const { ui } = useAuditData();
  const [trustSignal, localSignal, technicalSignal] = ui.hero.signals;

  return (
    <header className="hero" id="top">
      <div className="hero-background" aria-hidden="true" />
      <div className="hero-content">
        <div className="hero-meta">
          {ui.hero.meta.map((item) => (
            <span key={item}>{item}</span>
          ))}
        </div>
        <h1>{ui.hero.title}</h1>
        <p>{ui.hero.statement}</p>
        <div className="hero-actions">
          <a className="button button--primary" href="#final-scorecard">
            {ui.hero.scorecardCta} <ArrowRight size={17} aria-hidden="true" />
          </a>
          <a className="button button--ghost" href="#action-plan">
            {ui.hero.actionPlanCta}
          </a>
        </div>
      </div>
      <div className="hero-panel" aria-label={ui.hero.snapshotLabel}>
        <div>
          <small>{ui.hero.readinessLabel}</small>
          <strong>{ui.hero.readinessScore}</strong>
          <span>{ui.hero.readinessText}</span>
        </div>
        <div className="mini-signal">
          <ShieldCheck size={20} aria-hidden="true" />
          <span>{trustSignal}</span>
        </div>
        <div className="mini-signal">
          <MapPin size={20} aria-hidden="true" />
          <span>{localSignal}</span>
        </div>
        <div className="mini-signal">
          <Wrench size={20} aria-hidden="true" />
          <span>{technicalSignal}</span>
        </div>
      </div>
    </header>
  );
}
