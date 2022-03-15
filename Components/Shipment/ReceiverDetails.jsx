import { useState } from 'react'
import ShipmentDropDown from './ShipmentDropDown'
import ShipmentTextInput from './ShipmentTextInput'

const cities =[
    "Karachi",
    "Lahore",
    "Islamabad",
    "Jeddah",
    "Riyadh"
]
const ReceiverDetails = ({step,setStep,state,handleChange,handleDropDownClick}) => {
    
    const [fNError,setFNError] = useState(false)
    const [lNError,setLNError] = useState(false)
    const [numError,setNumError] = useState(false)
    const [cityError,setCityError] = useState(false)
    const [a1Error,setA1Error] = useState(false)
    const [a2Error,setA2Error] = useState(false)
    const nextStep =()=>{
        const {receiverFirstName,receiverLastName,receiverMobileNumber,receiverCity,receiverAddressLine1,receiverAddressLine2} = state
        setFNError(receiverFirstName == '') 
        setLNError(receiverLastName == '') 
        setNumError(receiverMobileNumber == '') 
        setCityError(receiverCity == '') 
        setA1Error(receiverAddressLine1 == '') 
        setA2Error(receiverAddressLine2 == '') 
  
        if(receiverFirstName && receiverLastName && receiverMobileNumber && receiverCity && receiverAddressLine1 && receiverAddressLine2){
            setStep(step +1)
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
  return (
    <>
    <h5 className='text-xl text-grey medium-font'>
            Who are you Sending the Package to?
        </h5>
        <div className="flex flex-wrap gap-y-14 justify-between mt-9">
        <div className="w-46-per   gap-x-5 flex">
            <ShipmentTextInput id='receiverFirstName' handleChange={handleChange} value={state.receiverFirstName} issue={fNError} label={'First Name'}/>
           
        </div> 
        <div className="w-46-per   gap-x-16 flex">
            <ShipmentTextInput id='receiverLastName' handleChange={handleChange} value={state.receiverLastName} issue={lNError} label={'Last Name'}/>
            
        </div> 
        <div className="w-46-per   gap-x-16 flex">
            <ShipmentTextInput id='receiverMobileNumber' handleChange={handleChange} value={state.receiverMobileNumber} issue={numError} label={'Mobile Number'}/>
             
        </div> 
        <div className="w-46-per   gap-x-16 flex">
            <ShipmentDropDown handleClick={handleDropDownClick} id={'receiverCity'} options={cities} issue={cityError} label={state.receiverCity? state.receiverCity  :'City'}/> 
        </div> 
        <div className="w-46-per   gap-x-16 flex"> 
            <ShipmentTextInput id='receiverAddressLine1' handleChange={handleChange} value={state.receiverAddressLine1} issue={a1Error} label={'Address Line 1'}/>
        </div>
        <div className="w-46-per   gap-x-16 flex"> 
            <ShipmentTextInput id='receiverAddressLine2' handleChange={handleChange} value={state.receiverAddressLine2} issue={a2Error} label={'Address Line 2'} />
        </div> 
        <div className="flex justify-between w-full mt-6">
            <button onClick={previousStep} className='w-48 h-10 rounded pt-1 border border-yellow'>
                Go Back
            </button>
            <button onClick={nextStep} className='w-48 h-10 rounded pt-1 bg-yellow'>
                Proceed Next
            </button>
        </div>
            </div>
            </>
  )
}

export default ReceiverDetails