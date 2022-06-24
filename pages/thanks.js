import Link from 'next/link'
import React from 'react'

export default function Thanks() {
  return (
    <div className='flex justify-center items-center h-screen w-full relative'>
        <Link href="/">
            <a className='inline-block absolute top-[5%] left-[5%] hover:scale-105 duration-200'>HOME</a>
        </Link>
        <h1 className=' text-[50px] font-semibold'>Thanks</h1>
    </div>
  )
}
