import Card from './Card'
import ShipmentContent from './ShipmentContent'
import ShipmentHeader from './ShipmentHeader'

const ShipmentCard = ({step,setStep,state,setState,handleChange,handleDropDownClick}) => {
  return (
    <Card>
      <ShipmentHeader shipmentStep={step}/>
      <ShipmentContent shipmentStep={step} setShipmentStep={setStep} state={state} setState={setState} handleDropDownClick={handleDropDownClick} handleChange={handleChange}/>
  </Card>
  )
}

export default ShipmentCard