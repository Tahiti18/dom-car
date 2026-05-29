import { useAuditData } from "../i18n/AuditLanguageContext";
import { Section } from "./Section";

export function JourneyAudit() {
  const { journeyRows, ui } = useAuditData();
  const section = ui.sections.journey;

  return (
    <Section
      id="user-journey"
      eyebrow={section.eyebrow}
      title={section.title}
      lead={section.lead}
    >
      <div className="table-wrap">
        <table>
          <thead>
            <tr>
              {section.tableHeaders.map((header) => (
                <th key={header}>{header}</th>
              ))}
            </tr>
          </thead>
          <tbody>
            {journeyRows.map((row) => (
              <tr key={row.stage}>
                <th scope="row">{row.stage}</th>
                <td>{row.wants}</td>
                <td>{row.issue}</td>
                <td>{row.recommendation}</td>
              </tr>
            ))}
          </tbody>
        </table>
      </div>
    </Section>
  );
}
