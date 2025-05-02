"use client"
import Image from "next/image"
import Button from "./Button"
import PreTitle from "./PreTitle"
import { motion } from "framer-motion"
import { fadeIn } from "@/lib/variants"


const About = () => {
    return (
        <section id="about" className="pt-16 xl:pt-32 overflow-hidden">
            <div className="container mx-auto">
                <div className="flex flex-col gap-12 xl:gap-0 xl:flex-row xl:items-center">
                    {/**text */}
                    <motion.div
                        variants={fadeIn({ direction: "right", delay: 0.2 })} initial="hidden" whileInView="show" viewport={{ once: false, amount: 0.2 }}
                        className="flex-1">
                        <div className="max-w-[540px]">
                            {/**Überschrift */}
                            <PreTitle text="Über uns" />
                            <h2 className="h2 text-primary dark:text-white mb-6">Präzision im Gleisbau – regional & zertifiziert</h2>
                            <p className="mb-11 text-primary dark:text-secondary-dark">Seit 2010 steht GBMV für zuverlässige Leistungen im Gleis- und Tiefbau. Unser eingespieltes Team arbeitet im Mittel- und Norddeutschen Raum und betreut Projekte von Bau über Instandhaltung bis zur Sanierung von Bahnanlagen. Als zertifiziertes Mitglied der Überwachungsgemeinschaft Gleisbau e.V. und präqualifizierter Partner der Deutschen Bahn setzen wir auf Qualität, Verlässlichkeit und moderne Technik.

                            </p>
                        </div>
                        {/**signatur */}
                        {/* <div className="w-max flex flex-col mb-10 text-primary dark:text-secondary-dark">
                            <p>Fred Röwer</p>
                            <p>Geschäftsführer</p> */}
                        {/* </div> */}
                        {/**btn */}
                       <a href="mailto:info@gleisbau-mv.de">
                       <Button text="Kontakt" />
                       </a>
                    </motion.div>
                    {/**img*/}
                    <motion.div
                        variants={fadeIn({ direction: "left", delay: 0.2 })} initial="hidden" whileInView="show" viewport={{ once: false, amount: 0.2 }}
                        className="flex-1 xl:flex xl:justify-center">
                        <div className="w-[444px] h-[493px] relative">
                            {/**bg */}
                            <div className="hidden xl:flex w-[444px] h-[493px] bg-accent absolute -top-4 -left-4 -z-10"></div>
                            <Image src="/assets/img/1.webp" alt="Über uns Bild" fill quality={100} priority className="object-cover" />
                        </div>
                    </motion.div>
                </div>
            </div>
        </section>
    )
}

export default About