"use client"

import { SquareMenu } from "lucide-react"

function MenuButton() {

    return (
        <button
            className="md:hidden p-2 hover:bg-white dark:hover:bg-white/10 rounded-sm 
            transition-all duration-300 cursor-pointer active:scale-80"
        >
            <SquareMenu className="h-5 w-5" />
        </button>
    )
}

export default MenuButton