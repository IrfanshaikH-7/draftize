import React from 'react'
import Navbar from './_components/Navbar'

const DashboardLayout = ({
    children
}: {
    children: React.ReactNode
}) => {
  return (
    <main className='h-full'>
        <Navbar />
    {children}
    </main>
  )
}

export default DashboardLayout
