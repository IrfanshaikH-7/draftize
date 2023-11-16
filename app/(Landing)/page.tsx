import Image from 'next/image'
import Link from 'next/link'

export default function Home() {
  return (
    <section className='h-full w-full flex justify-center items-center'>
      <div className='p-8 bg-black h-fit w-fit text-white rounded-lg '>
        <Link href='/sign-up'>Signup</Link>
      </div>
    </section>
  )
}
