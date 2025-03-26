"use client"

import { logo } from '@/untils/imgimport'
import Image from 'next/image'
import Link from 'next/link'
import React, { useState } from 'react'

const CommonHeader = () => {

    const [isOpen, setIsOpen] = useState(false)

    return (
        <nav className='w-full fixed top-0 z-50 bg-white/5 backdrop-blur-md'>
            <div className="flex flex-row justify-between items-center w-full bg-transparent p-4">
                <div className="logo__box">
                    <Link href={"/"}>
                        <Image src={logo} width={200} alt='logo' />
                    </Link>
                </div>

                <div className="navigation__menu hidden items-center md:flex space-x-6">
                    <NavLink href={"/"}>Home</NavLink>
                    <NavLink href={"/aboutus"}>About Us</NavLink>
                    <NavLink href={"/blog"}>Blogs</NavLink>
                    <NavLink href={"/testimonial"}>Testimonial</NavLink>
                    <NavLink href={"/contact"}>Contact Us</NavLink>
                    <NavLink href={"/speaktoexpert"} className="bg-transparent uppercase rounded-full border-2 px-4 py-2 border-solid border-black">
                        Speak to an expert
                    </NavLink>
                </div>

                <div className="md:hidden">
                    <button onClick={() => setIsOpen(!isOpen)} className="text-gray-700 focus:outline-none">
                        {isOpen ? '✖' : '☰'}
                    </button>
                </div>
            </div>

            {isOpen && (
                <div className="md:hidden bg-white shadow-md p-4 space-y-4">
                    <NavLink href="/" onClick={() => setIsOpen(false)}>Home</NavLink>
                    <NavLink href="/about" onClick={() => setIsOpen(false)}>About Us</NavLink>
                    <NavLink href="/blogs" onClick={() => setIsOpen(false)}>Blogs</NavLink>
                    <NavLink href="/contact" onClick={() => setIsOpen(false)}>Contact Us</NavLink>
                    <NavLink href="/speak-to-expert" className="bg-transparent uppercase rounded-full border-1 border-white" onClick={() => setIsOpen(false)}>Speak to an Expert</NavLink>
                </div>
            )}
        </nav>
    )
}

function NavLink({ href, children, className, onClick }) {
    return (
        <Link href={href} className={`block text-white hover:text-blue-600 ${className || ''}`} onClick={onClick}>
            {children}
        </Link>
    )
}

export default CommonHeader