
'use client'
import{ usePathname } from 'next/navigation'
import Link from 'next/link';
import { Navbar, NavbarLink } from 'flowbite-react';
import { useState } from 'react';
import { MenuList } from '@/component/sidebar/menuList';
type Menu={
    name:string,
    path:string,
    icon:React.ElementType
}
export default function Component() {
    const pathName=usePathname()
    const[menu,setMenu]=useState<Menu[]>(MenuList)
    const UpdateMenu=(path:string)=>{
         const newMenu=menu.map((items)=>{
              if(path==items.path)
              {
                return {
                  ...items,
                  active:true
                }
              }else{
                return {
                  ...items,
                  active:false
                }
              }
         })
         setMenu(newMenu)
    }
  return (
    <Navbar fluid rounded>
      <Navbar.Brand as={Link} href="https://flowbite-react.com">
        <img src="./favicon.ico" className="mr-3 h-6 sm:h-9" alt="Flowbite React Logo" />
        <span className="self-center whitespace-nowrap text-xl font-semibold dark:text-white">Flowbite React</span>
      </Navbar.Brand>
      <Navbar.Toggle />
      <Navbar.Collapse>
          {menu.map((data,index)=>
          <NavbarLink key={index} as={Link} href={data.path} active={pathName===data.path}>
           {data.name}
          </NavbarLink>
          )}
      </Navbar.Collapse>
    </Navbar>
  );
}
