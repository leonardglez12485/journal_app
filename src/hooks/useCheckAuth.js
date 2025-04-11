import { useEffect } from "react";
import { useDispatch, useSelector } from "react-redux";
import { firebaseAuth } from "../firebase";
import { login, logout } from "../store/auth";
import { onAuthStateChanged } from "firebase/auth";
import { startLoadingNotes } from "../store/journal/thunks";

export const useCheckAuth = () => {

    const {status} = useSelector(state => state.auth);
    const dispatch = useDispatch();
  
    useEffect(() => {
  
     onAuthStateChanged(firebaseAuth, async( user )=>{
        if(!user) return dispatch(logout());
  
        dispatch(login({
          uid: user.uid,
          email: user.email,
          displayName: user.displayName,
          photoURL: user.photoURL
        }))
        dispatch(startLoadingNotes());
     })
  
    })

    return {
        status
    }
}
