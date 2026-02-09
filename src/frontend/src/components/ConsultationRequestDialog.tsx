import { Dialog, DialogContent, DialogHeader, DialogTitle, DialogDescription } from './ui/dialog';
import ConsultationRequestForm from './ConsultationRequestForm';

interface ConsultationRequestDialogProps {
  open: boolean;
  onOpenChange: (open: boolean) => void;
}

export default function ConsultationRequestDialog({ open, onOpenChange }: ConsultationRequestDialogProps) {
  return (
    <Dialog open={open} onOpenChange={onOpenChange}>
      <DialogContent className="sm:max-w-[600px] max-h-[90vh] overflow-y-auto">
        <DialogHeader>
          <DialogTitle className="text-2xl">Request a Service Consultation</DialogTitle>
          <DialogDescription>
            Tell us about your property operations needs and we'll get back to you promptly.
          </DialogDescription>
        </DialogHeader>
        <ConsultationRequestForm onSuccess={() => onOpenChange(false)} />
      </DialogContent>
    </Dialog>
  );
}
