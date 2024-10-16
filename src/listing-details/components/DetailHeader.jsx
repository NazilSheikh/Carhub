import React from 'react'
import { FaRegCalendarAlt } from "react-icons/fa";
import { IoSpeedometerOutline } from "react-icons/io5";
import { GiGearStickPattern } from "react-icons/gi";
import { FaGasPump } from "react-icons/fa";
 {/* now this detailheader component will show the header that is title car name and all  */}
function DetailHeader({carDetail}) {
  return (
    <div>
        <h2 className='font-bold text-3xl'>{carDetail?.listingTitle}</h2>
        <p className='text-sm'>{carDetail?.tagline}</p>

             <div  className='flex gap-5 mt-3'>

        <div className='flex gap-2 item-center bg-blue-50 rounded-full p-2 px-3'>
        <FaRegCalendarAlt className='h-5 w-5 text-primary' />
        <h2 className='text-primary text-sm'>{carDetail?.year}</h2>
        </div>

        <div className='flex gap-2 item-center bg-blue-50 rounded-full p-2 px-3'>
        <IoSpeedometerOutline 
        className='h-5 w-5 text-primary' />
        <h2 className='text-primary text-sm'>{carDetail?.mileage}</h2>
        </div>


        <div className='flex gap-2 item-center bg-blue-50 rounded-full p-2 px-3'>
        <GiGearStickPattern  className='h-5 w-5 text-primary' />
        <h2 className='text-primary text-sm'>{carDetail?.transmission}</h2>
        </div>

        <div className='flex gap-2 item-center bg-blue-50 rounded-full p-2 px-3'>
        <FaGasPump  className='h-5 w-5 text-primary' />
        <h2 className='text-primary text-sm'>{carDetail?.fuelType}</h2>
        </div>
             </div>

    </div>
  )
}

export default DetailHeader