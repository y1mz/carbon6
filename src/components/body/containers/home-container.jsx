import HomeHeroSection from "@/components/home/hero-section"
import HomeAboutSection from "@/components/home/about-section"
import HomeProjectsSection from "@/components/home/projects-section"
import HomeBlogSection from "@/components/home/blog-section"

function HomeContainer() {
    return (
        <main>
            <HomeHeroSection />
            <HomeAboutSection />
            <HomeProjectsSection />
            <HomeBlogSection />
        </main>
    )
}

export default HomeContainer