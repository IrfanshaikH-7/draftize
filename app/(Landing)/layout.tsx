import Navbar from "./_components/Navbar"

const LandingLayout = ({
    children
}: {
    children: React.ReactNode
}) => {
    return(
        <main className="h-full">
            <Navbar />
            {children}
        </main>
    )
}
export default LandingLayout