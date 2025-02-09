import type * as React from "react"
import type { Metadata } from "next"
import Providers from "../components/Providers"

export const metadata: Metadata = {
  title: "Your Name - Portfolio",
  description: "Professional portfolio showcasing skills and projects",
  openGraph: {
    title: "Your Name - Portfolio",
    description: "Professional portfolio showcasing skills and projects",
    type: "website",
  },
  twitter: {
    card: "summary_large_image",
    title: "Your Name - Portfolio",
    description: "Professional portfolio showcasing skills and projects",
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