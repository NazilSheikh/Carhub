

// import Header from '@/components/Header'
// import React, { useState } from 'react'
// import carDetails from '../Shared/carDetails.json'
// import features from '../Shared/features.json'

// import InputField from './component/InputField'
// import DropDown from './component/DropDown'
// import TextArea from './component/TextArea'
// import { Button } from '@/components/ui/button'
// import { Separator } from '@/components/ui/separator'
// import { db } from './../../configs'
// import { CarListing } from './../../configs/schema'
// import { Checkbox } from '@/components/ui/checkbox'
// import UploadImages from './component/UploadImages'
//   // to upload images to firebase on clicking submit button wee need to call UploadImageToServer metthod from uploadimages as soon as form is getting submit  :

// import { LuLoader2 } from "react-icons/lu";
// import { toast } from 'sonner'
// import { useNavigate, useNavigation } from 'react-router-dom'
// import { useUser } from '@clerk/clerk-react'
// // import { toast } from './../components/ui/sonner'

// import moment from 'moments'



// function AddListing() {
//   {/* NOW IT IS IMPORTANT TO SAVE THE DATA INTO THE FORM THAT WE HAVE BEEN SELECTED */}
//   const [formData, setFormData] = useState({
//     type: '', // Add type as an initial empty field to avoid null issues
//     // other fields can be initialized if necessary
//   });
//   // used to save selected features data ::
//   const[featuresData , setFeaturesData] = useState([]);

//   // to upload images to firebase on clicking submit button wee need to call UploadImageToServer metthod from uploadimages as soon as form is getting submit  :
//   const [triggerUploadImages ,settriggerUploadImages]=useState();
  
   
//   // now we want that when we click on submit button it will provide some kind of loading and button get disable therefore we will use react icon 
//    const [loader , setLoader] = useState(true) ;
   
//   //  now we want ke on submit hmlog navigate profile per ho jaaye : 
//   const navigate = useNavigate;

//                 //  we are generally want to store the data that is being created by any user 
// const {user} = useUser();


//   // this prevdata even tho user update same field many times the updated data will showed in form 
//    const handleInputChange=(name, value)=>{
//             setFormData((prevData) => ({
//               ...prevData,
//               [name]: value
//             }));
//   }
//   const handleFeatureChange=(name,value)=>{
//     setFeaturesData((prevData)=>({
//       ...prevData ,
//       [name]:value
//     }))
//     console.log(featuresData);
//   }
//   // on submit we want that our form does not refresehed we added default 
//   const onSubmit = async (e) => {
//     // setting our loader as true when we submit 
//     setLoader(true);  
//     e.preventDefault();
//       console.log(formData); // Use formData instead of setdata to log and submit
//       // now user will submit and click on submit button to submit form this sooner component will show please wait 
//       toast("Please Wait...")  
      
//       // after backend setup then come to this code : we need to store form data on click of submit button 
//           // within 1 line of code we are recording our data
//           // jaise hi aap saara data FILL karenge THO CONSOLE MAI DATA SAVED LIKHA AYEGAA AND WHEN YOU WILL GO TO  https://local.drizzle.studio
//           // USING COMMANF NPM RUN DP:PUSH AND NPM RUN DP:STODIO
      
//           // here WE ARE ONLY STORING FORM DATA BUT WE NEED TO ALSO STORE SECTION DATA
//       //     try {
//       //   const result = await db.insert(CarListing).values(formData); // pass formData
//       //   if(result) {
//       //       console.log("Data Saved");
//       //   }
//       // } catch(e) {
//       //   console.log("Error", e);
//       // }

//     //  STORING WHILE SUBMIT BUTTON CLICK FEATURE DATA 
//     // IT WILL ADD ... AL THE DATA FROM FIELD AND FEATURE JSON AS WELL
//     try { 
//       const result = await db.insert(CarListing).values({  // pass formData
//           ...formData ,
//           features:featuresData,
//               //  we are generally want to store the data that is being created by any user 
            
//               createdBy:user?.primaryEmailAddress?.emailAddress,
//               // poston is for at which data and time user posted datawe are generally installing the npm i moments library which will us to format correct date and time  .
//               postedOn:moment().format('DD/MM/yyyy')

//             //   // to upload images to firebase on clicking submit button wee need to call UploadImageToServer metthod from uploadimages as soon as form is getting submit  :
//           // for this we want an id of images when our data is being saved ;
//       },
//     ).returning({id:CarListing.id});   
//       if(result) {
//           console.log("Data Saved");
//           //   // to upload images to firebase on clicking submit button wee need to call UploadImageToServer metthod from uploadimages as soon as form is getting submit  :
//           // for this we want an id of images when our data is being saved ;
//           settriggerUploadImages(result[0]?.id);
          
//           // once the data is saved we will disable or stop the loader 
//           setLoader(false);
//         }
//     } catch(e) {
//       console.log("Error", e);
//     }

//   }

//   return (
//     <div>
//       <Header />
//       <div className='px-10 md:px-20 my-10'>
//         <h2 className='font-bold text-4xl '> Add New Listing </h2>
        
//         {/* we need to submit form guys  */}
//         {/* in three sections  */}
//         <form action="" className='p-10 border rounded-xl mt-20'>

//              {/* car details */}
//              {/* // OBVIOUSLY WE ARE NOT MAKING A TOO BIG FORM SO WE CREATED 
//                 TWO JSON FILES CARDETAILS, FEATURES TO TAKE HELP 
//                 // ALSO WE TAKE HELP FROM SHADCN TO DISPLAY INPUT FIELD npx shadcn@latest add input

//                 // ALSO CREATED A FOLDER COMPONENTS IN ADDLISTING TO REUSE THEM
//              */}
//              <div>
//                 <h2 className='font-medium text-xl mb-6'>
//                   Car Details
//                 </h2>

//                 {/* in json file we generally have list of data so we will iterate on it and take the data */}
//                 <div className='grid grid-cols-1 md:grid-cols-2 gap-5'>

//                   {/* Also, we made the InputField component to fetch data from CarDetails.json */}
//                   {carDetails.carDetails.map((item, index) => (
//                     <div key={index}>
//                       {/* we had made textarea component to add text inside it npx shadcn@latest add textarea */}
//                       {/* // in cardetails we have typefield  upper ki label */}
//                       <label className='text-sm'>{item?.label}
//                         {item.required && 
//                         <span className='text-red-500'>
//                             *
//                         </span>}
//                       </label>
//                       {/* // we pass the handleinput function to save the data in the form */}
//                       {item.fieldType === 'text' || item.fieldType === 'number' ? 
//                         <InputField item={item} handleInputChange={handleInputChange} />
//                       : item.fieldType === 'dropdown' ? 
//                         <DropDown item={item} handleInputChange={handleInputChange} />  
//                       : item.fieldType === 'textarea' ? <TextArea item={item} handleInputChange={handleInputChange} />
//                       : null}
//                     </div>
//                   ))}
//                 </div>

//              </div>

//             <Separator className="my-6" />

//             {/* feature list */}
//             {/* just added checkbox component in input ui */}
//                 {/*  onCheckedChange it will generally gives true and false value we can save feature data easily */}
//             <div>
//               <h2 className='font-medium text-xl my-6'>Features</h2>
//               <div className='grid grid-cols-2 md:grid-cols-3 gap-2'>
//                   {features.features.map((item , index)=>(
//                     <div key={index} className='flex items-center gap-2 '>
//                       {/* <Checkbox onCheckedChange={(value)=>handleFeatureChange(item.name,value)}/>   */}
                        
//                         <Checkbox onCheckedChange={(value)=>handleFeatureChange(item.name,value)}/>

//                       <h2>{item.label}</h2>
//                     </div>
//                   ))}
//               </div>
//             </div>

//             <Separator className="my-6" />
           
//            {/* generally we are uploading images on firebase storage  */}
//            {/* now this method will send to uploadimges file and accepted it as props */}
//             <UploadImages triggerUploadImages={triggerUploadImages}
            
//             // this setLoader is used to load react icon on submiting 
//             // profile is used for navigate to profile when final data is being submittefd
//             setLoader={(e)=>{setLoader(e);navigate('/profile')}}
            
//             />   

//             {/* submit button */}
//             <div className="mt-10 justify-end flex">
//               <Button type="button" 
//                 disable={loader} 
//                onClick={(e) => onSubmit(e)} >
//                 {!loader?'Submit':<LuLoader2 className='animate-spin text-lg'/>}
//               </Button>
//             </div>
               


//         </form>
//       </div>
//     </div>
//   )
// }

// export default AddListing

// import Header from '@/components/Header';
// import React, { useEffect, useState } from 'react';
// import carDetails from '../Shared/carDetails.json';
// import features from '../Shared/features.json';

// import InputField from './component/InputField';
// import DropDown from './component/DropDown';
// import TextArea from './component/TextArea';
// import { Button } from '@/components/ui/button';
// import { Separator } from '@/components/ui/separator';
// import { db } from './../../configs';
// import { CarListing } from './../../configs/schema';
// import { Checkbox } from '@/components/ui/checkbox';
// import UploadImages from './component/UploadImages';
// import { LuLoader2 } from "react-icons/lu";
// import { toast } from 'sonner';
// import { useNavigate, useSearchParams } from 'react-router-dom';
// import { useUser } from '@clerk/clerk-react';
// import dayjs from 'dayjs';  // Replaced moment with dayjs for date formatting



// import { CarImages } from './../../configs/schema'
// import { eq } from 'drizzle-orm'

// function AddListing() {
//   const [formData, setFormData] = useState({
//     type: '', // Add type as an initial empty field to avoid null issues
//   });
//   const [featuresData, setFeaturesData] = useState([]);
//   const [triggerUploadImages, settriggerUploadImages] = useState();
//   const [loader, setLoader] = useState(false); // default loader to false
//   const navigate = useNavigate(); 
//   const { user } = useUser();

//   // we need parameter to accept the link which will redirect us to submit form to edit the given CARD 
//   const [searchParams]=useSearchParams();
//   const mode = searchParams.get('mode');
//   const recordId = searchParams.get('id');
  
//   useEffect(()=>{

//     // whenn mode is edit then only we will call this function 
//     if(mode='edit')
//     {
//       GetListingDetail
//     }
//   },[]);

//   // we will edit aur card detail 
//  // NOW WE HAVE CREATED OUR OWN ORIGINAL DAATA WE DO NOT NEED TO USE FAKEDATA
//   // we are genrally fetchiing our original data from BACKEND DRIZZLE ORM
//   const GetListingDetail=async()=>{
//     const result = await db.select().from(CarListing)

//     // we want all the carimages independent

//     .innerJoin(CarImages,eq(CarListing.id , CarImages.CarListingId))
     
//     // this is we are providing columns we added the references 
//     .where(eq(CarListing.id , recordId));
// console.log(result);


//   const handleInputChange = (name, value) => {
//     setFormData((prevData) => ({
//       ...prevData,
//       [name]: value,
//     }));
    
//   };


//   const handleFeatureChange = (name, value) => {
//     setFeaturesData((prevData) => ({
//       ...prevData,
//       [name]: value,
//     }));
//     console.log(featuresData);
//   };


//   const onSubmit = async (e) => {
//     setLoader(true);
//     e.preventDefault();
//     console.log(formData);
//     toast("Please Wait...");

//     try {
//       const result = await db.insert(CarListing).values({
//         ...formData,
//         features: featuresData,
//         createdBy: user?.primaryEmailAddress?.emailAddress,
//         postedOn: dayjs().format('DD/MM/YYYY'), // Using dayjs for date formatting
//       }).returning({ id: CarListing.id });

//       if (result) {
//         console.log("Data Saved");
//         settriggerUploadImages(result[0]?.id);
//         setLoader(false);
//       }
//     } catch (e) {
//       console.log("Error", e);
//       setLoader(false);
//     }
//   };

// }
//   return (
//     <div>
//       <Header />
//       <div className="px-10 md:px-20 my-10">
//         <h2 className="font-bold text-4xl">Add New Listing</h2>

//         <form className="p-10 border rounded-xl mt-20">
//           <div>
//             <h2 className="font-medium text-xl mb-6">Car Details</h2>
//             <div className="grid grid-cols-1 md:grid-cols-2 gap-5">
//               {carDetails.carDetails.map((item, index) => (
//                 <div key={index}>
//                   <label className="text-sm">{item?.label}
//                     {item.required && <span className="text-red-500">*</span>}
//                   </label>
//                   {item.fieldType === 'text' || item.fieldType === 'number' ? 
//                     <InputField item={item} handleInputChange={handleInputChange} />
//                   : item.fieldType === 'dropdown' ? 
//                     <DropDown item={item} handleInputChange={handleInputChange} />
//                   : item.fieldType === 'textarea' ? 
//                     <TextArea item={item} handleInputChange={handleInputChange} />
//                   : null}
//                 </div>
//               ))}
//             </div>
//           </div>

//           <Separator className="my-6" />

//           <div>
//             <h2 className="font-medium text-xl my-6">Features</h2>
//             <div className="grid grid-cols-2 md:grid-cols-3 gap-2">
//               {features.features.map((item, index) => (
//                 <div key={index} className="flex items-center gap-2">
//                   <Checkbox onCheckedChange={(value) => handleFeatureChange(item.name, value)} />
//                   <h2>{item.label}</h2>

//                 </div>
//               ))}
//             </div>
//           </div>

//           <Separator className="my-6" />

//           {/* navigate('/profile');  // Navigate to profile after successful submission */}
//           {/* <UploadImages triggerUploadImages={triggerUploadImages} />
//                setLoader={(v)=>setLoader(v)}/> */}
//                <UploadImages triggerUploadImages={triggerUploadImages} 
//                setLoader={(v)=>{setLoader(v) ; navigate('/profile')}}/>
//           <div className="mt-10 justify-end flex">
//             <Button type="button" disabled={loader} onClick={(e) => onSubmit(e)}>
//               {!loader ?'Submit': <LuLoader2 className="animate-spin text-lg" />}
//             </Button>
//              {/* <Button type="button"  onClick={(e) => onSubmit(e)}>
//               submit
//             </Button> */}
//           </div>
//         </form>
//       </div>
//     </div>
//   );
// }

// export default AddListing;

import Header from '@/components/Header';
import React, { useEffect, useState } from 'react';
import carDetails from '../Shared/carDetails.json';
import features from '../Shared/features.json';

import InputField from './component/InputField';
import DropDown from './component/DropDown';
import TextArea from './component/TextArea';
import { Button } from '@/components/ui/button';
import { Separator } from '@/components/ui/separator';
import { db } from './../../configs';
import { CarListing } from './../../configs/schema';
import { Checkbox } from '@/components/ui/checkbox';
import UploadImages from './component/UploadImages';
import { LuLoader2 } from "react-icons/lu";
import { toast } from 'sonner';
import { useNavigate, useSearchParams } from 'react-router-dom';
import { useUser } from '@clerk/clerk-react';
import dayjs from 'dayjs';  // Replaced moment with dayjs for date formatting
import { CarImages } from './../../configs/schema';
import { eq } from 'drizzle-orm';
import Service from '@/Shared/Service';

function AddListing() {
  const [formData, setFormData] = useState({
    type: '', // Add type as an initial empty field to avoid null issues
  });
  const [featuresData, setFeaturesData] = useState([]);
  const [triggerUploadImages, settriggerUploadImages] = useState();
  const [loader, setLoader] = useState(false); // default loader to false
  const navigate = useNavigate(); 
  const { user } = useUser();

  // we need parameter to accept the link which will redirect us to submit form to edit the given CARD 
  const [searchParams] = useSearchParams();
  const mode = searchParams.get('mode');
  const recordId = searchParams.get('id');
  // saving this resp into the state :
  const [carInfo , setCarInfo]=useState();
  

  useEffect(() => {
    // when mode is edit then only we will call this function 
    if (mode === 'edit') {
      GetListingDetail();
    }
  }, []);

  // we will edit aur card detail 
  // NOW WE HAVE CREATED OUR OWN ORIGINAL DATA WE DO NOT NEED TO USE FAKEDATA
  // we are generally fetching our original data from BACKEND DRIZZLE ORM
  const GetListingDetail = async () => {
    const result = await db.select().from(CarListing)
      .innerJoin(CarImages, eq(CarListing.id, CarImages.CarListingId))     
      .where(eq(CarListing.id, recordId));
      // we need to format the information 
      const resp = Service.FormatResult(result);
    console.log(resp);
    setCarInfo(resp[0]);
    // seting the default value of feature 
    setFeaturesData(resp[0].features)
    // we also need to update the form data 
    setFormData(resp[0]);

  };

  const handleInputChange = (name, value) => {
    setFormData((prevData) => ({
      ...prevData,
      [name]: value,
    }));
  };

  const handleFeatureChange = (name, value) => {
    setFeaturesData((prevData) => ({
      ...prevData,
      [name]: value,
    }));
    console.log(featuresData);
  };

  const onSubmit = async (e) => {
    setLoader(true);
    e.preventDefault();
    console.log(formData);
    toast("Please Wait...");

    // NOW WE THE EDIT CHANGES WE HAD MADE WE NEED TO APPLY ON EXISTING FORM AND DATA
        if(mode=='edit')
        {
          const result = await db.update(CarListing).set({
            ...formData,
            features: featuresData,
            createdBy: user?.primaryEmailAddress?.emailAddress,
            userName:user?.fullName,
            useImageUrl:user?.imageUrl,
            postedOn: dayjs().format('DD/MM/YYYY'), // Using dayjs for date formatting
          // where is used that which thing you want to update .
          }).where(eq(CarListing.id , recordId)).returning({id:CarListing.id});
          console.log(result);
          navigate('/profile');
          setLoader(false);
        }
        else
        {

          try {
            const result = await db.insert(CarListing).values({
        ...formData,
        features: featuresData,
        createdBy: user?.primaryEmailAddress?.emailAddress,
        userName:user?.fullName,
        useImageUrl:user?.imageUrl,
        // 
        postedOn: dayjs().format('DD/MM/YYYY'), // Using dayjs for date formatting
      }).returning({ id: CarListing.id });

      if (result) {
        console.log("Data Saved");
        settriggerUploadImages(result[0]?.id);
        setLoader(false);
      }
    } catch (e) {
      console.log("Error", e);
      setLoader(false);
    }
  };
}
 

  return (
    <div>
      <Header />
      <div className="px-10 md:px-20 my-10">
        <h2 className="font-bold text-4xl">Add New Listing</h2>

        <form className="p-10 border rounded-xl mt-20">
          <div>
            <h2 className="font-medium text-xl mb-6">Car Details</h2>
            <div className="grid grid-cols-1 md:grid-cols-2 gap-5">
              {carDetails.carDetails.map((item, index) => (
                <div key={index}>
                  <label className="text-sm">{item?.label}
                    {item.required && <span className="text-red-500">*</span>}
                  </label>
                  {item.fieldType === 'text' || item.fieldType === 'number' ? 
                  //  NOW WE WANT THAT WHEN WE ARE RETURNING FROM EDIT TO AGAIN SUBMIT LISTING 
// SOME DEFAULT DATA THAT IS SELECTED SHOULD ALREADY REMAIN THERE THERE WE ARE ACCEPTING DEFAULT DATA and carinfo 

                    <InputField item={item} handleInputChange={handleInputChange}  carInfo={carInfo} />
                  : item.fieldType === 'dropdown' ? 
                    <DropDown item={item} handleInputChange={handleInputChange} carInfo={carInfo} />
                  : item.fieldType === 'textarea' ? 
                    <TextArea item={item} handleInputChange={handleInputChange} carInfo={carInfo} />
                  : null}
                </div>
              ))}
            </div>
          </div>

          <Separator className="my-6" />

          <div>
            <h2 className="font-medium text-xl my-6">Features</h2>
            <div className="grid grid-cols-2 md:grid-cols-3 gap-2">
              {features.features.map((item, index) => (
                <div key={index} className="flex items-center gap-2">
                  <Checkbox onCheckedChange={(value) => handleFeatureChange(item.name, value)} 
                    
                    //  adding default value to feature L
                    checked = {featuresData?.[item.name]}
                    
                    />
                  <h2>{item.label}</h2>
                </div>
              ))}
            </div>
          </div>

          {/* //  adding default value to images L */}
          <Separator className="my-6" />
          <UploadImages 
            triggerUploadImages={triggerUploadImages} 
            // we need that if we want to edit the existing car image we can do the same
            carInfo={carInfo}
            mode={mode}
            setLoader={(v) => { 
              setLoader(v); 
              navigate('/profile');

            }} 
          />
          <div className="mt-10 justify-end flex">
            <Button type="button" disabled={loader} onClick={(e) => onSubmit(e)}>
              {!loader ? 'Submit' : <LuLoader2 className="animate-spin text-lg" />}
            </Button>
         
          </div>
        </form>
      </div>
    </div>
  );
}

export default AddListing;
