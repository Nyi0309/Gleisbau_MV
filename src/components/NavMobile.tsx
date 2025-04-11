"use client";

import { RiMenu3Fill, RiPhoneFill } from "react-icons/ri"
import Logo from "@/components/Logo";
import { Link as ScrollLink } from 'react-scroll';
import { useState } from "react";
import { Sheet, SheetContent, SheetDescription, SheetHeader, SheetTitle, SheetTrigger } from "./ui/sheet";
import { IoMdMail } from "react-icons/io";
import { MdLocationPin } from "react-icons/md";

const links = [
    {
        name: "Home",
        path: "home",
    },
    {
        name: "Über uns",
        path: "about",
    },
    {
        name: "Leistungen",
        path: "service",
    },
    {
        name: "Referenzen",
        path: "work",
    },
    {
        name: "Faq",
        path: "contact",
    },
]

const NavMobile = () => {
    const [isOpen, setIsOpen] = useState(false);
    return <Sheet open={isOpen} onOpenChange={setIsOpen}>
        <SheetTrigger className="text-primary flex items-center justify-center text-3xl cursor-pointer"
            onClick={() => setIsOpen(true)}>
            <RiMenu3Fill />
        </SheetTrigger>
        <SheetContent className="bg-white border-none text-primary">
            <div className="flex flex-col pt-16 pb-8 items-center justify-between h-full">
                <SheetHeader>
                    <SheetTitle>
                        <Logo />
                    </SheetTitle>
                    <SheetDescription className="sr-only">
                        Navmenu
                    </SheetDescription>
                </SheetHeader>
                <ul className="w-full flex flex-col gap-10 justify-center text-center">
                    {links.map((link, index) => {
                        return <li key={index} className="text-primary uppercase font-primary font-medium tracking-[1.2px]">
                            <ScrollLink
                                to={link.path}
                                smooth
                                spy
                                duration={500}
                                onClick={() => setIsOpen(false)}
                                activeClass="text-accent"
                                className="cursor-pointer"
                            >
                                {link.name}
                            </ScrollLink>
                        </li>
                    })}
                </ul>
                {/**icons */}
                <div className="flex gap-6">
                    {/**phone */}
                    <a href="tel:+4939813494485" className="bg-primary w-8 h-8 flex items-center justify-center cursor-pointer"><RiPhoneFill className="text-white text-2xl" /></a>
                    {/**mail */}
                    <a href="mailto:info@gleisbau-mv.de" className="bg-primary w-8 h-8 flex items-center justify-center cursor-pointer"><IoMdMail className="text-white text-2xl" /></a>
                    {/**Pin */}
                    <a href="https://maps.app.goo.gl/KUkRmPC7niBVbyct7" target="blank"  className="bg-primary w-8 h-8 flex items-center justify-center cursor-pointer"><MdLocationPin className="text-white text-2xl" /></a>
                </div>
            </div>

        </SheetContent>
    </Sheet >
}

export default NavMobile