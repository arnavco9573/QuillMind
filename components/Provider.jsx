"use client";

import { SessionProvider } from 'next-auth/react'
import React from 'react'

SessionProvider

const provider = ({children,session}) => {
  return (
    <SessionProvider session={session}>
      {children}
    </SessionProvider>
  )
}

export default provider
