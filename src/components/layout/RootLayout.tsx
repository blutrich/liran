import { ReactNode } from 'react'
import { MainNav } from './MainNav'

interface RootLayoutProps {
  children: ReactNode
}

export function RootLayout({ children }: RootLayoutProps) {
  return (
    <div className="min-h-screen bg-background font-sans antialiased" dir="rtl">
      <div className="relative flex min-h-screen flex-col">
        <header className="sticky top-0 z-50 w-full border-b bg-background/95 backdrop-blur supports-[backdrop-filter]:bg-background/60">
          <div className="container flex h-14 items-center">
            <MainNav />
          </div>
        </header>
        <main className="flex-1">{children}</main>
        <footer className="border-t py-6 md:py-0">
          <div className="container flex flex-col items-center justify-between gap-4 md:h-24 md:flex-row">
            <p className="text-center text-sm leading-loose text-muted-foreground md:text-right">
              נבנה על ידי{" "}
              <a
                href="https://github.com/liran"
                target="_blank"
                rel="noreferrer"
                className="font-medium underline underline-offset-4"
              >
                לירן
              </a>
              . קוד פתוח על{" "}
              <a
                href="https://github.com/liran/recommendations"
                target="_blank"
                rel="noreferrer"
                className="font-medium underline underline-offset-4"
              >
                GitHub
              </a>
              .
            </p>
          </div>
        </footer>
      </div>
    </div>
  )
} 