import { useAuditData } from "../i18n/AuditLanguageContext";
import { Section } from "./Section";

export function CompetitorBenchmark() {
  const { competitors, ui } = useAuditData();
  const section = ui.sections.competitors;

  return (
    <Section
      id="competitors"
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
            {competitors.map((competitor) => (
              <tr key={competitor.name}>
                <th scope="row">{competitor.name}</th>
                <td>{competitor.type}</td>
                <td>{competitor.strength}</td>
                <td>{competitor.lesson}</td>
              </tr>
            ))}
          </tbody>
        </table>
      </div>
    </Section>
  );
}
