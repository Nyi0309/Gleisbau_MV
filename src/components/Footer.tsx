import React from 'react'
import { ToggleButton } from './ToggleButton'
import Logo from './Logo'
import Link from 'next/link'
import {
    Dialog,
    DialogTrigger,
    DialogContent,
    DialogTitle,
  } from "@/components/ui/dialog";

const Footer = () => {
    return (
        <footer className='relative pt-16 bg-white'>
            <div className='container mx-auto'>
                {/**erste Reihe */}
              
               <div className='hidden xl:flex mb-4 w-[200px]'>
                    <Logo />
                </div>
                <div className='border-b border-border/80 mb-2'></div>
                <div className='flex flex-col xl:flex-row items-start xl:items-center justify-between mb-2'>
                    <Link href="https://www.pommernprovider.de/" target='blank' className='text-primary'>2025 © Pommerprovider</Link>
                   <div>
                   <Dialog>
                        <DialogTrigger asChild>
                        <button className="hover:text-accent transition cursor-pointer">
                            Impressum | Datenschutz
                        </button>
                        </DialogTrigger>

                        <DialogContent className='bg-white'>
                        {/**Impressum */}
                        
                        <div className="relative max-h-[80vh] overflow-y-auto px-6 py-8 text-sm leading-relaxed space-y-8">
                            {/* IMPRESSUM */}
                            <div className="space-y-4">
                                <DialogTitle className="text-2xl font-bold">Impressum</DialogTitle>

                                <p>
                                <strong>GBMV GmbH – Gleisbau Mecklenburg-Vorpommern</strong><br />
                                Am Heizkraftwerk 19<br />
                                17235 Neustrelitz<br />
                                Deutschland
                                </p>

                                <p>
                                <strong>Vertreten durch:</strong><br />
                                Thomas Cordt, Geschäftsführer
                                </p>

                                <p>
                                <strong>Kontakt:</strong><br />
                                Telefon: <a href="tel:+4939813494485" className="underline text-primary">+49 (0) 3981 34 94 48 - 5</a><br />
                                Mobil: <a href="tel:+491736898893" className="underline text-primary">+49 (0) 173 6898 893</a><br />
                                Telefax: +49 (0) 3981 34 94 48 - 6<br />
                                E-Mail: <a href="mailto:info@gleisbau-mv.de" className="underline text-primary">info@gleisbau-mv.de</a>
                                </p>

                                <p>
                                <strong>Registereintrag:</strong><br />
                                Eingetragen im Handelsregister<br />
                                Registergericht: Amtsgericht Neubrandenburg<br />
                                Registernummer: HRB 7460
                                </p>

                                <p>
                                <strong>Design & Programmierung:</strong><br />
                                Pommernprovider
                                </p>
                            </div>

                            {/* DATENSCHUTZ */}
                            <div className="space-y-6">
                                <DialogTitle className="text-2xl font-bold">Datenschutzerklärung</DialogTitle>

                                <h2 className="text-lg font-semibold">1. Datenschutz auf einen Blick</h2>

                                <p>
                                Die folgenden Hinweise geben einen einfachen Überblick darüber, was mit Ihren personenbezogenen Daten passiert, wenn Sie unsere Website besuchen.
                                Personenbezogene Daten sind alle Daten, mit denen Sie persönlich identifiziert werden können.
                                </p>

                                <h3 className="font-medium">Datenerfassung auf dieser Website</h3>
                                <p>
                                <strong>Wer ist verantwortlich?</strong><br />
                                Die Datenverarbeitung erfolgt durch den Websitebetreiber. Dessen Kontaktdaten finden Sie im Impressum.
                                </p>
                                <p>
                                <strong>Wie erfassen wir Ihre Daten?</strong><br />
                                Durch Ihre Eingaben (z. B. im Kontaktformular) oder automatisch durch IT-Systeme beim Besuch der Website.
                                </p>
                                <p>
                                <strong>Wofür nutzen wir Ihre Daten?</strong><br />
                                Zur fehlerfreien Bereitstellung der Website und zur Analyse des Nutzerverhaltens.
                                </p>
                                <p>
                                <strong>Ihre Rechte:</strong><br />
                                Auskunft, Berichtigung, Löschung, Einschränkung, Widerspruch und Beschwerde bei einer Aufsichtsbehörde.
                                </p>

                                <h2 className="text-lg font-semibold">2. Allgemeine Hinweise und Pflichtinformationen</h2>
                                <h3 className="font-medium">Datenschutz</h3>
                                <p>
                                Wir behandeln Ihre Daten vertraulich und entsprechend den gesetzlichen Datenschutzvorschriften.
                                Die Datenübertragung im Internet kann jedoch Sicherheitslücken aufweisen.
                                </p>

                                <h3 className="font-medium">Verantwortliche Stelle</h3>
                                <p>
                                GBMV GmbH – Gleisbau Mecklenburg-Vorpommern<br />
                                Am Heizkraftwerk 19, 17235 Neustrelitz<br />
                                Tel: <a href="tel:+4939813494485" className="underline text-primary">+49 (0) 3981 34 94 48 - 5</a><br />
                                E-Mail: <a href="mailto:info@gleisbau-mv.de" className="underline text-primary">info@gleisbau-mv.de</a>
                                </p>

                                <h3 className="font-medium">Widerruf Ihrer Einwilligung</h3>
                                <p>
                                Sie können eine erteilte Einwilligung jederzeit formlos widerrufen. Die Rechtmäßigkeit bleibt bis zum Widerruf unberührt.
                                </p>

                                <h3 className="font-medium">Widerspruchsrecht (Art. 21 DSGVO)</h3>
                                <p>
                                Sie haben das Recht, gegen die Verarbeitung Ihrer Daten Widerspruch einzulegen, insbesondere bei Direktwerbung.
                                </p>

                                <h3 className="font-medium">Beschwerderecht bei einer Aufsichtsbehörde</h3>
                                <p>
                                Im Falle datenschutzrechtlicher Verstöße steht Ihnen ein Beschwerderecht bei einer Aufsichtsbehörde zu.
                                </p>

                                <h3 className="font-medium">Recht auf Datenübertragbarkeit</h3>
                                <p>
                                Sie haben das Recht, Daten in einem maschinenlesbaren Format übertragen zu lassen.
                                </p>

                                <h3 className="font-medium">Auskunft, Löschung, Sperrung</h3>
                                <p>
                                Sie haben jederzeit das Recht auf unentgeltliche Auskunft sowie auf Berichtigung, Sperrung oder Löschung Ihrer Daten.
                                </p>

                                <h3 className="font-medium">Einschränkung der Verarbeitung</h3>
                                <p>
                                Sie können in bestimmten Fällen die Einschränkung der Verarbeitung Ihrer personenbezogenen Daten verlangen.
                                </p>

                                <h2 className="text-lg font-semibold">3. Datenerfassung auf unserer Website</h2>

                                <h3 className="font-medium">Cookies</h3>
                                <p>
                                Unsere Website verwendet Cookies. Sie verbessern die Nutzerfreundlichkeit und werden teilweise automatisch gelöscht. Sie können die Verwendung in Ihrem Browser einschränken oder deaktivieren.
                                </p>

                                <h3 className="font-medium">Server-Log-Dateien</h3>
                                <p>
                                Automatisch erfasst werden u. a. IP-Adresse, Browsertyp, Uhrzeit etc. Diese Daten dienen der technischen Stabilität und werden nicht mit anderen Datenquellen zusammengeführt.
                                </p>

                                <h3 className="font-medium">Kontaktaufnahme</h3>
                                <p>
                                Wenn Sie uns per E-Mail oder Telefon kontaktieren, speichern wir Ihre Angaben zur Bearbeitung. Die Verarbeitung erfolgt auf Grundlage von Art. 6 Abs. 1 lit. a, b oder f DSGVO.
                                </p>

                                <p className="text-xs text-muted-foreground mt-6">
                                Quelle: Erstfassung basierend auf eRecht24 – überarbeitet für gleisbau-mv.de
                                </p>
                            </div>
                            </div>

                        </DialogContent>
                </Dialog>
                   </div>
            </div>
        </div>
        </footer>
    )
}

export default Footer