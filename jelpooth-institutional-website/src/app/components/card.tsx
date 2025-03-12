import { useEffect, useState } from 'react';
import { motion } from 'framer-motion';

const Card = () => {
  const [isVisible, setIsVisible] = useState(false);

  useEffect(() => {
    const handleScroll = () => {
      const cardElement = document.getElementById('card');
      if (cardElement) {
        const rect = cardElement.getBoundingClientRect();
        if (rect.top <= window.innerHeight && rect.bottom >= 0) {
          setIsVisible(true);
        }
      }
    };

    window.addEventListener('scroll', handleScroll);
    return () => {
      window.removeEventListener('scroll', handleScroll);
    };
  }, []);

  return (
    <motion.div
      id="card"
      className="border-2 border-gray-600 h-28 w-28 bg-white m-auto"
      initial={{ opacity: 0, y: 50 }}
      animate={isVisible ? { opacity: 1, y: 0 } : {}}
      transition={{ duration: 0.5 }}
    >
      lsdkfnmlka
    </motion.div>
  );
};

export default Card;