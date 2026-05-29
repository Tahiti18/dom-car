import { useAuditData } from "../i18n/AuditLanguageContext";
import { Section } from "./Section";

const statusClassMap = {
  Visible: "visible",
  Partial: "partial",
  "Not verified": "not-verified",
  "Needs strengthening": "needs-strengthening",
  Видно: "visible",
  Частично: "partial",
  "Не проверено": "not-verified",
  "Требует усиления": "needs-strengthening",
};

function statusClass(status) {
  return statusClassMap[status] ?? "partial";
}

export function TrustMatrix() {
  const { trustAdditions, trustMatrix, ui } = useAuditData();
  const section = ui.sections.trust;

  return (
    <Section
      id="trust-credibility"
      eyebrow={section.eyebrow}
      title={section.title}
      lead={section.lead}
    >
      <h3 className="subheading">{section.matrixTitle}</h3>
      <div className="table-wrap">
        <table className="matrix-table">
          <thead>
            <tr>
              {section.tableHeaders.map((header) => (
                <th key={header}>{header}</th>
              ))}
            </tr>
          </thead>
          <tbody>
            {trustMatrix.map(([signal, status, note]) => (
              <tr key={signal}>
                <th scope="row">{signal}</th>
                <td>
                  <span className={`status-dot ${statusClass(status)}`}>{status}</span>
                </td>
                <td>{note}</td>
              </tr>
            ))}
          </tbody>
        </table>
      </div>
      <div className="recommendation-strip">
        {trustAdditions.map((item) => (
          <span key={item}>{item}</span>
        ))}
      </div>
    </Section>
  );
}
