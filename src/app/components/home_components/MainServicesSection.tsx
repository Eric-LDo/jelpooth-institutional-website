'use client'
import React from "react";
import BlueSection from "../BlueSection";
import Services from "@/app/data/servicesCard";
import MainSectionCard from "./MainSectionCard";
import Motion from "../Motion";

const MainServicesSection: React.FC = () => {
  return (
    <BlueSection>
      <Motion>
        <h1 className="text-center text-4xl md:text-5xl lg:text-6xl font-bold m-15">
          Serviços Prestados
        </h1>
      </Motion>
      <div className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-3 gap-4">
        {Services.map((item) => {
          return (
            <MainSectionCard
              key={item.id}
              id={item.id}
              title={item.title}
              text={item.text}
              icon={item.icon}
            />
          );
        })}
      </div>
    </BlueSection>
  );
};

export default MainServicesSection;
