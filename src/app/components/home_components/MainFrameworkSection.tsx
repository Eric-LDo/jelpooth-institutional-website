'use client'
import React from 'react';
import ScrollFrameworks from '@/app/components/ScrollFrameworks';

const MainFrameworkSection = () => {
  return (
    <section className="max-w-full h-auto flex flex-col items-center justify-center m-1">
        <h2 className="text-center text-4xl md:text-5xl lg:text-6xl font-bold m-15"
        style={{
          textShadow: '1px 1px 3px black'
        }}
        >Principais Ferramentas <br/>Utilizadas</h2>
        <p>Trabalhamos com as ferramentas mais utilizadas no mercado para resolver uma ampla gama de problemas</p>
        <ScrollFrameworks/>
    </section>
  );
};

export default MainFrameworkSection;