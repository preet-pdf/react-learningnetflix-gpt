import React from 'react'
import Header from './Header'
import {useState, useRef} from 'react';
import {validateFormData} from '../utils/validateFormData.jsx'
import {
  createUserWithEmailAndPassword,
  signInWithEmailAndPassword,
  updateProfile,
} from "firebase/auth";
import { auth } from "../utils/firebase";


function SignIn() {
  const [signInToggle, setSignInToggle] = useState(true);
  const [errorMessage, setErrorMessage] = useState('');
  const changeRegistrationState = () => {
    setSignInToggle(!signInToggle);
  }
  const inputName = useRef(null);
  const inputEmail = useRef(null);
  const inputPassword = useRef(null);

  const validateData = () => {
    const validationResult = validateFormData(inputName.current? inputName.current.value : "", inputEmail.current.value, inputPassword.current.value);
    if (validationResult) {
      setErrorMessage(validationResult);
      return;
    }

    setErrorMessage('');

    //Signup
    if(!signInToggle) {

      createUserWithEmailAndPassword(
                auth,
                inputEmail.current.value,
                inputPassword.current.value
            ).then((userCredential) => {
              // Signed in
              console.log("Signed Up!!");
              const user = userCredential.user;
              console.log(user);
            }).catch((error) => {
              const errorCode = error.code;
              const errorMessage = error.message;
              setErrorMessage(errorCode + "-" + errorMessage);
          });

    } else {
      signInWithEmailAndPassword(
        auth,
        inputEmail.current.value,
        inputPassword.current.value
    )
        .then((userCredential) => {
            // Signed in
            console.log("Signed In!!");
            const user = userCredential.user;
            console.log(user);
        })
        .catch((error) => {
            const errorCode = error.code;
            const errorMessage = error.message;
            setErrorMessage(errorCode + "-" + errorMessage);
        });
    }


  }
  return (
    <div>
      <Header />
      <div className="absolute">
        <img src='src/assets/Netfilx_Body.jpg' alt='body netflix image' className=" w-fit h-screen object-cover md:h-full" ></img>
      </div>
      <div>
          <form onSubmit = {(e) => e.preventDefault()} className='absolute my-24 w-3/12 text-white p-12 bg-black rounded-xl mt-32 mx-auto right-0 left-0 bg-opacity-75'>
          <h1 className="text-3xl font-bold py-4">
            {signInToggle ? "Sign In": "Sign Up"}
          </h1>
          {!signInToggle &&
            <div>
              <input ref={inputName} type='text' placeholder='Your Name' className='p-3 my-4 w-full bg-gray-600 opacity-75 rounded-lg' />
              </div>
          }
            <input ref={inputEmail} type='email' placeholder='Your Email Address' className='p-3 my-4 w-full bg-gray-600 opacity-75 rounded-lg'>
            </input>
            <input ref={inputPassword} type='password' placeholder='Enter Password' className='p-3 my-4 w-full bg-gray-600 opacity-75 rounded-lg'>
            </input>
            <p className='text-red-500'> {errorMessage} </p>
            <button className='p-4 my-4 bg-red-700 rounded-2xl inset-x-full w-full' onClick={validateData}>
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