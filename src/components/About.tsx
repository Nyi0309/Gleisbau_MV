import Image from "next/image"
import Button from "./Button"
import PreTitle from "./PreTitle"


const About = () => {
    return (
        <section id="about" className="pt-16 xl:pt-32 overflow-hidden">
            <div className="container mx-auto">
                <div className="flex flex-col gap-12 xl:gap-0 xl:flex-row xl:items-center">
                    {/**text */}
                    <div className="flex-1">
                        <div className="max-w-[540px]">
                            {/**Überschrift */}
                            <PreTitle text="Über uns" />
                            <h2 className="h2 text-primary dark:text-white mb-6">Lorem ipsum dolor sit amet, consectetuer</h2>
                            <p className="mb-11 text-primary dark:text-secondary-dark">Lorem ipsum dolor sit amet, consectetuer adipiscing elit. Aenean commodo ligula eget dolor. Aenean massa. Cum sociis natoque penatibus et magnis dis parturient montes, nascetur ridiculus mus. </p>
                        </div>
                        {/**signatur */}
                        <div className="w-max flex flex-col mb-10 text-primary dark:text-secondary-dark">
                            <p>Fred Röwer</p>
                            <p>Geschäftsführer</p>
                        </div>
                        {/**btn */}
                        <Button text="Kontakt" />
                    </div>
                    {/**img*/}
                    <div className="flex-1 xl:flex xl:justify-center">
                        <div className="w-[444px] h-[493px] relative">
                            {/**bg */}
                            <div className="hidden xl:flex w-[444px] h-[493px] bg-accent absolute -top-4 -left-4 -z-10"></div>
                            <Image src="/assets/img/1.jpg" alt="Über uns Bild" fill quality={100} priority className="object-cover" />
                        </div>
                    </div>
                </div>
            </div>
        </section>
    )
}

export default About