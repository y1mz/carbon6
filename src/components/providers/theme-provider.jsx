"use client"

import { ThemeProvider } from "next-themes"

function ThemesProvider({ children }) {
    return (
        <ThemeProvider
            attribute="class"
            defaultTheme="system"
            disableTransitionOnChange
        >
            {children}
        </ThemeProvider>
    )
}

export default ThemesProvider