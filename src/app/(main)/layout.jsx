import MainHeader from "@/components/body/header"
import MainFooter from "@/components/body/footer"

function MainLayout({ children }) {

    return (
        <>
            <MainHeader 
                SiteName="Batuhan Y. Yılmaz"
            />
            <main>
                {children}
            </main>
            <MainFooter 
                SiteName="Batuhan Y. Yılmaz"
                Description="Lorem İpsum sid dot color amet"
            />
        </>
    )

}

export default MainLayout