import Image from 'next/image'
import styles from '../../styles2/Ecommerce.module.css'
import yellowBox from '../../assets/NewImages/svg/box-yellow.svg'
import topImage from '../../assets/NewImages/ksa/image/First-Private-Postal.jpg'
import deliveryboy from '../../assets/NewImages/ksa/image/Business-to-Business-Services-from-Zajil.jpg'
import { useState } from 'react/cjs/react.development'
import Form from '../Form'

const KsaDetail = () => {
    const content = [
        {
            id: 1,
            mainHeading: "B2B",
            heading: "Business to Business Services from Zajil",
            paraOne: "Choose the most affordable option with optimized logistics to keep the wheels of enterprise running smoothly. Discover what other leading entrepreneurs already know. Let us help you design the most efficient and affordable Business-to-Business solution today.",
            link: "Talk to a Business Logistics Solution Architect at Zajil today."
        },
        {
            id: 2,
            mainHeading: "D2D",
            heading: "D2D",
            paraOne: "Choose the most affordable option with optimized logistics to keep the wheels of enterprise running smoothly. Discover what other leading entrepreneurs already know. Let us help you design the most efficient and affordable Business-to-Business solution today.",
            link: "Talk to a Business Logistics Solution Architect at Zajil today."
        },
        {
            id: 3,
            mainHeading: "Same Day",
            heading: "Same Dayt",
            paraOne: "Choose the most affordable option with optimized logistics to keep the wheels of enterprise running smoothly. Discover what other leading entrepreneurs already know. Let us help you design the most efficient and affordable Business-to-Business solution today.",
            link: "Talk to a Business Logistics Solution Architect at Zajil today."
        },
        {
            id: 4,
            mainHeading: "Heavy Shipping",
            heading: "Heavy Shipping",
            paraOne: "Choose the most affordable option with optimized logistics to keep the wheels of enterprise running smoothly. Discover what other leading entrepreneurs already know. Let us help you design the most efficient and affordable Business-to-Business solution today.",
            link: "Talk to a Business Logistics Solution Architect at Zajil today."
        },
        {
            id: 5,
            mainHeading: "Drop Shipping",
            heading: "Drop Shipping",
            paraOne: "Choose the most affordable option with optimized logistics to keep the wheels of enterprise running smoothly. Discover what other leading entrepreneurs already know. Let us help you design the most efficient and affordable Business-to-Business solution today.",
            link: "Talk to a Business Logistics Solution Architect at Zajil today."
        },
    ]

    const [visibleTab, setVisibleTab] = useState(content[0].id)
    return (
        <div className={`${styles.BlueSection}`}>
            <div className=' px-20 pt-24'>
                <div className={`flex  gap-x-10`}>
                   
                        <div className={`img_container img-border ksa-image`}>
                            <Image src={topImage} alt="First Private postal" />
                        </div>
                   
                    <div className=' '>
                        <span className=''>
                            <Image src={yellowBox} alt="Yellow Box" />
                        </span>
                        <h2 className='text-3xl medium-font text-grey mt-2'>The <span className='text-3xl medium-font text-blue'>First Private Postal</span>  company in Saudi Arabia is also ranked highest in service..</h2>
                        <p className='text-base light-font text-grey mt-6'>Zajil is proud to extend a legacy that continues to meet the demands of a growing economic environment. Choose the distribution channel your business needs to grow and adapt to global business opportunities such as Same Day, Heavy Shipping, Drop Shipping, and Door-to-Door concierge service connecting warehousing to delighted residential occupants. Zajil puts new business opportunities within reach. Let’s get started!</p>
                    </div>

                </div>
                <div className='flex justify-between mt-28'>
                    {content.map(item =>
                        <p onClick={() => setVisibleTab(item.id)} className={`cursor-pointer text-center text-lg text-grey medium-font w-2/12	${visibleTab === item.id ? styles.active : styles.noborder}`}>{item.mainHeading}</p>
                    )}
                </div>
            </div>
            <div className={`h-auto ${styles.bottomContent}`}>
                <div className='px-20 py-16'>
                    {content.map(item =>
                        <div key={item?.id} style={visibleTab === item.id ? {} : { display: 'none' }} className='flex justify-between '>
                            <span className={`img_container ${styles.wareHouseSetting}`}>
                                <Image src={deliveryboy} alt="Delivery Boy" />
                            </span>
                            <div className={`${styles.w44} flex justify-center flex-col`}>
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
    )
}

export default KsaDetail