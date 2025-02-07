'use client'
import Link from 'next/link';
import React, { useState } from 'react'
import { FaHome, FaUser, FaServer, FaBriefcase } from "react-icons/fa";
import { MdOutlineContactPhone } from "react-icons/md";
import { HiOutlineChevronDoubleRight } from "react-icons/hi";
import { usePathname } from 'next/navigation';
function Navber({ children }) {
    const pathname = usePathname();
    const [open, setOpen] = useState(true);

    const menus = [
        { menu: 'Home', link: '/', icon: <FaHome /> },
        { menu: 'About', link: '/about', icon: <FaUser /> },
        { menu: 'Services', link: '/services', icon: <FaServer /> },
        { menu: 'Portfolio', link: '/portfolio', icon: <FaBriefcase /> },
        { menu: 'Contact', link: '/contact', icon: <MdOutlineContactPhone /> },
    ];

    return (
        <div className="flex h-screen w-full">
            {/* Sidebar */}
            <div className={`${open ? 'w-72' : 'w-16'} duration-500 h-full bg-[#222222] fixed left-0 top-0 px-3`}>
                <div className='relative right-0 -mr-8 py-3 flex justify-end'>
                    <HiOutlineChevronDoubleRight 
                        onClick={() => setOpen(!open)} 
                        className={` ${open ? 'rotate-180' : 'rotate-0'} delay-300 duration-500 cursor-pointer w-[50px] h-[30px] text-white`} 
                    />
                </div>
                <div className={`${open ? 'block' : 'hidden'} text-center -mt-7 duration-500 cursor-pointer`}>
                    <Link className='text-[28px] leading-7 text-red-500' href='/'>SB</Link>
                </div>
                <div className='flex flex-col mt-20 gap-5'>
                    {menus.map((item, index) => (
                        <Link 
                            key={index} 
                            href={item.link} 
                            className={`${pathname === item.link ? 'bg-red-700 rotate-[360deg] delay-300 duration-500 ': null} group flex items-center text-white gap-3.5 font-medium p-2 hover:bg-gray-800 rounded-md`}
                        >
                            <p className='text-[24px]'>{item.icon}</p>
                            <p style={{ transitionDelay: `${index + 3}00ms` }} className={`duration-500 ${!open && 'opacity-0 translate-x-28 overflow-hidden'}`}>
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
            <div className="flex-1 ml-[72px] p-10"> 
                {children}
            </div>
        </div>
    );
}

export default Navber;
