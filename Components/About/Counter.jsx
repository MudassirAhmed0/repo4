import React from 'react'
import YellowBack from '../YellowBack'
import styles from '../../styles/About.module.css'
import mdImage from '../../assets/NewImages/about/image/md-message.jpg' 
import Image from 'next/image'
import brandIcon from '../../assets/NewImages/about/image/md-brand.svg'
import CountUp from 'react-countup';

import VisibilitySensor from 'react-visibility-sensor';
import { useState } from 'react';

const Counter = () => {
    
  const [startCounter,setStartCounter] = useState(false)
  return (
    <YellowBack roundedBottom classha={styles.bgYellow}> 
        <span className={styles.counterBrandIcon}>
            <Image src={brandIcon} alt="brand icon"/>
        </span>
        <div className="pt-1 pb-1 flex items-center flex-col  " >
            <VisibilitySensor partialVisibility offset={{ bottom: 200 }} >
        {({isVisible})=>{ 
          if(isVisible){
            setStartCounter(true)
          }
          return(
            <div className="flex  relative w-3/6 justify-between text-center ">
                <div className='flex flex-col text-grey '>
             <span className="text-3xl  medium-font"> {startCounter && <CountUp duration={3} bottom={200} end={20}/>}{startCounter && "K+"}</span>
             <span className="light-font">
             Deliveries per day
                </span>
                </div>
                <div className='flex flex-col text-grey '>
             <span className="text-3xl  medium-font"> {startCounter && <CountUp duration={3} bottom={200} end={500}/>}{startCounter && "+"}</span>
             <span className="light-font">
             eCommerce & Corporate Clients

                </span>
                </div>
                <div className='flex flex-col text-grey '>
             <span className="text-3xl  medium-font"> {startCounter && <CountUp duration={3} bottom={200} end={7}/>}{startCounter && "M+"}</span>
             <span className="light-font">
             Active Clients
                </span>
                </div>
            </div>)

}}
            </VisibilitySensor>
            <div className="w-2/3 flex gap-x-8 relative mt-28 items-center">
                <div className={` ${styles.mdImg}`}>
                    <Image src={mdImage} alt="MD"/>    
                </div> 
                <div className='text-grey '>
                    <h5 className="text-3xl medium-font uppercase mb-3">
                        Md message
                    </h5>
                    <p className='light-font mb-3'>
                    Thank you for considering Zajil Express as your business partner for shipping and logistics. We are committed to your success and prove that every day with a more than just capital investments in technology and infrastructure. Our people are eager to earn your business by delivering superior service to exceed your expectations.
                    </p>
                    <p className='light-font mb-3'>
                    We are very proud of what we have been able to achieve in terms of customer satisfaction through a good synthesis of service and dynamic growth in capabilities and scope. We remain committed to expanding our abilities to meet the needs of increased economic demand for shipping and logistics, but we will never sacrifice customer satisfaction for growth opportunity.
                        </p>
                    <p className='light-font'>
                    The Zajil family looks forward to meeting your needs for success! 
                        </p>
                    <p className='light-font'>
                    Yasser AlKadi
                        </p>
                </div>   
            </div>
        </div>
    </YellowBack>
  )
}

export default Counter