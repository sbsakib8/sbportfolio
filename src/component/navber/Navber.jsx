'use client'
import Link from 'next/link';
import React, { useState } from 'react'
import { FaHome } from "react-icons/fa";
import { FaUser } from "react-icons/fa";
import { FaServer } from "react-icons/fa";
import { FaBriefcase } from "react-icons/fa";
import { MdOutlineContactPhone } from "react-icons/md";
import { HiOutlineChevronDoubleRight } from "react-icons/hi";
function Navber({ children }) {
    const [open, setopen] = useState(true)
    
    const menus = [
        {
            menu: 'Home',
            link: '/',
            icon: <FaHome/>
        },
        {
            menu: 'About',
            link: '/about',
            icon: <FaUser/>
        },
        {
            menu: 'Services',
            link: '/services',
            icon: <FaServer/>
        },
        {
            menu: 'Portfolio',
            link: '/portfolio',
            icon: <FaBriefcase/>
        },
        {
            menu: 'Contact',
            link: '/contact',
            icon: <MdOutlineContactPhone/>
        },
    ]
    return (
        <nav className=' flex space-x-9'>
            {/* navber */}
            <div className={` ${open ?'w-72' : 'w-16'} duration-500 h-screen bg-gray-600 absolute  px-3`}>
                <div className=' relative right-0 -mr-8 py-3 flex justify-end'>
                    <HiOutlineChevronDoubleRight onClick={()=>setopen(!open)} className={` ${open ? 'rotate-180': 'rotate-0'} delay-300 duration-500 cursor-pointer w-[50px] h-[30px]`} />
                </div>
                <div className={`${open ? 'block': 'hidden'} duration-500`}>
                    <Link href='/'>logo</Link>
                </div>

                <div className=' flex flex-col mt-20 gap-5 relative'>
                    {
                        menus.map((itme,index)=>{
                            return(
                                <Link className=' group flex items-center text-white gap-3.5 font-medium p-2 hover:bg-gray-800 rounded-md' key={index} href={itme.link}>
                                    <p className='text-[24px]'>{itme.icon} </p>
                                    <p style={{transitionDelay: `${index + 3}00ms`}} className={`duration-500 ${!open && 'opacity-0 translate-x-28 overflow-hidden'}`}>{itme.menu}</p>

                                    <p className={`${open && 'hidden'} absolute left-48 bg-white text-black w-0 overflow-hidden rounded-md drop-shadow-lg px-0 py-0 group-hover:px-2  group-hover:py-1 group-hover:left-14 group-hover:duration-300 group-hover:w-fit`}>{itme.menu}</p>
                                </Link>
                            )
                        })
                    }
                   
                    
                </div>
            </div>
            {/* chliden */}
            <div>
                {children}
            </div>
        </nav>
    )
}

export default Navber