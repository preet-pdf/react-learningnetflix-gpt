import React from 'react'
import {useEffect, useState} from 'react'
import { useDispatch, useSelector } from "react-redux";
import { addUser, removeUser } from "../utils/userSlice";
import { useNavigate } from "react-router-dom";
import { onAuthStateChanged } from "firebase/auth";
import {auth} from '../utils/firebase';
export const useCurrentUserState = () => {
    const [userAvailable, setUserAvailable] = useState(false);

    const dispatch = useDispatch();
    const navigate = useNavigate();
    const user = useSelector((store) => store.user);


    useEffect(() => {
        const unsubscribe = onAuthStateChanged(auth, (user) => {
            if (user) {
                const { uid, email, displayName, photoURL } = user;
                dispatch(
                    addUser({
                        uid: uid,
                        email: email,
                        displayName: displayName,
                        photoURL: photoURL,
                    })
                );
                navigate("/browse");
                setUserAvailable(true);
            } else {
                dispatch(removeUser);
                navigate("/");
                setUserAvailable(false);
            }
        });

        // Unsubscribe when component unmounts--
        return () => unsubscribe();

    }, [setUserAvailable, navigate])

    return userAvailable;
}
