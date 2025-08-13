"use client"

import Link from "next/link"
import { Rss, Moon, Sun, Library, Info, Images } from "lucide-react"

import { useTheme } from "next-themes"

function MainHeader({ config }) {
    const { theme, setTheme } = useTheme()

    const handleChangeTheme = () => {
        if (theme === "dark") {
            setTheme("light")
        } else {
            setTheme("dark")
        }
    }

    return (
        <header className="z-10 w-full h-[80px] bg-card shadow-lg top-0 sticky py-2 px-5 md:px-10 flex justify-between items-center">
            <Link href="/">
                <button className="p-3 flex gap-1 cursor-pointer items-center dark:hover:bg-white/10 rounded-[1rem] transform-colors duration-300">
                    <div className="h-7 w-7 rounded-full bg-white"/>
                    <p className="text-xl font-bold hidden md:block">Hello world!</p>
                </button>
            </Link>
            <nav className="flex gap-1 items-center">
                <Link href="/gallery">
                    <button
                        className="p-3 cursor-pointer dark:hover:bg-white/10 rounded-[1rem] transform-colors duration-300 flex items-center"
                    >
                        <Images className="w-5 h-5 md:mr-1" />
                        <p className="font-bold text-lg hidden md:block">Gallery</p>
                    </button>
                </Link>
                <Link href="/blog">
                    <button
                        className="p-3 cursor-pointer dark:hover:bg-white/10 rounded-[1rem] transform-colors duration-300 flex items-center"
                    >
                        <Library className="w-5 h-5 md:mr-1" />
                        <p className="font-bold text-lg hidden md:block">Blog</p>
                    </button>
                </Link>
                <Link href="/about">
                    <button
                        className="p-3 cursor-pointer dark:hover:bg-white/10 rounded-[1rem] transform-colors duration-300 flex items-center"
                    >
                        <Info className="w-5 h-5 md:mr-1" />
                        <p className="font-bold text-lg hidden md:block">About</p>
                    </button>
                </Link>
                <Link href="/feed.xml">
                    <button
                        className="p-3 cursor-pointer dark:hover:bg-white/10 rounded-[1rem] transform-colors duration-300"
                    >
                        <Rss className="text-orange-400 w-5 h-5" />
                    </button>
                </Link>
                <button
                    className="p-3 cursor-pointer dark:hover:bg-white/10 rounded-[1rem] transform-colors duration-300"
                    onClick={() => handleChangeTheme()}
                >
                    <Moon className="hidden dark:block w-5 h-5" />
                    <Sun className="block dark:hidden w-5 h-5" />
                </button>
            </nav>
        </header>
    )
}

export default MainHeader