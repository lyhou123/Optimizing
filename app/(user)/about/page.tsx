import { Metadata } from 'next'
import Image from 'next/image'
import React from 'react'
export const metadata: Metadata = {
  title: "About Us",
  description: "About Us",
  openGraph:{
    title: "About Us",
    description: "About Us",
    images:"https://imgs.search.brave.com/XMnNObJZzHnZuYTAhMVgpaMH0uD7LSKI-uIbHCrZ8W4/rs:fit:860:0:0/g:ce/aHR0cHM6Ly9pbWFn/ZXMtcGxhdGZvcm0u/OTlzdGF0aWMuY29t/Ly81WTNJbllwVVV6/YTE0U25fMDRrWEJL/cTE4b1E9Lzc0OHgy/MzY2OjEyNTF4Mjg2/OS9maXQtaW4vNTAw/eDUwMC85OWRlc2ln/bnMtY29udGVzdHMt/YXR0YWNobWVudHMv/MTIwLzEyMDgyMC9h/dHRhY2htZW50XzEy/MDgyMDg4Ng"
  },
}
export default function page() {
  return (
    <main>
      <p className='text-center text-4xl font-bold text-black'>What is Next.js?</p>
        <div className='w-[1000px] mx-auto text-black  text-xl mt-3'>
          <p>Next.js is a React framework for building full-stack web applications. You use React Components to build user interfaces, and Next.js for additional features and optimizations.
          Under the hood, Next.js also abstracts and automatically configures tooling needed for React, like bundling, compiling, and more. This allows you to focus on building your application instead of spending time with configuration.
          Whether you re an individual developer or part of a larger team, Next.js can help you build interactive, dynamic, and fast React applications.</p>
          <Image src="/favicon.ico" alt="" width={400} height={400} className='mx-auto mt-3 mb-3' />
        </div>
    </main>
  )
}
