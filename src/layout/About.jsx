import React from 'react'
import logo from '../assets/image/house2.png'
export default function About() {
  return (
    <main className='max-w-[1440px] px-5 grid md:grid-cols-2 gap-5 '>

<div className='mt-10 '> 
       <img src={logo} alt=""  className='object-cover rounded-md'/>
    </div>

    <div >
       <h3 className=' text-4xl md:text-5xl lg:text-7xl font-bold text-[#085C11E8]'>
       Begin your awesome journey
       </h3>
       <p className='pt-10 md:text-[15px]'>
       Looking for the perfect home to rent? Our user-friendly house rental website makes your search a breeze. 
Browse through a diverse range of listings,
From cozy apartments to spacious family houses. </p>

<p className='pt-2 md:text-[15px]'>
    With detailed descriptions, vivid photos, and handy filters, finding your ideal rental is just a click away. 
    </p>
    
       
       <div className='flex mt-10 gap-4 items-center'>
           <button className=' text-white hover:bg-transparent hover:text-[#0D4512]
            hover:border-[2px] hover:border-[#0D4512]'>Continue </button>
       
       </div>
    </div>
    
   </main>
  )
}
