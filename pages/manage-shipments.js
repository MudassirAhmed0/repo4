import Head from 'next/head' 
import ManageCard from '../Components/ManageShipments/ManageCard'
import HeroCardLayout from '../Components/Shipment/HeroCardLayout'

const ManageShipments = () => {
   
  return (
    <>
    <Head>
        <title>Manage Shipments || Zajil</title>
        <meta name="description" content="" />
        
    </Head>    
    <HeroCardLayout>
          <ManageCard/>
    </HeroCardLayout>

 </>
  )
}

export default ManageShipments