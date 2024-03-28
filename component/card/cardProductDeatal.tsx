import React from 'react'
type Product={
    title:string
    description:string
    image:string
    onClick?:()=>void
}
export default function CardComponent(props:Product) {
  return (
    <div>
        <div className='flex justify-center items-center h-screen cursor-pointer' onClick={props.onClick}>
            <div className='bg-white shadow-lg rounded-lg w-64 md:w-80 p-4'>
            <img src={props.image} alt='product' className='w-full h-32 object-cover'/>
            <div className='mt-4'>
                <h1 className='text-gray-700 font-bold text-2xl '>{props?.title||"No title"}</h1>
                <p className='mt-1 text-sm text-gray-600 line-clamp-1'>{props?.description || "No description"}</p>
            </div>
            </div>
        </div>
    </div>
  )
}
