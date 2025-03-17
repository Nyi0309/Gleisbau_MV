import React from 'react'
import PreTitle from './PreTitle'
import Image from 'next/image'
import Button from './Button'

const Contact = () => {
    return (
        <section id="about" className="pt-16 xl:pt-32">
            <div className="container mx-auto">
                <div className="flex flex-col gap-12 xl:gap-0 xl:flex-row xl:items-center">
                    {/**text */}
                    <div className="flex-1">
                        <div className="max-w-[540px]">
                            {/**Überschrift */}
                            <PreTitle text="Kontaktiere uns" />
                            <h2 className="h2 text-primary dark:text-white mb-6">Lorem ipsum dolor sit amet, consectetuer</h2>
                            <p className="mb-11 text-primary dark:text-secondary-dark">Lorem ipsum dolor sit amet, consectetuer adipiscing elit. Aenean commodo ligula eget dolor. Aenean massa. Cum sociis natoque penatibus et magnis dis parturient montes, nascetur ridiculus mus. </p>
                        </div>

                        {/**btn */}
                        <Button text="Kontakt" />
                    </div>
                    {/**img*/}
                    <div className="flex-1 xl:flex xl:justify-center">
                        <div className="w-[644px] h-[493px] relative">
                            {/**bg */}
                            <Image src="/assets/img/5.jpg" alt="Über uns Bild" fill quality={100} sizes="full" priority className="object-cover" />
                        </div>
                    </div>
                </div>
            </div>
        </section>
    )
}

export default Contact