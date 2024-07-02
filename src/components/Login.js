import { SignedIn, SignedOut, SignInButton, SignUpButton, UserButton } from '@clerk/clerk-react'
import React from 'react'

const Login = () => {
  return (
    
    <div className='flex items-center justify-between text-center w-10/12 my-10 mx-auto'>
    <div className='img-container w-1/2'>
            <img className='w-10/12 h-full rounded-md object-contain shadow-2xl shadow-slate-500 bg-slate-800' src='https://anglophone-direct.com/ap_img/Restaurant-new-delhi-food-1024x683.jpg' alt="loading img..."/>
       </div>
    <header>
    <div>
    <SignedOut>
      <SignInButton className="" />
      <SignUpButton/>
    </SignedOut>

    </div>
    <div>
    <SignedIn>
      <UserButton />
    </SignedIn>

    </div>
  </header>
  </div>
  )
}

export default Login






// import { SignedIn, SignedOut, SignInButton, SignUpButton, UserButton } from "@clerk/clerk-react";

// export default function App() {
//   return (
    
//   )
// }