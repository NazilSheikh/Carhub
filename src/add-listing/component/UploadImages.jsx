import { storage } from './../../../configs/firebaseConfig';
import { getDownloadURL, ref, uploadBytes } from 'firebase/storage';
import { useEffect, useState } from 'react';
import React from 'react'
import { IoMdCloseCircle } from "react-icons/io";
import { CarImages } from './../../../configs/schema';
import { db } from './../../../configs';
import { eq } from 'drizzle-orm';
import { toast } from 'sonner';

// car info is accepted by from indexx.js as we want that if we want to edit existing image we can do sooo
function UploadImages({triggerUploadImages , setLoader , carInfo  ,mode}) {
  // function UploadImages({triggerUploadImages }) {

const [selectedFileList , setSelectedFileList] = useState([]);

const[EditCarImageList ,setEditCarImageList ] = useState([]);

useEffect(()=>{
  if(mode=='edit')
    {
    setEditCarImageList([]);
     carInfo?.images.forEach((image)=>{
      setEditCarImageList(prev=>[...prev,image?.imageUrl])
       console.log(image)
    })
  } 
},[carInfo])   // when mode is change it will edit 

// we are accepting triggerUploadImages method froom index.jsx
useEffect(()=>{
  if(triggerUploadImages)
  {
    UploadImageToServer();
  }
},[triggerUploadImages])

const OnfileSelected=(event)=>{
    const files = event.target.files ;
    console.log(files) ;
    for(let i =0 ; i<files?.length ;i++)
    {

        const file = files[i];
        // it means ke previous image upload hoe fir agr multiple new images upload karni hai tho vo file mai tho vo upload kari .
        setSelectedFileList((prev)=>[...prev , file]) ;

    }
}

const omImageRemove=(image ,index)=>{
 const result =  selectedFileList.filter((item)=>item!=image);
 setSelectedFileList(result);
}

                {/* we want if some need to delete the uploaded images :  */}
                  {/* we want that we edit or delete the image it should be removed from database as well index will help us to get id and whether it is 1st 2nd or any image */}
   

// now we are uploading aur images to fire base : 

// when we have to upload the image we will enable loader button :   // now we want that when we click on submit button it will provide some kind of loading and button get disable therefore we will use react icon 
//  setLoader(true);
const onImageRemoveFromDB=async(image , index)=>{
  // const result = selectedFileList.filter((item)=>item!=image);
  // setSelectedFileList(result);
  console.log(carInfo?.images[index])

    if (window.confirm('Are you sure you want to delete this image?')) {
        try {
            // Delete associated car images first
          const result =   await db.delete(CarImages).where(eq(CarImages.id,carInfo?.images[index]?.id)).returning({id:CarImages.id});
            toast.success("images deleted successfully!");
            // Update UI after successful deletion
           const imageList=EditCarImageList.filter(item=>item!=image);
           setEditCarImageList(imageList);
            console.log("deleted the image ");
        } catch (error) {
            toast.error("Failed to delete listing. Please try again.");
            console.log("Error deleting listing:", error);
        }
    }
}
const UploadImageToServer=async()=>{
 await selectedFileList.forEach(async(file)=>{   // to select multiple files : 
    const fileName=Date.now()+'.jpeg' ;   // now this will create a new unique file name which we will store in ref
    // this carhubimags is the name of folder that we had created in firebase storage section
    // we need to create new bucket in firebase see in video : 2:48:00 ;
    const storageRef = ref(storage ,'carhubimages/'+fileName );
    const metaData={
      contentType:'image/jpeg'
    }
    // when you click on upload image the image is uploaded in fire base and in console it will show uploaded file
   await uploadBytes(storageRef,file,metaData).then((snapShot)=>{
      console.log('Uploaded File');
      // now we have one method for downloading the url of any images
      // now come here at last this url we need to insert it to scehma where we had created a new table for images
    }).then(resp=>{
         getDownloadURL(storageRef).then(async(downloadUrl)=>{
           await db.insert(CarImages).values({
             imageUrl:downloadUrl,
             CarListingId:triggerUploadImages
            })
            console.log(downloadUrl)
         })
    })

    // once image uploaded we made loader false 
    setLoader(false);

  })

}
     

  return (
    <div>
            <h2 className='my-3 text-xl font-medium'>Upload Car Images</h2>
          <div className='grid grid-cols-2 md:grid-cols-4 lg:grid-cols-4 gap-5 rounded-xl'>

            {mode=='edit'&&
                EditCarImageList.map((image , index)=>(
                <div key={index}>
                  {/* we want if some need to delete the uploaded images :  */}
                  {/* we want that we edit or delete the image it should be removed from database as well index will help us to get id and whether it is 1st 2nd or any image */}
                    <IoMdCloseCircle className='absolute mt-1 text-lg text-white cursor-pointer' 
                   onClick={()=>onImageRemoveFromDB(image , index )}
                  //  
                    />
                  <img src={image} className="w-full h-full object-cover "/>
                  </div>
              ))
              
            }
                { selectedFileList.map((image , index)=>(
                  <div key={index}>
                    {/* we want if some need to delete the uploaded images :  */}
                      <IoMdCloseCircle className='absolute mt-1 text-lg text-white cursor-pointer' 
                     onClick={()=> omImageRemove(image , index )}
                      />
                    <img src={URL.createObjectURL(image)} className="w-full h-full object-cover "/>
                    </div>
                ))}
                <label htmlFor="upload-images" >
                  <div className='p-10 hover:shadow-md border-primary bg-blue-100 text-primary rounded-lg border border-dotted cursor-pointer '> 
                <h2 className='text-primary text-center text-lg'>+</h2>

                  </div>

                </label>
        
        <input type="file" multiple={true} id='upload-images' className='opacity-0' 

// when you click on submit button all the files must be submitted in firebase we have done index,jsx ; 
onChange={OnfileSelected}

/>
    </div>
    {/* we had created it for testing purpose main calling of this is from index.jsx  */}
    {/* <Button onClick={uploadimages}>
      Upload Images
    </Button> */}
</div>
  )
}

export default UploadImages 
