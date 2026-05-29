import { useAuditData } from "../i18n/AuditLanguageContext";
import { Section } from "./Section";

export function ActionPlan() {
  const { actionPlan, ui } = useAuditData();
  const section = ui.sections.actionPlan;

  return (
    <Section
      id="action-plan"
      eyebrow={section.eyebrow}
      title={section.title}
      lead={section.lead}
    >
      <div className="table-wrap action-table">
        <table>
          <thead>
            <tr>
              {section.tableHeaders.map((header) => (
                <th key={header}>{header}</th>
              ))}
            </tr>
          </thead>
          <tbody>
            {actionPlan.map((row) => (
              <tr key={row.action}>
                <td><span className="priority-badge">{row.priority}</span></td>
                <th scope="row">{row.action}</th>
                <td>{row.why}</td>
                <td>{row.where}</td>
                <td>{row.impact}</td>
                <td>{row.difficulty}</td>
                <td>{row.time}</td>
                <td>{row.effect}</td>
              </tr>
            ))}
          </tbody>
        </table>
      </div>
    </Section>
  );
}
