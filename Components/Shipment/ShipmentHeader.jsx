import styles from '../../styles/Chalja.module.css';
import CardHeader from './CardHeader'

const ShipmentHeader = ({shipmentStep}) => {
  return (
    <CardHeader>
        <h4 className="text-3xl medium-font text-blue">
        Create a Shipment
        </h4>
        <div className={`flex gap-x-8 relative ${styles.stepsLine}`}>
        <div className='flex flex-col items-center gap-y-1'>
            <div className='relative'>
                <span className={`bg-yellow block text-yellow ${styles.hexagon}`}>
                </span>
                <span className={`medium-font text-lg text-white ${styles.shipmentNumber}`}>
                    01
                </span>
            </div>
            <span className='text-sm medium-font text-grey'>
            Shipment Details
            </span>
        </div>
        <div className='flex flex-col items-center gap-y-1'>
            <div className='relative'>
                <span className={`${shipmentStep >= 2? "bg-yellow  text-yellow"  :  "bg-lightGrey  text-lightGrey"} block transition-all ${styles.hexagon}`}>
                </span>
                <span className={`medium-font text-lg text-white ${styles.shipmentNumber}`}>
                    02
                </span>
            </div>
            <span className={`text-sm medium-font transition-all  ${shipmentStep >= 2? "text-grey":"text-darkGrey"}`}>
            Sender Details
            </span>
        </div>
        <div className='flex flex-col items-center gap-y-1'>
            <div className='relative'>
                <span className={`${shipmentStep >= 3? "bg-yellow  text-yellow"  :  "bg-lightGrey  text-lightGrey"} block transition-all ${styles.hexagon}`}>
                </span>
                <span className={`medium-font text-lg text-white ${styles.shipmentNumber}`}>
                    03
                </span>
            </div>
            <span className={`text-sm medium-font transition-all  ${shipmentStep >= 3? "text-grey":"text-darkGrey"}`}>
            Receiver Details
            </span>
        </div>
        <div className='flex flex-col items-center gap-y-1'>
            <div className='relative'>
                <span className={`${shipmentStep >= 4? "bg-yellow  text-yellow"  :  "bg-lightGrey  text-lightGrey"} block transition-all ${styles.hexagon}`}>
                </span>
                <span className={`medium-font text-lg text-white ${styles.shipmentNumber}`}>
                    04
                </span>
            </div>
            <span className={`text-sm medium-font transition-all  ${shipmentStep >= 4? "text-grey":"text-darkGrey"}`}>
            Checkout
            </span>
        </div>
        
        </div>
     </CardHeader>
  )
}

export default ShipmentHeader