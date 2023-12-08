import { db } from '@/lib/db'
import { auth } from '@clerk/nextjs'
import { Board } from '@prisma/client'
import React from 'react'

interface BoardNavbarProps {
    data: Board
}

const BoardNavbar = async({data}: BoardNavbarProps) => {

  return (
    <div className='w-full h-14 z-[40] bg-black/50 fixed top-14 flex items-center px-6 gap-x-4 text-white'>
      board navbar
    </div>
  )
}

export default BoardNavbar
