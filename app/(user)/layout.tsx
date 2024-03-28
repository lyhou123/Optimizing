import type { Metadata } from "next";
import { Inter } from "next/font/google";
import "@/app/globals.css";
import { Suspense } from "react";
import Loading from "./loading";
import { ErrorBoundary } from "next/dist/client/components/error-boundary";
import Error from "./error";
import Component from "@/component/page1";
const inter = Inter({ subsets: ["latin"] });
export const metadata: Metadata = {
  title: "App",
  description: "App",
  openGraph:{
    title: "App",
    description: "App",
    images:"https://imgs.search.brave.com/VHadKQ_HquZ-D8zOxcMSr8kZQZqmcFjFPe8kE4buEUA/rs:fit:860:0:0/g:ce/aHR0cHM6Ly9pbWFn/ZXMudW5zcGxhc2gu/Y29tL3Bob3RvLTE3/MDU0MDM0NTc0NDQt/NDBmYWQ2MmU1YTkz/P3E9ODAmdz0xMDAw/JmF1dG89Zm9ybWF0/JmZpdD1jcm9wJml4/bGliPXJiLTQuMC4z/Jml4aWQ9TTN3eE1q/QTNmREI4TUh4bFpH/bDBiM0pwWVd3dFpt/VmxaSHd4Tkh4OGZH/VnVmREI4Zkh4OGZB/PT0"
  },
}
export default function RootLayout({
  children,
}: Readonly<{
  children: React.ReactNode;
}>) {
  return (
    <html lang="en">
      <body className={inter.className}>
      <header>
      <Component/>
      </header>
      <ErrorBoundary errorComponent={Error}> 
          <Suspense fallback={<Loading/>}>
        {children}
      </Suspense>
       </ErrorBoundary>
      </body>
    </html>
  );
}
