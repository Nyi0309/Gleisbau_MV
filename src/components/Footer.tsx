import React from 'react'
import { ToggleButton } from './ToggleButton'
import Logo from './Logo'

const Footer = () => {
    return (
        <footer className='relative pt-16 bg-primary'>
            <div className='container mx-auto'>
                {/**erste Reihe */}
                <div className='mb-4'>
                    <Logo />
                </div>
                <div className='border-b border-border/20 mb-2'></div>
                <div className='flex flex-col xl:flex-row items-start xl:items-center justify-between '>
                    <p className='text-secondary-dark'>2025 © Pommerprovider</p>
                    <p className='text-secondary-dark'>Impressum | Datenschutz</p>
                </div>
                <ToggleButton />
            </div>
        </footer>
    )
}

export default Footer