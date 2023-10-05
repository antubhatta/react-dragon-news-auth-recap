import { createUserWithEmailAndPassword, onAuthStateChanged, signInWithEmailAndPassword, signOut } from "firebase/auth";
import { useState } from "react";
import { createContext } from "react";
import auth from "../firebase/firebase.config";
import { useEffect } from "react";

export const AuthContext=createContext(null)
const AuthProvider = ({children}) => {
    const [user,setUser]=useState(null)
    const createUser=((email,password)=>{
        return createUserWithEmailAndPassword(auth,email,password)
    })

    const signOutUser=()=>{
       return signOut(auth)
    }

    const logInUser=(email,password)=>{
        return signInWithEmailAndPassword(auth,email,password)
    }

    useEffect(()=>{
        const unSubscribe =onAuthStateChanged(auth,(currentUser)=>{
            console.log('observed the current user',currentUser)
            setUser(currentUser)
        })
        return ()=>{
            unSubscribe()
        }
    },[])



    const authInfo={user,createUser,signOutUser,logInUser}
    return (
       
        <AuthContext.Provider value={authInfo}>
            {children}
        </AuthContext.Provider>
    );
};

export default AuthProvider;