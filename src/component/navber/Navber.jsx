
import Link from 'next/link';
import React from 'react'
import { FaHome } from "react-icons/fa";
import { FaUser } from "react-icons/fa";
import { FaServer } from "react-icons/fa";
import { FaBriefcase } from "react-icons/fa";
import { MdOutlineContactPhone } from "react-icons/md";
import { HiOutlineChevronDoubleRight } from "react-icons/hi";
function Navber({ children }) {
    
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
            <div className='w-[270px] h-screen bg-gray-600  px-3'>
                <div className=' py-3 flex justify-end'>
                    <HiOutlineChevronDoubleRight className=' cursor-pointer w-[50px] h-[30px]' />
                </div>
                <div className='-mt-10'>
                    <Link href='/'>logo</Link>
                </div>

                <div className=' flex flex-col mt-20 gap-5 relative'>
                    {
                        menus.map((itme,index)=>{
                            return(
                                <Link className=' flex items-center text-white gap-3.5 font-medium p-2 hover:bg-gray-800 rounded-md' key={index} href={itme.link}>
                                    <p>{itme.icon} </p>
                                    <p>{itme.menu}</p>
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