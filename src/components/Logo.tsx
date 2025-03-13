import Link from 'next/link'
import React from 'react'

const Logo = () => {
    return (
        <Link href="/" className='font-primary text-4xl uppercase text-white font-bold'>Gleisbau<span className='text-accent'>MV</span></Link>
    )
}

export default Logo