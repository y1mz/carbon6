"use client"

import { useTheme } from "next-themes"
import { Sun, Moon } from "lucide-react"

function ModeSwitch() {
    const { theme, setTheme } = useTheme()

    const handleModeSwitch = () => {
        if (theme === "light") {
            setTheme("dark")
        } else {
            setTheme("light")
        }
    }

    return (
        <button 
            onClick={() => handleModeSwitch()}
            className="p-2 hover:bg-white dark:hover:bg-white/10 rounded-sm 
            transition-all duration-300 cursor-pointer active:scale-80"
        >
            {theme === "light" && (
                <Moon className="h-5 w-5" />
            )}
            {theme === "dark" && (
                <Sun className="h-5 w-5" />
            )}
        </button>
    )
}

export default ModeSwitch