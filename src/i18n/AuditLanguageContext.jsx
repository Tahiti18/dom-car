import { createContext, useContext, useEffect, useMemo, useState } from "react";
import { englishAuditData } from "../data/auditData";
import { russianAuditData } from "../data/auditData.ru";

const AuditLanguageContext = createContext(null);
const LANGUAGE_ALTERNATES = [
  { href: "/en", hreflang: "en" },
  { href: "/ru", hreflang: "ru" },
];

function getLanguageFromPath() {
  if (window.location.pathname.startsWith("/ru")) {
    return "ru";
  }

  return "en";
}

function getPathForLanguage(language) {
  return language === "ru" ? "/ru" : "/en";
}

export function AuditLanguageProvider({ children }) {
  const [language, setLanguageState] = useState(getLanguageFromPath);

  useEffect(() => {
    const handlePopState = () => setLanguageState(getLanguageFromPath());
    window.addEventListener("popstate", handlePopState);
    return () => window.removeEventListener("popstate", handlePopState);
  }, []);

  useEffect(() => {
    document.documentElement.lang = language;
  }, [language]);

  useEffect(() => {
    const links = LANGUAGE_ALTERNATES.map(({ href, hreflang }) => {
      const link = document.createElement("link");
      link.rel = "alternate";
      link.setAttribute("hreflang", hreflang);
      link.setAttribute("href", href);
      link.setAttribute("data-domcar-language", "true");
      document.head.append(link);
      return link;
    });

    return () => {
      links.forEach((link) => link.remove());
    };
  }, []);

  const value = useMemo(() => {
    const setLanguage = (nextLanguage) => {
      const nextPath = getPathForLanguage(nextLanguage);
      if (window.location.pathname !== nextPath) {
        window.history.pushState({}, "", nextPath);
      }
      setLanguageState(nextLanguage);
    };

    return {
      data: language === "ru" ? russianAuditData : englishAuditData,
      language,
      setLanguage,
    };
  }, [language]);

  return (
    <AuditLanguageContext.Provider value={value}>
      {children}
    </AuditLanguageContext.Provider>
  );
}

export function useAuditData() {
  const context = useContext(AuditLanguageContext);
  if (!context) {
    throw new Error("useAuditData must be used inside AuditLanguageProvider");
  }
  return context.data;
}

export function useAuditLanguage() {
  const context = useContext(AuditLanguageContext);
  if (!context) {
    throw new Error("useAuditLanguage must be used inside AuditLanguageProvider");
  }
  return context;
}
