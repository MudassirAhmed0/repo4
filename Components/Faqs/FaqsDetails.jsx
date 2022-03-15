import { useState } from 'react/cjs/react.development'
import Image from 'next/dist/client/image'
import Link from 'next/link'
import styles from '../../styles2/faqs.module.css'
import layoutStyles from '../../styles2/Layout.module.css'
import search from '../../assets/NewImages/svg/search.svg'
import topFrame from '../../assets/NewImages/svg/faqs-top-frame.svg'
import bottomFrame from '../../assets/NewImages/svg/faqs-bottom-frame.svg'

const FaqsDetails = () => {
    const data = [
        {
            id: "1",
            listnaem: "Tracking Help",
            leftHeadingOne: "- Where can I drop off my package for pick-up?",
            leftHeadingTwo: "- How do I create a COD shipment?",
            leftHeadingThree: "- What is your pricing?",
            leftParaOne: "You can drop your package at one of Zajil’s branch office or centers. Click here for the most current list.",
            leftParaTwo: "Zajil offers convenient options for e-commerce sites and shippers to collect payment at the time of delivery, with essentially no limit. Once delivery is made, Zajil submits the collected funds back to the seller, less the shipping cost and a small fee agreed to in advance. Credit terms apply. To learn how to set up a COD shipment, talk to a Zajil account representative today.",
            leftParaThree: "Zajil is committed to the most affordable rate for business and personal shipping services. Use our web site’s shipping calculator or the Zajil app to get a pricing estimate before you ship",
            RightHeadingOne: "- What does a Zajil tracking number look like?",
            RightHeadingTwo: "- How do I start a return?",
            RightHeadingThree: "- How can I contact a person to help me?",
            RightParaOne: "The Zajil Express shipping number will be different for business customers and consumers.",
            RightParaTwo: "Zajil makes returns easy. Individuals should manage returns using our app or web site. Businesses should contact a Zajil Business Solutions expert about inventory management, pick-n-pack, COD, and other services designed to optimize your costs and enhance your customer relationship.",
            RightParaThree: "Zajil is a customer-focused company. A human is always available to help. Click here to connect with a representative.",

        },
        {
            id: "2",
            listnaem: "Shipping Help",
            leftHeadingOne: "- Shipping Help",
            leftHeadingTwo: "- How do I create a COD shipment?",
            leftHeadingThree: "- What is your pricing?",
            leftParaOne: "You can drop your package at one of Zajil’s branch office or centers. Click here for the most current list.",
            leftParaTwo: "Zajil offers convenient options for e-commerce sites and shippers to collect payment at the time of delivery, with essentially no limit. Once delivery is made, Zajil submits the collected funds back to the seller, less the shipping cost and a small fee agreed to in advance. Credit terms apply. To learn how to set up a COD shipment, talk to a Zajil account representative today.",
            leftParaThree: "Zajil is committed to the most affordable rate for business and personal shipping services. Use our web site’s shipping calculator or the Zajil app to get a pricing estimate before you ship",
            RightHeadingOne: "- What does a Zajil tracking number look like?",
            RightHeadingTwo: "- How do I start a return?",
            RightHeadingThree: "- How can I contact a person to help me?",
            RightParaOne: "The Zajil Express shipping number will be different for business customers and consumers.",
            RightParaTwo: "Zajil makes returns easy. Individuals should manage returns using our app or web site. Businesses should contact a Zajil Business Solutions expert about inventory management, pick-n-pack, COD, and other services designed to optimize your costs and enhance your customer relationship.",
            RightParaThree: "Zajil is a customer-focused company. A human is always available to help. Click here to connect with a representative.",

        },
        {
            id: "3",
            listnaem: "Business FAQ's",
            leftHeadingOne: "- Business FAQ's",
            leftHeadingTwo: "- How do I create a COD shipment?",
            leftHeadingThree: "- What is your pricing?",
            leftParaOne: "You can drop your package at one of Zajil’s branch office or centers. Click here for the most current list.",
            leftParaTwo: "Zajil offers convenient options for e-commerce sites and shippers to collect payment at the time of delivery, with essentially no limit. Once delivery is made, Zajil submits the collected funds back to the seller, less the shipping cost and a small fee agreed to in advance. Credit terms apply. To learn how to set up a COD shipment, talk to a Zajil account representative today.",
            leftParaThree: "Zajil is committed to the most affordable rate for business and personal shipping services. Use our web site’s shipping calculator or the Zajil app to get a pricing estimate before you ship",
            RightHeadingOne: "- What does a Zajil tracking number look like?",
            RightHeadingTwo: "- How do I start a return?",
            RightHeadingThree: "- How can I contact a person to help me?",
            RightParaOne: "The Zajil Express shipping number will be different for business customers and consumers.",
            RightParaTwo: "Zajil makes returns easy. Individuals should manage returns using our app or web site. Businesses should contact a Zajil Business Solutions expert about inventory management, pick-n-pack, COD, and other services designed to optimize your costs and enhance your customer relationship.",
            RightParaThree: "Zajil is a customer-focused company. A human is always available to help. Click here to connect with a representative.",

        }
    ]
    
    const [visibleTab, setVisibleTab] = useState(data[0].id)
    return (
        <div className={styles.hFaqs} >
            <span className='absolute -bottom-2 left-0'>
                <Image src={bottomFrame} alt="top frame" />
            </span>
            <div className={styles.topSection} >
                <div className='flex justify-center pt-8'>
                    <div className={`mt-7  ${layoutStyles.newsletter} ${layoutStyles.track}  ${styles.newsletter} ${styles.track}`}>
                        <input type="text" placeholder='Search Questions' name='SearchQuestions' id='SearchQuestions' className='relative' />
                        <label htmlFor="SearchQuestions">Search Questions</label>
                        <span className='absolute right-1 top-3'>
                            <Image src={search} alt="Search" />
                        </span>
                    </div>
                </div>
            </div>
            <div className='relative'>
                <span className='absolute top-0 right-0'>
                    <Image src={topFrame} alt="top frame" />
                </span>
                <div className='absolute -top-5 w-full'>
                    <div className='flex justify-center gap-8'>
                        {data?.map(item => (
                            <div key={item?.id} onClick={() => setVisibleTab(item.id)} className={`${visibleTab === item.id ? `${styles.active}` : `${styles.tabList}`}  text-grey flex rounded-md text-xl justify-center items-center cursor-pointer`} >
                                {item?.listnaem}
                            </div>
                        ))}
                    </div>
                </div>
            </div>
            {data?.map(item => (
                <div key={item?.id} style={visibleTab === item.id ? {} : { display: 'none' }} className={`${styles.px19} mt-28 relative`}>

                    <div className='flex justify-between'>
                        <div className={`${styles.faqscontentw} pb-12`}>
                            <div>
                                <h4 className={`${styles.h4size} text-grey medium-font`}>{item?.leftHeadingOne}</h4>
                                <p className='text-lg text-grey light-font pl-4 mt-5'>
                                    {item?.leftParaOne}
                                </p>
                            </div>
                            <div className='mt-12'>
                                <h4 className={`${styles.h4size} text-grey medium-font`}>{item?.leftHeadingTwo}</h4>
                                <p className='text-lg text-grey light-font pl-4 mt-5'>
                                    {item?.leftParaTwo}
                                </p>
                            </div>
                            <div className='mt-12'>
                                <h4 className={`${styles.h4size} text-grey medium-font`}>{item?.leftHeadingThree}</h4>
                                <p className='text-lg text-grey light-font pl-4 mt-5'>
                                    {item?.leftParaThree}
                                </p>
                            </div>
                        </div>
                        <div className={styles.faqsLine}></div>
                        <div className={`${styles.faqscontentw} pb-12`}>
                            <div>
                                <h4 className={`${styles.h4size} text-grey medium-font`}>{item?.RightHeadingOne}</h4>
                                <p className='text-lg text-grey light-font pl-4 mt-5'>
                                    {item?.RightParaOne}
                                </p>
                            </div>
                            <div className='mt-12'>
                                <h4 className={`${styles.h4size} text-grey medium-font`}>{item?.RightHeadingTwo}</h4>
                                <p className='text-lg text-grey light-font pl-4 mt-5'>
                                    {item?.RightParaTwo}
                                </p>
                            </div>
                            <div className='mt-20'>
                                <h4 className={`${styles.h4size} text-grey medium-font`}>{item?.RightHeadingThree}</h4>
                                <p className='text-lg text-grey light-font pl-4 mt-5'>
                                    {item?.RightParaThree}
                                </p>
                            </div>
                        </div>
                    </div>
                    <Link href="#" className="mx-auto" >
                        <a className='mx-auto w-36 h-10 flex justify-center rounded items-center border-2  border-yellow medium-font  hover:bg-yellow hover:text-grey'>
                            View More
                        </a>
                    </Link>
                </div>

            ))}
        </div>
    )
}

export default FaqsDetails