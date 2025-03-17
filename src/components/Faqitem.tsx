import { useState } from "react";
import { RiSubtractFill, RiAddFill } from "react-icons/ri"

type FaqProp = {
    title: string;
    description: string;
}

const Faqitem = ({ title, description }: FaqProp) => {

    const [isOpen, setisOpen] = useState(false);

    return (
        <div className="w-full border-b">
            <div className="flex items-center justify-between py-6">
                <h4 className="h4 max-w-[300px] sm:max-w-md md:max-w-max text-primary dark:text-white">{title}</h4>
                <button className="w-[44px] h-[44px] bg-accent flex items-center justify-center cursor-pointer" onClick={() => setisOpen(!isOpen)}>
                    {isOpen ? <RiSubtractFill className={`text-primary text-2xl transition-opacity duration-700 ${isOpen ? "opacity-100" : "opacity-0"}`} />
                        : <RiAddFill className={`text-primary text-2xl transition-opacity duration-700 ${isOpen ? "opacity-0" : "opacity-100"}`} />}
                </button>
            </div>
            {/**description */}
            <div className={`${isOpen ? "max-h-[300px] opacity-100 transition-all duration-500 ease-in-out" : "max-h-0 opacity-0 transition-all duration-300 ease-in-out overflow-hidden"}`}>
                <p className="pb-8 flex items-center max-w-[860px] text-primary dark:text-secondary-dark">{description}</p>
            </div>
        </div>
    )
}

export default Faqitem