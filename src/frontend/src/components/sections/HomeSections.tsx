import { CheckCircle, FileText, Camera, ClipboardCheck, Clock, Shield, TrendingUp } from 'lucide-react';
import { Button } from '../ui/button';

interface HeroSectionProps {
  onRequestConsultation: () => void;
}

export function HeroSection({ onRequestConsultation }: HeroSectionProps) {
  return (
    <section className="relative overflow-hidden bg-gradient-to-br from-brand-navy via-brand-slate to-brand-navy">
      <div 
        className="absolute inset-0 opacity-10"
        style={{
          backgroundImage: 'url(/assets/generated/hero-bg.dim_2400x1200.png)',
          backgroundSize: 'cover',
          backgroundPosition: 'center',
        }}
      />
      
      <div className="container relative py-24 md:py-32">
        <div className="max-w-3xl">
          <h1 className="text-4xl md:text-5xl lg:text-6xl font-bold text-white mb-6 leading-tight">
            Standardized Property Operations. Done Right.
          </h1>
          <p className="text-lg md:text-xl text-white/90 mb-8 leading-relaxed">
            PropertyOps delivers consistent, documented property services through systemized workflows, 
            digital checklists, and vetted local contractors.
          </p>
          <Button 
            onClick={onRequestConsultation}
            size="lg"
            className="bg-brand-accent hover:bg-brand-accent-dark text-white font-semibold px-8 py-6 text-lg"
          >
            Request a Service Consultation
          </Button>
        </div>
      </div>
    </section>
  );
}

export function HowItWorksSection() {
  const steps = [
    {
      number: '01',
      title: 'Submit a Request',
      description: 'Clients submit a service request for rental turnover, repairs, or maintenance.',
      icon: FileText,
    },
    {
      number: '02',
      title: 'Systemized Execution',
      description: 'PropertyOps dispatches a qualified local contractor using standardized scopes, digital checklists, and defined service timelines.',
      icon: CheckCircle,
    },
    {
      number: '03',
      title: 'Documented Delivery',
      description: 'Every job includes photo documentation, checklist verification, and a clear service report delivered to the client.',
      icon: Camera,
    },
  ];

  return (
    <section className="py-20 bg-background">
      <div className="container">
        <div className="text-center mb-16">
          <h2 className="text-3xl md:text-4xl font-bold mb-4">How It Works</h2>
          <p className="text-lg text-muted-foreground max-w-2xl mx-auto">
            Our streamlined process ensures consistent property operations services across all markets.
          </p>
        </div>

        <div className="mb-12">
          <img 
            src="/assets/generated/diagram-how-it-works.dim_1600x900.png" 
            alt="PropertyOps workflow diagram"
            className="w-full max-w-4xl mx-auto rounded-lg shadow-lg"
          />
        </div>

        <div className="grid md:grid-cols-3 gap-8 max-w-5xl mx-auto">
          {steps.map((step) => (
            <div key={step.number} className="relative">
              <div className="flex flex-col items-center text-center">
                <div className="w-16 h-16 rounded-full bg-brand-accent/10 flex items-center justify-center mb-4">
                  <step.icon className="w-8 h-8 text-brand-accent" />
                </div>
                <div className="text-sm font-bold text-brand-accent mb-2">{step.number}</div>
                <h3 className="text-xl font-bold mb-3">{step.title}</h3>
                <p className="text-muted-foreground leading-relaxed">{step.description}</p>
              </div>
            </div>
          ))}
        </div>
      </div>
    </section>
  );
}

export function TechnologySystemsSection() {
  return (
    <section className="py-20 bg-muted/30">
      <div className="container">
        <div className="max-w-4xl mx-auto">
          <div className="text-center mb-12">
            <h2 className="text-3xl md:text-4xl font-bold mb-6">
              Technology That Supports Operations — Not Replaces People
            </h2>
          </div>
          
          <div className="bg-card border border-border rounded-lg p-8 md:p-10">
            <div className="flex items-start gap-4 mb-6">
              <img 
                src="/assets/generated/icon-checklist.dim_256x256.png" 
                alt="Digital checklist icon"
                className="w-12 h-12 flex-shrink-0"
              />
              <div>
                <p className="text-lg leading-relaxed mb-4">
                  PropertyOps uses internal automation and data management tools to support scheduling, 
                  documentation review, and quality control.
                </p>
                <p className="text-lg leading-relaxed mb-4">
                  These systems assist our <strong>U.S.-based operations team</strong> in managing job volume, 
                  contractor performance, and service consistency.
                </p>
                <p className="text-lg leading-relaxed text-muted-foreground">
                  Technology enhances efficiency and reliability but does not replace human decision-making or labor.
                </p>
              </div>
            </div>
          </div>
        </div>
      </div>
    </section>
  );
}

export function ServicesSection() {
  const services = [
    {
      title: 'Rental Turnover Condition Reports',
      description: 'Comprehensive property documentation with photo evidence and detailed condition assessments for rental turnovers.',
      features: ['Fixed scope', 'Digital checklists', 'Photo documentation', 'Fast turnaround'],
      icon: Camera,
    },
    {
      title: 'Minor Turnover Repairs & Punch Lists',
      description: 'Standardized repair services for rental turnovers including punch list completion and quality verification.',
      features: ['Fixed scope', 'Digital checklists', 'Photo documentation', 'Fast turnaround'],
      icon: CheckCircle,
    },
    {
      title: 'Exterior Maintenance Packages',
      description: 'Scheduled exterior property maintenance services delivered with consistent quality and documented completion.',
      features: ['Fixed scope', 'Digital checklists', 'Photo documentation', 'Fast turnaround'],
      icon: Shield,
    },
  ];

  return (
    <section className="py-20 bg-background">
      <div className="container">
        <div className="text-center mb-16">
          <h2 className="text-3xl md:text-4xl font-bold mb-4">Property Operations Services</h2>
          <p className="text-lg text-muted-foreground max-w-2xl mx-auto">
            Three core services designed for property managers, landlords, and real estate operators.
          </p>
        </div>

        <div className="grid md:grid-cols-3 gap-8">
          {services.map((service) => (
            <div key={service.title} className="bg-card border border-border rounded-lg p-6 hover:shadow-lg transition-shadow">
              <div className="w-12 h-12 rounded-lg bg-brand-accent/10 flex items-center justify-center mb-4">
                <service.icon className="w-6 h-6 text-brand-accent" />
              </div>
              <h3 className="text-xl font-bold mb-3">{service.title}</h3>
              <p className="text-muted-foreground mb-4 leading-relaxed">{service.description}</p>
              <ul className="space-y-2">
                {service.features.map((feature) => (
                  <li key={feature} className="flex items-center gap-2 text-sm">
                    <CheckCircle className="w-4 h-4 text-brand-accent flex-shrink-0" />
                    <span>{feature}</span>
                  </li>
                ))}
              </ul>
            </div>
          ))}
        </div>
      </div>
    </section>
  );
}

export function QualityControlSection() {
  return (
    <section className="py-20 bg-muted/30">
      <div className="container">
        <div className="max-w-4xl mx-auto">
          <div className="grid md:grid-cols-2 gap-8 items-center">
            <div>
              <img 
                src="/assets/generated/icon-qc-clipboard.dim_256x256.png" 
                alt="Quality control clipboard icon"
                className="w-32 h-32 mx-auto md:mx-0"
              />
            </div>
            <div>
              <h2 className="text-3xl md:text-4xl font-bold mb-6">Built-In Quality Control</h2>
              <p className="text-lg leading-relaxed mb-4">
                Every service is reviewed internally using standardized checklists and photo verification.
              </p>
              <p className="text-lg leading-relaxed text-muted-foreground">
                Jobs are approved, returned for correction, or escalated before client delivery — 
                ensuring consistent quality across all properties.
              </p>
            </div>
          </div>
        </div>
      </div>
    </section>
  );
}

export function ContractorModelSection() {
  return (
    <section className="py-20 bg-background">
      <div className="container">
        <div className="max-w-4xl mx-auto">
          <div className="text-center mb-12">
            <h2 className="text-3xl md:text-4xl font-bold mb-6">Contractor-Native by Design</h2>
          </div>
          
          <div className="bg-card border border-border rounded-lg p-8 md:p-10">
            <div className="flex items-start gap-4">
              <img 
                src="/assets/generated/icon-shield-check.dim_256x256.png" 
                alt="Shield check icon"
                className="w-12 h-12 flex-shrink-0"
              />
              <div>
                <p className="text-lg leading-relaxed mb-4">
                  PropertyOps works with independent local contractors who operate their own businesses.
                </p>
                <p className="text-lg leading-relaxed mb-4">
                  Our systems provide clear scopes, documentation requirements, and performance tracking 
                  while maintaining contractor independence.
                </p>
                <p className="text-lg leading-relaxed text-muted-foreground">
                  This model allows PropertyOps to scale efficiently across multiple markets.
                </p>
              </div>
            </div>
          </div>
        </div>
      </div>
    </section>
  );
}

export function TrustCalloutsSection() {
  const callouts = [
    {
      icon: FileText,
      title: 'Systemized SOPs',
      description: 'Standardized operating procedures for every service',
    },
    {
      icon: Camera,
      title: 'Digital Documentation',
      description: 'Photo verification on every job',
    },
    {
      icon: Shield,
      title: 'Fixed Pricing',
      description: 'Transparent, predictable service costs',
    },
    {
      icon: Clock,
      title: 'Fast Response Times',
      description: 'Efficient scheduling and execution',
    },
    {
      icon: TrendingUp,
      title: 'Multi-City Scalability',
      description: 'Consistent service across markets',
    },
    {
      icon: ClipboardCheck,
      title: 'Quality Assurance',
      description: 'Built-in review and verification',
    },
  ];

  return (
    <section className="py-20 bg-muted/30">
      <div className="container">
        <div className="text-center mb-16">
          <h2 className="text-3xl md:text-4xl font-bold mb-4">Why PropertyOps</h2>
          <p className="text-lg text-muted-foreground max-w-2xl mx-auto">
            Reliable property operations services built on documented processes and consistent execution.
          </p>
        </div>

        <div className="grid sm:grid-cols-2 lg:grid-cols-3 gap-6 max-w-5xl mx-auto">
          {callouts.map((callout) => (
            <div key={callout.title} className="bg-card border border-border rounded-lg p-6 text-center">
              <div className="w-12 h-12 rounded-full bg-brand-accent/10 flex items-center justify-center mx-auto mb-4">
                <callout.icon className="w-6 h-6 text-brand-accent" />
              </div>
              <h3 className="font-bold mb-2">{callout.title}</h3>
              <p className="text-sm text-muted-foreground">{callout.description}</p>
            </div>
          ))}
        </div>
      </div>
    </section>
  );
}

export function FranchiseTeaserSection() {
  return (
    <section className="py-20 bg-brand-navy text-white">
      <div className="container">
        <div className="max-w-4xl mx-auto text-center">
          <h2 className="text-3xl md:text-4xl font-bold mb-6">Built to Scale Nationwide</h2>
          <div className="space-y-4 text-lg leading-relaxed mb-8">
            <p>
              PropertyOps is designed for multi-city expansion and future franchising.
            </p>
            <p>
              Our proprietary operating system includes standardized workflows, digital checklists, 
              documentation processes, and performance tracking tools that allow consistent service 
              delivery across markets.
            </p>
            <p className="text-brand-accent font-semibold">
              Franchise opportunities coming soon.
            </p>
          </div>
        </div>
      </div>
    </section>
  );
}
