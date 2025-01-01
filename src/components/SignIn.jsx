import React from 'react'
import Header from './Header'
import {useState} from 'react';

function SignIn() {
  const [signInToggle, setSignInToggle] = useState(true)
  const changeRegistrationState = () => {
    setSignInToggle(!signInToggle);
  }
  return (
    <div>
      <Header />
      <div className="absolute">
        <img src='src/assets/Netfilx_Body.jpg' alt='body netflix image' className=" w-fit h-screen object-cover md:h-full" ></img>
      </div>
      <div>
          <form className='absolute my-24 w-3/12 text-white p-12 bg-black rounded-xl mt-32 mx-auto right-0 left-0 bg-opacity-75'>
          <h1 className="text-3xl font-bold py-4">
            {signInToggle ? "Sign In": "Sign Up"}
          </h1>
          {signInToggle &&
            <div>
              <input type='text' placeholder='Your Name' className='p-3 my-4 w-full bg-gray-600 opacity-75 rounded-lg' />
              </div>
          }
            <input type='email' placeholder='Your Email Address' className='p-3 my-4 w-full bg-gray-600 opacity-75 rounded-lg'>
            </input>
            <input type='password' placeholder='Enter Password' className='p-3 my-4 w-full bg-gray-600 opacity-75 rounded-lg'>
            </input>
            <button className='p-4 my-4 bg-red-700 rounded-2xl inset-x-full w-full'>
              {signInToggle ? "Sign In": "Sign Up"}
            </button>

            <p className="py-4 text-white">
            {!signInToggle ?"Already a member" :"New to Netflix?"}{" "}
              <span className="font-bold cursor-pointer" onClick={changeRegistrationState}>
                 {!signInToggle ? "Sign In now.": "Sign Up Now" }
              </span>
            </p>
          </form>
      </div>
    </div>
  )
}

export default SignIn