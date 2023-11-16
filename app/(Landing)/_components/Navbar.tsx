import Logo from '@/components/logo'
import { Button } from '@/components/ui/button'
import Link from 'next/link'
import React from 'react'

const Navbar = () => {
  return (
    <div className='fixed top-0 w-full h-14 px-4 border-b shadow-sm bg-neutral-50 flex items-center'>
    <div className='md:max-w-screen-2xl mx-auto flex items-center w-full justify-between'>
        <Logo />
        <div className='space-x-4  md:block md:w-auto flex items-cenr justify-between w-full'>
            <Button size='sm' variant='outline' asChild>
                <Link href='/sign-in'>
                    Login
                </Link>
            </Button>
            <Button size='sm' asChild>
            <Link href='/sign-in'>
            Get Draftize for free
                </Link>
            </Button>
        </div>
    </div>
    </div>
  ) 
}

export default Navbar
