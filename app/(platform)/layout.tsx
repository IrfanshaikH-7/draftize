import { ClerkProvider } from '@clerk/nextjs';
import React from 'react'
import { Toaster } from 'sonner'

const Platformlayout = ({
    children
}: {
    children: React.ReactNode;
}) => {
  return (
    <ClerkProvider>
      <Toaster/>
      {children  }
    </ClerkProvider>
  )
}

export default Platformlayout
