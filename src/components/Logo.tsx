import Image from 'next/image'
import Link from 'next/link'
import React from 'react'

const Logo = () => {
    return (
        // <Link href="/" className='font-primary text-4xl uppercase text-white font-bold'>Gleisbau<span className='text-accent'>MV</span></Link>
        <Link href="/">
            <Image src="/assets/img/logo_alt.png" alt="Logo" width={150} height={50} priority quality={100} />
        </Link>
    )
}

export default Logo