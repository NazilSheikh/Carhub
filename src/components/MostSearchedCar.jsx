import FakeData from '@/Shared/FakeData'
import React, { useEffect, useState } from 'react'
import CarItem from './CarItem';

import { db } from './../../configs'
import { CarImages, CarListing } from './../../configs/schema'
import { desc, eq } from 'drizzle-orm'
        {/* now we want that our card should be in vertical manner and it should be scrollable we go shadcn and 
      IMPORT CAROUSAL npx shadcn@latest add carousel
*/}

import {
  Carousel,
  CarouselContent,
  CarouselItem,
  CarouselNext,
  CarouselPrevious,
} from "@/components/ui/carousel"
import Service from '@/Shared/Service';


function MostSearchedCar() {
  // we are checking if we are able to fetch carlist data check in console there would be a array of 7 .
  // console.log(FakeData.carList);


  // NOW WE HAVE CREATED OUR OWN ORIGINAL DAATA WE DO NOT NEED TO USE FAKEDATA
  // we are genrally fetchiing our original data from BACKEND DRIZZLE ORM

  const [CarList , setCarList] = useState([]);
  useEffect(()=>{
    GetUserCarListings();
  },[])
  const GetUserCarListings=async()=>{
    const result = await db.select().from(CarListing)

    // we want all the carimages independent

    .leftJoin(CarImages,eq(CarListing.id , CarImages.CarListingId))

    // this is we are providing columns we added the references 
    

    .orderBy(desc(CarListing.id))
    // we are fatching top 10 results 
    .limit(10)
         


    const resp = Service.FormatResult(result);
    setCarList(resp);
   console.log(resp);

}
  return (
    <div className='mx-24'>
      <h1 className='text-3xl font-bold text-center mt-16 mb-7 '>Most Searched Cars</h1>
   
   
        {/* now we want that our card should be in vertical manner and it should be scrollable we go shadcn and 
      IMPORT CAROUSAL npx shadcn@latest add carousel
*/}

{/* we need to wrap item inside courasal item  */}
  {/* here we are making another component card or CardItem becoz it can be reusable everywhere . */}
      
      <Carousel>
  <CarouselContent >
      {CarList.map((car , index)=>(
  // this basis means in 1 line how many card to show that is 4 cards
<CarouselItem className="lg:basis-1/4 md:basis-1/2 sm:basis-1/1">

       <CarItem key={index} car={car}/>
    </CarouselItem>       
      ))}
  </CarouselContent>
  {/* //previous and next are generally buttons  */}
  <CarouselPrevious />   
  <CarouselNext />
  </Carousel>

    </div>
  )
}

export default MostSearchedCar


// import React, { useEffect, useState } from 'react';
// import CarItem from './CarItem';
// import { db } from './../../configs';
// import { CarImages, CarListing } from './../../configs/schema';
// import { desc, eq } from 'drizzle-orm';
// import {
//   Carousel,
//   CarouselContent,
//   CarouselItem,
//   CarouselNext,
//   CarouselPrevious,
// } from "@/components/ui/carousel";
// import Service from '@/Shared/Service';

// function MostSearchedCar() {
//   const [CarList, setCarList] = useState([]);

//   useEffect(() => {
//     GetUserCarListings();
//   }, []);

//   const GetUserCarListings = async () => {
//     const result = await db
//       .select()
//       .from(CarListing)
//       .leftJoin(CarImages, eq(CarListing.id, CarImages.CarListingId))
//       .orderBy(desc(CarListing.id))
//       .limit(10);

//     const resp = Service.FormatResult(result);
//     setCarList(resp);
//     console.log(resp);
//   };

//   return (
//     <div className='mx-auto px-4 lg:px-24'>
//       <h1 className='text-3xl font-bold text-center mt-16 mb-7'>
//         Most Searched Cars
//       </h1>

//       <Carousel>
//         <CarouselContent className="flex flex-wrap justify-center gap-4">
//           {CarList.map((car, index) => (
//             <CarouselItem 
//               key={index} 
//               className="w-full sm:w-1/2 md:w-1/3 lg:w-1/4" // Responsive grid for car items
//             >
//               <CarItem car={car} />
//             </CarouselItem>
//           ))}
//         </CarouselContent>
//         <CarouselPrevious />
//         <CarouselNext />
//       </Carousel>
//     </div>
//   );
// }

// export default MostSearchedCar;

