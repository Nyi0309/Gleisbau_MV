import { RiPhoneFill } from "react-icons/ri"
import { IoMdMail } from "react-icons/io";
import { MdLocationPin } from "react-icons/md";

const Topbar = () => {
    return (
        <section className="py-4 xl:h-15 xl:py-0 bg-gradient-to-t from-[#CC5400] to-[#FF8733] flex items-center" id='home'>
            <div className="container mx-auto">
                {/**desktop phone, mail, pin */}
                <div className="hidden xl:flex gap-6 items-center justify-between">
                    <div className="flex items-center gap-8">
                        {/**phone */}
                        <div className="flex gap-4 items-center">
                            <a href="tel:+4939813494485" className="bg-primary w-8 h-8 flex items-center justify-center"><RiPhoneFill className="text-white text-xl" /></a>
                            <p className="hidden xl:block">+49 (0) 3981 34 94 48 - 5</p>
                        </div>
                        {/**mail */}
                        <div className="flex gap-2 items-center">
                            <a href="mailto:info@gleisbau-mv.de" className="bg-primary w-8 h-8 flex items-center justify-center"><IoMdMail className="text-white text-xl" /></a>
                            <p className="hidden xl:block">info@gleisbau-mv.de</p>
                        </div>
                    </div>
                    {/**Pin */}
                    <div className="flex gap-2 items-center">
                        <a href="https://maps.app.goo.gl/KUkRmPC7niBVbyct7" target="blank" className="bg-primary w-8 h-8 flex items-center justify-center"><MdLocationPin className="text-white text-xl" /></a>
                        <p className="hidden xl:block">Am Heizkraftwerk 19, 17235 Neustrelitz</p>
                    </div>
                </div>
                {/**mobile phone, mail, pin */}
                <div className="flex items-center justify-between gap-6 xl:hidden">
                    {/**phone */}
                    <div className="flex items-center gap-2">
                        <a href="tel:+4939813494485" className="bg-primary w-8 h-8 flex items-center justify-center cursor-pointer"><RiPhoneFill className="text-white text-2xl" /></a>

                    </div>
                    {/**mail */}
                    <div className="flex items-center gap-2">
                        <a href="mailto:info@gleisbau-mv.de" className="bg-primary w-8 h-8 flex items-center justify-center cursor-pointer"><IoMdMail className="text-white text-2xl" /></a>

                    </div>
                    {/**Pin */}
                    <div className="flex items-center gap-2">
                        <a href="https://maps.app.goo.gl/KUkRmPC7niBVbyct7" target="blank" className="bg-primary w-8 h-8 flex items-center justify-center cursor-pointer"><MdLocationPin className="text-white text-2xl" /></a>

                    </div>
                </div>
            </div>
        </section>
    )
}

export default Topbar