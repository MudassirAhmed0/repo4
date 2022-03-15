import Image from 'next/image'
import styles from '../../styles2/Freight.module.css'
import overlays from '../../styles2/Overlays.module.css'
import HeroImage from '../../assets/NewImages/freight/image/shipment.jpg'

const Hero = () => {
    return (
        <section className={`relative ${styles.herosection}`} >
            <span className='absolute top-0 left-0 h-full w-full img_container'>
                <Image src={HeroImage} alt="Frieght Banner" />
            </span>
            <span className={`${overlays.ecommercefirst}`}></span>
            <span className={`${overlays.ecommercesecond}`}></span>
            <span className="bottomOverlay"></span>
            <div className="container  relative text-white">
                <h1 className='text-4xl medium-font mb-2  uppercase'>
                ZAJIL BUSINESS   <br /> FREIGHT SOLUTIONS
                </h1>
                <p className='text-base light-font'>Leave the heavy loads to us. Anywhere in the world. </p>
            </div>
        </section>
    )
}

export default Hero
