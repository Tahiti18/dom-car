import { useState } from "react";
import { useAuditData, useAuditLanguage } from "../i18n/AuditLanguageContext";

function getSectionNumber(navGroups, groupIndex, itemIndex) {
  const previousItems = navGroups
    .slice(0, groupIndex)
    .reduce((total, group) => total + group.items.length, 0);

  return previousItems + itemIndex + 1;
}

export function Sidebar() {
  const [activeGroupIndex, setActiveGroupIndex] = useState(0);
  const { navGroups, ui } = useAuditData();
  const { language, setLanguage } = useAuditLanguage();

  return (
    <aside className="sidebar" aria-label={ui.brand.reportType}>
      <a className="brand-lockup" href="#top" aria-label={ui.brand.topLabel}>
        <span className="brand-mark">DC</span>
        <span>
          <strong>{ui.brand.name}</strong>
          <small>{ui.brand.reportType}</small>
        </span>
      </a>
      <div
        className="language-switcher"
        role="group"
        aria-label={ui.language.label}
      >
        <button
          type="button"
          aria-pressed={language === "en"}
          onClick={() => setLanguage("en")}
        >
          {ui.language.english}
        </button>
        <button
          type="button"
          aria-pressed={language === "ru"}
          onClick={() => setLanguage("ru")}
        >
          {ui.language.russian}
        </button>
      </div>
      <nav aria-label="Audit chapter navigation">
        {navGroups.map((group, groupIndex) => (
          <div className="nav-group" key={group.title}>
            <button
              type="button"
              className="nav-group-trigger"
              aria-expanded={activeGroupIndex === groupIndex}
              aria-controls={`nav-group-${groupIndex}`}
              onClick={() => setActiveGroupIndex(groupIndex)}
            >
              <span>{String(groupIndex + 1).padStart(2, "0")}</span>
              {group.title}
            </button>
            <div className="nav-group-links" id={`nav-group-${groupIndex}`}>
              {activeGroupIndex === groupIndex
                ? group.items.map(([id, label], itemIndex) => (
                    <a href={`#${id}`} key={id}>
                      <span>
                        {String(
                          getSectionNumber(navGroups, groupIndex, itemIndex),
                        ).padStart(2, "0")}
                      </span>
                      {label}
                    </a>
                  ))
                : null}
            </div>
          </div>
        ))}
      </nav>
    </aside>
  );
}
