'use client';

import React from 'react';
import { ClerkProvider, SignInButton, useAuth } from '@clerk/nextjs';
import { ConvexProviderWithClerk } from 'convex/react-clerk';
import {
  AuthLoading,
  Authenticated,
  ConvexReactClient,
  Unauthenticated
} from 'convex/react';
import Loading from '@/components/auth/loading';

type ConvexClientProviderProps = {
  children: React.ReactNode;
};

const ConvexClientProvider: React.FC<ConvexClientProviderProps> = ({
  children
}) => {
  const convex = new ConvexReactClient(process.env.NEXT_PUBLIC_CONVEX_URL!);

  return (
    <ClerkProvider
      publishableKey={process.env.NEXT_PUBLIC_CLERK_PUBLISHABLE_KEY}
    >
      <ConvexProviderWithClerk client={convex} useAuth={useAuth}>
        <Unauthenticated>
          <SignInButton />
        </Unauthenticated>
        <Authenticated>{children}</Authenticated>
        <AuthLoading>
          <Loading />
        </AuthLoading>
      </ConvexProviderWithClerk>
    </ClerkProvider>
  );
};

export default ConvexClientProvider;
