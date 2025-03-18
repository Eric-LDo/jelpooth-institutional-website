"use client"
import { useEffect, useState } from 'react';
import { motion } from 'framer-motion';
import { useInView } from 'react-intersection-observer';

type Props = {
  children: React.ReactNode;
};

const Motion = ({ children }: Props) => {
  const { ref, inView } = useInView({
    triggerOnce: true, 
    threshold: 1.0, 
  });

  return (
    <motion.div
      ref={ref}
      className="h-auto w-auto"
      initial={{ opacity: 0, y: 50 }}
      animate={inView ? { opacity: 1, y: 0 } : {}}
      transition={{ duration: 1 }}
    >
      {children}
    </motion.div>
  );
};

export default Motion;