import React from 'react'
import { FaFacebook ,FaInstagram,FaTwitter,FaYoutube,FaCopyright} from "react-icons/fa";
export default function Footer() {
  return (
    <footer className='w-full h-[50px] px-5 flex gap-10 mt-3'>
     <div className='flex gap-5'>
     <FaFacebook size={30} className='text-[#05410be8] hover:text-[#8dd494e3]'/>
     <FaInstagram size={30} className='text-[#05410be8] hover:text-[#8dd494e3]'/>
     <FaTwitter size={30} className='text-[#05410be8] hover:text-[#8dd494e3]'/>
     <FaYoutube size={30} className='text-[#05410be8] hover:text-[#8dd494e3]'/>
     </div>
     <div className='flex gap-5'>
        <p className='flex gap-2'>
        Copyright  <FaCopyright size={16}/>  </p>   
        <p>
            2023 Dscode | All rights reserved
            </p>
            
        
     </div>
    </footer>
  )
}
