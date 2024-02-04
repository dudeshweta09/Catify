import React from 'react'
import SideBar from '../components/sidebar'
import { Metadata } from 'next'
export const metadata: Metadata = {
  title: 'One Place For Cats',
}
const About = () => {
  return (
    <>
    <div className='h-44 my-1 mx-1'>
<SideBar/>
    </div >
     
    </>
  )
}

export default About
 