import React from 'react'

const ShipmentButton = ({active,label,handleClick}) => {
  return (
    <button onClick={handleClick} className={`h-11 grow pt-1 ${active?  " bg-yellow shadow-md ": " border border-grey "}  rounded text-grey`}>
                    {label}
        </button>
  )
}

export default ShipmentButton