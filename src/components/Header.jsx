import React from 'react'
import {useCurrentUserState} from '../hooks/useCurrentUserState'
import { removeUser } from "../utils/userSlice";
import { useDispatch, useSelector } from "react-redux";
import { signOut } from "firebase/auth";
import {auth} from '../utils/firebase';
import {toggleGPTView} from '../utils/gptSlice'
import {changeLanguage} from '../utils/configSlice'
import { SUPPORTED_LANGUAGES } from '../utils/constants'

function Header() {
  const dispatch = useDispatch();
  const user = useSelector((store) => store.user);
  const gptScreen = useSelector((store) => store.gpt.showGPTScreen);
  const config = useSelector((store) => store.config.changeLanguage);


  const handleSignOut = () => {
    signOut(auth)
            .then(() => {
                dispatch(removeUser);
            })
            .catch((error) => {
                navigate("/error");
            });

  }

  const changeScreen = () => {
    dispatch(toggleGPTView());
  }

  const handleLanguageChange = (e) => {
    dispatch(changeLanguage(e.target.value));
  }

  const userStatus = useCurrentUserState();
  return (
    <div className='absolute w-screen px-8 py-2 bg-gradient-to-b from-black z-10 flex flex-col md:flex-row justify-between'>
        <img 
        src={'src/assets/Netflix_Header_Icon.png'} 
        alt='header netflix image' 
        className="w-44">

        </img>

        {
          user && (
            
            <div className='flex justify-center m-4'> 
            {
              gptScreen && (
                <div> 

                  <select
                            className="bg-gray-900 text-white py-2 px-4 m-2 rounded-md"
                            onChange={handleLanguageChange}
                        >
                            {SUPPORTED_LANGUAGES.map((lang) => (
                                <option
                                    key={lang.identifier}
                                    value={lang.identifier}
                                >
                                    {lang.name}
                                </option>
                            ))}
                        </select>
                </div>
              )
            }
              <button 
                className='text-white rounded-lg py-2 px-2 m-2 bg-pink-400 hover:bg-pink-700 '
                onClick={changeScreen}>
                  {gptScreen ? "HomePage" : "Netflix AI"}
              </button>
              <img
                  className="hidden md:block w-8 h-8 m-2"
                  src={user?.photoURL}
                  alt="profile-img"
              />
              <button
                    onClick={handleSignOut}
                    className="font-bold text-white"
              >
                    Sign Out
              </button>
            </div>
      
      )
      
        }

    </div>
  )
}

export default Header