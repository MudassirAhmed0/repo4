import React from 'react'
import box from '../../assets/NewImages/svg/box-white.svg'
import Image from 'next/image'

const Vision = () => {
  return (
    <section className=' relative  bg-blue ' >
       
        <div className="max-1394 flex   ml-auto mr-auto  justify-center">
            
            <div className='flex  flex-col items-end text-right pt-12 pb-12 mb-12 w-2/6 pr-10 border-r border-white40Opa'>

            <Image src={box} alt='box'/>
            <span className="text-yellow medium-font text-3xl mt-2 mb-2">
            Vision
            </span>
            <span className='text-lg light-font text-white'> 
            Zajil will become an important part of the KSA economic super-structure and a sustainable wealth-generator for Saudi citizens by becoming the solution provider of choice for shipping services to and from the Kingdom of Saudi Arabia.

            </span>
        </div>
        <div className='flex  flex-col items-start pt-12 w-2/6 ml-10 '>
            <Image src={box} alt='box'/>
            <span className="text-yellow medium-font text-3xl mt-2 mb-2">
            Mission
            </span>
            <span className='text-lg light-font text-white'> 
            Zajil aspires to be a Saudi Arabia champion and the logistics partner of choice in the region by facilitating trade globally, and locally for startups and small- to medium-sized enterprises through cutting edge technologies, industry best practices, and a customer centric culture.
            </span>
        </div>
        </div>
        
    </section>
  )
}

export default Vision