import Button from "./Button"


const Hero = () => {
    return (
        <section className="h-[70vh] bg-hero bg-no-repeat bg-cover bg-center relative">
            {/**overlay */}
            <div className="absolute inset-0 bg-gradient-to-l from-black/0 via-black/30 to-black/70 z-10"></div>
            <div className="container mx-auto h-full flex items-center">
                <div className="z-20 text-secondary-dark text-center xl:text-left mx-auto xl:mx-0 flex flex-col items-center xl:items-start max-w-[608px]">
                    <h1 className="h1 text-white mb-4">
                        <span className="text-accent">Gleisbau. </span>
                        Stabil. Zukunftssicher.</h1>
                    <p className="mb-9">Lorem ipsum dolor sit amet consectetur adipisicing elit. Nemo animi, culpa natus enim atque tempore expedita placeat incidunt odit quae, voluptates, porro fugit eum?</p>
                    {/**button */}
                    <div>
                        <Button text="Referenzen"></Button>
                    </div>
                </div>
            </div>
        </section>
    )
}

export default Hero