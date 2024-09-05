'use client';

import { useState, type PropsWithChildren } from 'react';
import { ClerkProvider, SignInButton, useAuth } from '@clerk/nextjs';
import { ConvexProviderWithClerk } from 'convex/react-clerk';
import {
  AuthLoading,
  Authenticated,
  ConvexReactClient,
  Unauthenticated
} from 'convex/react';

import Loading from '@/components/auth/loading';

const ConvexClientProvider = ({ children }: PropsWithChildren) => {
  const [convex] = useState(
    () => new ConvexReactClient(process.env.NEXT_PUBLIC_CONVEX_URL!)
  );

  return (
    <ClerkProvider
    // publishableKey={process.env.NEXT_PUBLIC_CLERK_PUBLISHABLE_KEY}
    >
      <ConvexProviderWithClerk client={convex} useAuth={useAuth}>
        <AuthLoading>
          <Loading />
        </AuthLoading>
        <Unauthenticated>
          <SignInButton />
        </Unauthenticated>
        <Authenticated>{children}</Authenticated>
      </ConvexProviderWithClerk>
    </ClerkProvider>
  );
};

export default ConvexClientProvider;
