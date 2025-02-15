'use client'
import Link from 'next/link';
import React, { useState } from 'react'
import { FaHome, FaUser, FaServer, FaBriefcase } from "react-icons/fa";
import { MdOutlineContactPhone } from "react-icons/md";
import { HiOutlineChevronDoubleRight } from "react-icons/hi";
import { GiSkills } from "react-icons/gi";
import { usePathname } from 'next/navigation';
function Navber({ children }) {
    const pathname = usePathname();
    const [open, setOpen] = useState(true);

    const menus = [
        { menu: 'Home', link: '/', icon: <FaHome /> },
        { menu: 'About', link: '/about', icon: <FaUser /> },
        { menu: 'Services', link: '/services', icon: <FaServer /> },
        { menu: 'Resume', link: '/resume', icon: <GiSkills /> },
        { menu: 'Portfolio', link: '/portfolio', icon: <FaBriefcase /> },
        { menu: 'Contact', link: '/contact', icon: <MdOutlineContactPhone /> },
        
    ];

    return (
        <div className="flex flex-col md:flex-row">
            {/* Sidebar */}
            <div className={`${open ? 'md:w-72' : 'md:w-16 w-16'} duration-500 h-[400px] md:h-full bg-[#222222] opacity-70 lg:opacity-90 bottom-30 md:bottom-0 fixed md:left-0 md:top-0 px-3 z-20 rounded-full md:rounded-none`}>
                <div className='relative right-0 -mr-8 py-3 flex justify-end '>
                    <HiOutlineChevronDoubleRight 
                        onClick={() => setOpen(!open)} 
                        className={` ${open ? 'rotate-180' : 'rotate-0'} delay-300 duration-500 cursor-pointer w-[50px] h-[30px] text-white hidden md:block`} 
                    />
                </div>
                <div className={`${open ? ' hidden md:block' : 'hidden'} text-center -mt-7 duration-500 cursor-pointer `}>
                    <Link className="bg-gradient-to-r from-[#0ef] to-violet-500 bg-clip-text text-5xl font-extrabold text-transparent" href='/'>SB</Link>
                </div>
                <div className='flex flex-col mt-4 md:mt-20 gap-5'>
                    {menus.map((item, index) => (
                        <Link 
                            key={index} 
                            href={item.link} 
                            className={`${pathname === item.link ? 'bg-[#0ef] text-black rotate-[360deg] text-[23px] duration-500 ': null} group flex items-center  gap-3.5 font-medium p-2 hover:bg-gray-800 rounded-md`}
                        >
                            <p className='text-[24px] '>{item.icon}</p>
                            <p style={{ transitionDelay: `${index + 3}00ms` }} className={`duration-500 ${!open && 'opacity-0 translate-x-28 overflow-hidden'} hidden md:block`}>
                                {item.menu}
                            </p>
                            <p className={`${open && 'hidden'} absolute left-48 bg-white text-black w-0 overflow-hidden rounded-md drop-shadow-lg px-0 py-0 group-hover:px-2 group-hover:py-1 group-hover:left-14 group-hover:duration-300 group-hover:w-fit`}>
                                {item.menu}
                            </p>
                        </Link>
                    ))}
                </div>
            </div>

            {/* Main Content Area */}
            <div className=" pl-5 md:pl-20 pt-6 md:pt-16"> 
                {children}
            </div>
        </div>
    );
}

export default Navber;
