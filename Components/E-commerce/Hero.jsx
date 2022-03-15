import Image from 'next/image'
import styles from '../../styles2/Ecommerce.module.css'
import overlays from '../../styles2/Overlays.module.css'
import HeroImage from '../../assets/NewImages/ecommerce/banner/E-commerce-Business-banner.jpg'

const Hero = () => {
    return (
        <section className={`relative ${styles.herosection}`} >
            <span className='absolute top-0 left-0 w-full h-full img_container'>
                <Image src={HeroImage} alt="E-Commerce Banner" />
            </span>
            <span className={`${overlays.ecommercefirst}`}></span>
            <span className={`${overlays.ecommercesecond}`}></span>
            <span className="bottomOverlay"></span>
            <div className="container  relative text-white">
                <h1 className='text-4xl medium-font mb-2  uppercase'>
                    E-COMMERCE BUSINESS  <br /> SOLUTIONS
                </h1>
                <p className='text-base light-font'>A new world of revenue opportunity made possible<br /> with online sales fulfilment from Zajil. </p>
            </div>
        </section>
    )
}

export default Hero