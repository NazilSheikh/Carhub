import carSpecification from '@/Shared/carSpecification';
import React from 'react'
// import IconField from '@/add-listing/component/IconField'

function Specification({carDetail}) {
    console.log(carDetail);
  return (
    <div
     className='p-10 border shadow-md rounded-xl mt-7'
    >
      <h2 className='font-medium text-2xl'>Specification</h2>
      {carDetail? carSpecification.map((item , index)=>(
         <div className='mt-5 flex item-center justify-between'>
          
          {/* <h2 className='flex gap-2'><IconField icon={item.icon}/>{item.label}</h2> */}
          <h2>{item?.label}</h2>
          <h2>{carDetail?.[item?.name]}</h2>
         </div>
      )):
      <div className='w-full h-[500px] rounded-xl bg-slate-200 animate-pulse'>
         
      </div>
      }
    </div>
  )
}

export default Specification