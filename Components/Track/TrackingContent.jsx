import CardContent from "../Shipment/CardContent"
import styles from '../../styles/Chalja.module.css'
import info from '../../assets/NewImages/svg/info.svg'
import Image from 'next/image'
import { useEffect, useState } from "react"
import times from '../../assets/NewImages/svg/times.svg'
import tick from '../../assets/NewImages/svg/pentagonTick.svg'
import loading from '../../assets/NewImages/svg/pentagonLoading.svg'
import CancelShipment from "../Popups/CancelShipment"


const TrackingContent = () => {
    const [trackingResult,setTrackingResult] = useState(false)
    const cancelShipment =()=>{
        const modal = document.getElementById('cancelShipment')
        modal.classList.remove('opacity-0')
        modal.classList.add('opacity-1')
        modal.classList.remove('pointer-events-none')
        modal.classList.add('pointer-events-auto')
    }
    useEffect(()=>{
       setTimeout(()=>{
        const height =  document.getElementById('card').clientHeight - 606
       
        document.getElementById('cardContainer').style.height = height >5 ? height +"px":0
         
       },500)
      },[trackingResult])
  return (
      <>
    <CardContent noPadding>
    <div className='justify-center flex gap-x-6' >
    
    <button className='w-40 h-10 rounded  pt-0.5  medium-font shadow text-grey bg-yellow'>
                    Tracking Number
        </button>
    <button className='w-40 h-10 rounded  pt-0.5  medium-font  text-grey border border-yellow'>
                   Mobile Number
        </button>
    </div>
    <div className="flex flex-col">
        <div className={`flex mt-7 w-9/12 mx-auto`}>
            <div className={`medium-font  text-base ${styles.promocode}`}>
            <input type="text"   placeholder='sds' name='promoCode' id='promoCode'/>
            <label htmlFor="promoCode" className='cursor-pointer'>Tracking Number</label>
            </div> 
            <button onClick={()=> setTrackingResult(true)} className='w-32 bg-white shadow-lg rounded pt-1 text-grey  trackBtn'>
            Track
            </button>
        </div>
        
        <div className="w-9/12 mx-auto mt-3 gap-x-3 items-center flex cursor-pointer">
            <Image src={info} alt='Info'/>
            <span className="text-grey text-lg light-font pt-1 ">
            Where can I find my tracking number?
            </span>
        </div>
    
    <div className={`flex flex-col w-full ${ trackingResult && "mt-20 mb-20"} transition-all duration-500 overflow-hidden ${trackingResult ?" max-h-96 " : " max-h-0 " }`}>
    <span  className="medium-font text-grey text-xl mb-4 text-center">
        Shipment Summary
    </span>  
        <div className="bg-yellow pb-14 pt-11 px-16 w-9/12 mx-auto rounded-lg shadow-lg">
            <div className="flex justify-between text-grey medium-font text-center" >
                <div className="flex flex-col">
                    <span>Tracking Number</span>
                    <span className=" text-xl">192311532660</span>
                </div>
                <div className="flex flex-col">
                    <span>Status</span>
                    <span className="text-xl px-2 ">In Processing</span>
                    <span className="h-7  text-xs justify-between flex px-3 shadow cursor-pointer items-center bg-white rounded-xl">
                        <span className="pt-0.5">
                            <Image src={times} alt={times} width='8px' height={'8px'}/>
                        </span>
                        <span className="pt-0.5" onClick={cancelShipment}>

                        Cancel Shipment
                        </span>
                    </span>
                </div>
                <div className="flex flex-col">
                    <span> Request date</span>
                    <span className="text-xl ">June 12th, 2022</span>
                </div>
                <div className="flex flex-col">
                    <span> From</span>
                    <span className="text-xl ">Riyadh</span>
                </div>
                <div className="flex flex-col">
                    <span>To </span>
                    <span className="text-xl ">Jeddah</span>
                </div>
            </div>
            <div className={`flex justify-between text-grey mt-7 ${styles.shipmentProgressLine}`}>
                <div className="z-10 flex flex-col items-center">
                    <Image src={tick } alt='Tick'/>
                    <span className="medium-font text-lg mb-1 mt-2">Processing</span>
                    <span className="text-sm opacity-50">June 12th, 2022 </span>
                    <span className="text-sm opacity-50">14:00:00 Local Time</span>
                </div>
                <div className="z-10 flex flex-col items-center">
                    <Image src={loading } alt='loading'/>
                    <span className="medium-font text-lg mb-1 mt-2">In Transit</span> 
                </div>
                <div className="z-10 flex flex-col items-center">
                    <Image src={loading } alt='loading'/>
                    <span className="medium-font text-lg mb-1 mt-2">Delivery</span>
                    <span className="text-sm opacity-50">Estimated </span>
                    <span className="text-sm opacity-50">June 12th, 2022</span>
                </div>
            </div>
        </div>
</div>
    {trackingResult ||   <span className="mt-40 text-3xl medium-font text-center mb-24 text-bababa">
        Enter Tracking Number above to view results
        </span>}
    </div>
    
</CardContent>
<CancelShipment/>
</>
  )
}

export default TrackingContent