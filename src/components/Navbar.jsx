import React from 'react'
import { PiHouseSimpleThin } from "react-icons/pi";
import { CgMenuRightAlt } from "react-icons/cg";
export default function Nav() {
  return (
    <header className='w-[full] h-[50px] mt-4 bg-transparent flex justify-between px-5 items-center text-[#475C46] '>
      <div className='flex w-[50%]'>
        <h1 className=' text-2xl' ><span className='font-bold' >RENT</span>HOMES</h1>
        <PiHouseSimpleThin size={30} />
        </div>
        {/* {stlying the home page nav} */}
        <ul className='hidden md:flex gap-4   items-center text-[15px] lg:text-[18px] '>
          <li>Home</li>
          <li>Abous Us</li>
          <li>Service</li>
          <li>Reviews</li>
          <li>Contacts Us</li>
        </ul>
        

      <div className='md:hidden '>
      <CgMenuRightAlt size={50} />
      </div>
    </header>
  )
}
