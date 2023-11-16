import Orgcontrol from "./_components/org-controls"

const OrganizationIDLayout = ({children}: { children: React.ReactNode}) => {

  return (
    <>
    <Orgcontrol />
    {children}
    </>
  )
}

export default OrganizationIDLayout
