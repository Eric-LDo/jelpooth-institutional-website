'use client'
import { motion } from "framer-motion";
import { toolList } from "../data/ToolsItem";
import Tools from "./Tools";
import { useRef } from "react";

const ScrollFrameworks = () => {
  
  const duplicatedToolList = [...toolList, ...toolList];

  return (
    <div className="overflow-x-hidden w-full">
      <motion.div
        className="flex flex-row"
        animate={{ x: [-1000, 0] }} 
        transition={{
          repeat: Infinity,
          repeatType: "loop",
          duration: 20,
          ease: "linear",
        }}
      >
        {duplicatedToolList.map((item, index) => (
          <Tools
            key={index}
            id={item.id}
            image={item.image}
            url={item.url}
            name={item.name}
            
          />
        ))}
      </motion.div>
    </div>
  );
};

export default ScrollFrameworks;