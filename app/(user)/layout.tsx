import { GeistSans } from 'geist/font/sans'
import '@/app/globals.css'
import { ThemeProvider } from "@/components/theme-provider"

const defaultUrl = process.env.VERCEL_URL
  ? `https://${process.env.VERCEL_URL}`
  : 'http://localhost:3000'

export const metadata = {
  metadataBase: new URL(defaultUrl),
  title: 'BuildBloc - Find Local Hackathons',
  description: 'Empowering local innovation through the promotion of hackathons and fostering builders\' communities on our platform ',
}

import Header from "@/components/Header";

export default function RootLayout({
  children,
}: {
  children: React.ReactNode
}) {
  return (
    <>
            <Header/>
            {children}
    </>
  )
}
