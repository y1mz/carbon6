import Link from "next/link"

function HomeBlogSection({ posts }) {

    const PostCard = ({ post }) => {
        return (
            <div className="bg-card min-w-[200px] rounded-[1rem] p-5">

            </div>
        )
    }

    return (
        <section id="posts" className="w-full space-y-5 py-5 mx-auto max-w-[900px]">
            <h2 className="font-mono text-3xl">Latest from blog</h2>
            <div className="grid gap-5 grid-cols-1 sm:grid-cols-2 md:grid-cols-3">
                <PostCard />
                <PostCard />
                <PostCard />
                <PostCard />
                <PostCard />
                <PostCard />
                <PostCard />
                <PostCard />
                <PostCard />
            </div>
            <div className="w-full flex">
                <Link href="/blog" className="ml-auto">
                    <button
                        className="p-3 bg-secondary rounded-[1rem] -mt-2 cursor-pointer"
                    >
                        More
                    </button>
                </Link>
            </div>
        </section>
    )
}

export default HomeBlogSection