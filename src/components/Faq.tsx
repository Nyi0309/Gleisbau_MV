import React from 'react'
import PreTitle from './PreTitle'
import Faqitem from './Faqitem';

const faqItemsData = [
    {
        title: "Welche Leistungen bietet Ihr Unternehmen im Bereich Gleisbau an?",
        description: "Unser Leistungsspektrum umfasst den Neubau, Umbau und die Instandhaltung von Gleisanlagen. Dazu gehören unter anderem der Gleis- und Weichenbau, die Sanierung bestehender Schienenanlagen, die Schotterbettung, der Austausch von Schwellen sowie der Schienenschweiß- und Spannungsneutralisationsarbeiten.",
    },
    {
        title: "Wie oft müssen Schienen und Weichen gewartet oder erneuert werden?",
        description: "Die Lebensdauer von Gleisanlagen hängt von verschiedenen Faktoren wie Verkehrsaufkommen, Witterung und Materialqualität ab. In der Regel erfolgt eine regelmäßige Inspektion alle paar Monate, während größere Instandhaltungsmaßnahmen oder der Austausch von Gleisen und Weichen nach 10 bis 30 Jahren notwendig sein können.",
    },
    {
        title: "Welche Faktoren beeinflussen die Kosten eines Gleisbauprojekts?",
        description: "Die Kosten eines Gleisbauprojekts hängen von mehreren Faktoren ab, darunter: Länge der Strecke und Art des Gleises (Hauptstrecke, Nebenstrecke, Straßenbahn etc.), Zustand des Untergrunds (z. B. Notwendigkeit einer Planumsschutzschicht), Menge des zu ersetzenden Materials (Schienen, Schwellen, Schotter), Erforderliche Sicherheitsmaßnahmen, Erreichbarkeit der Baustelle. Wir bieten eine individuelle Beratung und erstellen ein maßgeschneidertes Angebot basierend auf Ihren Anforderungen.",
    },
    {
        title: "Welche Maßnahmen tragen zur Sicherheit und Langlebigkeit der Gleisanlagen bei?",
        description: "Zur Sicherstellung einer dauerhaften und sicheren Nutzung führen wir folgende Maßnahmen durch: Regelmäßige Wartung und Inspektionen, Gleisstopfarbeiten zur Stabilisierung des Schotterbetts, Schienenschweißarbeiten für nahtlose Übergänge, Entwässerungsarbeiten zur Vermeidung von Schlammbildung, Schienenschleifarbeiten zur Minimierung von Materialverschleiß. Diese Maßnahmen helfen, Verschleiß frühzeitig zu erkennen und teure Reparaturen zu vermeiden.",
    },
    {
        title: "Bieten Sie auch Tiefbauarbeiten für Gleisanlagen an?",
        description: "Ja! Neben dem klassischen Gleisbau übernehmen wir auch Tiefbau- und Infrastrukturarbeiten, darunter: Gleisdurchörterungen für Kabelquerungen, Errichtung von Kabelkanal- und Troganlagen, Bahnübergangsarbeiten inkl. Straßenbelag und Gleisausplattung, Entwässerungsarbeiten wie Bahngrabenherstellung, Bahnsteigkantenbau und Rangierwegherstellung. Diese Arbeiten sind essenziell für eine dauerhafte Betriebssicherheit und Infrastrukturstabilität.",
    },
]


const Faq = () => {
    return (
        <section id='service' className="pt-16 xl:pt-32 pb-16">
            <div className="container mx-auto">
                {/**text */}
                <div className='text-center max-w-[540px] mx-auto mb-20'>
                    <PreTitle center text="Faq" />
                    <h2 className='h2 mb-3 dark:text-white text-primary'>Solutions We Provide</h2>
                    <p className='mb-11 max-w-[480px] mx-auto dark:text-secondary-dark text-primary'>Lorem ipsum dolor sit amet, consectetuer adipiscing elit. Aeneanadipiscing elit. Aenean adipiscing elit. Aenean  </p>
                </div>

                {/**faq itemss */}
                <ul className='w-full flex flex-col'>
                    {faqItemsData.map((item, index) => {
                        return <li key={index} className=''>
                            <Faqitem title={item.title} description={item.description} />
                        </li>
                    })}
                </ul>
            </div>
        </section>
    )
}

export default Faq