// app/providers.tsx
'use client'
import {NextUIProvider} from '@nextui-org/react'
import { ThemeProvider } from 'next-themes'
import * as React from "react";

export function Providers({children}) {
  return (
    <ThemeProvider attribute ="class">
      <NextUIProvider>
      {children}
     </NextUIProvider>
  </ThemeProvider>
  )
}