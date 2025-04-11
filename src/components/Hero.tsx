import { fadeIn } from "@/lib/variants";
import Button from "./Button"
import { motion } from "framer-motion";


const Hero = () => {
    return (
        <section className="h-[70vh] bg-hero bg-no-repeat bg-cover bg-center relative">
            {/**overlay */}
            <div className="absolute inset-0 bg-gradient-to-l from-black/0 via-black/30 to-black/70 z-10"></div>
            <div className="container mx-auto h-full flex items-center">
                <div className="z-20 text-secondary-dark text-center xl:text-left mx-auto xl:mx-0 flex flex-col items-center xl:items-start max-w-[608px]">
                    <motion.h1 variants={fadeIn({ direction: "up", delay: 0.2 })} initial="hidden" whileInView="show" viewport={{ once: false, amount: 0.8 }} className="h1 text-white mb-4">
                        <span className="text-accent">Gleisbau. </span>
                        Stabil. Zukunftssicher.</motion.h1>
                    <motion.p variants={fadeIn({ direction: "up", delay: 0.4 })} initial="hidden" whileInView="show" viewport={{ once: false, amount: 0.8 }} className="mb-9">Lorem ipsum dolor sit amet consectetur adipisicing elit. Nemo animi, culpa natus enim atque tempore expedita placeat incidunt odit quae, voluptates, porro fugit eum?</motion.p>
                    {/**button */}
                    <motion.div
                        variants={fadeIn({ direction: "up", delay: 0.4 })} initial="hidden" whileInView="show" viewport={{ once: false, amount: 0.8 }}>
                       <a href="#work">
                       <Button text="Referenzen"></Button>
                       </a>
                    </motion.div>
                </div>
            </div>
        </section>
    )
}

export default Hero