import Image from "next/image"
import styles from '../../styles/Home.module.css'
import simp from '../../assets/NewImages/about/image/about-zajil-exprece-image.jpg'
import yellowCube from '../../assets/NewImages/svg/box-yellow.svg'
import box from '../../assets/NewImages/svg/box-size-large-white.svg'

const RightImage = () => {
  return (
    <div className="flex pl-20 pr-20 pt-28 pb-24 relative items-center justify-between gap-x-14">
      
        <div className="flex flex-col justify-center items-start gap-y-3 ">
            <Image src={yellowCube} alt='Cube Icon'/>
            <h4 className="text-3xl medium-font text-grey">
            Simplified, Affordable Shipping And Logistics For Any Address In The World.

            </h4>
            <p className="light-font text-grey mb-4">
            The company has expanded into global shipping and logistics, growing from simple express delivery between two locations in KSA to a global e-commerce logistics solution provider. This stable, yet rapid expansion has been— and continues to be— fueled in large part by the entrepreneurship of its founders and the diligence of its people.  </p>
        <p className="light-font text-grey">
        Founded in 1990 with just two locations as the first private delivery service in the Kingdom of Saudi Arabia (KSA), Zajil Express now operates in more than 100 offices with more than 1,000 employees in 4 continents working hard to deliver more than 20,000 packages every day.
        </p>
        </div>

        <div className={`rounded  relative overflow-hidden  ${styles.rightImage} ${styles.rightImage2}`}>
            <Image src={simp} alt='simp' />
        <div className={styles.brandIconSimplified}>
            <Image src={box} alt='box'/>
       </div>
        </div>
    </div>
  )
}

export default RightImage