import ModeSwitch from "./header/mode-switch"
import SearchButton from "./header/search-button"
import MenuButton from "./header/menu-button"

import Image from "next/image"
import Link from "next/link"

function MainHeader({ Avatar, SiteName, Buttons }) {
    
    function HeaderButton({ title, href }) {
        return (
            <Link href={href} asChild>
                <button className="p-2 hover:bg-white dark:hover:bg-white/10 rounded-sm 
            transition-all duration-300 cursor-pointer active:scale-80 font-semibold text-md">
                    {title}
                </button>
            </Link>
        )
    }

    return (
        <header
            className="w-full h-[50px] md:h-[80px] shadow-md
            bg-[#F6F2EE] dark:bg-stone-700
            px-5 py-3 md:px-10 md:py-8 transition-all duration-300 sticky top-0"
        >
            <div className="w-full h-full items-center flex justify-between">
                <Link href={"/"} className="flex gap-1 group transition-all duration-300">
                    {Avatar && (
                        <Image src={Avatar.src} 
                            width={100} height={100} alt="Logo"
                            className="h-10 w-10 rounded-full group-active:scale-95"
                        />
                    )}
                    <p className="font-semibold text-lg group-active:scale-95">
                        {SiteName}
                    </p>
                </Link>
                <div className="flex gap-1">
                    <div className="hidden md:flex gap-2">
                        <HeaderButton title="Test1" href={"/"} />
                        <HeaderButton title="Test3" href={"/"} />
                        <HeaderButton title="Test2" href={"/"} />
                    </div>
                    <div className="flex gap-1">
                        <ModeSwitch />
                        <SearchButton />
                        <MenuButton />
                    </div>
                </div>
            </div>
        </header>
    )
}

export default MainHeader
