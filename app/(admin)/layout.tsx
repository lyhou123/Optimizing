import React from 'react'
import SidebarComponent from '../../component/sidebar/sidebarcomponent';
import "@/app/globals.css";
export default function layout({children,}: Readonly<{children: React.ReactNode;
}>){
  return (
    <html>
    <body>
      <aside className="fixed h-screen">
        <SidebarComponent/>
      </aside>
      <main>
        {children}
      </main>
    </body>
    </html>
  )
}
