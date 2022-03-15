import { useState } from 'react'
import MobileVerification from '../Popups/MobileVerification'
import ShipmentDropDown from './ShipmentDropDown'
import ShipmentTextInput from './ShipmentTextInput'

const cities =[
    "Karachi",
    "Lahore",
    "Islamabad",
    "Jeddah",
    "Riyadh"
]

const SenderDetails = ({step,setStep,state,handleChange,handleDropDownClick}) => {

    const [fNError,setFNError] = useState(false)
    const [lNError,setLNError] = useState(false)
    const [numError,setNumError] = useState(false)
    const [cityError,setCityError] = useState(false)
    const [a1Error,setA1Error] = useState(false)
    const [a2Error,setA2Error] = useState(false)
    const verify =()=>{
        const {senderFirstName,senderLastName,senderMobileNumber,senderCity,senderAddressLine1,senderAddressLine2} = state
        setFNError(senderFirstName == '') 
        setLNError(senderLastName == '') 
        setNumError(senderMobileNumber == '') 
        setCityError(senderCity == '') 
        setA1Error(senderAddressLine1 == '') 
        setA2Error(senderAddressLine2 == '') 
  
        if(senderFirstName && senderLastName && senderMobileNumber && senderCity && senderAddressLine1 && senderAddressLine2){
            const modal = document.getElementById('mobileVerification')
        modal.classList.remove('opacity-0')
        modal.classList.add('opacity-1')
        modal.classList.remove('pointer-events-none')
        modal.classList.add('pointer-events-auto')
    }
  
    setTimeout(()=>{ 
      setFNError(false) 
      setLNError(false)
      setNumError(false) 
      setCityError(false) 
      setA1Error(false) 
      setA2Error(false) 
    },5000)
      } 
  
     
    const  previousStep =()=>{
        setStep(step -1)
    }
    const nextStep =()=>{
        setStep(step +1)
    }
  return (
    <>
    <h5 className='text-xl text-grey medium-font'>
            Please enter your information
        </h5>
        <div className="flex flex-wrap gap-y-14 justify-between mt-9">
        <div className="w-46-per   gap-x-5 flex">
            <ShipmentTextInput id='senderFirstName' handleChange={handleChange} value={state.senderFirstName} issue={fNError} label={'First Name'}/>
           
        </div> 
        <div className="w-46-per   gap-x-16 flex">
            <ShipmentTextInput id='senderLastName' handleChange={handleChange} value={state.senderLastName} issue={lNError} label={'Last Name'}/>
            
        </div> 
        <div className="w-46-per   gap-x-16 flex">
            <ShipmentTextInput id='senderMobileNumber' handleChange={handleChange} value={state.senderMobileNumber} issue={numError} label={'Mobile Number'}/>
             
        </div> 
        <div className="w-46-per   gap-x-16 flex">
            <ShipmentDropDown handleClick={handleDropDownClick} id={'senderCity'} options={cities} issue={cityError} label={ state.senderCity ? state.senderCity :'City'}/> 
        </div> 
        <div className="w-46-per   gap-x-16 flex"> 
            <ShipmentTextInput id='senderAddressLine1' handleChange={handleChange} value={state.senderAddressLine1} issue={a1Error} label={'Address Line 1'}/>
        </div>
        <div className="w-46-per   gap-x-16 flex"> 
            <ShipmentTextInput id='senderAddressLine2' handleChange={handleChange} value={state.senderAddressLine2} issue={a2Error} label={'Address Line 2'} />
        </div> 
        <div className="flex justify-between w-full mt-6">
            <button onClick={previousStep} className='w-48 h-10 rounded pt-1 border border-yellow'>
                Go Back
            </button>
            <button onClick={verify} className='w-48 h-10 rounded pt-1 bg-yellow'>
                Proceed Next
            </button>
        </div>
            </div>
            <MobileVerification nextStep={nextStep}/>
            </>
  )
}

export default SenderDetails