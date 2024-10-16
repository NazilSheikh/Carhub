import React from 'react'
import { FaCheck } from "react-icons/fa6"



// IMP AFTER THIS WE HAD MADE THE PRICING COMPONENT TO ADD PRICING AT RIGHT SIDE 
function Features({features}) {

   // Ensure features is an object and not null/undefined before using Object.entries
   const featuresObject = features || {};

  // we are getting feature list in form of json on console 
  // console.log(features);
    return (
      <div className='mt-6'>

    <div className='p-10 bg-white rounded-xl border shadow-md'>
     <h2 className='font-medium text-2xl mb-2'>
      Features
    </h2>
         {/* features */}
         {/* now to SHOW THE REAL FEATURES WE HAVE SUBMITTED WE WILL CREATE A NEW in component Features.jsx */}
       
         {/* {[features]?.map((item,index)=>(
          <div key={index}>
            <FaCheck   className='text-primary text-lg bg-blue-100'/>
          </div>
         ))

         } */}
       
          {/* <div>
             {Object.entries(features).map(([features,value])=>(
                     <div>
                        {features} - {value && 'true'}
                     </div>
              ))}
          </div> */}
            {/* chatgpt  */}
           <div className='grid grid-cols-1 sm:grid-cols-2 gap-y-4 md:grid-cols-3 gap-5 lg:grid-cols-3'>
          {/* Check if featuresObject has any keys to display */}
          {Object.keys(featuresObject).length > 0 ? (
            Object.entries(featuresObject).map(([feature, value]) => (
              <div  className='flex items-center gap-2'>
                <FaCheck className='text-primary text-lg bg-blue-100 rounded-full p-1 shrink-0' />
                <h2  className='text-sm md:text-base font-medium'>{feature}</h2>
              </div>
            ))
          ) : (
            <div>No features available</div>
          )}
        </div>


        </div>
      </div>
  )
}

export default Features