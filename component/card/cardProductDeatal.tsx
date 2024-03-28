import React from 'react'
type Procut={
    title:string
    description:string
    image:string
}
export default function CardComponent(props:Procut) {
  return (
    <div>
        <div className='flex justify-center items-center h-screen'>
            <div className='bg-white shadow-lg rounded-lg w-64 md:w-80 p-4'>
            <img src={props.image} alt='product' className='w-full h-32 object-cover'/>
            <div className='mt-4'>
                <h1 className='text-gray-700 font-bold text-2xl'>{props.title}</h1>
                <p className='mt-1 text-sm text-gray-600'>{props.description}</p>
            </div>
            </div>
        </div>
    </div>
  )
}
