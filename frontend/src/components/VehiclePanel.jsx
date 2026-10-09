import React from 'react'

const VehiclePanel = (props) => {
  return (
    <div>
      <h5 className='p-1 text-center w-[93%] absolute top-0 ' onClick={() => {
          props.setVehiclePanelOpen(false)
        }}><i className='ri-arrow-down-wide-line text-3xl text-gray-200'></i></h5>
        <h3 className='text-2xl font-semibold mb-5'>Choose a Vehicle</h3>
        <div onClick={()=>{
            props.setConfirmRide(true);
        }} className='p-3 border-2 mb-2 active:border-black rounded-xl  w-full flex items-center justify-between'>
          <img className='h-10' src="" alt="" />
          <div className='w-1/2 -ml-2'>
            <h4 className='font-medium text-base' >UberGo <span><i className='ri-user-3-fill'></i>4</span></h4>
            <h5 className='font-medium text-sm'>2 mins away</h5>
            <p className='font-normal text-xs text-gray-600'>Affordable, compact rides</p>
            <h2 className='text-lg font-semibold'>₹193.20</h2>
          </div>
        </div>
    </div>
  )
}

export default VehiclePanel
