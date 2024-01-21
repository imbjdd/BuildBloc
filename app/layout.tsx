import { GeistSans } from 'geist/font/sans'
import './globals.css'
import { ThemeProvider } from "@/components/theme-provider"

const defaultUrl = process.env.VERCEL_URL
  ? `https://${process.env.VERCEL_URL}`
  : 'http://localhost:3000'

  export const metadata = {
    metadataBase: new URL(defaultUrl),
    title: 'BuildBloc - Find Local Hackathons',
    description: 'Empowering local innovation through the promotion of hackathons and fostering builders\' communities on our platform ',
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
          </main>
        </ThemeProvider>
      </body>
    </html>
  )
}
