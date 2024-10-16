import  Search  from './Search'
import React from 'react'

function Herosection() {
  return (
      <div>
    <div className='h-[650px] w-full  flex flex-col items-center gap-10 p-10 py-20 bg-[#eef0fc] '>
          
   <h1 className='text-lg'>Find cars for sale and for rent near you</h1>
  {/* //if you need to give custom size use [] */}
   <h1 className='text-[60px] font-bold '>
       Find Your Dream Car 
   </h1>

   


       {/* we had make different search component so that it can be reusable again and again */}
   <Search/>

      <img src="/src/public/tesla.png" alt="" />
   </div>

    </div>
  )
}

export default Herosection 