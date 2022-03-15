import Image from 'next/image'
import styles from '../../styles2/Freight.module.css'
import overlays from '../../styles2/Overlays.module.css'
import HeroImage from '../../assets/NewImages/ksa/banner/banner.jpg'

const Hero = () => {
    return (
        <section className={styles.herosection} >
            <span className='absolute top-0 left-0 img_container'>
                <Image src={HeroImage} alt="KSA Banner" />
            </span>
            <span className={`${overlays.ecommercefirst}`}></span>
            <span className={`${overlays.ecommercesecond}`}></span>
            <div className="container  relative text-white">
                <h1 className='text-4xl medium-font mb-2  uppercase'>
                ZAJIL KSA DISTRIBUTION  <br /> FOR BUSINESSES  
                </h1>
                <p className='text-base light-font'>Get the most reliable shipping and receiving logistics within  <br /> the Kingdom of Saudi Arabia from Zajil. </p>
            </div>
        </section>
    )
}

export default Hero