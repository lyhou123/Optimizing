'use client'
import { ProductType } from '@/lib/defination';
import React, { useEffect, useState } from 'react'
import DataTable, { TableColumn } from 'react-data-table-component';
import { Button, Modal } from "flowbite-react";
import Image from 'next/image';
export default function DashBoard() {
  const [products,setProducts]=useState<ProductType[]>([])
  const  [loading,setLoading]=useState(false)
  const[openModal,setOpenModal]=useState(false)
  const[productdetail,setProductDetail]=useState<ProductType>()
  const ImagePlaceHolder="https://imgs.search.brave.com/Bnih5OaEx311pSibhBdL7BVSCg0rs96EYZHLu3IaKr0/rs:fit:860:0:0/g:ce/aHR0cHM6Ly9kZXZl/bG9wZXJzLmVsZW1l/bnRvci5jb20vZG9j/cy9hc3NldHMvaW1n/L2VsZW1lbnRvci1w/bGFjZWhvbGRlci1p/bWFnZS5wbmc"
  useEffect(()=>{
     setLoading(true)
     fetch('http://fakestoreapi.com/products')
    .then(res=>res.json())
    .then((data)=>
    {setProducts(data)
      setLoading(false)
    })
    .catch(err=>console.log(err))
     setLoading(true)
    
},[])
const ProductDetail=(product:ProductType)=>{
  setProductDetail(product)
  setOpenModal(true)
}
  const columns:TableColumn<ProductType>[] = [
    {
      name: 'Product Title',
      selector: row => row.title,
    },
    {
      name: 'Price (USD)',
      selector: row => row.price,
      sortable: true,
    },
    {
      name: 'Image',
      selector: (row):JSX.Element|any => <img className='w-9 h-9' src={row.image} alt={row.title}/>,
    },
    {
      name: 'Category',
      selector: row => row.category,
    },
    {
      name: "Action", 
      selector: row => 
        <React.Fragment> 
          <button className='bg-blue-700 text-white p-2 rounded mr-1'onClick={()=>ProductDetail(row)}>view</button> 
          <button className='bg-yellow-700 text-white p-2 rounded mr-1'>Edit</button> 
          <button className='bg-red-700 text-white p-2 rounded'>Delete</button> 
        </React.Fragment>
    }
    
  ];
  return (
    <main>
       <Modal show={openModal} onClose={() => setOpenModal(false)}>
        <Modal.Header>Product Details</Modal.Header>
        <Modal.Body>
          <div className="space-y-6">
            <Image src={productdetail?.image||ImagePlaceHolder} alt={productdetail?.title||"Untitle"} className="w-full h-96 object-fit" />
            <p className="text-base leading-relaxed text-gray-500 dark:text-gray-400">
              {productdetail?.description}
            </p>
            <p className="text-base leading-relaxed text-gray-500 dark:text-gray-400">
             {productdetail?.title}
            </p>
          </div>
        </Modal.Body>
      </Modal>
      <DataTable progressPending={loading}	columns={columns} data={products} pagination persistTableHead
		/>
    </main>
  )
}
