import { Button } from './ui/button';

interface SiteHeaderProps {
  onRequestConsultation: () => void;
}

export default function SiteHeader({ onRequestConsultation }: SiteHeaderProps) {
  return (
    <header className="sticky top-0 z-50 w-full border-b border-border/40 bg-background/95 backdrop-blur supports-[backdrop-filter]:bg-background/60">
      <div className="container flex h-16 items-center justify-between">
        <div className="flex items-center gap-2">
          <span className="text-xl font-bold text-foreground">PropertyOps<sup className="text-xs">®</sup></span>
        </div>
        
        <Button 
          onClick={onRequestConsultation}
          className="bg-brand-primary hover:bg-brand-primary-dark text-white font-medium"
        >
          Request a Service Consultation
        </Button>
      </div>
    </header>
  );
}
