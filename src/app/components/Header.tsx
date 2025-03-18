'use client'
import { useState } from "react";
import IconShine from "./IconShine";
import "primeicons/primeicons.css";
import { MenuItem } from "../data/menuItem";
import { motion, AnimatePresence } from "framer-motion";

const Header = () => {
  const [isVisibleMenu, setIsVisibleMenu] = useState<boolean>(false);
  const toggleVisibility = () => {
    setIsVisibleMenu(!isVisibleMenu);
  };
  return (
    <>
      <header className="bg-gray-200 dark:bg-black w-full h-12 flex justify-between items-center fixed  shine z-50">
        <IconShine />
        <nav className="hidden md:flex">
          <ul className="flex w-full justify-between gap-5 ">
            {MenuItem.map((i, index) => {
              return (
                <a key={index} href={i.path}>
                  <li className="h-full hover:border-blue-400 border-b-2 dark:border-black border-gray-200 hover:text-blue-400 hover:cursor-pointer">
                    {i.nome}
                  </li>
                </a>
              );
            })}
          </ul>
        </nav>
        <div className="flex items-center justify-center">
          <img src="/Jelpooth.png" alt="" className="md:hidden h-40 "/>
        </div>
        <button
          className="md:hidden flex hover:cursor-pointer"
          title="Menu"
          onClick={toggleVisibility}
        >
          <div className=" h-10 w-10 flex items-center justify-center">
            <AnimatePresence>
              {isVisibleMenu ? (
                <motion.i
                  key="close"
                  className="pi relative pi-times text-blue-400 text-3xl mx-4 text-shine"
                  initial={{ opacity: 0, rotate: -90 }}
                  animate={{ opacity: 1, rotate: 0 }}
                  exit={{ opacity: 0, rotate: 90 }}
                  transition={{ duration: 0.3 }}
                />
              ) : (
                <motion.i
                  key="menu"
                  className="pi pi-bars absolute text-blue-400 text-3xl mx-4 text-shine"
                  initial={{ opacity: 0, rotate: 90 }}
                  animate={{ opacity: 1, rotate: 0 }}
                  exit={{ opacity: 0, rotate: -90 }}
                  transition={{ duration: 0.3 }}
                />
              )}
            </AnimatePresence>
          </div>
        </button>
      </header>
      {isVisibleMenu ? (
        <aside className="w-50 bg-gray-200 dark:bg-black h-screen fixed mt-12 p-2 md:hidden right-0 z-49">
          <ul className="">
            {MenuItem.map((i) => {
              return (
                <a href={i.path}
                className="h-full hover:border-blue-400 border-b-2 border-black  dark:border-white mb-3 hover:cursor-pointer flex justify-center hover:text-blue-400">
                  <li >
                    {i.nome}
                  </li>
                </a>
              );
            })}
          </ul>
        </aside>
      ) : (
        ""
      )}
    </>
  );
};
export default Header;
