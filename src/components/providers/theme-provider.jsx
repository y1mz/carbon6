"use client"

import { ThemeProvider } from "next-themes"

function ThemeProvider({ children }) {
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

export default ThemeProvider