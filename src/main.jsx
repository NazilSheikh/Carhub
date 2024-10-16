import { StrictMode } from 'react'
import { createRoot } from 'react-dom/client'

import './index.css'
import { createBrowserRouter, RouterProvider } from 'react-router-dom'
import Home from './home'
import Contact from './contact'
import {ClerkProvider} from '@clerk/clerk-react'
import Profile from './Profile'
import AddListing from './add-listing'
import { Toaster } from './components/ui/sonner'
import SearchByCategory from './search/[category]'
import SearchByOptions from './search'
import ListingDetail from './listing-details/[id]'





// making router element to route from oone page to another 
// http://localhost:5174/contact    // ye jo hai error dega  
const router = createBrowserRouter([
  {
    
    path:'/',
    element:<Home/>
  },
  // http://localhost:5174/contact
  {
    path:'/contact' ,
    element:<Contact/>
  },
  {
    path:'/profile',
    element:<Profile/>
  }
  ,
  {
    path:'/add-listing' ,
    element:<AddListing/>
  },
  // we are searching the components by category type 
  {
    path:'/search/:category',
    element:<SearchByCategory/>
  },
  // we are searching the caritems by using options  http://localhost:5173/search?make=car
  {
    path:'/search' ,
    element:<SearchByOptions/>
  },
  {
    path:'/listing-details/:id',
    element:<ListingDetail/>
  }
  
])


// this is copy pasted from clerk service provider  // WRAPP UP REACTPROVIDER WITH THIS 
// Import your publishable key 
const PUBLISHABLE_KEY = import.meta.env.VITE_CLERK_PUBLISHABLE_KEY

if (!PUBLISHABLE_KEY) {
  throw new Error("Missing Publishable Key")
} 

createRoot(document.getElementById('root')).render(
  <StrictMode>

    {/* <RouterProvider router={router}>   </RouterProvider> */}
    <ClerkProvider publishableKey={PUBLISHABLE_KEY} afterSignOutUrl="/">

    <RouterProvider router={router} />
    {/* just adding the toster shadcn component which will pop up alter message when submited */}
   <Toaster/>

    </ClerkProvider>
    
      
       


  
  </StrictMode>,
)
