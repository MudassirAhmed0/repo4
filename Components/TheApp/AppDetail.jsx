import Image from 'next/image'
import styles from '../../styles2/TheApp.module.css'
import phones from '../../assets/NewImages/app-page/image/mobile-application.jpg'
import appstore from '../../assets/NewImages/png-files/appstore.png'
import playstore from '../../assets/NewImages/png-files/playstore.png'
import brandIcon from '../../assets/NewImages/svg/app-brandIcon.svg' 

const AppDetail = () => {
  return (
    <div className='py-16 relative pr-32 pl-16'>
    <span className='absolute left-0 bottom-0'>
        <Image src={brandIcon} alt="Brand Icon" />
    </span>
        <p className='text-grey light-font text-lg text-center'>Simplified, affordable shipping and logistics is always at hand</p>
        <div className='mt-10 flex justify-between items-center'>
            <span className={styles.mobimgw}>
                <Image src={phones} />
            </span>
            <div className={`z-10 ${styles.textw}`}>
                <h4 className='text-xl medium-font text-grey text-xl'>Get Notified</h4>
                <p className='text-lg light-font text-font text-lg pt-2.5'>Stay up-to-date with in-app or SMS notifications based on location, ETAs, proof of delivery, and even proactive delay status reports.</p>
                <h4 className='text-xl medium-font text-grey text-xl mt-20'>Manage Payments</h4>  
                <p className='text-lg light-font text-font text-lg pt-2.5'>Pay for shipping without switching apps or creating an account.</p>
            </div>
            <div className={styles.textw}>
                <h4 className='text-xl medium-font text-grey  text-xl'>Track Your Shipments</h4>
                <p className='text-lg light-font text-font text-lg pt-2.5' >Ship without an account, manage delivery options, and get real-time delivery information. Even calculate shipping costs before you ship.</p>
                <h4 className='text-xl medium-font text-grey  text-xl mt-20'>Get your App Now!</h4>  
                <div className='flex gap-x-5 pt-6'>
                    <span className='img_container h-10 w-28'>
                        <Image src={appstore} alt="App Store" />
                    </span>
                    <span className='img_container h-10 w-28'>
                        <Image src={playstore} alt="Play Store" />
                    </span>
                </div>
            </div>
        </div>
    </div>
  )
}

export default AppDetail