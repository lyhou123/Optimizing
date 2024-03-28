'use client'
import CardComponent from '@/component/card/cardProductDeatal'
import { useRouter } from 'next/navigation'
import React, { use, useEffect, useState } from 'react' 
type Product={
   readonly id:number,
    title:string,
    description:string,
    image:string,
  
}
export default function CardPage() {
  const userouter=useRouter()
  const BASEURL="https://fakestoreapi.com/products "
  const [product,setProduct]=useState<Product[]>([])
  useEffect(()=>{
    fetch(BASEURL).then(res=>res.json())
    .then(data=>setProduct(data))
    .catch(err=>console.log(err))
  },[])
  return (
    <div className='grid grid-cols-4 grid-flow-row gap-[24px]'>
      {product.map((items,index)=>(
        <CardComponent 
        onClick={()=>{
          userouter.push(`/service/${items.id}`)
        }}
        key={index} title={items.title} description={items.description} image={items.image}/>
      ))}
    </div>
  )
}
