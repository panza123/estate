import React from 'react'

export default function ServicesCard({logo,title,text}) {
  return (
    <div className='max-w-[400px] px-4 bg-[#0D4512E5] flex flex-col justify-center items-center rounded-[10px] '>
        <div className='flex flex-col justify-center items-center py-6'>
        <div className='pt-5'>{logo}</div>
        <h4 className='text-2xl text-white pt-5'>{title}</h4>
        <p className='pt-5 text-white text-[15px]'>{text}</p>
        </div>
    </div>
  )
}
