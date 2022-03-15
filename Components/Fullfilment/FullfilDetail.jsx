import Image from 'next/image'
import styles from '../../styles2/Ecommerce.module.css'
import FullFillsyles from '../../styles2/Fullfil.module.css'
import yellowBox from '../../assets/NewImages/svg/box-yellow.svg'
import titanic from '../../assets/NewImages/fulfilment/image/The-capacit-and-expertise-to-fuel-business-expansion.jpg'
import warehousing from '../../assets/NewImages/fulfilment/image/two-employees-checking-inventory-beside-racks-of-b-2021-08-28-17-37-40-utc.jpg'
import HomeCarousel from './Carousel'
import { useState } from 'react/cjs/react.development'
import Form from '../Form'

const FullfilDetail = () => {
    const content = [
        {
            id: 1,
            mainHeading: "Inventory",
            heading: "Sell inventory without the overhead.",
            paraOne: "Zajil’s Fulfillment services are perfect for those businesses seeking to eliminate inventory costs and risks. We offer streamlined warehousing pick-up and deliver services for growing businesses. Get your fulfillment system customized to your needs. Talk to a Zajil Business Solution Architect today.", 
            link: "Talk to a Business Logistics Solution Architect at Zajil today."
        },
        {
            id: 2,
            mainHeading: "Warehousing",
            heading: "Warehousing",
            paraOne: "Zajil’s Fulfillment services are perfect for those businesses seeking to eliminate inventory costs and risks. We offer streamlined warehousing pick-up and deliver services for growing businesses. Get your fulfillment system customized to your needs. Talk to a Zajil Business Solution Architect today.", 
            link: "Talk to a Business Logistics Solution Architect at Zajil today."
        },
        {
            id: 3,
            mainHeading: "Last-mile Delivery",
            heading: "Last-mile Delivery",
            paraOne: "Zajil’s Fulfillment services are perfect for those businesses seeking to eliminate inventory costs and risks. We offer streamlined warehousing pick-up and deliver services for growing businesses. Get your fulfillment system customized to your needs. Talk to a Zajil Business Solution Architect today.", 
            link: "Talk to a Business Logistics Solution Architect at Zajil today."
        },
        {
            id: 4,
            mainHeading: "Bundle Shipping",
            heading: "Bundle Shipping",
            paraOne: "Zajil’s Fulfillment services are perfect for those businesses seeking to eliminate inventory costs and risks. We offer streamlined warehousing pick-up and deliver services for growing businesses. Get your fulfillment system customized to your needs. Talk to a Zajil Business Solution Architect today.", 
            link: "Talk to a Business Logistics Solution Architect at Zajil today."
        },
        {
            id: 5,
            mainHeading: "Out of Delivery Area",
            heading: "Out of Delivery Area",
            paraOne: "Zajil’s Fulfillment services are perfect for those businesses seeking to eliminate inventory costs and risks. We offer streamlined warehousing pick-up and deliver services for growing businesses. Get your fulfillment system customized to your needs. Talk to a Zajil Business Solution Architect today.", 
            link: "Talk to a Business Logistics Solution Architect at Zajil today."
        }, 
    ]

    const [visibleTab, setVisibleTab] = useState(content[0].id)
    return (
        <>
            <div className={`${styles.BlueSection}`}>
                <div className=' px-20 pt-24'>
                    <div className={`flex justify-between gap-x-16`}>
                        <div className=''>
                            <span>
                                <Image src={yellowBox} alt="Yellow Box" />
                            </span>
                            <h2 className='text-3xl medium-font text-grey mt-2'>The capacity and expertise to fuel  <span className='text-3xl medium-font text-blue'>business expansion </span></h2>
                            <p className='text-base light-font text-grey mt-6'>Zajil’s modern facilities, network, and technology are designed to help KSA businesses compete in a global economy. Get the scalability you need from a Saudi-based company who understands how to exceed your customers’ expectations. Let’s talk about how our Inventory, Warehousing, and Distribution network can expand your business, and even enhance your customer experience. Discover the value from our motto, “Yes, Delivered.”</p>
                        </div>
                         
                            <div className={`${FullFillsyles.fullfilsetimg} img_container`}>
                                <Image src={titanic} alt="Capacity Expertise" />
                            </div>
                        
                    </div>
                    <HomeCarousel content={content} setVisibleTab={setVisibleTab} visibleTab={visibleTab} />
                </div>
                <div className={`h-auto ${styles.bottomContent}`}>
                    <div className='px-20 py-16'>
                        {content.map(item =>
                            <div key={item?.id} style={visibleTab === item.id ? {} : { display: 'none' }} className='flex justify-between gap-x-12'>
                                <span className={`img_container ${styles.wareHouseSetting}`}>
                                    <Image src={warehousing} alt="Ware house" />
                                </span>
                                <div className={` flex justify-center flex-col`}>
                                    <h2 className='text-3xl medium-font text-grey '>{item.heading}</h2>
                                    <p className='text-base light-font text-grey mt-6'>{item.paraOne}</p> 
                                    <p className='text-base medium-font text-grey mt-6 underline cursor-pointer'>
                                        {item.link}
                                    </p>
                                </div>
                            </div>

                        )}
                    </div>
                </div>
                <Form />
            </div>
        </>
    )
}

export default FullfilDetail