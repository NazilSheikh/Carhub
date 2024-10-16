import { Button } from '@/components/ui/button'
import { useUser } from '@clerk/clerk-react'
import React from 'react'
import Service from '@/Shared/Service'
import { useNavigate } from 'react-router-dom'

function OwnersDetail({carDetail}) {

  const {user}=useUser();
  const navigation=useNavigate();
const OnMessageOwnerButtonClick=async()=>{

// create current user id 
// 1)const createsendbirduser we have used the aXios which is http service provider npm intall axios
// 1 )GENERALLY HERE WE RE CREATE CAR OWNER USER ID (SENDBIRD)
/// TO VIST THE INFO OF CAR OWNER AND ITS DETAIL PLEASE IN INSPECT GO TO NETWORK SECTION AND CLICK ON USER 
const userId = user.primaryEmailAddress.emailAddress.split('@')[0];
try{
  await Service.CreateSendBirdUser(userId, user?.fullName,user?.imageUrl)
  .then(resp=>{
    console.log(resp);
  })
}catch(e){}


// Owner User Id :
const ownerUserId = carDetail?.createdBy.split('@')[0];
try{
console.log(ownerUserId); //  nazilsheikh likha aayega
await Service.CreateSendBirdUser(ownerUserId, carDetail?.userName,carDetail?.userImageUrl)
.then(resp=>{
  console.log(resp);
})
}catch(e){}

// 3) we are creating a  CHANNEL GROUP 
try{
  await Service.CreateSendBirdChannel([userId, ownerUserId],carDetail?.listingTitle)
  .then(resp=>{
    console.log(resp);
    console.log("channel created") ; 
    navigation('/profile')
  })
}catch(e){}


}
  return (
    <div className='p-10 border rounded-xl shadow-md mt-5'>
        <h2 className='font-medium text-2xl mb-3 '>Owner/Deals</h2>
       <img src={carDetail?.userImageUrl} className='w-[70px] h-[70px] rounded-full' />
       <h2 className='mt-2 font-bold text-xl'>{carDetail?.userName}</h2>

       <h2 className='mt-2 font-bold text-xl'>{carDetail?.createdBy}</h2>
{/* now we want that we click on meessage owner we would redirect to inbox chat  */}

       <Button className='w-full mt-6'
       onClick={OnMessageOwnerButtonClick}
       >
        Message Owner
       </Button>
   
    </div>
  )
}

export default OwnersDetail
