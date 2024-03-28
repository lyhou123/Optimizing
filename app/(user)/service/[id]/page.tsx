import CardComponent from '@/component/card/cardProductDeatal';
import { get } from 'http';
import { Metadata, ResolvingMetadata } from 'next';
import React from 'react'
type Props = {
  params: { id: string }
  searchParams: { [key: string]: string | string[] | undefined }
}
const getData=async(id:string)=>{
 const baseUrl="https://fakestoreapi.com/products";
  const data=await fetch(`${baseUrl}/${id}`);  //{cache: "no-store"} no catches //refrest at time ,{next:{revalidate:3600}}
  const response=await data.json();
   return response;
}
//passing generate data
export async function generateMetadata(
  { params, searchParams }: Props,
  parent: ResolvingMetadata
): Promise<Metadata> {
  const id = params.id
  const product = await fetch(`https://fakestoreapi.com/products/${id}`).then((res) => res.json())
  const previousImages = (await parent).openGraph?.images || []
  return {
    title: product.title,
    description:product.description,
    openGraph: {
      images: [product.image, ...previousImages],
    },
  }
}
export default async function Detail(props:Props) {
  const getData1= await getData(props.params.id);
  console.log(getData1)
  return (
    <div className='flex justify-center items-center h-screen'>
      <CardComponent title={getData1.title} description={getData1.description} image={getData1.image}/>
    </div>
  )
}