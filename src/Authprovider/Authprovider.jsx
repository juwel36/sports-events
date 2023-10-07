import { GoogleAuthProvider, createUserWithEmailAndPassword, onAuthStateChanged, signInWithEmailAndPassword, signInWithPopup, signOut } from "firebase/auth";
import { createContext, useEffect, useState } from "react";
import auth from "../firebase/Firebase";

export const AuthContext = createContext(null)

const Authprovider = ({ children }) => {
  const [user,setuser]=useState(null)
  const provider = new GoogleAuthProvider();
  const [loading,setloading]=useState(true)


  const createuser=(email,password)=>{
    setloading(true)
  return createUserWithEmailAndPassword(auth,email,password)
  }
  
  const Loggeduser = (email,password)=>{
    setloading(true)
    return signInWithEmailAndPassword(auth,email,password)
  }
  
  const logOut =()=>{
    setloading(true)
  return signOut(auth)
  
  }
  
  const googleAuth = ()=>{
    setloading(true)
  return signInWithPopup(auth,provider)
  
  }

  useEffect(()=>{
    const unSubscribe = onAuthStateChanged(auth,currentuser=>{
    
      console.log("hiiiiiiiiiiii",currentuser);
    setuser(currentuser)
    setloading(false)
    
    })
    return()=>{
      unSubscribe();
    }
    
    },[])



  const authInfo = {
    createuser,
    Loggeduser,
    logOut,
    user ,
    googleAuth,
    loading,
  }

  return (
    <div>
      <AuthContext.Provider value={authInfo} >
        {children}
      </AuthContext.Provider>

    </div>
  );
};

export default Authprovider;