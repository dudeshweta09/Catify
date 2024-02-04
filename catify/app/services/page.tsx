import React from 'react'
import SideBar from '../components/sidebar'
import Link from 'next/link'
import { Metadata } from 'next'

export const metadata: Metadata = {
  title: 'One Place For Cats',
}
const seviceItems = [
  {
    name:'Cats Accessories',
    link:''
  },
  {
    name:'Cats Foods',
    link:''
  },
  {
    name:'Cats Care Books',
    link:''
  },
  {
    name:'Cats Clothes',
    link:''
  },
  {
    name:'Cats Bath Service',
    link:''
  },
  {
    name:'Cats Medication Cente',
    link:''
  },

]
const Services = () => {
  return (
    <>
      
    <div className='h-44 my-1 mx-1'>
<SideBar/>
    </div >
    <div className='div1'>
      
      </div>
      <div className='mt-4 w-10/12 ml-48 grid gap-4 grid-cols-3 grid-rows-2'>
        {seviceItems.map((item)=>(
          <div className='bg-purple-200 py-32 h-60 text-center text-2xl'>
            <Link href={item.link}>
            {item.name}
            </Link>
            </div>
        ))}
      </div>
    </>
  )
}

export default Services
