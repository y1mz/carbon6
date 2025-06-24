"use client"

import { Search } from "lucide-react"

function SearchButton() {

    return (
        <button
            className="p-2 hover:bg-white dark:hover:bg-white/10 rounded-sm 
            transition-all duration-300 cursor-pointer active:scale-80"
        >
            <Search className="h-5 w-5" />
        </button>
    )
}

export default SearchButton