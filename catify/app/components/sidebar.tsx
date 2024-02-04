import Link from 'next/link'
import React from 'react'

//Menu
const menuItems = [
    {
        menu:'Breed List',
        link:'/breed',

    },
    {
        menu:'About',
        link:'/about',
    },
    {
        menu:'Services',
        link:'/services',
    },
    {
        menu:'Contact Us',
        link:'/contactus'
    }
]

const SideBar = () => {
  return menuItems.map((item)=>(
    <ul className=' bg-slate-400 w-44 pt-5 h-full'>
        <li>
            <Link key={item.menu} href={item.link}>
            {item.menu}
            </Link>
            </li>
    </ul>
    
  ))
}

export default SideBar
