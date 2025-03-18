'use client'
import React from "react";
import Motion from "@/app/components/Motion";
import { Service } from "@/app/data/servicesCard";

const MainSectionCard: React.FC<Service> = ({ id, title, text, icon }) => {
  return (
    <Motion >
      <div key={id} className='border-2 border-black shadow-2xl dark:border-white box-shadow  rounded-2xl m-3 bg-gray-100 dark:bg-gray-950 flex flex-col justify-center items-center p-3 mb-5 text-center h-60'>
        <div className='w-10 h-10 border-2 rounded-full flex justify-center items-center border-white'>
          <i className={`${icon}`} />
        </div>
        <h3 className='text-2xl m-3'>{title}</h3>
        <p className=''>{text}</p>
      </div>
    </Motion>
  );
};

export default MainSectionCard;