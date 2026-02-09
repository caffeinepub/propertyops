import { useState } from 'react';
import SiteHeader from '../components/SiteHeader';
import SiteFooter from '../components/SiteFooter';
import {
  HeroSection,
  HowItWorksSection,
  TechnologySystemsSection,
  ServicesSection,
  QualityControlSection,
  ContractorModelSection,
  TrustCalloutsSection,
  FranchiseTeaserSection,
} from '../components/sections/HomeSections';
import ConsultationRequestDialog from '../components/ConsultationRequestDialog';

export default function HomePage() {
  const [isDialogOpen, setIsDialogOpen] = useState(false);

  const handleOpenDialog = () => {
    setIsDialogOpen(true);
  };

  return (
    <div className="min-h-screen flex flex-col">
      <SiteHeader onRequestConsultation={handleOpenDialog} />
      
      <main className="flex-1">
        <HeroSection onRequestConsultation={handleOpenDialog} />
        <HowItWorksSection />
        <TechnologySystemsSection />
        <ServicesSection />
        <QualityControlSection />
        <ContractorModelSection />
        <TrustCalloutsSection />
        <FranchiseTeaserSection />
      </main>

      <SiteFooter onRequestConsultation={handleOpenDialog} />

      <ConsultationRequestDialog 
        open={isDialogOpen} 
        onOpenChange={setIsDialogOpen} 
      />
    </div>
  );
}
