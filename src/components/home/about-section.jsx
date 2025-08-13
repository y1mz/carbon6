import Image from "next/image"
import Link from "next/link"

function HomeAboutSection({ avatar, content }) {

    return (
        <section id="about" className="w-full space-y-5 py-5 mx-auto max-w-[900px]">
            <h2 className="font-mono text-3xl">About me</h2>
            <div className="p-4 rounded-[1rem] shadow-xl bg-card">
                <div className="flex gap-5 items-center">
                    <Image 
                        src="/example-picture.jpg"
                        height={400}
                        width={400}
                        alt="Author Picture"
                        className="w-20 h-20 md:w-32 md:h-32 rounded-full"
                    />
                    <p className="font-mono text-md">
                        Lorem ipsum dolor sit amet, consectetur adipiscing elit. Sed nec metus mi. Cras a ante aliquet, eleifend arcu in, blandit nibh. Integer quis aliquam erat. Pellentesque elementum vel augue ut.
                    </p>
                </div>
                <div className="w-full flex">
                    <button className="p-3 bg-secondary rounded-[1rem] mt-3 ml-auto">
                        <Link href="/about">
                            Read More
                        </Link>
                    </button>
                    
                </div>
            </div>
        </section>
    )
}

export default HomeAboutSection