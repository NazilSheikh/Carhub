import React, { useState } from 'react'
// for search baar we need to add some dropdown we will USE SHADCN COMPONENT SELECT FOR IT .q
import {
    Select,
    SelectContent,
    SelectItem,
    SelectTrigger,
    SelectValue,
  } from "@/components/ui/select"
  
// we have use that separator line from shad cn 
import { Separator } from "./ui/separator"

{/* we had used react icon go to react.icon.github  for search icon npm install react-icons --save
q */}
import { IoIosSearch } from "react-icons/io";
import Data from '../Shared/Data';
import { Link } from 'react-router-dom';




{/*copy pasted from shadcn :   */}
// this md means for normal md size we have to show following thing and for smaller size we have to block it 
function Search() {
  // NOW THESE HOOKS ARE USED TO SEACRCH BY OPTIONS TO FETCH THE CARITEMS AS PER THE SEELECTED DEMAND OF USER 
  
  const [cars , setCars] = useState();
  const [make , setMake] = useState();
  const [price , setPrice] = useState();
  return (

    <div className='bg-white p-2 md:p-5 w-full md:w-[60%] rounded-md md:rounded-full flex-col md:flex md:flex-row  gap-10 px-5 items-center   ' >
     <Select onValueChange={(value)=>setCars(value)}>
  <SelectTrigger className="w-[180px]  md:border-none outline-none w-full  shadow-none text-lg" >
    <SelectValue placeholder="Cars" />
  </SelectTrigger>

{/* for ui */}
  {/* <SelectContent>
    <SelectItem value="light">New</SelectItem>
    <SelectItem value="dark">Old</SelectItem>
  </SelectContent> */}

{/* for search :  */}

<SelectContent >
    <SelectItem value="New">New</SelectItem>
    <SelectItem value="Used">Used</SelectItem>
    <SelectItem value="Certified-Pre-owned">Certified-Pre-owned</SelectItem>
  </SelectContent>


</Select>

{/* // we have use that separator line from shad cn  */}

<Separator orientation="vertical" className="md:block hidden"/>

     <Select onValueChange={(value)=>setMake(value)}>
  <SelectTrigger className="w-[180px] outline-none  md:border-none  w-full  shadow-none text-lg" >
    <SelectValue placeholder="Car Makes" />
  </SelectTrigger>
  <SelectContent>
    {/* Now instead for writing this dropdown data multiple times we had made separate data file in Shared folder */}
    {Data.CarMakes.map((maker, idx)=>(
            <SelectItem key={idx} value={maker.name}>{maker.name}</SelectItem>

    ))}
  </SelectContent>
</Select>

{/* // we have use that separator line from shad cn  */}

<Separator orientation="vertical " className="md:block hidden"/>


<Select onValueChange={(value)=>setPrice(value)}>
  <SelectTrigger className="w-[180px]  md:border-none outline-none w-full  shadow-none text-lg" >
    <SelectValue placeholder="Price" />
  </SelectTrigger>
  <SelectContent>
    {
        Data.Pricing.map((price,index)=>(
            <SelectItem key={index} value={price.amount}>{price.amount}</SelectItem>

        ))
    }
  </SelectContent>
</Select>

{/* we had used react icon for search icon npm install react-icons --save
q */}

{/* also we need to move and render to the page called search when we select the search by category option we added link to it  */}

<Link to={'/search?cars='+cars+'&make='+make+'&price='+price}>
<IoIosSearch className='text-[50px] bg-primary rounded-full p-3 text-white hover:scale-105 transition-all cursor-pointer ' />
</Link>



      </div>
  )
}

export default Search