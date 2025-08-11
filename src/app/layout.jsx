import "./globals.css"

import ThemesProvider from "@/components/providers/theme-provider"

export default function RootLayout({ children }) {
  return (
    <html lang="en" suppressHydrationWarning className="scroll-smooth">
      <body className="px-5 md:px-10">
        <ThemesProvider>
          {children}
        </ThemesProvider>
      </body>
    </html>
  )
}
