import Image from 'next/image'
import overlays from '../../styles2/Overlays.module.css'
import styles from '../../styles2/media.module.css'
import HeroImg from '../../assets/NewImages/media-center/banner/banner.jpg'


const Hero = () => {
    return (
        <section className={styles.heroSection} >
            <span className='absolute top-0 left-0 w-full h-full img_container'>
                <Image src={HeroImg} />
            </span>
            <span className={`absolute  ${overlays.mediaOverlay}`}></span> 
            <span className={`absolute  ${overlays.ecommercesecond}`}></span> 
            <span className="bottomOverlay "></span>
            <div className="container  relative text-white uppercase">
                <h1 className='text-4xl medium-font mb-2'>
                    MEDIA CENTER
                </h1>
            </div>
        </section>
    )
}

export default Hero