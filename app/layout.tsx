import type * as React from "react"
import type { Metadata } from "next"
import Providers from "../components/Providers"

export const metadata: Metadata = {
  title: "Sohrab Behdani",
  description: "My Personal Website",
  openGraph: {
    title: "Sohrab Behdani",
    description: "My Personal Website",
    type: "website",
  },
  twitter: {
    card: "summary_large_image",
    title: "Sohrab Behdani",
    description: "My Personal Website",
  },
}

export default function RootLayout({ children }: { children: React.ReactNode }) {
  return (
    <html lang="en">
      <body>
        <Providers>{children}</Providers>
      </body>
    </html>
  )
}



import './globals.css'
