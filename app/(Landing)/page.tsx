import Logo from '@/components/logo'
import { Button } from '@/components/ui/button'
import { Sheet, SheetContent, SheetTrigger } from '@/components/ui/sheet'
import { MenuIcon } from 'lucide-react'
import Image from 'next/image'
import Link from 'next/link'

export default function Home() {
  return (
    <section className='h-full w-full flex justify-center items-center'>
      {/* <div className='p-8 bg-black h-fit w-fit text-white rounded-lg '>
        <Link href='/sign-up'>Signup</Link>
      </div> */}
      <div className='h-screen w-full p-4'>
        <div className='h-full w-full bg-blue-100 rounded-2xl relative overflow-hidden pr-8 pl-4'>
          <div className='absolute h-12 w-80 bg-white right-0  after:absolute after:h-8 after:w-8 after:-left-8 after:shadow-white after:shadow-[12px_0_0_0]  rounded-bl-2xl after:rounded-tr-2xl after:bg-blue-100 
        before:absolute before:h-12 before:w-12 before:bg-blue-100 before:shadow-[35px_0_0_0] before:shadow-white before:top-12 before:right-0 before:rounded-tr-2xl flex '
          >
            <Button size='sm' asChild className='self-center w-4/5 rounded-2xl mx-auto'>
              <Link href='/sign-in'>
                Get Draftize for free
              </Link>
            </Button>
          </div>
          {/* small device */}
          <Sheet>
            <SheetTrigger className='py-2 flex lg:hidden'>
              <MenuIcon className='h-6 w-6 text-neutral-800'/>
            </SheetTrigger>
            <SheetContent side='left' className='w-full '>
                  <div>
                  <Logo />
              <div className='flex flex-col gap-1 w-full items-start mt-4'>
                <Link
                className='py-1 px-2 w-full hover:bg-blue-50 rounded-lg text-sm'
                href='/sign-in'>
                  About
                </Link>
                <Link
                className='py-1 px-2 w-full hover:bg-blue-50 rounded-lg text-sm'
                href='/sign-in'>
                  pricing
                </Link>
              </div> 
                  </div> 
            </SheetContent>
          </Sheet>
          {/* Large device */}
          <div className=' h-full w-4/5 lg:flex hidden '>
            <div className='h-full w-3/5  p-1 '>
              <div className='h-full w-full px-4 py-1 rounded-2xl bg-white shadow-sm flex flex-col justify-between relative'>
              <div className='flex '>
              <Logo />
              
              <Button size='sm' variant='outline' asChild className=' absolute px-6 rounded-2xl z-10 -right-12 p-5 border-8 border-blue-100 top-[8%]' >
                <Link href='/sign-in'>
                  About
                </Link>
              </Button>

              <Button size='sm' variant='outline' asChild className=' absolute px-6 rounded-2xl z-10 -right-6 p-5 border-8 border-blue-100 top-[18%]' >
                <Link href='/sign-in'>
                  pricing
                </Link>
              </Button>
           
            </div>
                
                <div className=' self-center'>
                  <p className='text-black text-6xl leading-snug font-semibold'>
                    <span className='text-pink-400'>
                      Manage {' '}
                    </span>
                    your Tasks
                    <br />
                    Easily & <span className='text-blue-400'>Simply!</span>
                  </p>
                  <p className='text-2xl ml-1 mt-4'>Draftize make team move <span className='bg-gradient-to-r from-pink-500 to-blue-500 py-1 px-3 rounded-bl-lg rounded-tr-lg'>Work forward</span> </p>
                </div>

                <Button size='sm' className='w-fit m-2'>Know more</Button>

              </div>

            </div>



            
          </div>

        </div>
      </div>
    </section>
  )
}
