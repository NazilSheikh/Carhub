import { SignInButton } from '@clerk/clerk-react'
import React from 'react'
// import { Button } from './components/ui/button'
import Header from './components/Header'
import Herosection from './components/Herosection'
import Category from './components/Category'
import MostSearchedCar from './components/MostSearchedCar'
import InfoSection from './components/InfoSection'
import Footer from './components/Footer'
import { Button } from './components/ui/button'
// function Home() {
//   return (
//     //  28:38
//     // clerk is providing his own signin button which will generally create a sign in sign out page BOOM you only need to wrap up  >> 
//     // on when click on sign up we are generally moving to different url to avoid it we use mode here 
//     // also clerk wiill take you to its online readymate profile page  AFTER LOGIN BOOM . 
//     <div>
//     <SignInButton mode='modal' forceRedirectUrl='/'>
//         <Button>Sign In</Button>
//     </SignInButton>
//     </div>
//   )
// }


// // Building our header component : 


function Home() {
    return (
      
      <div>
        
       <div>
    {/* <SignInButton mode='modal' forceRedirectUrl='/'>
        <Button>Sign In</Button>
    </SignInButton> */}
    </div>
       {/* header */}
              
              <Header/>
              {/* hero section  */}
              <Herosection/>
              {/* search section */}
              {/* <Search/> */}
              {/* catogory section in components   */}
               <Category/>
               {/* Most search car section  */}

               <MostSearchedCar/>

               {/*// infosection is  BEING COPIED FROM HYPER UI https://www.hyperui.dev/components/marketing/sections
  */}
         <InfoSection/>

                     {/*// FOOTERsection is  BEING COPIED FROM HYPER UI https://www.hyperui.dev/components/marketing/sections
  */}
    <Footer/>
      </div>
    )
  }




export default Home