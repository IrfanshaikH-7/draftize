import { auth } from "@clerk/nextjs";
import Orgcontrol from "./_components/org-controls"
import { startCase } from "lodash"

export async function generateMetadata() {
    const { orgSlug } = auth();

    return {
      title: startCase(orgSlug || 'organization'),
    };
};

const OrganizationIDLayout = ({children}: { children: React.ReactNode}) => {
  
  return (
    <>
    <Orgcontrol />
    { children }
    </>
  )
}

export default OrganizationIDLayout
