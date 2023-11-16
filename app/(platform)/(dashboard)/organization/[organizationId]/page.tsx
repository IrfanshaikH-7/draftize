import { auth } from '@clerk/nextjs'

const OrganizationIDPage = () => {
    const { userId, orgId }  = auth()
  return (
    <div>
      Organization: {orgId}
    </div>
  )
}

export default OrganizationIDPage
