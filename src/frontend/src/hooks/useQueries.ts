import { useMutation, useQueryClient } from '@tanstack/react-query';
import { useActor } from './useActor';

interface SubmitConsultationRequestParams {
  name: string;
  email: string;
  phone: string;
  message: string;
}

export function useSubmitConsultationRequest() {
  const { actor } = useActor();
  const queryClient = useQueryClient();

  return useMutation({
    mutationFn: async (params: SubmitConsultationRequestParams) => {
      if (!actor) {
        throw new Error('Actor not available');
      }
      
      await actor.submitConsultationRequest(
        params.name,
        params.email,
        params.phone,
        params.message
      );
    },
    onSuccess: () => {
      // Invalidate consultation requests query if we add an admin view later
      queryClient.invalidateQueries({ queryKey: ['consultationRequests'] });
    },
  });
}
