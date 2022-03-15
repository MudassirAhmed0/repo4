import Image from 'next/image'
import styles from '../../styles2/Career.module.css' 
import overlays from '../../styles2/Overlays.module.css'
import HeroImage from '../../assets/NewImages/career/banner/banner.jpg'

const Hero = () => {
    return (
        <section className={`relative ${styles.heroImage}`}>
            <span className='absolute top-0 left-0 w-full h-full img_container'>
                <Image src={HeroImage} alt="Banner Image" />
            </span>
            <span className={`${overlays.careerOverlay} absolute top-0 left-0 w-full h-full`}></span>
            <span className={`${overlays.careerOverlayTwo} absolute top-0 left-0 w-full h-full`}></span>
            <span className='bottomOverlay'>
      </span>
            <div className="container  relative text-white">
                <h1 className='text-4xl medium-font mb-2  uppercase'>
                    JOIN US
                </h1>
                <p className='text-base light-font'>Join one of the world’s most ambitious companies to extend your career <br /> within the global supply chain and logistics industry.</p>
            </div>
        </section>
    )
}

export default Hero