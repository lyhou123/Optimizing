'use client'
import {useRouter } from "next/navigation";
import { useEffect } from "react";
export default function Home() {
  const router=useRouter();
  useEffect(()=>{
    document.title="howe page"
  })
  return (
       <main>
        <h1 className="text-center bg-red-500 p-16 text-white">Home page</h1>
      </main>
  );
};
