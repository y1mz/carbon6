import "./globals.css"

import { ThemeProvider } from "next-themes"

export const metadata = {
  title: "Carbon6",
  description: "",
};

export default function RootLayout({ children }) {
  return (
    <html lang="en" suppressHydrationWarning>
        <body
          className="bg-[#E1DCD8] dark:bg-stone-800"
        >
          <ThemeProvider
            attribute="class"
            defaultTheme="system"
            disableTransitionOnChange
      >
        {children}
      </ThemeProvider>
        </body>
    </html>
  )
}
