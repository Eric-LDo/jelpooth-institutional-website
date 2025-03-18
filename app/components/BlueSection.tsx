import { motion } from "framer-motion";
import React from "react";
import { useInView } from "react-intersection-observer";
import styles from './modules/blueSection.module.css';

type Props = {
  children: React.ReactNode;
};

const BlueSection = ({ children }: Props) => {
 

  return (
    <section className="w-full h-auto">
      {children}
    </section>
  );
};

export default BlueSection;