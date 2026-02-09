import { useState } from 'react';
import { Button } from './ui/button';
import { Input } from './ui/input';
import { Label } from './ui/label';
import { Textarea } from './ui/textarea';
import { Checkbox } from './ui/checkbox';
import { useSubmitConsultationRequest } from '../hooks/useQueries';
import { CheckCircle, Loader2 } from 'lucide-react';

interface ConsultationRequestFormProps {
  onSuccess: () => void;
}

export default function ConsultationRequestForm({ onSuccess }: ConsultationRequestFormProps) {
  const [formData, setFormData] = useState({
    name: '',
    email: '',
    phone: '',
    company: '',
    cityState: '',
    message: '',
    consent: false,
  });

  const [errors, setErrors] = useState<Record<string, string>>({});
  const [isSubmitted, setIsSubmitted] = useState(false);

  const submitMutation = useSubmitConsultationRequest();

  const validateForm = () => {
    const newErrors: Record<string, string> = {};

    if (!formData.name.trim()) {
      newErrors.name = 'Name is required';
    }

    if (!formData.email.trim()) {
      newErrors.email = 'Email is required';
    } else if (!/^[^\s@]+@[^\s@]+\.[^\s@]+$/.test(formData.email)) {
      newErrors.email = 'Please enter a valid email address';
    }

    if (!formData.message.trim()) {
      newErrors.message = 'Please tell us about your needs';
    }

    if (!formData.consent) {
      newErrors.consent = 'Please acknowledge to continue';
    }

    setErrors(newErrors);
    return Object.keys(newErrors).length === 0;
  };

  const handleSubmit = async (e: React.FormEvent) => {
    e.preventDefault();

    if (!validateForm()) {
      return;
    }

    try {
      // Combine optional fields into message
      let fullMessage = formData.message;
      if (formData.company) {
        fullMessage = `Company/Portfolio: ${formData.company}\n\n${fullMessage}`;
      }
      if (formData.cityState) {
        fullMessage = `Location: ${formData.cityState}\n\n${fullMessage}`;
      }

      await submitMutation.mutateAsync({
        name: formData.name,
        email: formData.email,
        phone: formData.phone || '',
        message: fullMessage,
      });

      setIsSubmitted(true);
      
      // Auto-close after 3 seconds
      setTimeout(() => {
        onSuccess();
      }, 3000);
    } catch (error) {
      setErrors({ submit: 'Failed to submit request. Please try again.' });
    }
  };

  if (isSubmitted) {
    return (
      <div className="py-8 text-center">
        <div className="w-16 h-16 rounded-full bg-brand-accent/10 flex items-center justify-center mx-auto mb-4">
          <CheckCircle className="w-8 h-8 text-brand-accent" />
        </div>
        <h3 className="text-xl font-bold mb-2">Request Submitted Successfully</h3>
        <p className="text-muted-foreground mb-4">
          Thank you for your interest in PropertyOps. We'll review your request and get back to you shortly.
        </p>
        <Button onClick={onSuccess} variant="outline">
          Close
        </Button>
      </div>
    );
  }

  return (
    <form onSubmit={handleSubmit} className="space-y-6">
      <div className="space-y-4">
        <div>
          <Label htmlFor="name">
            Name <span className="text-destructive">*</span>
          </Label>
          <Input
            id="name"
            value={formData.name}
            onChange={(e) => setFormData({ ...formData, name: e.target.value })}
            className={errors.name ? 'border-destructive' : ''}
            disabled={submitMutation.isPending}
          />
          {errors.name && <p className="text-sm text-destructive mt-1">{errors.name}</p>}
        </div>

        <div>
          <Label htmlFor="email">
            Email <span className="text-destructive">*</span>
          </Label>
          <Input
            id="email"
            type="email"
            value={formData.email}
            onChange={(e) => setFormData({ ...formData, email: e.target.value })}
            className={errors.email ? 'border-destructive' : ''}
            disabled={submitMutation.isPending}
          />
          {errors.email && <p className="text-sm text-destructive mt-1">{errors.email}</p>}
        </div>

        <div>
          <Label htmlFor="phone">Phone (optional)</Label>
          <Input
            id="phone"
            type="tel"
            value={formData.phone}
            onChange={(e) => setFormData({ ...formData, phone: e.target.value })}
            disabled={submitMutation.isPending}
          />
        </div>

        <div>
          <Label htmlFor="company">Company/Portfolio (optional)</Label>
          <Input
            id="company"
            value={formData.company}
            onChange={(e) => setFormData({ ...formData, company: e.target.value })}
            disabled={submitMutation.isPending}
          />
        </div>

        <div>
          <Label htmlFor="cityState">City/State (optional)</Label>
          <Input
            id="cityState"
            value={formData.cityState}
            onChange={(e) => setFormData({ ...formData, cityState: e.target.value })}
            placeholder="e.g., Austin, TX"
            disabled={submitMutation.isPending}
          />
        </div>

        <div>
          <Label htmlFor="message">
            Tell us about your property operations needs <span className="text-destructive">*</span>
          </Label>
          <Textarea
            id="message"
            value={formData.message}
            onChange={(e) => setFormData({ ...formData, message: e.target.value })}
            rows={4}
            className={errors.message ? 'border-destructive' : ''}
            disabled={submitMutation.isPending}
          />
          {errors.message && <p className="text-sm text-destructive mt-1">{errors.message}</p>}
        </div>

        <div className="flex items-start gap-2">
          <Checkbox
            id="consent"
            checked={formData.consent}
            onCheckedChange={(checked) => setFormData({ ...formData, consent: checked === true })}
            disabled={submitMutation.isPending}
            className={errors.consent ? 'border-destructive' : ''}
          />
          <Label htmlFor="consent" className="text-sm leading-relaxed cursor-pointer">
            I acknowledge that PropertyOps will use the information provided to respond to my service inquiry.
          </Label>
        </div>
        {errors.consent && <p className="text-sm text-destructive">{errors.consent}</p>}
      </div>

      {errors.submit && (
        <div className="p-3 bg-destructive/10 border border-destructive rounded-md">
          <p className="text-sm text-destructive">{errors.submit}</p>
        </div>
      )}

      <Button
        type="submit"
        className="w-full bg-brand-primary hover:bg-brand-primary-dark"
        disabled={submitMutation.isPending}
      >
        {submitMutation.isPending ? (
          <>
            <Loader2 className="mr-2 h-4 w-4 animate-spin" />
            Submitting...
          </>
        ) : (
          'Submit Request'
        )}
      </Button>
    </form>
  );
}
