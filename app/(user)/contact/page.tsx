import FormComponent from '@/component/form/form'
import { Metadata } from 'next'
import React from 'react'
export const metadata:Metadata={
  title:"Contact Us",
  description:"Contact Us",
  openGraph:{
    title:"Contact Us",
    description:"Contact Us",
    images:"https://imgs.search.brave.com/_rcM5GHQ5DcdIpXOrznlr2prKfeip94iHQVH0OJE60o/rs:fit:860:0:0/g:ce/aHR0cHM6Ly9pbWFn/ZXMtcGxhdGZvcm0u/OTlzdGF0aWMuY29t/Ly82Ym5zNW1wUHpO/UWNIVklnWldCNE5I/alp3TmM9LzB4MDox/OTQ5eDE5NDkvZml0/LWluLzUwMHg1MDAv/OTlkZXNpZ25zLWNv/bnRlc3RzLWF0dGFj/aG1lbnRzLzg4Lzg4/MzI5L2F0dGFjaG1l/bnRfODgzMjkxMTc"
  },

}
export default function page() {
  return (
    <div>
      <FormComponent/>
    </div>
  )
}
