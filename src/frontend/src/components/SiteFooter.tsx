import { Button } from './ui/button';
import { Heart } from 'lucide-react';

interface SiteFooterProps {
  onRequestConsultation: () => void;
}

export default function SiteFooter({ onRequestConsultation }: SiteFooterProps) {
  return (
    <footer className="border-t border-border bg-muted/30">
      <div className="container py-12">
        <div className="grid gap-8 md:grid-cols-2 lg:grid-cols-3">
          <div>
            <h3 className="text-lg font-bold mb-3">PropertyOps<sup className="text-xs">®</sup></h3>
            <p className="text-sm text-muted-foreground leading-relaxed">
              Standardized property operations services delivered through systemized workflows, 
              digital checklists, and documented delivery.
            </p>
          </div>
          
          <div>
            <h4 className="font-semibold mb-3">Our Approach</h4>
            <ul className="space-y-2 text-sm text-muted-foreground">
              <li>U.S.-based operations team</li>
              <li>Standardized workflows & SOPs</li>
              <li>Digital documentation on every job</li>
              <li>Contractor-native model</li>
            </ul>
          </div>
          
          <div>
            <h4 className="font-semibold mb-3">Get Started</h4>
            <p className="text-sm text-muted-foreground mb-4">
              Ready to streamline your property operations?
            </p>
            <Button 
              onClick={onRequestConsultation}
              variant="outline"
              className="w-full md:w-auto"
            >
              Request a Consultation
            </Button>
          </div>
        </div>
        
        <div className="mt-8 pt-8 border-t border-border text-center text-sm text-muted-foreground">
          <p>
            © 2026. Built with <Heart className="inline h-4 w-4 text-brand-accent" /> using{' '}
            <a 
              href="https://caffeine.ai" 
              target="_blank" 
              rel="noopener noreferrer"
              className="underline hover:text-foreground transition-colors"
            >
              caffeine.ai
            </a>
          </p>
        </div>
      </div>
    </footer>
  );
}
