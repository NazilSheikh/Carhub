import React, { useEffect, useState } from 'react'
import { Button } from '@/components/ui/button'
import { Link } from 'react-router-dom'
import { db } from './../../../configs'
import { CarImages, CarListing } from './../../../configs/schema'
import { desc, eq } from 'drizzle-orm'
import { useUser } from '@clerk/clerk-react'
import Service from '@/Shared/Service'
import CarItem from '@/components/CarItem'
import { toast } from 'sonner'
import { FaTrashAlt } from "react-icons/fa";

function MyListing() {

    const {user} = useUser() ; // we need to show the information of user .
   const [carList,setCarList] = useState([]);
    useEffect(()=>{

        // if user info is available then only we will call the below method
        user&&GetUserCarListings();

    } ,[user])
    // now we want that our data which is sotored in drizzle should display in mylifting 
    // just connecting drizzle here :
    const GetUserCarListings=async()=>{
        const result = await db.select().from(CarListing)

        // we want all the carimages independent

        .leftJoin(CarImages,eq(CarListing.id , CarImages.CarListingId))

        // this is we are providing columns we added the references 
        
        .where(eq(CarListing.createdBy , user?.primaryEmailAddress?.emailAddress))
        .orderBy(desc(CarListing.id))
             


        const resp = Service.FormatResult(result);
         console.log(resp)
         setCarList(resp);

        console.log(result);

    };
     // Delete Function to delete the card or listing we have created 
  // Delete Function
  const handleDelete = async (listingId) => {
    if (window.confirm('Are you sure you want to delete this listing?')) {
        try {
            // Delete associated car images first
            await db.delete(CarImages).where(eq(CarImages.CarListingId, listingId));

            // Then delete the car listing
            await db.delete(CarListing).where(eq(CarListing.id, listingId));

            toast.success("Listing and associated images deleted successfully!");
            // Update UI after successful deletion
            setCarList((prevList) => prevList.filter(item => item.id !== listingId));
            console.log("deleted the record");
        } catch (error) {
            toast.error("Failed to delete listing. Please try again.");
            console.log("Error deleting listing:", error);
        }
    }
};


  return (
    <div className='mt-6'>
          <div className='flex justify-between item-center'>
                <h2 className='font-bold text-4xl '>My Listing</h2>
                {/* it is like anchor tag in jsx when you click it will redirect to add-listing page */}
                <Link  to={'/add-listing'}>  
                <Button> +Add New Listing </Button>
                </Link>
            </div>
            
    {/* // now we need to display in my listing what we had submitted and choosen for listting ; */}
   {/* this is all leasting what we have choosen in during submit listing after submitting this will show on profile section  */}
    <div className='grid grid-cols-1  md:grid-cols-3 lg-grid-cols-4 mt-7 gap-5 '>
    {carList.map((item , index)=>(
      <div key={index}>
            <CarItem car={item} />
            {/* we need to add button and delete button  :  */}
            <div className='p-2 bg-gray-50 flex justify-between rounded-lg gap-3'>
              {/* now we want ke when we click on edit option we will move to submit form */}
              {/* we use this link  */}
              <Link to={'/add-listing?mode=edit&id='+item?.id} className='w-full'>
              
              <Button className='w-full' variant='outline'>
                edit
              </Button>

              </Link>
            {/* Delete Button */}
            <Button 
                                                      variant='destructive'
                                                      onClick={() => handleDelete(item?.id)}
                                                  >
                                                      <FaTrashAlt />
                                                  </Button>
               
            </div>
            </div>
    ))}
     </div>
        
   

</div>
  )
}

export default MyListing