"use client"
import { useState } from 'react'
import { BsFillTrainLightrailFrontFill } from "react-icons/bs";

import { Tabs, TabsContent, TabsList, TabsTrigger } from './ui/tabs';
import PreTitle from './PreTitle';
import Image from 'next/image';
import Button from './Button';

const serviceData = [
    {
        name: "Gleisbau",
        icon: <BsFillTrainLightrailFrontFill />,
        title: "Gleis- und Weichenbau",
        description: "Lorem ipsum dolor sit amet, consectetuer adipiscing elit. Aenean commodo ligula eget dolor. Aenean massa. Cum sociis natoque penatibus et magnis dis parturient montes, nascetu",
        serviceList: [
            "Kranschienenbau",
            "Straßenbahnbau",
            "Schienenauswechslung, Schienenfehlerbeseitigung",
            "Gleisauswechslung im konventionellen Umbauverfahren",
            "Einzelschwellenauswechslung",
            "Gleis- und Weichenneubau einschließlich Herstellung der Schotterbettung",
        ],
        thumbs: [
            { url: "/assets/img/4.jpg" },
            { url: "/assets/img/2.jpg" }

        ]
    },
    {
        name: "Instandhaltung",
        icon: <BsFillTrainLightrailFrontFill />,
        title: "Instandhaltung & Modernisierung",
        description: "Lorem ipsum dolor sit amet, consectetuer adipiscing elit. Aenean commodo ligula eget dolor. Aenean massa. Cum sociis natoque penatibus et magnis dis parturient montes, nascetu",
        serviceList: [
            "Durcharbeitung und Instandsetzungsarbeiten an Gleisen und Weichenanlagen",
            "Schienenschweiß- und Neutralisationsarbeiten/Spannungsausgleich",
            "Schienenschleifarbeiten",
            "Böschungs- und Schottersicherung",
            "Instandsetzungsarbeiten im Anschlussbahnbereich",
        ],
        thumbs: [
            { url: "/assets/img/2.jpg" },
            { url: "/assets/img/3.jpg" }

        ]
    },
    {
        name: "Tiefbau",
        icon: <BsFillTrainLightrailFrontFill />,
        title: "Tiefbau & Infrastruktur",
        description: "Lorem ipsum dolor sit amet, consectetuer adipiscing elit. Aenean commodo ligula eget dolor. Aenean massa. Cum sociis natoque penatibus et magnis dis parturient montes, nascetu",
        serviceList: [
            "Gleisdurchörterungen für Kabelquerungen",
            "Kabeltiefbau, Errichtung von Kabelkanal- und Troganlagen",
            "Bahnübergangsarbeiten einschließlich Straßenbelag und Gleisausplattung",
            "Entwässerungsarbeiten (Herstellung von Bahngräben, Tiefenentwässerung)",
            "Randweg- und Rangierwegherstellung",
            "Bahnsteigkantenbau und -ausstattung",
        ],
        thumbs: [
            { url: "/assets/img/4.jpg" },
            { url: "/assets/img/2.jpg" }

        ]
    },
    {
        name: "Zusatzleistung",
        icon: <BsFillTrainLightrailFrontFill />,
        title: "Zusatz- & Spezialleistungen",
        description: "Lorem ipsum dolor sit amet, consectetuer adipiscing elit. Aenean commodo ligula eget dolor. Aenean massa. Cum sociis natoque penatibus et magnis dis parturient montes, nascetu",
        serviceList: [
            "Einbau von Planumsschutzschichten in kleineren Abschnitten",
            "Bauleistungen außerhalb des direkten Leistungsprofils",
        ],
        thumbs: [
            { url: "/assets/img/2.jpg" },
            { url: "/assets/img/4.jpg" }

        ]
    },
]

const Service = () => {
    const [activeTab, setActiveTab] = useState("Gleisbau");
    return (
        <section id='service' className="pt-16 xl:pt-32">
            <div className="container mx-auto">
                <div className='text-center max-w-[540px] mx-auto mb-20'>
                    <PreTitle center text="Unsere Leistungen" />
                    <h2 className='h2 mb-3 dark:text-white text-primary'>Solutions We Provide</h2>
                    <p className='mb-11 max-w-[480px] mx-auto dark:text-secondary-dark text-primary'>Lorem ipsum dolor sit amet, consectetuer adipiscing elit. Aeneanadipiscing elit. Aenean adipiscing elit. Aenean  </p>
                </div>
                {/**tabs */}
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
                                <div className='flex md:flex-row flex-col gap-[30px]'>
                                    {/**images */}
                                    <div className='flex md:flex-col gap-5 xl:gap-[30px]'>
                                        {item.thumbs.map((thumb, index) => (
                                            <div key={index} className='relative w-[140px] xl:w-[200px] h-[140px] xl:h-[200px]'><Image src={thumb.url} alt={item.name} quality={100} priority fill sizes="full" className='object-cover' /></div>
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
                                            <Button text="mehr erfahren" />
                                        </div>
                                    </div>
                                </div>
                            </TabsContent>
                        ))}
                    </div>
                </Tabs>
            </div>
        </section>
    )
}

export default Service