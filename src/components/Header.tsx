"use client"
import path from 'path';
import { RiArrowRightUpLine } from 'react-icons/ri';
import { Link as ScrollLink } from 'react-scroll';
import Logo from './Logo';
import NavMobile from './NavMobile';

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

const Header = () => {
    return (
        <header className='bg-white py-4 text-secondary-dark border-b border-primary/20 shadow-sm'>
            <div className="container mx-auto">

                <div className='flex items-center justify-between'>
                    {/**logo */}
                    <Logo />
                    {/**desktop nav und button */}
                    <nav className='hidden xl:flex items-center gap-12'>
                        <ul className='flex'>
                            {links.map((link, index) => {
                                return (
                                    <li key={index} className="text-primary text-sm uppercase font-primary font-medium tracking-[1.2px] after:content-['/'] after:mx-4 last:after:content-none after:text-accent">
                                        <ScrollLink to={link.path} smooth={true} spy className='cursor-pointer' activeClass='text-accent' duration={1000}>
                                            {link.name}
                                        </ScrollLink>
                                    </li>
                                )
                            })}
                        </ul>
                        {/**button */}
                        <button className='w-[200px] h-[54px] py-[5px] pl-[10px] rounded-sm pr-[5px] flex items-center border border-primary justify-between min-w-[200px] group bg-white cursor-pointer'>
                            <div className='flex-1 text-center tracking-[1.2px] font-primary font-bold text-primary text-sm uppercase'>Kontakt</div>
                            <div className='w-11 h-11 bg-primary  flex items-center justify-center'>
                                <RiArrowRightUpLine className='text-xl text-white group-hover:rotate-45 transition-all duration-200' />
                            </div>
                        </button>
                    </nav>


                    {/**mobile nav */}
                    <div className='xl:hidden'>
                        <NavMobile />
                    </div>
                </div>
            </div>
        </header>
    )
}

export default Header