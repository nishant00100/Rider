import React from 'react'

const WaitingForDriver = (props) => {
  return (
    <div>
            <h5 className='p-1 text-center w-[93%] absolute top-0 ' onClick={() => {
                props.WaitingForDriver(false)
            }}><i className='ri-arrow-down-wide-line text-3xl text-gray-200'></i></h5>

            <div className='flex items-center justify-between'>
              <img className='h-10' src="" alt="" />
              <div className='text-right'>
                <h2 className='text-lg font-medium' >Sarthak</h2>
                <h4 className='text-xl font-semibold -mt-1 -mb-1'>HR30 G 1150</h4>
                <p className='text-sm text-gray-600'>MercdesBenzAMG</p>
              </div>
            </div>

            <div className='gap-2 flex flex-col justify-between items-center'>

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
            </div>
        </div>
  )
}

export default WaitingForDriver
