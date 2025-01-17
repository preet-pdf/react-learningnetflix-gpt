import React from 'react'
import {useCurrentUserState} from '../hooks/useCurrentUserState'
import { removeUser } from "../utils/userSlice";
import { useDispatch, useSelector } from "react-redux";
import { signOut } from "firebase/auth";
import {auth} from '../utils/firebase';
function Header() {
  const dispatch = useDispatch();
  const user = useSelector((store) => store.user);
  const handleSignOut = () => {
    signOut(auth)
            .then(() => {
                dispatch(removeUser);
            })
            .catch((error) => {
                navigate("/error");
            });

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
          <div> 
            <img
                className="hidden md:block w-8 h-8 m-2"
                src={user?.photoURL}
                alt="profile-img"
            /><button
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