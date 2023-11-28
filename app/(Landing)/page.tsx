import Image from 'next/image'
import Link from 'next/link'

export default function Home() {
  return (
    <section className='h-full w-full flex justify-center items-center'>
      {/* <div className='p-8 bg-black h-fit w-fit text-white rounded-lg '>
        <Link href='/sign-up'>Signup</Link>
      </div> */}
      <div className='h-screen w-full p-4'>
        <div className='h-full w-full bg-blue-200 rounded-lg relative '>
        <div className='absolute h-12 w-80 bg-white right-0  after:absolute after:h-8 after:w-12 after:-left-12 after:shadow-white after:shadow-[35px_0_0_0]  rounded-bl-2xl after:rounded-tr-2xl after:z-50 after:bg-blue-200 
        before:absolute before:h-12 before:w-12 before:bg-blue-200 before:shadow-[35px_0_0_0] before:shadow-white before:top-12 before:right-0 before:rounded-tr-2xl'>
        
        </div>
        <div className='flex justify-start m-4 items-center h-full w-full'>
            <div className='h-24 w-24 bg-slate-100 shadow-[35px_0_0_0]'>

            </div>
        </div>
        </div>
      </div>
    </section>
  )
}
