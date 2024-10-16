import Header from '@/components/Header'
import React, { useEffect, useState } from 'react'
import DetailHeader from '../components/DetailHeader'
import { useParams } from 'react-router-dom'
import { db } from './../../../configs';
import { CarImages, CarListing } from './../../../configs/schema';
import Service from '@/Shared/Service';
import { eq } from 'drizzle-orm';
import ImageGallery from '../components/ImageGallery';
import Description from '../components/Description';
import Features from '../components/Features';
import Pricing from '../components/Pricing';
import Specification from '../components/Specification';
import OwnersDetail from '../components/OwnersDetail';
import Footer from '@/components/Footer';
import FinancialCalculator from '../components/FinancialCalculator';
import MostSearchedCar from '@/components/MostSearchedCar';
function ListingDetail() {
  // now by using the id that we are providing we would get to access the carItem particular we have selected 
  const {id} = useParams();
  // console.log(id) ;
const [carDetail , setCarDetail] = useState([]);


   // UseEffect should only run once when component mounts
   useEffect(() => {
    GetListingDetail();
  }, [id]); // Add 'id' as a dependency, so it re-runs when 'id' changes


const GetListingDetail=async()=>
{
    const result = await db.select().from(CarListing)
    .innerJoin(CarImages ,eq(CarListing.id , CarImages.CarListingId))
    .where(eq(CarListing.id, id));
    const resp = Service.FormatResult(result);
    // console.log(resp[0]);
    setCarDetail(resp[0]);
}


  return (
    <div>
        {/* Header Detail Component 1*/}
        <Header/>
        {/* on the click on any card item for cars we need too navigate to caritems  */}
        {/* //go in caritems WRAP UP IN LINK */}
        <div  className='p-10 md:px-20' >
          {/* 2 now this detailheader component will show the header that is title car name and all  */}
          <DetailHeader carDetail={carDetail}/>
        {/* this part or component is below the header which in itself cantains to thing left and right componnent */}
       
        <div  className='grid grid-cols-1 md:grid-cols-3 w-full mt-10 gap-5'>
         {/* left will show images , features , calculator , etc... */}
         {/* col span means we need to asign two col at left and one at right bg-green-100 */}
          <div className='md:col-span-2 '>
                    {/* left */}

                    {/*3 IMAGEDTEAILS */}
                         <ImageGallery carDetail={carDetail} />
                    {/*4 DESCRIPTION */}
                    <Description carDetail={carDetail}/>
 
                         {/* 8 FEATURES LIST */}
                         <Features features={carDetail?.features}/>

                    {/* now we are adding financial calculator  */}
                        <FinancialCalculator/>  

          </div>
{/* right grid will show car details , contact to owner bg-red-300 */}
          <div >
            {/* right 5 */}
            {/* // IMP  WE HAD MADE THE PRICING COMPONENT TO ADD PRICING AT RIGHT SIDE  */}
            {/* PRICING */}
             <Pricing carDetail={carDetail}/>

          {/*6 CAR specifiaction  PROPERTIES  //  WE HAD MADE THE CARDETAIL ON RIGHT SIDE TO SHOW THE DETAIL WE HAD SELECTED >>> WE HAD CREATED SPECIFICATION.JSON WHERE WE HAD shared->CARDETAILS IN IT .
 */}
             <Specification carDetail={carDetail}/>
          
          {/* for this we have created two another column in BACKEND SCHEMA USERNAME , USEIMAGE */}
          {/* 7 OWNERS DETAILS  */}
          <OwnersDetail  carDetail={carDetail} />
          
          </div>
              
        </div>
              {/* i wannt to show the the recently most search card froM HOME->MOSTSEARCHDEDCARS FILE  */}
             <MostSearchedCar/> 
        </div>
        <Footer/>
    </div>
  )
}

export default ListingDetail