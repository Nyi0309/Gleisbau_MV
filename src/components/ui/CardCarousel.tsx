"use client"
import { motion } from "framer-motion";
import { useState } from "react";
import { FiChevronLeft, FiChevronRight } from "react-icons/fi";
import useMeasure from "react-use-measure";
import PreTitle from "../PreTitle";
import { fadeIn } from "@/lib/variants";

const CARD_WIDTH = 400;
const CARD_HEIGHT = 500;
const MARGIN = 20;
const CARD_SIZE = CARD_WIDTH + MARGIN;

const BREAKPOINTS = {
    sm: 640,
    lg: 1024,
};

const CardCarousel = () => {
    const [ref, { width }] = useMeasure();
    const [offset, setOffset] = useState(0);

    const CARD_BUFFER =
        width > BREAKPOINTS.lg ? 3 : width > BREAKPOINTS.sm ? 2 : 1;

    const CAN_SHIFT_LEFT = offset < 0;

    const CAN_SHIFT_RIGHT =
        Math.abs(offset) < CARD_SIZE * (items.length - CARD_BUFFER);

    const shiftLeft = () => {
        if (!CAN_SHIFT_LEFT) {
            return;
        }
        setOffset((pv) => (pv += CARD_SIZE));
    };

    const shiftRight = () => {
        if (!CAN_SHIFT_RIGHT) {
            return;
        }
        setOffset((pv) => (pv -= CARD_SIZE));
    };

    return (
        <div className="" ref={ref}>
            <div className="relative overflow-hidden p-4">
                {/* CARDS */}
                <div className="mx-auto container">
                    <motion.div
                        variants={fadeIn({ direction: "up", delay: 0.2 })} initial="hidden" whileInView="show" viewport={{ once: false, amount: 0.2 }}
                        className='text-center max-w-[540px] mx-auto mb-20'>
                        <PreTitle center text="Unsere Referenzen" />
                        <h2 className='h2 mb-3 dark:text-white text-primary'>Starke Projekte. Starke Partnerschaften.</h2>
                        <p className='mb-11 max-w-[480px] mx-auto dark:text-secondary-dark text-primary'>Vom regionalen Wartungseinsatz bis zum komplexen Bahnübergangsumbau – wir realisieren Projekte zuverlässig, präzise und im Sinne unserer Auftraggeber. Ein Auszug aktueller Referenzen zeigt, wofür GBMV steht: Qualität, Termintreue und praxisnahe Lösungen im Gleisbau.</p>
                    </motion.div>
                    <motion.div
                        animate={{
                            x: offset,
                        }}

                        className="flex"
                    >
                        {items.map((item) => {
                            return <motion.div key={item.id} variants={fadeIn({ direction: "up", delay: 0.3 })} initial="hidden" whileInView="show" viewport={{ once: false, amount: 0.2 }}><Card {...item} /></motion.div>;
                        })}
                    </motion.div>
                </div>

                {/* BUTTONS */}
                <>
                    <motion.button
                        initial={false}
                        animate={{
                            x: CAN_SHIFT_LEFT ? "0%" : "-100%",
                        }}
                        className="absolute left-0 top-[60%] z-30 rounded-r-xl bg-accent/30 p-3 pl-2 text-4xl text-white backdrop-blur-sm transition-[padding] hover:pl-3"
                        onClick={shiftLeft}
                    >
                        <FiChevronLeft />
                    </motion.button>
                    <motion.button
                        initial={false}
                        animate={{
                            x: CAN_SHIFT_RIGHT ? "0%" : "100%",
                        }}
                        className="absolute right-0 top-[60%] z-30 rounded-l-xl bg-accent/30 p-3 pr-2 text-4xl text-white backdrop-blur-sm transition-[padding] hover:pr-3"
                        onClick={shiftRight}
                    >
                        <FiChevronRight />
                    </motion.button>
                </>
            </div>
        </div>
    );
};

const Card = ({ url, category, title, description }: ItemType) => {
    return (
        <div
            className="relative shrink-0 rounded-2xl border bg-white shadow-md transition-all hover:scale-[1.015] hover:shadow-xl"
            style={{
                width: CARD_WIDTH,
                height: CARD_HEIGHT,
                marginRight: MARGIN,
                backgroundImage: `url(${url})`,
                backgroundPosition: "center",
                backgroundSize: "cover",
            }}
        >
            <div className="absolute inset-0 z-20 rounded-2xl bg-gradient-to-b from-black/90 via-black/60 to-black/0 p-6 text-white transition-[backdrop-filter]">


                <span className="text-md font-primary font-semibold uppercase text-accent">
                    {category}
                </span>
                <p className="mb-2 text-md font-medium">{title}</p>
                <p className="text-white">{description}</p>

            </div>
        </div>
    );
};

export default CardCarousel;

type ItemType = {
    id: number;
    url: string;
    category: string;
    title: string;
    description: string;
};

const items: ItemType[] = [
    {
        id: 1,
        url: "/assets/img/3.webp",
        category: "2024",
        title: "Kunde: Happy KSR GmbH",
        description:
            "Jährliche Wartungsarbeiten am Anschlussgleis Kieswerk Klocksin/Mecklenburg Vorpommern",
    },
    {
        id: 2,
        url: "/assets/img/3.webp",
        category: "2025",
        title: "Kunde: Deutsche Bahn",
        description:
            "Kompletterneuerung Bahnübergang mit Rammrohrgründungsarbeiten und Kabeltiefbau inklusive umfangreicher Straßenbaumaßnahmen und Bernerdeich/Niedersachsen",
    },
    {
        id: 3,
        url: "/assets/img/3.webp",
        category: "2025",
        title: "Kunde: Deutsche Bahn",
        description:
            "Kompletterneuerung Bahnübergang mit Kabeltiefbau Warnitz/Mecklenburg-Vorpommern",
    },
    {
        id: 4,
        url: "/assets/img/3.webp",
        category: "",
        title: "",
        description:
            "",
    },
    {
        id: 5,
        url: "/assets/img/3.webp",
        category: "",
        title: "",
        description:
            "",
    },
    {
        id: 6,
        url: "/assets/img/3.webp",
        category: "",
        title: "",
        description:
            "",
    },
    {
        id: 7,
        url: "/assets/img/3.webp",
        category: "",
        title: "",
        description:
            "",
    },
];