import { Button } from '@/components/ui/button'
import { MdOutlineLocalOffer } from "react-icons/md";
import React from 'react'
            {/* // IMP  WE HAD MADE THE PRICING COMPONENT TO ADD PRICING AT RIGHT SIDE  */}
// after THIS WE HAD MADE THE CARDETAIL ON RIGHT SIDE TO SHOW THE DETAIL WE HAD SELECTED >>> WE HAD CREATED SPECIFICATION.JSON WHERE WE HAD shared->CARDETAILS IN IT .
function Pricing({carDetail}) {
  return (
    <div className='p-10 border shadow-md rounded-xl'>
         <h2>Our Price</h2>
         <h2 className='font-bold text-4xl'>${carDetail.sellingPrice}</h2>
         {/* NOW IMP THIS BUTTON WILL NAVIGATE CHAT OPTION WHICH WE HAVE CREATED SO THAT USER CAN TALK */}
         <Button className='w-full mt-7' size='lg'>
         <MdOutlineLocalOffer className='text-lg mr-2' />
         Make an offer Price
         </Button>
    </div>

  )
}

export default Pricing