import Image from 'next/image'
import styles from '../../styles2/developer.module.css'
import overlays from '../../styles2/Overlays.module.css'
import HeroBanner from '../../assets/NewImages/developer-tool/banner/Developer-banner.jpg'

const Hero = () => {
    return (
        <section className={`relative ${styles.developerHero}`}>
            <span className='absolute top-0 left-0 w-full h-full img_container'>
                <Image src={HeroBanner} alt="Developer Hero" />
            </span>
            <span className={`absolute ${overlays.developerOverlay}`}></span>
            <span className={`absolute ${overlays.secondDeveloper}`}></span>
            <span className="bottomOverlay"></span>
            <div className="container  relative text-white">
                <h1 className='text-4xl medium-font mb-2  uppercase'>
                    DEVELOPER <br /> TOOLS
                </h1>
                <p className='text-base light-font'>Connect your e-commerce site to Zajil’s shipping and <br /> logistics platform to improve your customer experience.</p>
            </div>
        </section>
    )
}

export default Hero