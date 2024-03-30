import React from 'react'
export default function page() {
  return (
    <div>
      <p className='text-center text-4xl font-bold text-black'>What is Next.js?</p>
        <div className='w-[1000px] mx-auto text-black  text-xl mt-3'>
          <p>Next.js is a React framework for building full-stack web applications. You use React Components to build user interfaces, and Next.js for additional features and optimizations.
          Under the hood, Next.js also abstracts and automatically configures tooling needed for React, like bundling, compiling, and more. This allows you to focus on building your application instead of spending time with configuration.
          Whether you're an individual developer or part of a larger team, Next.js can help you build interactive, dynamic, and fast React applications.</p>
          <img src="favicon.ico" alt="" className='mx-auto mt-3 mb-3' />
        </div>
    </div>
  )
}
