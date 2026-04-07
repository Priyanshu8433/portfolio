"use client";

import Link from "next/link";
import { Button } from "./button";
import { Menu, X } from "lucide-react";
import { useState } from "react";

const NavLinks = ["Experience", "Projects", "Skills", "Contact"]

export const Navbar = () => {
    const [isOpen, setIsOpen]=useState(false)

    return (
        <nav className="fixed left-0 top-0 z-50 bg-[rgba(10,10,10,0.7)] backdrop-blur-md w-full h-24 flex justify-between items-center px-6 md:px-12">
            <span className="text-[32px] font-black text-white uppercase hover:text-primary transition-all duration-300">The Curator</span>
            <div className="hidden lg:flex lg:gap-12">
                {NavLinks.map((link) => (
                    <Link key={link} href="#" className="text-white/70 font-sans text-base font-black uppercase hover:text-white hover:translate-y-[-2px] transition-all duration-300 cursor-pointer">{link}</Link>
                ))}
            </div>
            <Button className="hover:scale-105 hidden lg:block">
                Read.cv
            </Button>

            <div className="lg:hidden" onClick={()=>{setIsOpen(true)}}>
               <Menu size={32} />
            </div>

            <div className={`fixed top-0 right-0 w-full h-screen bg-surface z-9990 transform transition-transform duration-300 ease-in-out ${isOpen ? "translate-x-0" : "translate-x-full"}`}>
                <div className="flex flex-col gap-8 items-center justify-center h-full">
                    <X size={32} onClick={()=>{setIsOpen(false)}} className="absolute top-8 right-6" />
                    {NavLinks.map((link) => (
                        <Link key={link} href="#" onClick={()=>{setIsOpen(false)}} className="text-white/70 font-sans text-4xl font-black uppercase hover:text-white hover:translate-y-[-2px] transition-all duration-300 cursor-pointer">{link}</Link>
                    ))}
                </div>
            </div>
        </nav>
    );
};