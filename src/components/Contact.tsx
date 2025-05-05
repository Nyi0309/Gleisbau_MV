import React from 'react'
import PreTitle from './PreTitle'
import Image from 'next/image'
import Button from './Button'
import { motion } from "framer-motion"
import { fadeIn } from '@/lib/variants'

const Contact = () => {
    return (
        <section id="contact" className="pt-16 xl:pt-32 overflow-hidden">
            <div className="container mx-auto">
                <div className="flex flex-col gap-12 xl:gap-0 xl:flex-row xl:items-center">
                    {/**text */}
                    <motion.div
                        variants={fadeIn({ direction: "right", delay: 0.2 })} initial="hidden" whileInView="show" viewport={{ once: false, amount: 0.2 }}
                        className="flex-1">
                        <div className="max-w-[540px]">
                            {/**Überschrift */}
                            <PreTitle text="Kontaktiere uns" />
                            <h2 className="h2 text-primary dark:text-white mb-6">Direkter Draht zu GBMV</h2>
                            <p className="mb-11 text-primary dark:text-secondary-dark">Sie möchten unsere Leistungsfähigkeit kennenlernen oder ein konkretes Projekt besprechen? <br/>Dann melden Sie sich gern telefonisch oder per E-Mail bei uns.<br/>
                            <span className='font-medium'>Auf gute Zusammenarbeit.</span> </p>
                        </div>

                        {/**btn */}
                        <a href="mailto:info@gleisbau-mv.de">
                        <Button text="Kontakt" />
                        </a>
                    </motion.div>
                    {/**img*/}
                    <motion.div
                        variants={fadeIn({ direction: "left", delay: 0.2 })} initial="hidden" whileInView="show" viewport={{ once: false, amount: 0.2 }}
                        className="flex-1 xl:flex xl:justify-center">
                        <div className="w-[644px] h-[493px] relative p-2">
                            {/**bg */}
                            <Image src="/assets/img/5.webp" alt="Kontakt Bild" fill quality={100} sizes="full" priority className="object-cover" />
                        </div>
                    </motion.div>
                </div>
            </div>
        </section>
    )
}

export default Contact