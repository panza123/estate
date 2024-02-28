import React from 'react'
import { data } from '../data/index'
export default function Review() {
  return (
    <main className='max-w-[1440px] px-5 mt-2 text-center'>
      <h3 className=' text-2xl md:text-5xl lg:text-7xl font-bold text-[#085C11E8]'>
      What Customers Say About Our Services
        </h3>
        <p className="text-[15px] pt-3 md:text-[20px]" >
        We Make Finding Rentals Easy, Effortless Search, Endless Choices  
        </p>
        <div className='w-full h-full mt-2 grid justify-items-center items-center md:grid-cols-3 gap-4 py-2'>
          {data.map((item,index)=>(
            <div key={index} className='max-w-[500px] border-2 border-[#26582A] px-4 py-3 rounded-tr-[50px] rounded-bl-[50px]'>
                <div className='w-[100px] mt-3 m-auto h-[100px] rounded-[100%] bg-[#91c295]'>
                <img src={item.img} alt="" className='w-full h-full rounded-[100%] object-cover' />

                </div>
                <p className='pt-3 text-2xl '>{item.title}</p>
                <p className='pt-3'>{item.text}</p>
                </div>
          ))}
        </div>
    </main>
  )
}
