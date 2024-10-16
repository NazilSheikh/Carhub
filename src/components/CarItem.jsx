import { Separator } from './ui/separator'
import React from 'react'
import { BsFuelPump } from "react-icons/bs";
import { BsSpeedometer } from "react-icons/bs";
import { IoOpenOutline } from "react-icons/io5";
import { TbManualGearbox } from "react-icons/tb";
import { Link } from 'react-router-dom';

{/* on the click on any card item for cars we need too navigate to caritems  */}
{/* //go in caritems we used LINK TAG and wrap up it   */}
function CarItem({car}) {
  return (
    <Link to={'/listing-details/'+car?.id}>
    
    {/* // <div>CarItem</div>  7 TIMES CARD ITEM ARE BEING DISPLAYED . */}
    <div className=' flex-shrink-0 rounded-xl bg-white border hover:shadow-md cursor-pointer'>
     
     <h2 className='absolute m-2 bg-green-500 px-2 rounded-full text-sm pb-1 text-white '>New</h2>
     
      {/* now we want that our card should be in vertical manner and it should be scrollable we go shadcn and 
      IMPORT CAROUSAL npx shadcn@latest add carousel
*/}  
{/* before not adding in mylisting*/}
{/* after adding in my listing what we have choosen from submit listing  */}
{/* generaally we have selected array of image  */}
{/* the data we choosen is in the form array  */}
{/* <img src={car?.image} width={'100%'} height={50} alt="image"   */}
<img src={car?.images[0]?.imageUrl} width={'100%'} height={250} 
       className='rounded-t-xl h-[180px] object-cover '
       />
       <div className='p-4'>
       <h2 className='font-bold text-black text-lg mb-2'>{car?.listingTitle       }</h2>
       <Separator/>
       
       <div className='grid grid-cols-3 mt-5'>
         
         <div className='flex flex-col gap-2 items-center'>
              
              <BsFuelPump  className="text-lg"/>
              <h2>{car.mileage} Miles</h2>

         </div >
             
         <div className='flex flex-col gap-2 items-center'>
         <BsSpeedometer className="text-lg" />
              <h2>{car.fuelType}</h2>
              
         </div>

         <div className='flex flex-col gap-2 items-center'>
          <TbManualGearbox  className="text-lg"/>
              <h2>{car.transmission}</h2>
              
         </div>
          

       </div>
       <Separator className="my-2"/>
       <div className='mt-2 flex justify-between'>
        <h1 className='font-bold text-sm'>${car.sellingPrice}</h1>
        <h2 className='text-sm flex gap-2 item-center text-primary' >
          
          View Details
          <IoOpenOutline/>
          </h2>
       </div>

       </div>

    </div>
    </Link>
  )
}

export default CarItem

// import { Separator } from './ui/separator';
// import React from 'react';
// import { BsFuelPump } from "react-icons/bs";
// import { BsSpeedometer } from "react-icons/bs";
// import { IoOpenOutline } from "react-icons/io5";
// import { TbManualGearbox } from "react-icons/tb";
// import { Link } from 'react-router-dom';

// function CarItem({ car }) {
//   return (
//     <Link to={'/listing-details/' + car?.id}>
//       <div className='rounded-xl bg-white border hover:shadow-md cursor-pointer relative'>
//         {/* Tag for new cars */}
//         <h2 className='absolute top-2 left-2 bg-green-500 px-2 py-1 rounded-full text-sm text-white'>
//           New
//         </h2>

//         {/* Image */}
//         <img
//           src={car?.images[0]?.imageUrl}
//           alt="car"
//           className='rounded-t-xl h-[180px] md:h-[250px] w-full md:object-cover sm:object-cover lg:object-cover '
//         />

//         {/* Car details */}
//         <div className='p-4'>
//           {/* Car Title */}
//           <h2 className='font-bold text-black text-lg mb-2 text-center sm:text-left'>
//             {car?.listingTitle}
//           </h2>

//           <Separator />

//           {/* Car Info (Fuel, Mileage, Transmission) */}
//           <div className='grid grid-cols-3 gap-2 mt-5'>
//             <div className='flex flex-col gap-1 items-center'>
//               <BsFuelPump className="text-lg" />
//               <h2 className='text-xs md:text-sm'>{car.mileage} Miles</h2>
//             </div>
//             <div className='flex flex-col gap-1 items-center'>
//               <BsSpeedometer className="text-lg" />
//               <h2 className='text-xs md:text-sm'>{car.fuelType}</h2>
//             </div>
//             <div className='flex flex-col gap-1 items-center'>
//               <TbManualGearbox className="text-lg" />
//               <h2 className='text-xs md:text-sm'>{car.transmission}</h2>
//             </div>
//           </div>

//           <Separator className="my-2" />

//           {/* Price and View Details */}
//           <div className='mt-2 flex justify-between items-center  gap-2 flex-wrap'>
//             <h1 className='font-bold text-sm md:text-base'>
//               ${car.sellingPrice}
//             </h1>
//             <h2 className='text-sm md:text-base gap-2 flex   items-center text-primary'>
//               View Detail
//               <IoOpenOutline />
//             </h2>
//           </div>
//         </div>
//       </div>
//     </Link>
//   );
// }

// export default CarItem;
