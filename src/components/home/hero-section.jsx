import Image from "next/image"
import Link from "next/link"

import { ChevronDown, Linkedin, Instagram, Twitter, Github, Mail, MessageCircle } from "lucide-react"

function HomeHeroSection({ conf, socials, images }) {
    return (
        <section className="w-full h-[90vh] relative flex flex-col justify-center gap-2">
            <div>
                <p className="text-2xl text-primary md:text-4xl lg:text-6xl">Hi there 👋</p>
                <h1 className="font-mono text-secondary text-4xl md:text-6xl lg:text-8xl">I'm Batuhan!</h1>
            </div>
            <div className="flex gap-2">
                <button className="group p-2 rounded-[1rem] hover:bg-accent-foreground transition-colors duration-300">
                    <Mail className="h-5 w-5 md:h-7 md:w-7 group-hover:text-accent" />
                </button>
                <button className="group p-2 rounded-[1rem] hover:bg-accent-foreground transition-colors duration-300">
                    <MessageCircle className="h-5 w-5 md:h-7 md:w-7 group-hover:text-accent" />
                </button>
                <button className="group p-2 rounded-[1rem] hover:bg-accent-foreground transition-colors duration-300">
                    <Github className="h-5 w-5 md:h-7 md:w-7 group-hover:text-accent" />
                </button>
                <button className="group p-2 rounded-[1rem] hover:bg-accent-foreground transition-colors duration-300">
                    <Linkedin className="h-5 w-5 md:h-7 md:w-7 group-hover:text-accent" />
                </button>
                <button className="group p-2 rounded-[1rem] hover:bg-accent-foreground transition-colors duration-300">
                    <Twitter className="h-5 w-5 md:h-7 md:w-7 group-hover:text-accent" />
                </button>
                <button className="group p-2 rounded-[1rem] hover:bg-accent-foreground transition-colors duration-300">
                    <Instagram className="h-5 w-5 md:h-7 md:w-7 group-hover:text-accent" />
                </button>
            </div>
            <div className="absolute inset-x-0 bottom-16 flex justify-center">
                <button 
                    className="transition-all animate-bounce duration-300 rounded-full"
                >
                    <Link href="/#about">
                        <ChevronDown className="h-8 w-8" />
                    </Link>
                </button>
            </div>
        </section>
    )
}

export default HomeHeroSection