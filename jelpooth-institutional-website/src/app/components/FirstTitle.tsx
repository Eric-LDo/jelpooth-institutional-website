import React from 'react';
import styles from './modules/FirstTitle.module.css'; 
import Typical from 'react-typical';
type Props = {
  children: React.ReactNode;
};

const FirstTitle: React.FC<Props> = ({ children }) => {
  return (
    <div className="relative">
      <div className=" bg-black opacity-45">
        {children}
      </div>
      <h1 className={`${styles.firstTitle} absolute text-8xl`}>
      <Typical
            steps={[
              `Tabalhe com quem intende de inovação`, 1000,
            ]}
            loop={1}
            wrapper="span"
          />
          

      </h1>
    </div>
  );
};

export default FirstTitle;