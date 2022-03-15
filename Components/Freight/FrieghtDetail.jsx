import Image from 'next/image'
import styles from '../../styles2/Ecommerce.module.css'
import yellowBox from '../../assets/NewImages/svg/box-yellow.svg'
import topImage from '../../assets/NewImages/freight/image/global-market.jpg'
import ch from '../../assets/NewImages/freight/image/global-partner.jpg' 
import { useState } from 'react/cjs/react.development'
import Form from '../Form'


const FrieghtDetail = () => {
    const content = [
        {
            id: 1,
            mainHeading: "Air Freight",
            heading: "Expand to global markets with Zajil affordability and scale",
            paraOne: "Gain entry to global markets with Sea Freight solutions from Zajil. Discover how Zajil distribution centers at major ports and terminals present valuable opportunities for your shipping and logistics.",
            link: "Talk to a Business Logistics Solution Architect at Zajil today."
        },
        {
            id: 2,
            mainHeading: "Sea Freight",
            heading: "Sea Freight",
            paraOne: "Gain entry to global markets with Sea Freight solutions from Zajil. Discover how Zajil distribution centers at major ports and terminals present valuable opportunities for your shipping and logistics.",
            link: "Talk to a Business Logistics Solution Architect at Zajil today."
        },
        {
            id: 3,
            mainHeading: "Land Freight",
            heading: "Land Freight",
            paraOne: "Gain entry to global markets with Sea Freight solutions from Zajil. Discover how Zajil distribution centers at major ports and terminals present valuable opportunities for your shipping and logistics.",
            link: "Talk to a Business Logistics Solution Architect at Zajil today."
        },
        {
            id: 4,
            mainHeading: "Custom Clearance",
            heading: "Custom Clearance",
            paraOne: "Gain entry to global markets with Sea Freight solutions from Zajil. Discover how Zajil distribution centers at major ports and terminals present valuable opportunities for your shipping and logistics.",
            link: "Talk to a Business Logistics Solution Architect at Zajil today."
        }
    ]

    const [visibleTab, setVisibleTab] = useState(content[0].id) 
    return (
        <div className={`${styles.BlueSection}`}>
            <div className=' px-20 pt-24'>
                <div className={`flex justify-between gap-x-16`}>
                    <div className=' '>
                        <span className=''>
                            <Image src={yellowBox} alt="Yellow Box" />
                        </span>
                        <h2 className='text-3xl medium-font text-grey mt-2'>Tap into the experience and capacity of a  <span className='text-3xl medium-font text-blue'>global <br /> logistics partner</span>.</h2>
                        <p className='text-base light-font text-grey mt-6 pr-5'>Learn how to get the most value from available bulk item shipping and freight with Zajil. From traditional domestic Drayage to intermodal and multi-configuration container transport anywhere on Earth, Zajil has the technology and the expertise to optimize a shipping and receiving network that suits your business needs.</p>
                        <p className='text-base light-font text-grey mt-6 pr-5'> Our growing footprint includes distribution centers and customs experts in major economic hubs on every continent. Discover how Zajil can expand your capacity to meet demand and acquire new opportunity in a global market. Talk to a Zajil Business Freight Solution Architect today.</p>
                    </div>
                
                        <div className={`img_container img-border rounded-lg overflow-hidden relative ${styles.freightImage}`}>
                            <Image src={topImage} alt="Global Market" />
                        </div>
                  
                </div>
                <div className='flex justify-between mt-28'>
                    {content.map(item =>
                        <p onClick={() => setVisibleTab(item.id)}  className={`cursor-pointer text-center text-lg text-grey medium-font w-2/12	${visibleTab === item.id ? styles.active : styles.noborder}`}>{item.mainHeading}</p>
                    )}
                </div> 
            </div>
            <div className={`h-auto ${styles.bottomContent}`}>
                <div className='px-20 py-16'>
                    {content.map(item =>
                        <div key={item?.id} style={visibleTab === item.id ? {} : { display: 'none' }} className='flex justify-between gap-x-12'>
                            <span className={`img_container  img-border ${styles.slickImage}`}>
                                <Image src={ch} alt="Aeroplane" />
                            </span>
                            <div className={`flex justify-center flex-col`}>
                                <h2 className='text-3xl medium-font text-grey w-9/12 '>{item.heading}</h2>
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

export default FrieghtDetail