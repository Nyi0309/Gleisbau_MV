import React from 'react'
import CardCarousel from './ui/CardCarousel'
import { motion } from "framer-motion"

const fadeInVariant = {
    hidden: { opacity: 0 },
    show: { opacity: 1, transition: { duration: 0.2, delay: 0.1 } },
}

const Work = () => {
    return (
        <section id='work' className="pt-16 xl:pt-32">
            <CardCarousel />
        </section>
    )
}

export default Work