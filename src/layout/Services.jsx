import React from "react";
import ServicesCard from "../components/ServicesCard";
import { FaCheckCircle, FaLeaf, FaLock } from "react-icons/fa";
export default function Services() {
  return (
    <main className="max-w-[1440px] mt-10 px-5 text-center">
      <h3 className=" text-[20px] md:text-4xl lg:text-6xl font-bold text-[#085C11E8]">
        Your Rental Journey Begins Here
      </h3>
      <p className="text-[15px] pt-3 md:text-[20px]">
        We Make Finding Rentals Easy, Effortless Search, Endless Choices
      </p>
  

  <div className="w-full h-full grid mt-10 justify-items-center items-center md:grid-cols-3 gap-3">
    <ServicesCard
      logo=<FaCheckCircle size={50} className="text-white" />
      title="Responsive"
      text="Our commitment to being responsive means that your concerns and efficient."
    />
    <ServicesCard
      logo=<FaLeaf size={50} className="text-white" />
      title="Green"
      text="Experience the convenience of our responsive platform, ensuring swift communication."
    />
    <ServicesCard
      logo=<FaLock size={50} className="text-white" />
      title='Security'
      text='Ensuring swift communication and quick solutions for all your rental needs.'
    />
  </div>


    </main>
  );
}
