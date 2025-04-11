"use client";
import { motion } from "framer-motion";

const jobOffers = [
    { title: "Baumaschinenführer (m/w/d) – Jetzt bewerben!" },
    { title: "Baumaschinenführer (m/w/d) – Jetzt bewerben!" },
    { title: "Baumaschinenführer (m/w/d) – Jetzt bewerben!" },
    { title: "Baumaschinenführer (m/w/d) – Jetzt bewerben!" },
    { title: "Baumaschinenführer (m/w/d) – Jetzt bewerben!" },
    { title: "Baumaschinenführer (m/w/d) – Jetzt bewerben!" },
];

export const Liveticker = () => {
    return (
        <div className="bg-primary text-white mt-16 xl:mt-32 py-10 overflow-hidden">
            <div className="container mx-auto h-full">
                <div className="flex overflow-hidden before:content-[''] before:z-10 after:content-[''] before:absolute after:absolute before:h-full after:h-full before:w-5 after:w-5 relative after:bg-black-transparent-left after:right-0 before:left-0 before:top-0 after:top-0 before:bg-black-transparent-right">
                    <motion.div
                        initial={{ translateX: 0 }}
                        animate={{ translateX: "-50%" }}
                        transition={{
                            duration: 50,
                            ease: "linear",
                            repeat: Infinity,
                        }}
                        className="flex gap-16 pr-16 my-2 flex-none whitespace-nowrap"
                    >
                        {jobOffers.map(({ title }, index) => (
                            <a
                                key={index}
                                href="mailto:info@gleisbau-mv.de"
                                className="text-4xl xl:text-5xl font-semibold text-secondary-dark hover:text-white transition-colors"
                            >
                                {title}
                            </a>
                        ))}
                        {jobOffers.map(({ title }, index) => (
                            <a
                                key={`duplicate-${index}`}
                                 href="mailto:info@gleisbau-mv.de"
                                className="text-4xl xl:text-5xl font-semibold text-secondary-dark hover:text-white transition-colors"
                            >
                                {title}
                            </a>
                        ))}
                    </motion.div>
                </div>
            </div>
        </div>
    );
};
