'use client'
import React from "react";


type Props = {
  children: React.ReactNode;
};

const BlueSection = ({ children }: Props) => {
 

  return (
    <section className=" min-w-full h-auto">
      {children}
    </section>
  );
};

export default BlueSection;