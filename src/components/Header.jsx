import { UserButton , useUser} from '@clerk/clerk-react'
import React from 'react'
import { Button } from './ui/button'
import { Link } from 'react-router-dom';
import { SignInButton } from '@clerk/clerk-react'


function Header() {
    // the clerk is providing use user hook that will return the user information .
        const {user , isSignedIn} = useUser();
  return (
    <>
    
    <div className='flex  justify-between item-center shadow-sm p-5 '>
      
    <div className='flex items-center space-x-0 -ml-2'>

    <Link to={'/'}>
    <img src="/logo.svg" width={150} height={100} alt="image" /> 
  </Link>

  <Link to={'/'}>
    <h1 className='hidden lg:block text-[30px] font-poppins font-bold tracking-wider text-gray-800 drop-shadow-lg cursor-pointer'>
  CarHub
</h1>
      </Link>

    

  </div>

       

    {/* // we would hidd it when screen size is smaller bu for medium size it is ok */}
      <ul className=' hidden md:flex gap-16  '>

      <Link to={'/'}>
       <li  className='font-medium hover:scale-105 transition-all'>Home</li>
      </Link>
        
      <Link to={'/search'}>
       <li className='font-medium hover:scale-105 transition-all'>Search</li>
      </Link>

      <Link to={'/'}>
       <li className='font-medium hover:scale-105 transition-all'>New</li>
       </Link>

       <Link to={'/profile'}>
       <li className='font-medium hover:scale-105 transition-all'>Preowned</li>  
    </Link>
         
         


         
          
        </ul> 
      
      { isSignedIn ?
        <div className='flex item-center gap-5'>
           <UserButton />

                          {/* it is like anchor tag in jsx when you click it will redirect to profile page */}
          <Link to={'/profile'}>
         <Button>Submit Listing</Button>
            </Link>
               
            
        
          </div>
         :
         <SignInButton mode='modal' forceRedirectUrl='/'>
         <Button>Submit Listing</Button>
         {/* <Button>Sign In</Button> */}
     </SignInButton>
         
         
         
        }

      
  
    </div>

        </>
  )
}

export default Header