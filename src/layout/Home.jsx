import React from 'react'
import logo from '../assets/image/house.png'
export default function Home() {
  return (
    <main className='max-w-[1440px] px-5 grid md:grid-cols-2 '>
     <div >
        <h3 className=' text-5xl md:text-6xl lg:text-8xl font-bold text-[#085C11E8]'>
        Your Rental Journey Begins Here
        </h3>
        <p className='pt-10 md:text-[15px]'>
        We Make Finding Rentals Easy, Effortless Search, Endless Choices
        </p>
        <div className='flex mt-10 gap-4 items-center'>
            <button className='max-sm:w-[150px] text-white hover:bg-transparent hover:text-[#0D4512]
             hover:border-[2px] hover:border-[#0D4512]'>Rent Now</button>
            <button className='max-sm:w-[150px] bg-transparent border-[2px] border-[#0D4512]  text-[#0D4512]
            hover:bg-[#0D4512] hover:text-white
            '>
 Rent Your Place
</button>
        </div>
     </div>
     <div className='mt-10'> 
        <img src={logo} alt="" />
     </div>
    </main>
  )
}
