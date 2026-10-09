import React from 'react'

import 'remixicon/fonts/remixicon.css';


const LocationSearchPanel = (props) => {



  const locations = [
    "24B, Near Kapoor's Cafe, Sheryians Coding School, Bhopal",
    "18A, Near Rawat's Cafe, Sheryians Coding School, Bhopal",
    "50C, Near CHAUHAN's Cafe, Sheryians Coding School, Bhopal",
    "3n, Near Jaat's Cafe, Sheryians Coding School, Bhopal",
    "24B, Near ASLa's Hotel, Sheryians Coding School, Bhopal"

  ];

  return (
    <div>

      {
        locations.map((elem, idx) => {
          return ( <div key={idx} onClick={()=>{
             props.setVehiclePanel(true);
             props.setPanelOpen(false);
          }} className='gap-4 my-2 border-2 active:border-black p-3 border-gray-50 rounded-xl  flex items-senter justify-start'>
            <h2 className='bg-[#eee] h-8 flex items-center justify-center w-12 rounded-full'><i className='ri-map-pin-fill '></i></h2>
            <h4 className='font-medium' >{elem}</h4>
          </div>)
        })
      }
    </div>
  )
}

export default LocationSearchPanel
