import React from 'react'

const ConfirmedRide = () => {
    return (
        <div>
            <h5 className='p-1 text-center w-[93%] absolute top-0 ' onClick={() => {
                props.setVehiclePanelOpen(false)
            }}><i className='ri-arrow-down-wide-line text-3xl text-gray-200'></i></h5>
            <h3 className='text-2xl font-semibold mb-5'>Confirm you Ride</h3>

            <div className='gap-2 flex flex-col justify-between items-center'>
                <img className='h-20' src="" alt="" />

                <div className='w-full mt-5'>
                    <div className='flex items-center gap-5 p-3 border-b-2'>
                        <i className=' text-lg  ri-map-pin-2-fill'></i>
                        <div>
                            <h3 className='text-lg font-medium'>562/11-A</h3>
                            <p className='text-sm text-gray-600 -mt-1 '>Kankariya Talab, Bhopa</p>
                        </div>
                    </div>
                    <div className='flex items-center gap-5 p-3 border-b-2'>
                        <i className=' text-lg  ri-map-pin-user-fill'></i>
                        <div>
                            <h3 className='text-lg font-medium'>562/11-A</h3>
                            <p className='text-sm text-gray-600 -mt-1 '>Kankariya Talab, Bhopa</p>
                        </div>
                    </div>
                    <div className='flex items-center gap-5 p-3'>
                        <i className=' text-lg  ri-currency-line'></i>
                        <div>
                            <h3 className='text-lg font-medium'>₹193.20</h3>
                            <p className='text-sm text-gray-600 -mt-1 '>Cash Cash</p>
                        </div>

                    </div>
                </div>

                <button onClick={()=>{
                    props.setVehicleFound(true);
                    props.setConfirmRide(false);
                }} className='mt-5 w-full bg-green-600 text-white font-semibold p-2 ronded-lg '>Confirm</button>

            </div>



        </div>
    )
}

export default ConfirmedRide
