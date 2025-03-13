"use client"
import Link from "next/link"
import IconShine from "./IconShine"
import { Item, MenuItem } from '../menuItem'
const Header = ()=>{
    return(
        <header className="bg-white dark:bg-black w-screen h-12 flex justify-between items-center fixed">
            <IconShine/>
            <nav>
                <ul className="flex w-full justify-between gap-5 ">
                    {
                        MenuItem.map((i)=>{
                            return (
                                <li>
                                    {i.nome}
                                </li>
                            )
                        })
                    }
                </ul>
            </nav>
            <div/>
        </header>
    )
}
export default Header