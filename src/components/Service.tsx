"use client"
import { useState } from 'react'
import { BsFillTrainLightrailFrontFill } from "react-icons/bs";

import { Tabs, TabsContent, TabsList, TabsTrigger } from './ui/tabs';
import PreTitle from './PreTitle';
import Image from 'next/image';
import Button from './Button';
import { motion } from "framer-motion"
import { fadeIn } from '@/lib/variants';

const serviceData = [
    {
        name: "Gleisbau",
        icon: <BsFillTrainLightrailFrontFill />,
        title: "Gleis- und Weichenbau",
        description: "Ob Neubau oder Erneuerung – wir realisieren anspruchsvolle Gleis- und Weichenbauprojekte nach höchsten technischen Standards. Mit Erfahrung, Präzision und modernster Ausrüstung sorgen wir für leistungsfähige und zukunftssichere Bahninfrastruktur.",
        serviceList: [
            "Kranschienenbau",
            "Straßenbahnbau",
            "Schienenauswechslung, Schienenfehlerbeseitigung",
            "Gleisauswechslung im konventionellen Umbauverfahren",
            "Einzelschwellenauswechslung",
            "Bahnübergangsarbeiten einschließlich Straßenbelag und Gleisausplattung",
            "Gleis- und Weichenneubau einschließlich Herstellung der Schotterbettung",
        ],
        thumbs: [
            { url: "/assets/img/4.webp" },
            { url: "/assets/img/2.webp" }

        ]
    },
    {
        name: "Instandhaltung",
        icon: <BsFillTrainLightrailFrontFill />,
        title: "Instandhaltung & Modernisierung",
        description: "Regelmäßige Instandhaltung sichert den langfristigen Betrieb Ihrer Gleisanlagen. Wir übernehmen alle notwendigen Maßnahmen zur Wartung, Fehlerbeseitigung und technischen Modernisierung – effizient, termingetreu und mit minimaler Betriebsunterbrechung.",
        serviceList: [
            "Durcharbeitung und Instandsetzungsarbeiten an Gleisen und Weichenanlagen",
            "Schienenschweiß- und Neutralisationsarbeiten/Spannungsausgleich",
            "Schienenschleifarbeiten",
            "Böschungs- und Schottersicherung",
            "Instandsetzungsarbeiten im Anschlussbahnbereich",
        ],
        thumbs: [
            { url: "/assets/img/12.webp" },
            { url: "/assets/img/10.webp" }

        ]
    },
    {
        name: "Tiefbau",
        icon: <BsFillTrainLightrailFrontFill />,
        title: "Tiefbau & Infrastruktur",
        description: "Die Basis jeder funktionierenden Bahnstrecke ist ein solides Fundament. Unsere Leistungen im Tiefbau umfassen Kabelverlegung, Entwässerung, Bahnübergänge und mehr – präzise umgesetzt für nachhaltige Infrastrukturprojekte.",
        serviceList: [
            "Gleisdurchörterungen für Kabelquerungen",
            "Kabeltiefbau, Errichtung von Kabelkanal- und Troganlagen",
            "Entwässerungsarbeiten (Herstellung von Bahngräben, Tiefenentwässerung)",
            "Randweg- und Rangierwegherstellung",
            "Bahnsteigkantenbau und -ausstattung",
        ],
        thumbs: [
            { url: "/assets/img/7.webp" },
            { url: "/assets/img/6.webp" }

        ]
    },
    {
        name: "Zusatzleistung",
        icon: <BsFillTrainLightrailFrontFill />,
        title: "Zusatz- & Spezialleistungen",
        description: "Flexibilität ist unsere Stärke. Auch über klassische Gleisbauarbeiten hinaus übernehmen wir Sonderaufträge und spezielle Bauleistungen – schnell, lösungsorientiert und mit technischer Kompetenz.",
        serviceList: [
            "Einbau von Planumsschutzschichten in kleineren Abschnitten",
            "Bauleistungen außerhalb des direkten Leistungsprofils",
        ],
        thumbs: [
            { url: "/assets/img/11.webp" },
            { url: "/assets/img/8.webp" }

        ]
    },
]

const fadeInVariant = {
    hidden: { opacity: 0 },
    show: { opacity: 1, transition: { duration: 0.2, delay: 0.1 } },
}

const Service = () => {
    const [activeTab, setActiveTab] = useState("Gleisbau");
    return (
        <section id='service' className="pt-16 xl:pt-32">
            <div className="container mx-auto">
                <motion.div
                    variants={fadeIn({ direction: "up", delay: 0.2 })} initial="hidden" whileInView="show" viewport={{ once: false, amount: 0.2 }}
                    className='text-center max-w-[540px] mx-auto mb-20'>
                    <PreTitle center text="Unsere Leistungen" />
                    <h2 className='h2 mb-3 dark:text-white text-primary'>Unsere Kompetenz im Überblick</h2>
                    <p className='mb-11 max-w-[480px] mx-auto dark:text-secondary-dark text-primary'>Ob Neubau, Instandhaltung oder Spezialprojekte – wir bieten zuverlässige Leistungen im Gleis-, Weichen- und Tiefbau. Effizient, sicher und termingerecht.</p>
                </motion.div>
                {/**tabs */}
                <motion.div variants={fadeIn({ direction: "up", delay: 0.3 })} initial="hidden" whileInView="show" viewport={{ once: false, amount: 0.2 }}>
                    <Tabs defaultValue="Gleisbau" onValueChange={(value) => setActiveTab(value)} className='flex flex-col xl:flex-row gap-[30px]'>
                        <TabsList className="grid grid-cols-1 md:grid-cols-2 xl:grid-cols-1 gap-[30px] h-full w-full  p-0 bg-transparent xl:w-[345px]">
                            {serviceData.map((item) => {
                                return <TabsTrigger key={item.name} value={item.name} className='w-full rounded-sm dark:border dark:border-border/20 h-[100px] flex items-center relative shadow-custom p-0 cursor-pointer outline-none'>
                                    <div className={`w-[99px] h-[98px] flex items-center rounded-sm justify-center absolute left-0 
                                    ${activeTab === item.name
                                            ? "bg-primary text-white"
                                            : "bg-accent text-primary"}`}
                                    >
                                        <div className='text-3xl'>{item.icon}</div>
                                    </div>
                                    <div className='uppercase font-primary text-base font-semibold tracking-[0.6px] w-[100px] ml-16'>{item.name}</div>
                                </TabsTrigger>
                            })}
                        </TabsList>
                        {/**tabs content */}
                        <div className='flex-1 dark:bg-primary bg-white shadow-custom border border-border/20 rounded-sm h-[490px] p-[30px]'>
                            {serviceData.map((item) => (
                                <TabsContent
                                    key={item.name}
                                    value={item.name}
                                    className='m-0 text-primary dark:text-white'
                                >
                                    <motion.div
                                        variants={fadeInVariant} initial="hidden" whileInView="show" exit="hidden"
                                        className='flex md:flex-row flex-col gap-[30px]'>
                                        {/**images */}
                                        <div className='flex md:flex-col gap-5 xl:gap-[30px]'>
                                            {item.thumbs.map((thumb, index) => (
                                                <div key={index} className='relative w-[140px] xl:w-[200px] h-[140px] xl:h-[200px]'><Image src={thumb.url} alt={item.name} quality={50} priority fill sizes="full" className='object-cover' /></div>
                                            ))}
                                        </div>
                                        {/** text & button*/}
                                        <div>
                                            <div>
                                                <h3 className='h3 mb-6'>{item.title}</h3>
                                                <p className='mb-10'>{item.description}</p>
                                                {/**service list */}
                                                <ul className='grid grid-cols-1 xl:grid-cols-2 gap-3 mb-12'>
                                                    {item.serviceList.map((service, index) => {
                                                        return <li key={index} className='flex items-center gap-4'>
                                                            <div className='w-[6px] h-[6px] bg-accent'></div>
                                                            <div className='capitalize font-medium dark:text-secondary-dark text-primary'>{service}</div>
                                                        </li>
                                                    })}
                                                </ul>
                                                {/**btn */}
                                                <a href="#contact">
                                                    <Button text="mehr erfahren" />
                                                </a>
                                            </div>
                                        </div>
                                    </motion.div>
                                </TabsContent>
                            ))}
                        </div>
                    </Tabs>
                </motion.div>
            </div>
        </section>
    )
}

export default Service