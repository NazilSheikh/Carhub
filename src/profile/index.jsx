import Header from '@/components/Header'
import React from 'react'


import MyListing from './components/MyListing'
import { Tabs, TabsContent, TabsList, TabsTrigger } from "@/components/ui/tabs"
import Inbox from './components/Inbox'


function Profile() {
  return (
    <div>
        {/* the MOST BEAUTIFUL THING OF REACT IS THAT THE COMPONENT ARE REUSABLE :  */}
        <Header/>
        <div className='px-10 md:px-20 my-10'>

{/* adding tab component from shadcn ui npx shadcn@latest add tabs */}
<Tabs defaultValue="my-listing" className="w-full">
  <TabsList className='w-full flex justify-start'>
    <TabsTrigger value="my-listing">My Listing</TabsTrigger>
    {/* // WHEN WE CLICK ON INBOX TAB WWILL BE RENDERING TO CHAT  */}
    <TabsTrigger value="inbox">
       Inbox
      </TabsTrigger>
    <TabsTrigger value="profile">Profile</TabsTrigger>
  </TabsList>
  <TabsContent value="my-listing">
  {/* we had make the mylisting component and we will render it there :   */}
    <MyListing/>
  </TabsContent>

  <TabsContent value="inbox">
     <Inbox/>
  </TabsContent>
  
  <TabsContent value="profile" className=''>
   Profile
  </TabsContent>
</Tabs>



   
          
            
        </div>
    </div>
  )
}

export default Profile