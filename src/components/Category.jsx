import React from 'react'
import Data from '@/Shared/Data'
import { Link } from 'react-router-dom'


function Category() {
  return (
    <div className='mt-40'>
      <h1 className='text-3xl font-bold text-center mb-6'>Browse By Category</h1>
      <div className='grid grid-cols-3 sm:grid-cols-4 md:grid-cols-6 px-20 lg:grid-cols-9 gap-6'>
{/* 
// NOW WE WANT THAT WHEN I CLICK ON CATEGORY MY PAGE SHOULD NAVIGATE TO 
// FOLLOWING CARD LISTING CATEGORY . LIKE SUV SO SUV CAR LISTING WILL APPEAR WRAPPING LINK WITH CATEGORY  */}
       {Data.Category.map((category , index)=>(
        <Link to={'search/'+category.name}>
          <div className='border rounded-xl p-3  items-center flex flex-col hover:shadow-md cursor-pointer '>

         <img key={index.id} src=  {category.icon
         } height={35} width={36}  alt="" />
          
         <h2 className='mt-2' key={index.id}>   {category.name}</h2>
         </div>

         </Link>
       ))
       // AFTER THIS JUST CREATING FAKE DATABASE FOR SEARCHED CARS BY USEING FAKER.DEV BECOUSE WE DID NOT HAVE DATABASE .
        
       }

      </div>


    </div>
  )
}

export default Category