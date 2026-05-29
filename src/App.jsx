import { ActionPlan } from "./components/ActionPlan";
import { AuditHero } from "./components/AuditHero";
import { BusinessModel } from "./components/BusinessModel";
import { CompetitorBenchmark } from "./components/CompetitorBenchmark";
import { DiagnosisSection } from "./components/DiagnosisSection";
import { ExecutiveSummary } from "./components/ExecutiveSummary";
import { FinalRecommendation } from "./components/FinalRecommendation";
import { OpportunityRoadmap } from "./components/OpportunityRoadmap";
import { PremiumPositioning } from "./components/PremiumPositioning";
import {
  RecommendedHomepageMessaging,
  RecommendedWebsiteStructure,
} from "./components/RecommendedSite";
import { Scorecard } from "./components/Scorecard";
import { SeoAudit, TechnicalHealthAudit } from "./components/SeoTechnical";
import { Sidebar } from "./components/Sidebar";
import { TopFindings } from "./components/TopFindings";
import { TrustMatrix } from "./components/TrustMatrix";
import {
  IdealVehiclePageTemplate,
  VehicleListingQuality,
} from "./components/VehicleTemplate";
import { JourneyAudit } from "./components/JourneyAudit";
import {
  AuditLanguageProvider,
  useAuditData,
} from "./i18n/AuditLanguageContext";

function ChapterBand({ number, title, children }) {
  return (
    <div className="chapter-band">
      <span>{number}</span>
      <h2>{title}</h2>
      <p>{children}</p>
    </div>
  );
}

function ReportContent() {
  const { ui } = useAuditData();

  return (
    <div className="app-shell">
      <Sidebar />
      <main>
        <AuditHero />
        <div className="report-stack">
          <ChapterBand
            number={ui.chapterBands[0].number}
            title={ui.chapterBands[0].title}
          >
            {ui.chapterBands[0].text}
          </ChapterBand>
          <ExecutiveSummary />
          <DiagnosisSection />
          <Scorecard />
          <ChapterBand
            number={ui.chapterBands[1].number}
            title={ui.chapterBands[1].title}
          >
            {ui.chapterBands[1].text}
          </ChapterBand>
          <TopFindings />
          <BusinessModel />
          <JourneyAudit />
          <TrustMatrix />
          <ChapterBand
            number={ui.chapterBands[2].number}
            title={ui.chapterBands[2].title}
          >
            {ui.chapterBands[2].text}
          </ChapterBand>
          <PremiumPositioning />
          <VehicleListingQuality />
          <ChapterBand
            number={ui.chapterBands[3].number}
            title={ui.chapterBands[3].title}
          >
            {ui.chapterBands[3].text}
          </ChapterBand>
          <SeoAudit />
          <TechnicalHealthAudit />
          <ChapterBand
            number={ui.chapterBands[4].number}
            title={ui.chapterBands[4].title}
          >
            {ui.chapterBands[4].text}
          </ChapterBand>
          <CompetitorBenchmark />
          <OpportunityRoadmap />
          <RecommendedWebsiteStructure />
          <RecommendedHomepageMessaging />
          <IdealVehiclePageTemplate />
          <ChapterBand
            number={ui.chapterBands[5].number}
            title={ui.chapterBands[5].title}
          >
            {ui.chapterBands[5].text}
          </ChapterBand>
          <ActionPlan />
          <FinalRecommendation />
        </div>
      </main>
    </div>
  );
}

export default function App() {
  return (
    <AuditLanguageProvider>
      <ReportContent />
    </AuditLanguageProvider>
  );
}
