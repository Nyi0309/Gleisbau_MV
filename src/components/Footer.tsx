import React from 'react'
import { ToggleButton } from './ToggleButton'
import Logo from './Logo'
import Link from 'next/link'

const Footer = () => {
    return (
        <footer className='relative pt-16 bg-white'>
            <div className='container mx-auto'>
                {/**erste Reihe */}
              
               <div className='mb-4 w-[200px]'>
                    <Logo />
                </div>
                <div className='border-b border-border/80 mb-2'></div>
                <div className='flex flex-col xl:flex-row items-start xl:items-center justify-between mb-2'>
                    <Link href="https://www.pommernprovider.de/" target='blank' className='text-primary'>2025 © Pommerprovider</Link>
                    <Link href="/impressum" className='text-primary'>Impressum | Datenschutz</Link>
                </div>
               
            </div>
        </footer>
    )
}

export default Footer