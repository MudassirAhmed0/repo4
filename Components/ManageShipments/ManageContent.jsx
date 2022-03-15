import CardContent from '../Shipment/CardContent'
import times from '../../assets/NewImages/svg/times.svg'
import tick from '../../assets/NewImages/svg/pentagonTick.svg'
import loading from '../../assets/NewImages/svg/pentagonLoading.svg'
import CancelShipment from "../Popups/CancelShipment"
import styles from '../../styles/Chalja.module.css'
import Image from 'next/image'
import { useEffect } from 'react'

const ManageContent = ({showTrack,setShowTrack}) => {
    useEffect(()=>{
        const height =  document.getElementById('card').clientHeight - 606
    
        document.getElementById('cardContainer').style.height = height >5 ? height +"px":0
        
      },[showTrack])
    const track=()=>{
        setShowTrack(true)
    }
    const cancelShipment =()=>{
        const modal = document.getElementById('cancelShipment')
        modal.classList.remove('opacity-0')
        modal.classList.add('opacity-1')
        modal.classList.remove('pointer-events-none')
        modal.classList.add('pointer-events-auto')
    }
  return (
    <CardContent noPadding>
    {   !showTrack ?  <div className={styles.shipmentContent}> <div className='flex gap-x-6'>
                <button className='w-40 h-10 pt-1 bg-yellow shadow-md  rounded'>
                        All Shipments
                </button>
                <button className='w-52 h-10 pt-1 border border-yellow rounded'>
                         Shipments In Progress
                </button>
                <button className='w-52 h-10 pt-1 border border-yellow rounded'>
                        Shipments Delivered
                </button>
                <button className='w-52 h-10 pt-1 border border-yellow rounded'>
                        Cancelled Shipments
                </button>
        </div>
        <div className="mt-11 flex flex-col  mb-5  gap-y-4 text-grey medium-font" >
            <div className="px-10 pt-5 pb-6 rounded-lg shadow-lg bg-yellow flex flex-col">
                <span className='medium-font text-xl  mb-3 '>192311532662</span>
                <div className='flex justify-between'>
                    <div className='flex flex-col'>
                        <span>From</span>
                        <span className='text-xl -mt-1'>Emad Ali</span>
                    </div>
                    <div className='flex flex-col'>
                        <span>To</span>
                        <span className='text-xl -mt-1'>Abdulrahman Alharbi</span>
                    </div>
                    <div className='flex flex-col'>
                        <span>Status</span>
                        <span className='text-xl -mt-1'>Delivered</span>
                    </div>
                    <div className='flex flex-col'>
                        <span>Request Date</span>
                        <span className='text-xl -mt-1'>June 21st, 2020</span>
                    </div>
                    <div className='regular-font'>
                        <button className='w-32 pt-1 h-10 border border-grey  rounded'>
                                    Pay
                        </button>
                        <button onClick={track} className='pt-1 w-32 h-10 bg-white shadow-md rounded ml-4'>
                                   Track
                        </button>
                    </div>

                </div>
                <div>

                </div>
            </div>
            <div className="px-10 pt-5 pb-6 rounded-lg shadow-lg bg-yellow flex flex-col">
                <span className='medium-font text-xl  mb-3 '>192311532662</span>
                <div className='flex justify-between'>
                    <div className='flex flex-col'>
                        <span>From</span>
                        <span className='text-xl -mt-1'>Emad Ali</span>
                    </div>
                    <div className='flex flex-col'>
                        <span>To</span>
                        <span className='text-xl -mt-1'>Abdulrahman Alharbi</span>
                    </div>
                    <div className='flex flex-col'>
                        <span>Status</span>
                        <span className='text-xl -mt-1'>Delivered</span>
                    </div>
                    <div className='flex flex-col'>
                        <span>Request Date</span>
                        <span className='text-xl -mt-1'>June 21st, 2020</span>
                    </div>
                    <div className='regular-font'>
                        <button className='w-32 pt-1 h-10 border border-grey  opacity-20 cursor-auto rounded'>
                                    Pay
                        </button>
                        <button onClick={track} className='pt-1 w-32 h-10 bg-white shadow-md rounded ml-4'>
                                   Track
                        </button>
                    </div>

                </div>
                <div>

                </div>
            </div>
            <div className="px-10 pt-5 pb-6 rounded-lg shadow-lg bg-yellow flex flex-col">
                <span className='medium-font text-xl  mb-3 '>192311532662</span>
                <div className='flex justify-between'>
                    <div className='flex flex-col'>
                        <span>From</span>
                        <span className='text-xl -mt-1'>Emad Ali</span>
                    </div>
                    <div className='flex flex-col'>
                        <span>To</span>
                        <span className='text-xl -mt-1'>Abdulrahman Alharbi</span>
                    </div>
                    <div className='flex flex-col'>
                        <span>Status</span>
                        <span className='text-xl -mt-1'>Delivered</span>
                    </div>
                    <div className='flex flex-col'>
                        <span>Request Date</span>
                        <span className='text-xl -mt-1'>June 21st, 2020</span>
                    </div>
                    <div className='regular-font'>
                        <button className='w-32 pt-1 h-10 border border-grey  opacity-20 cursor-auto rounded'>
                                    Pay
                        </button>
                        <button onClick={track} className='pt-1 w-32 h-10 bg-white shadow-md rounded ml-4'>
                                   Track
                        </button>
                    </div>

                </div>
                <div>

                </div>
            </div>
            <div className="px-10 pt-5 pb-6 rounded-lg shadow-lg bg-yellow flex flex-col">
                <span className='medium-font text-xl  mb-3 '>192311532662</span>
                <div className='flex justify-between'>
                    <div className='flex flex-col'>
                        <span>From</span>
                        <span className='text-xl -mt-1'>Emad Ali</span>
                    </div>
                    <div className='flex flex-col'>
                        <span>To</span>
                        <span className='text-xl -mt-1'>Abdulrahman Alharbi</span>
                    </div>
                    <div className='flex flex-col'>
                        <span>Status</span>
                        <span className='text-xl -mt-1'>Delivered</span>
                    </div>
                    <div className='flex flex-col'>
                        <span>Request Date</span>
                        <span className='text-xl -mt-1'>June 21st, 2020</span>
                    </div>
                    <div className='regular-font'>
                        <button className='w-32 pt-1 h-10 border border-grey  opacity-20 cursor-auto rounded'>
                                    Pay
                        </button>
                        <button onClick={track} className='pt-1 w-32 h-10 bg-white shadow-md rounded ml-4'>
                                   Track
                        </button>
                    </div>

                </div>
                <div>

                </div>
            </div>
        </div>
        </div>:<>
         <div className="flex flex-col w-full  mb-32">
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
        <CancelShipment/>
     </>
        }
    </CardContent>
  )
}

export default ManageContent