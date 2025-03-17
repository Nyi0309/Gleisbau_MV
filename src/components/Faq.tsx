import React from 'react'
import PreTitle from './PreTitle'

const faqItemsData = [
    {
        title: "Lorem ipsum dolor sit amet, consectetuer?",
        description: "Lorem ipsum dolor sit amet, consectetuer adipiscing elit. Aenean commodo ligula eget dolor. Aenean massa. Cum sociis natoque penatibus et magnis dis parturient montes, nascetur ridiculus mus.",
    },
    {
        title: "Lorem ipsum dolor sit amet, consectetuer?",
        description: "Lorem ipsum dolor sit amet, consectetuer adipiscing elit. Aenean commodo ligula eget dolor. Aenean massa. Cum sociis natoque penatibus et magnis dis parturient montes, nascetur ridiculus mus.",
    },
    {
        title: "Lorem ipsum dolor sit amet, consectetuer?",
        description: "Lorem ipsum dolor sit amet, consectetuer adipiscing elit. Aenean commodo ligula eget dolor. Aenean massa. Cum sociis natoque penatibus et magnis dis parturient montes, nascetur ridiculus mus.",
    },
    {
        title: "Lorem ipsum dolor sit amet, consectetuer?",
        description: "Lorem ipsum dolor sit amet, consectetuer adipiscing elit. Aenean commodo ligula eget dolor. Aenean massa. Cum sociis natoque penatibus et magnis dis parturient montes, nascetur ridiculus mus.",
    },
    {
        title: "Lorem ipsum dolor sit amet, consectetuer?",
        description: "Lorem ipsum dolor sit amet, consectetuer adipiscing elit. Aenean commodo ligula eget dolor. Aenean massa. Cum sociis natoque penatibus et magnis dis parturient montes, nascetur ridiculus mus.",
    },
]

// const faqItemVarints = {
//     hidden: { opacity: 0, y: 30 },


//     visible: () => ({
//         opacity: 1,
//         y: 0,
//         transition: { delay: index * 0.1, duration: 0.3 }
//     }),
// };

const Faq = () => {
    return (
        <section id='service' className="pt-16 xl:pt-32">
            <div className="container mx-auto">
                {/**text */}
                <div className='text-center max-w-[540px] mx-auto mb-20'>
                    <PreTitle center text="Faq" />
                    <h2 className='h2 mb-3 dark:text-white text-primary'>Solutions We Provide</h2>
                    <p className='mb-11 max-w-[480px] mx-auto dark:text-secondary-dark text-primary'>Lorem ipsum dolor sit amet, consectetuer adipiscing elit. Aeneanadipiscing elit. Aenean adipiscing elit. Aenean  </p>
                </div>

                {/**faq itemss */}
                {/* <div>faq items</div> */}
            </div>
        </section>
    )
}

export default Faq