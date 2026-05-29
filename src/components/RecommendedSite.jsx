import { useAuditData } from "../i18n/AuditLanguageContext";
import { Section } from "./Section";

export function RecommendedWebsiteStructure() {
  const { recommendedStructure, ui } = useAuditData();
  const section = ui.sections.siteStructure;

  return (
    <Section
      id="site-structure"
      eyebrow={section.eyebrow}
      title={section.title}
      lead={section.lead}
    >
      <div className="structure-grid">
        {recommendedStructure.map(([page, purpose]) => (
          <article key={page}>
            <h3>{page}</h3>
            <p>{purpose}</p>
          </article>
        ))}
      </div>
    </Section>
  );
}

export function RecommendedHomepageMessaging() {
  const { homepageMessaging, ui } = useAuditData();
  const section = ui.sections.homepage;

  return (
    <Section
      id="homepage-message"
      eyebrow={section.eyebrow}
      title={section.title}
      lead={section.lead}
    >
      <div className="message-card">
        <h3>{homepageMessaging.headline}</h3>
        <p>{homepageMessaging.subheadline}</p>
        <div className="hero-actions hero-actions--light">
          <span className="button button--primary">{homepageMessaging.primaryCta}</span>
          <span className="button button--ghost">{homepageMessaging.secondaryCta}</span>
        </div>
      </div>
      <div className="message-columns">
        <article>
          <h3>{section.trustTitle}</h3>
          <ul className="check-list">
            {homepageMessaging.trustLines.map((line) => (
              <li key={line}>{line}</li>
            ))}
          </ul>
        </article>
        <article>
          <h3>{section.worksTitle}</h3>
          <ol>
            {homepageMessaging.steps.map((step) => (
              <li key={step}>{step}</li>
            ))}
          </ol>
        </article>
        <article>
          <h3>{section.faqTitle}</h3>
          <ul className="check-list">
            {homepageMessaging.faq.map((question) => (
              <li key={question}>{question}</li>
            ))}
          </ul>
        </article>
      </div>
    </Section>
  );
}
