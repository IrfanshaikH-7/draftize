import Navbar from "./_components/Navbar"
import TopComponent from "./_components/TopComponent"

const LandingLayout = ({
    children
}: {
    children: React.ReactNode
}) => {
    return(
        <main className="h-full">
            <TopComponent />
            {children}
        </main>
    )
}
export default LandingLayout