import React from 'react';
import { CaseStudyId } from '../../types';
import { IntroProfileVisual } from './IntroProfileVisual';
import { IntroTrackRecordVisual } from './IntroTrackRecordVisual';
import { IntroAgendaVisual } from './IntroAgendaVisual';
import { CaseCoverVisualCheckout } from './CaseCoverVisualCheckout';
import { CaseCoverVisualHarness } from './CaseCoverVisualHarness';
import { CaseCoverVisualTamilMurasu } from './CaseCoverVisualTamilMurasu';
import { CheckoutSideBySideVisual } from './CheckoutSideBySideVisual';
import { MarketplaceTugOfWarVisual } from './MarketplaceTugOfWarVisual';
import { JtbdArchetypesVisual } from './JtbdArchetypesVisual';
import { FrictionAuditTabsVisual } from './FrictionAuditTabsVisual';
import { CraftInterventionsVisual } from './CraftInterventionsVisual';
import { DesignPrinciplesVisual } from './DesignPrinciplesVisual';
import { TimelineEvolutionVisual } from './TimelineEvolutionVisual';
import { VideoPlaceholderVisual } from './VideoPlaceholderVisual';
import { SpotlightVideoVisual } from './SpotlightVideoVisual';
import { TrackVideoVisual } from './TrackVideoVisual';
import { EnterpriseVideoVisual } from './EnterpriseVideoVisual';
import { RuntimePanelVisual } from './RuntimePanelVisual';
import { UseCasesPanelVisual } from './UseCasesPanelVisual';
import { ResearchValidationGridVisual } from './ResearchValidationGridVisual';
import { InvisibleIcebergVisual } from './InvisibleIcebergVisual';
import { LocalMaximumVisual } from './LocalMaximumVisual';
import { CodashopPlaygroundVisual } from './CodashopPlaygroundVisual';
import { HotswapTokensVisual } from './HotswapTokensVisual';
import { AbShowdownFlywheelVisual } from './AbShowdownFlywheelVisual';
import { LeadershipRetroVisual } from './LeadershipRetroVisual';
import { HarnessHeroVisual } from './HarnessHeroVisual';
import { HarnessLayersVisual } from './HarnessLayersVisual';
import { HarnessWorkflowVisual } from './HarnessWorkflowVisual';
import { HarnessMaturityVisual } from './HarnessMaturityVisual';
import { HarnessGatesVisual } from './HarnessGatesVisual';
import { HarnessHandoffVisual } from './HarnessHandoffVisual';
import { TamilMurasuCrisisVisual } from './TamilMurasuCrisisVisual';
import { InGroupIdVisual } from './InGroupIdVisual';
import { TamilTypographyVisual } from './TamilTypographyVisual';
import { MuktaMalarTypographicVisual } from './MuktaMalarTypographicVisual';
import { DistributionOverhaulVisual } from './DistributionOverhaulVisual';
import { CulturalPreservationImpactVisual } from './CulturalPreservationImpactVisual';
import { TamilMurasuIframeVisual } from './TamilMurasuIframeVisual';
import { ClosingSummaryVisual } from './ClosingSummaryVisual';
import { TamilMobileComparisonVisual } from './TamilMobileComparisonVisual';
import { TamilDesktopComparisonVisual } from './TamilDesktopComparisonVisual';

interface SlideVisualRendererProps {
  visualType: string;
  onSelectCaseStudy?: (caseId: CaseStudyId) => void;
  onJumpToSlide?: (index: number) => void;
}

export const SlideVisualRenderer: React.FC<SlideVisualRendererProps> = ({
  visualType,
  onSelectCaseStudy,
  onJumpToSlide,
}) => {
  switch (visualType) {
    case 'intro-profile-card':
      return <IntroProfileVisual />;
    case 'intro-track-record':
      return <IntroTrackRecordVisual />;
    case 'intro-agenda':
      return (
        <IntroAgendaVisual
          onSelectCaseStudy={onSelectCaseStudy}
          onJumpToSlide={onJumpToSlide}
        />
      );
    case 'case-cover-checkout':
      return <CaseCoverVisualCheckout />;
    case 'case-cover-harness':
      return <CaseCoverVisualHarness />;
    case 'case-cover-tamil-murasu':
      return <CaseCoverVisualTamilMurasu />;
    case 'checkout-side-by-side':
      return <CheckoutSideBySideVisual />;
    case 'marketplace-tug-of-war':
      return <MarketplaceTugOfWarVisual />;
    case 'jtbd-archetypes':
      return <JtbdArchetypesVisual />;
    case 'friction-audit-tabs':
      return <FrictionAuditTabsVisual />;
    case 'craft-interventions':
      return <CraftInterventionsVisual />;
    case 'design-principles':
      return <DesignPrinciplesVisual />;
    case 'timeline-evolution':
      return <TimelineEvolutionVisual />;
    case 'video-placeholder':
      return <VideoPlaceholderVisual />;
    case 'spotlight-video':
      return <SpotlightVideoVisual />;
    case 'track-video':
      return <TrackVideoVisual />;
    case 'enterprise-video':
      return <EnterpriseVideoVisual />;
    case 'runtime-panel':
      return <RuntimePanelVisual />;
    case 'usecases-panel':
      return <UseCasesPanelVisual />;
    case 'research-validation-grid':
      return <ResearchValidationGridVisual />;
    case 'invisible-iceberg':
      return <InvisibleIcebergVisual />;
    case 'local-maximum':
      return <LocalMaximumVisual />;
    case 'codashop-playground':
      return <CodashopPlaygroundVisual />;
    case 'hotswap-tokens':
      return <HotswapTokensVisual />;
    case 'ab-showdown-flywheel':
      return <AbShowdownFlywheelVisual />;
    case 'leadership-retro':
      return <LeadershipRetroVisual />;
    case 'harness-hero':
      return <HarnessHeroVisual />;
    case 'harness-layers':
      return <HarnessLayersVisual />;
    case 'harness-workflow':
      return <HarnessWorkflowVisual />;
    case 'harness-maturity':
      return <HarnessMaturityVisual />;
    case 'harness-gates':
      return <HarnessGatesVisual />;
    case 'harness-handoff':
      return <HarnessHandoffVisual />;
    case 'tamil-crisis':
      return <TamilMurasuCrisisVisual />;
    case 'tamil-ingroup':
      return <InGroupIdVisual />;
    case 'tamil-typography':
      return <TamilTypographyVisual />;
    case 'tamil-mobile-comparison':
      return <TamilMobileComparisonVisual />;
    case 'tamil-desktop-comparison':
      return <TamilDesktopComparisonVisual />;
    case 'tamil-mukta':
      return <MuktaMalarTypographicVisual />;
    case 'tamil-distribution':
      return <DistributionOverhaulVisual />;
    case 'tamil-impact':
      return <CulturalPreservationImpactVisual />;
    case 'tamil-iframe':
      return <TamilMurasuIframeVisual />;
    case 'closing-summary':
      return <ClosingSummaryVisual />;
    case 'none':
      return null;
    default:
      return <IntroProfileVisual />;
  }
};
