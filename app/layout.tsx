import { GeistSans } from 'geist/font/sans'
import './globals.css'
import { ThemeProvider } from "@/components/theme-provider"
import { Analytics } from '@vercel/analytics/react';
import { SpeedInsights } from "@vercel/speed-insights/next"

const defaultUrl = process.env.VERCEL_URL
  ? `https://${process.env.VERCEL_URL}`
  : 'http://localhost:3000'

  export const metadata = {
    metadataBase: new URL(defaultUrl),
    title: 'BuildBloc - Find Local Hackathons',
    description: 'Empowering local innovation through the promotion of hackathons and fostering builders\' communities on our platform!',
    openGraph: {
      title: 'BuildBloc - Find Local Hackathons',
      description: 'Empowering local innovation through the promotion of hackathons and fostering builders\' communities on our platform!',
      url: 'https://nextjs.org',
      siteName: 'BuildBloc - Find Local Hackathons',
      type: 'website',
      image: 'https://www.buildbloc.rocks/twitter-image.png'
    },
    twitter: {
      images: ['https://www.buildbloc.rocks/twitter-image.png'],
      cardType: 'summary_large_image',
    },
  }

export default function RootLayout({
  children,
}: {
  children: React.ReactNode
}) {
  return (
    <html lang="en" className={GeistSans.className}>
      <body className="">
        <ThemeProvider
              attribute="class"
              defaultTheme="system"
              enableSystem
              disableTransitionOnChange
            >
          <main className="dark:bg-neutral-950 dark:text-neutral-100 text-neutral-900 min-h-screen flex flex-col">
            {children}
            <Analytics />
            <SpeedInsights />
          </main>
        </ThemeProvider>
      </body>
    </html>
  )
}
