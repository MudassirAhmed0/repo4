import Head from 'next/head' 
import HeroCardLayout from '../Components/Shipment/HeroCardLayout'
import TrackingCard from '../Components/Track/TrackingCard'

const Track = () => {
 
  return (
    <>
    <Head>
     <title>Tracking || Zajil</title>
     <meta name="description" content="" />
     
 </Head> 
<HeroCardLayout>
    <TrackingCard/>
</HeroCardLayout>
  </>
  )
}

export default Track