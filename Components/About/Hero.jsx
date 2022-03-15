import styles from '../../styles/About.module.css'
import aboutBanner from '../../assets/NewImages/about/banner/banner.jpg'
import Image from 'next/image'

const Hero = () => {
  return (
    <section className={styles.about}>
        
        <span className={`absolute   ${styles.overlay1}`}> 
        <Image src={aboutBanner} alt='aboutbanner'/>
        </span>
        <span className={styles.overlay2}>
        </span>
        <span className="bottomOverlay"></span>
        <div className="container  relative text-white uppercase">
            <h1 className='text-4xl medium-font mb-2'>About <br />
                Zajil Express
            </h1>
            <p className='light-font w-1/2'>
            Meet Zajil, connecting global business and opportunity and Saudi <br /> Arabia’s  first privately operated postal company.
            </p>
        </div>

    </section>
  )
}

export default Hero