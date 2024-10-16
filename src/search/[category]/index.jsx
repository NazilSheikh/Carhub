


import Header from '@/components/Header'
import Search from '@/components/Search'
import { db } from './../../../configs';
import { CarImages, CarListing } from './../../../configs/schema';
import React, { useEffect, useState } from 'react'
import { useParams } from 'react-router-dom'
import { eq } from 'drizzle-orm';
import Service from '@/Shared/Service';
import CarItem from '@/components/CarItem';

// NOW WE WANT THAT WHEN I CLICK ON CATEGORY MY PAGE SHOULD NAVIGATE TO 
// FOLLOWING CARD LISTING CATEGORY . LIKE SUV SO SUV CAR LISTING WILL APPEAR 
function SearchByCategory() {
    // we want to show the name of category we have selected 
    const {category}= useParams();
    // console.log(category)
    
    const [carList , setCarList] = useState([]);
    // to iterate over the carlist ; 


     useEffect(()=>{
        GetCarList();
     }, [category]) // Add category as dependency to avoid infinite loops and refetch when category changes

    //  IF MY CATEGORY TYPE IS SUV OR ANYTHING THAT MATCHES THE GIVEN CARLLISTING THESE FUNCTION WILL SHOW THE 
    // DETAIL OF THAT CAR CATEGORY MATCHED 
    const GetCarList=async()=>{
       
        const result = await db.select().from(CarListing)
        .innerJoin(CarImages,eq(CarListing.id,CarImages.CarListingId))
        .where(eq(CarListing.category , category));

    //    console.log(result) ;
    //   WE CAN GET THE FORMATED DATA
    const resp = Service.FormatResult(result);
    // console.log(resp);
    setCarList(resp);
    }
  return (
    <div>
        <Header/>
        <div className='p-10 flex justify-center bg-black'>
            <Search/>
        </div>
        <div className='md:px-20 p-10'>
            <h2 className='text-xl font-bold '>
                {category}
            </h2>
            {/* list of category to show as per user click on search by category */}
            <div className='grid md:grid-cols-3 grid-cols-1 lg:grid-cols-4 gap-5 mt-3'>
                {carList.map((item, index) => (
                    <div key={index}>
                        <CarItem car={item} />
                    </div>
                ))}                  
            </div>
        </div>
    </div>
  )
}

export default SearchByCategory;
