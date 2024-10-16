// // ON WE WILL DO THIS CHAT PART AT LAST 5:48:34   
// // WHEN WE CLICK ON INBOX TAB WWILL BE RENDERING TO CHAT 
// // HERE WE ARE USING SENDBIRD AS A THIRD PART TO CREATE A CHATAPPLICATION ;
// import React from 'react'
// import { App as SendbirdApp } from '@sendbird/uikit-react';
// import '@sendbird/uikit-react/dist/index.css';

// // COPY PASTED FROM SENDBIRD DOCS 
// // WE HAD ALSO COPY Pasted application id to env file 

// function Inbox() {
//   return (
//     <div>
//     <div style={{ width:'100vw', height:'100vh' }}>
//     <SendbirdApp
//       // You can find your Sendbird application ID on the Sendbird dashboard. 
//       appId={import.meta.env.VITE_SENDBIRD_APP_ID}
//       // Specify the user ID you've created on the dashboard.
//       // Or you can create a user by specifying a unique userId.  
//     //   now at top of user section click on create use we had created our own userid and image url 
//     userId={'Nazilsheikh'}
//     />
//       </div>
//     </div>
//   )
// }

// export default Inbox

import React, { useEffect, useState } from 'react';

import { App as SendbirdApp, SendBirdProvider } from '@sendbird/uikit-react';
import '@sendbird/uikit-react/dist/index.css';
import { useUser } from '@clerk/clerk-react';
// these are the things we are taking from documnet of sendbird 
// this imports provide us the component to build ui and we can customise are own channel list ;
// on left we have channels list and on right we have chats btwn channels 
import { GroupChannelList } from '@sendbird/uikit-react/GroupChannelList';
import { GroupChannel } from '@sendbird/uikit-react/GroupChannel';
const Inbox = () => {
  const { user } = useUser();
  const [userId, setUserId] = useState('');
  const [channelUrl , setChannelUrl] = useState();
  useEffect(() => {
    // for userid we are not taking the whole email; we are only taking the username
    if (user) {
      const id = (user.primaryEmailAddress?.emailAddress).split('@')[0];
      setUserId(id); // Update the userId state with the correct value
    }
  }, [user]);

  return (
    user && (
      // The chat interface can expand up to the dimensions of your parent component.
      // To achieve a full-screen mode, apply the following CSS rules to the parent element.
      <div>
        <div style={{ width: '100%', height: '500px' }}>
          {/* generally sendbird is providing a component by which we can customize our UI in CHAT APPLICATION */}
          {/* for userid we are not taking the whole email; we are only taking the username */}
          {/* 1)const createsendbirduser we have used axios, which is an HTTP service provider */}
          {/* 1)GENERALLY HERE WE RE-CREATE CAR OWNER USER ID (SENDBIRD) */}
          {/* To view the info of the car owner and its detail, inspect and go to the Network section and click on the user */}
          <SendBirdProvider
            appId={import.meta.env.VITE_SENDBIRD_APP_ID}
            userId={userId}
            nickname={user?.fullName}
            profileUrl={user?.imageUrl}
            allowProfileEdit={true}
          >
            {/* creating a channel list on the right side of the chat app */}
            <div className="grid gap-5 grid-cols-1 md:grid-cols-3 h-full">
              <div className='p-5 border shadow -lg'>
                <GroupChannelList 
                onChannelSelect={(channel)=>{
                   setChannelUrl(channel?.url)
                }}
                // now by default sendbird will not provide the channel name which have zero message conversation to solve this we channelListQueryParams
                channelListQueryParams={
                  {
                    includeEmpty:true
                  }
                }
                />
              </div>
              {/* channel message area on the left side of the chat app */}
              <div className="md:col-span-2 shadow-lg ">
              <GroupChannel channelUrl={channelUrl} />
              </div>
            </div>
          </SendBirdProvider>

          {/* // <SendbirdApp: You can find your Sendbird application ID on the Sendbird dashboard */}
          {/* // appId={import.meta.env.VITE_SENDBIRD_APP_ID} */}
          {/* // Specify the user ID you've created on the dashboard */}
          {/* // Or you can create a user by specifying a unique userId. */}
          {/* // userId={'nazilsheikh'} */}
        </div>
      </div>
    )
  );
};

export default Inbox;
