import MainHeader from "@/components/body/header"

function PagesLayout({ children }) {
    return (
        <>
            <MainHeader />
            <section className="px-5 md:px-10">
                {children}
            </section>
        </>
    )
}

export default PagesLayout