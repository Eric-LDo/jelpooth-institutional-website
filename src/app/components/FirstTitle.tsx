'use client'
import React, { useState, useEffect } from 'react';
import { ReactTyped } from "react-typed";
import styles from './modules/FirstTitle.module.css';

type Props = {
  children: React.ReactNode;
};

const FirstTitle: React.FC<Props> = ({ children }) => {
  const [showSecondPart, setShowSecondPart] = useState(false);

  useEffect(() => {
    const timer = setTimeout(() => {
      setShowSecondPart(true);
    }, 2000); 

    return () => clearTimeout(timer);
  }, []);

  return (
    <div className="relative">
      <div className=" bg-black opacity-45">
        {children}
      </div>
      <h1 className={`${styles.firstTitle} absolute text-5xl sm:text6xl md:text-7xl lg:text-8xl`}>
        <ReactTyped
          strings={['Trabalhe com quem entende de']}
          typeSpeed={50}
          showCursor={false} 
        />
        <br />
        {showSecondPart && (
          <ReactTyped
            strings={['inovação', 'processos', 'empreeder']}
            typeSpeed={50}
            backSpeed={50}
            loop 
            className="text-blue-500"
          />
        )}
      </h1>
    </div>
  );
};

export default FirstTitle;