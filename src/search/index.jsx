// // import Service from '@/Shared/Service';
// // import { db } from './../../configs'
// // import { CarImages, CarListing } from './../../configs/schema'
// // import { eq, lte } from 'drizzle-orm';
// // import React from 'react'
// // import { useSearchParams } from 'react-router-dom';
// // import { useEffect ,useState } from 'react';
// // import Header from '@/components/Header'
// // import CarItem from '@/components/CarItem';
// // import Search from '@/components/Search'


// // // Search BY OPTION ; http://localhost:5173/search?make=car
// // // NOW WE WANT THAT WHENEVER WE WE SELECT THE OPTIONS AND SEARCH ACCN TO IT IT WILL SHOW ALL CARITEMS THERE : 
// // function SearchByOptions() {
// //     const [searchParam] = useSearchParams();

// //     const  condition=searchParam.get('cars');
// //     const  make=searchParam.get('make');
// //     const  price=searchParam.get('price');
// //     const [carList , setCarList] = useState([]);

// //     console.log(condition , make , price);


// //     useEffect(()=>{
// //       GetCarList();
// //    }, []) 

// //     // now actually getting the carditem acc to user has selected it :
// //     const GetCarList=async()=>
// //     {
// //      const result =  await db.select().from(CarListing)
// //      .innerJoin(CarImages , eq(CarListing.id , CarImages.CarListingId))
// //     // also if user selected the value then only this where is called 

// //      .where(condition!=undefined&&eq(CarListing.condition,condition))   
       
// //      .where(make!=undefined&&eq(CarListing.make , make))

// //     //  now for pricing we have to use grater than pr equal to and all
// //     // For pricing, we use 'less than or equal to' instead of equality

// //     // .where(price!=undefined&&eq(CarListing.price, price));  // 'lte' for less than or equal

// // // now in console wwe have all the details of audii man 
// //     // console.log(result);
// //      const resp = Service.FormatResult(result);
// //     //  console.log(resp);

// //     setCarList(resp);
    
// //     }



// // // WE  HAVE  PRICE FILTER HERE : 

// //   return (
// //     // <div className='md:px-20 p-10'>
// //     //     <div>SearchOptions</div>
// //     //     {/* <h2 className='p-10 font-bold '>
// //     //       {cars} {price} {make}
// //     //     </h2> */}

// //     // </div>


// //     <div>
// //         <Header/>
// //         <div className='p-10 flex justify-center bg-black'>
// //             <Search/>
// //         </div>
// //         <div className='md:px-20 p-10'>
// //             <h2 className='text-xl font-bold '>
// //               Search Result 
// //             </h2>
// //             {/* Displaying car items based on user selection */}
// //             {/* <div className='grid md:grid-cols-3 grid-cols-2 lg:grid-cols-4 gap-5 mt-3'>
// //                     {carList.length > 0 ? (
// //                         carList.map((item, index) => (
// //                             <div key={index}>
// //                                 <CarItem car={item} />
// //                             </div>
// //                         ))
// //                     ) : (
// //                         <p>No cars found matching your criteria.</p>
// //                     )
// //                     }
// //                 </div> */}
// //                  <div className='grid md:grid-cols-3 grid-cols-2 lg:grid-cols-4 gap-5 mt-3'>
// //                     {loading ? (
// //                         <p>Loading cars...</p>  // Show loading message while fetching data
// //                     ) : (
// //                         carList.length > 0 ? (
// //                             carList.map((item, index) => (
// //                                 <div key={index}>
// //                                     <CarItem car={item} />
// //                                 </div>
// //                             ))
// //                         ) : (
// //                             <p>No cars found matching your criteria.</p>  // Show if no cars found
// //                         )
// //                     )}
// //                 </div>
// //         </div>
// //     </div>
// //   )
// // }

// // export default SearchByOptions



// import Service from '@/Shared/Service';
// import { db } from './../../configs';
// import { CarImages, CarListing } from './../../configs/schema';
// import { eq, lte } from 'drizzle-orm';
// import React from 'react';
// import { useSearchParams } from 'react-router-dom';
// import { useEffect, useState } from 'react';
// import Header from '@/components/Header';
// import CarItem from '@/components/CarItem';
// import Search from '@/components/Search';

// // Search BY OPTION ; http://localhost:5173/search?make=car
// // NOW WE WANT THAT WHENEVER WE WE SELECT THE OPTIONS AND SEARCH ACCN TO IT IT WILL SHOW ALL CARITEMS THERE :
// function SearchByOptions() {
//     const [searchParam] = useSearchParams();

//     const condition = searchParam.get('cars');
//     const make = searchParam.get('make');
//     const price = searchParam.get('price');
//     const [carList, setCarList] = useState([]);
//     const [loading, setLoading] = useState(true);  // Track loading state

//     console.log(condition, make, price);

//     useEffect(() => {
//         GetCarList();
//     }, []);

//     // Now actually getting the car item according to what user has selected
//     const GetCarList = async () => {
//         setLoading(true);  // Set loading to true before fetching data

//         const result = await db.select().from(CarListing)
//             .innerJoin(CarImages, eq(CarListing.id, CarImages.CarListingId))
//             // Apply condition filter if selected
//             .where(condition !== undefined && eq(CarListing.condition, condition))
//             // Apply make filter if selected
//             .where(make !== undefined && eq(CarListing.make, make))
//             // Apply price filter (less than or equal to)
//             // .where(price !== undefined && lte(CarListing.price, price));

//         const resp = Service.FormatResult(result);
//         setCarList(resp);
//         setLoading(false);  // Set loading to false after data is fetched
//     };

//     return (
//         <div>
//             <Header />
//             <div className='p-10 flex justify-center bg-black'>
//                 <Search />
//             </div>
//             <div className='md:px-20 p-10'>
//                 <h2 className='text-xl font-bold '>
//                     Search Result
//                 </h2>
//                 {/* Displaying car items based on user selection */}
//                 <div className='grid md:grid-cols-3 grid-cols-2 lg:grid-cols-4 gap-5 mt-3'>
//                     {loading ? (
//                         <p>Loading cars...</p>  // Show loading message while fetching data
//                     ) : (
//                         carList.length > 0 ? (
//                             carList.map((item, index) => (
//                                 <div key={index}>
//                                     <CarItem car={item} />
//                                 </div>
//                             ))
//                         ) : (
//                             <p>No cars found matching your criteria.</p>  // Show if no cars found
//                         )
//                     )}
//                 </div>
//             </div>
//         </div>
//     );
// }

// export default SearchByOptions;
import Service from '@/Shared/Service';
import { db } from './../../configs';
import { CarImages, CarListing } from './../../configs/schema';
import { and, eq, lte } from 'drizzle-orm'; // Import 'and' for combining conditions
import React from 'react';
import { useSearchParams } from 'react-router-dom';
import { useEffect, useState } from 'react';
import Header from '@/components/Header';
import CarItem from '@/components/CarItem';
import Search from '@/components/Search';

function SearchByOptions() {
    const [searchParam] = useSearchParams();
    const condition = searchParam.get('cars');
    const make = searchParam.get('make');
    const price = searchParam.get('price');
    const [carList, setCarList] = useState([]);
    const [loading, setLoading] = useState(true);  // Default to true initially

    console.log(condition, make, price);

    useEffect(() => {
        GetCarList();
    }, []);

    const GetCarList = async () => {
        setLoading(true);  // Start loading when fetching data

        try {
            // Build the filter conditions dynamically
            let filters = [];

            if (condition !== undefined && condition !== null) {
                filters.push(eq(CarListing.condition, condition)); // Filter by condition
            }

            if (make !== undefined && make !== null) {
                filters.push(eq(CarListing.make, make)); // Filter by make
            }

            // if (price !== undefined && price !== null) {
            //     filters.push(lte(CarListing.price, price)); // Filter by price less than or equal to
            // }

            // Apply all filters using 'and' to ensure all criteria must match
            const result = await db.select().from(CarListing)
                .innerJoin(CarImages, eq(CarListing.id, CarImages.CarListingId))
                .where(and(...filters));

            const resp = Service.FormatResult(result);
            console.log('Filtered car list:', resp);  // Debugging output

            setCarList(resp);  // Set the filtered car list
        } catch (error) {
            console.error('Error fetching car list:', error);  // Handle any error
        } finally {
            setLoading(false);  // Stop loading regardless of success/failure
        }
    };

    return (
        <div>
            <Header />
            <div className='p-10 flex justify-center bg-black'>
                <Search />
            </div>
            <div className='md:px-20 p-10'>
                <h2 className='text-xl font-bold '>
                    Search Result
                </h2>
                {/* Displaying car items based on user selection */}
                <div className='grid md:grid-cols-3 grid-cols-2 lg:grid-cols-4 gap-5 mt-3'>
                    {loading ? (
                        <p>Loading cars...</p>  // Show loading message while fetching data
                    ) : (
                        carList.length > 0 ? (
                            carList.map((item, index) => (
                                <div key={index}>
                                    <CarItem car={item} />
                                </div>
                            ))
                        ) : (
                            <p>No cars found matching your criteria.</p>  // Show if no cars found
                        )
                    )}
                </div>
            </div>
        </div>
    );
}

export default SearchByOptions;
