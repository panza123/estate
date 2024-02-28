import React from 'react'

export default function ContactUs() {
  return (
    <main className='max-w-[1440px] px-5 grid gap-8 grid-cols-2 md:grid-cols-4 mt-4'>
        <div className='px-2'>
            
           <h1 className=' text-2xl' ><span className='font-bold' >RENT</span>HOMES</h1>
           <p>The best and easiest way to rent homes. </p>
        </div>
           <ul className='flex flex-col gap-1 text-[#555555]' >
            <h3 className=' text-[15px] font-bold text-[#085C11E8]' >Useful links</h3>
            <li>About us </li>
            <li>Events </li>
            <li> Blogs </li>
            <li> FAQ </li>
           </ul>
  
           <ul className='flex flex-col gap-1 text-[#555555] '>
            <h3 className=' text-[15px] font-bold text-[#085C11E8]' >Main Menu</h3>
            <li>Home</li>
            <li>Offers </li>
            <li>Menus </li>
            <li>Reservation</li>
           </ul>
           <ul className='flex flex-col gap-1 text-[#555555]'>
            <h3 className=' text-[15px] font-bold text-[#085C11E8]'>Contact Us </h3>
            <li>example@email.com </li>
            <li> +64 958 248 966</li>
            <li>Social media </li>
            
           </ul>
    </main>
  )
}
