import Image from 'next/image' 
import styles from '../../styles2/Ecommerce.module.css' 
import yellowBox from '../../assets/NewImages/svg/box-yellow.svg' 
import titanic from '../../assets/NewImages/ecommerce/image/ecomerce-file.jpg'
import ch from '../../assets/NewImages/ecommerce/image/reliable-Performance-From-a-Trusted-Brand.jpg'
import HomeCarousel from './Carousel'
import { useState } from 'react/cjs/react.development'
import Form from '../Form'

const EcommerceDetail = () => {
    const content = [
        {
            id: 1,
            mainHeading: "SME Solutions",
            heading: "Reliable Performance From a Trusted Brand.",
            paraOne: "Zajil is one of the most recognized and reliable shipping and logistics providers based in Riyadh, Saudi Arabia. Customers rank our service as second to none, and our growing network of distribution centers around the globe attest to our commitment to your success.",
            paraTwo: "Zajil customizes critical shipping and logistics services by packaging them to optimize the online buying logistics. We bundle fulfillment, last-mile delivery, and cash-ondelivery services to reduce costs and streamline performance. Zajil’s solutions for Small to Medium Enterprises can expand more than your reach—they enhance your customer experience!",
            link: "Talk to a Business Logistics Solution Architect at Zajil today."
        },
        {
            id: 2,
            mainHeading: "Return Services",
            heading: "Return Services",
            paraOne: "Zajil is one of the most recognized and reliable shipping and logistics providers based in Riyadh, Saudi Arabia. Customers rank our service as second to none, and our growing network of distribution centers around the globe attest to our commitment to your success.",
            paraTwo: "Zajil customizes critical shipping and logistics services by packaging them to optimize the online buying logistics. We bundle fulfillment, last-mile delivery, and cash-ondelivery services to reduce costs and streamline performance. Zajil’s solutions for Small to Medium Enterprises can expand more than your reach—they enhance your customer experience!",
            link: "Talk to a Business Logistics Solution Architect at Zajil today."
        },
        {
            id: 3,
            mainHeading: "Door-to-Door",
            heading: "Door-to-Door",
            paraOne: "Zajil is one of the most recognized and reliable shipping and logistics providers based in Riyadh, Saudi Arabia. Customers rank our service as second to none, and our growing network of distribution centers around the globe attest to our commitment to your success.",
            paraTwo: "Zajil customizes critical shipping and logistics services by packaging them to optimize the online buying logistics. We bundle fulfillment, last-mile delivery, and cash-ondelivery services to reduce costs and streamline performance. Zajil’s solutions for Small to Medium Enterprises can expand more than your reach—they enhance your customer experience!",
            link: "Talk to a Business Logistics Solution Architect at Zajil today."
        },
        {
            id: 4,
            mainHeading: "Fulfillment",
            heading: "Fulfillment",
            paraOne: "Zajil is one of the most recognized and reliable shipping and logistics providers based in Riyadh, Saudi Arabia. Customers rank our service as second to none, and our growing network of distribution centers around the globe attest to our commitment to your success.",
            paraTwo: "Zajil customizes critical shipping and logistics services by packaging them to optimize the online buying logistics. We bundle fulfillment, last-mile delivery, and cash-ondelivery services to reduce costs and streamline performance. Zajil’s solutions for Small to Medium Enterprises can expand more than your reach—they enhance your customer experience!",
            link: "Talk to a Business Logistics Solution Architect at Zajil today."
        },
        {
            id: 5,
            mainHeading: "B2C",
            heading: "B2C",
            paraOne: "Zajil is one of the most recognized and reliable shipping and logistics providers based in Riyadh, Saudi Arabia. Customers rank our service as second to none, and our growing network of distribution centers around the globe attest to our commitment to your success.",
            paraTwo: "Zajil customizes critical shipping and logistics services by packaging them to optimize the online buying logistics. We bundle fulfillment, last-mile delivery, and cash-ondelivery services to reduce costs and streamline performance. Zajil’s solutions for Small to Medium Enterprises can expand more than your reach—they enhance your customer experience!",
            link: "Talk to a Business Logistics Solution Architect at Zajil today."
        },
        // {
        //     id: 6,
        //     mainHeading: "SME Solutions",
        //     heading: "SME Solutions",
        //     paraOne: "Zajil is one of the most recognized and reliable shipping and logistics providers based in Riyadh, Saudi Arabia. Customers rank our service as second to none, and our growing network of distribution centers around the globe attest to our commitment to your success.",
        //     paraTwo: "Zajil customizes critical shipping and logistics services by packaging them to optimize the online buying logistics. We bundle fulfillment, last-mile delivery, and cash-ondelivery services to reduce costs and streamline performance. Zajil’s solutions for Small to Medium Enterprises can expand more than your reach—they enhance your customer experience!",
        //     link: "Talk to a Business Logistics Solution Architect at Zajil today."
        // },
        // {
        //     id: 7,
        //     mainHeading: "Return Services",
        //     heading: "Reliable Performance From a Trusted Brand.",
        //     paraOne: "Zajil is one of the most recognized and reliable shipping and logistics providers based in Riyadh, Saudi Arabia. Customers rank our service as second to none, and our growing network of distribution centers around the globe attest to our commitment to your success.",
        //     paraTwo: "Zajil customizes critical shipping and logistics services by packaging them to optimize the online buying logistics. We bundle fulfillment, last-mile delivery, and cash-ondelivery services to reduce costs and streamline performance. Zajil’s solutions for Small to Medium Enterprises can expand more than your reach—they enhance your customer experience!",
        //     link: "Talk to a Business Logistics Solution Architect at Zajil today."
        // },
        // {
        //     id: 8,
        //     mainHeading: "Door-to-Door",
        //     heading: "Reliable Performance From a Trusted Brand.",
        //     paraOne: "Zajil is one of the most recognized and reliable shipping and logistics providers based in Riyadh, Saudi Arabia. Customers rank our service as second to none, and our growing network of distribution centers around the globe attest to our commitment to your success.",
        //     paraTwo: "Zajil customizes critical shipping and logistics services by packaging them to optimize the online buying logistics. We bundle fulfillment, last-mile delivery, and cash-ondelivery services to reduce costs and streamline performance. Zajil’s solutions for Small to Medium Enterprises can expand more than your reach—they enhance your customer experience!",
        //     link: "Talk to a Business Logistics Solution Architect at Zajil today."
        // },
    ]

    const [visibleTab, setVisibleTab] = useState(content[0].id) 

    return (
        <>
            <div className={`${styles.BlueSection}`}>
                <div className=' px-20 pt-24'>
                    <div className={`flex justify-between`}>
                        <div className='w-4/12'>
                            <span>
                                <Image src={yellowBox} alt="Yellow Box" />
                            </span>
                            <h2 className='text-3xl medium-font text-grey mt-2 pr-2'>Meet Global Demand With Confidence Powered By Zajil <span className='text-3xl medium-font text-blue'>E-commerce</span> Solutions</h2>
                            <p className='text-base light-font text-grey mt-6'>Backed by the experience and resources of Saudi Arabia’s first privately operated postal service, Zajil customers receive the benefit of our extensive and affordable network</p>
                        </div>
                        <div >
                            <span className='img_container'>
                                <Image src={titanic} alt="Titanic" />
                            </span>
                        </div>
                    </div>
                    <HomeCarousel content={content} setVisibleTab={setVisibleTab} visibleTab={visibleTab} />
                </div>
                <div className={`h-auto ${styles.bottomContent}`}>
                    <div className='px-20 py-16'>
                        {content.map(item =>
                            <div key={item?.id} style={visibleTab === item.id ? {} : { display: 'none' }} className='flex justify-between'>
                                <span className='img_container'>
                                    <Image src={ch} alt="Delivery Boy" />
                                </span>
                                <div className={`${styles.w44} flex justify-center flex-col`}>
                                    <h2 className='text-3xl medium-font text-grey w-2/3 pr-4 '>{item.heading}</h2>
                                    <p className='text-base light-font text-grey mt-6'>{item.paraOne}</p>
                                    <p className='text-base light-font text-grey mt-8'> {item.paraTwo}</p>
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

export default EcommerceDetail