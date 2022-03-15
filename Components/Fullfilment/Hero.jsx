import Image from 'next/image'
import styles from '../../styles2/Freight.module.css'
import overlays from '../../styles2/Overlays.module.css'
import HeroImage from '../../assets/NewImages/fulfilment/banner/Zajil-Business-Inventory-Fulfillment-Service-banner.jpg'

const Hero = () => {
    return (
        <section className={`relative ${styles.herosection}`} >
            <span className='absolute h-full w-full top-0 left-0 img_container'>
                <Image src={HeroImage} alt="Zajil Business Inventory" />
            </span>
            <span className={`${overlays.ecommercefirst}`}></span>
            <span className={`${overlays.ecommercesecond}`}></span>
            <span className="bottomOverlay"></span>
            <div className="container  relative text-white">
                <h1 className='text-4xl medium-font mb-2  uppercase'>
                ZAJIL BUSINESS INVENTORY   <br /> FULFILLMENT SERVICE
                </h1>
                <p className='text-base light-font'>Take your business to the next level of performance with the distributed <br /> warehousing and logistics technology you need from Zajil. </p>
            </div>
        </section>
    )
}

export default Hero