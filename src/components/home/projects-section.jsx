import Image from "next/image"
import Link from "next/link"

function HomeProjectsSection({ projects }) {

    const ProjectCard = ({ project }) => {
        return (
            <div className="bg-card min-w-[300px] rounded-[1rem] p-5">

            </div>
        )
    }

    return (
        <section id="projects" className="w-full space-y-5 py-5 mx-auto max-w-[900px]">
            <h2 className="font-mono text-3xl">My Projects</h2>
            <div className="grid gap-5 grid-cols-1 md:grid-cols-2">
                <ProjectCard />
                <ProjectCard />
                <ProjectCard />
                <ProjectCard />
            </div>
        </section>
    )
}

export default HomeProjectsSection