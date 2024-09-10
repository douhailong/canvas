import { useState } from 'react';
import { useMutation } from 'convex/react';
import type { FunctionReference, OptionalRestArgs } from 'convex/server';

export const useApiMutation = <Mutation extends FunctionReference<'mutation'>>(
  mutationFunc: Mutation
) => {
  const [pending, setPending] = useState(false);
  const apiMutation = useMutation(mutationFunc);

  console.log(pending, '1111111111111');

  const mutate = (payload: OptionalRestArgs<Mutation>) => {
    setPending(true);
    return apiMutation(payload)
      .then(result => result)
      .catch(error => {
        throw new error();
      })
      .finally(() => setPending(false));
  };

  return { mutate, pending };
};
