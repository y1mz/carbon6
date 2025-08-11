import Image from "next/image"
import Link from "next/link"

function HomeAboutSection({ avatar, content }) {

    return (
        <section id="about" className="w-full flex flex-col gap-5 py-5 mx-auto max-w-[900px]">
            <h2 className="font-mono text-3xl">About me</h2>
            <div className="px-5 py-2 rounded-[1rem] shadow-xl bg-primary-foreground flex">
                <div className="flex items-center">
                    <Image 
                        src="/example-picture.jpg"
                        height={400}
                        width={400}
                        alt="Author Picture"
                        className="w-20 h-20 md:w-32 md:h-32 rounded-full"
                    />
                    <div className="rounded-full w-1.5 h-3/4 bg-secondary/70 ml-4" />
                </div>
                <div className="ml-4 h-full my-auto">
                    <p className="font-mono text-md">
                        Hello world 
                        This is a multiline {"\n"}
                        text
                    </p>
                    <button className="p-2 bg-secondary rounded-[1rem]">
                        Read more
                    </button>
                </div>
            </div>
        </section>
    )
}

export default HomeAboutSection