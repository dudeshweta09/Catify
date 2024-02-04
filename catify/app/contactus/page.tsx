'use client'
import React from 'react'
import SideBar from '../components/sidebar'
import { faPhone } from '@fortawesome/free-solid-svg-icons'
import { FontAwesomeIcon } from '@fortawesome/react-fontawesome'
import Link from 'next/link'
import Home from '../components/maps'

const ContactUs = () => {
  return (
    <>
    <main>
      <div className=' h-44 my-1 mx-1'>
      <SideBar/>
      </div>
      <div className=' grid grid-cols-1 w-1/3 h-52 mx-auto -mt-12'>
<h3 className=' text-center mt-2 text-2xl'>Talk to Sales</h3>
<FontAwesomeIcon className=' mx-auto' icon={faPhone} style={{height:40}}></FontAwesomeIcon>
<Link href='' className=' mx-auto text-blue-800'>+915658552458</Link>
      </div>
      <Home/>
    </main>
    </>
  )
}

export default ContactUs
