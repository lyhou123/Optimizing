'use client'
import CarouselComponent from "@/component/carousel/carousel";
import {useRouter } from "next/navigation";
import { useEffect } from "react";
export default function Home() {
  const router=useRouter();
  useEffect(()=>{
    document.title="home page"
  })
  return (
       <main>
        <h1 className="text-center text-black text-5xl ">Center of Science and Technology Advanced Development</h1>
         <p className="text-center text-black container text-2xl text-semibold mt-4">CSTAD is a noteworthy science and technology center in Cambodia. CSTAD has routed Cambodian students to advanced science and technology, research, and develop digital skills and our graduates have been guaranteed excellent job opportunities with the Top IT company.</p>
      </main>
  );
};
