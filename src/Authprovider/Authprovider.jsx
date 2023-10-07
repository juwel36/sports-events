import { createUserWithEmailAndPassword, signInWithEmailAndPassword, signOut } from "firebase/auth";
import { createContext } from "react";
import auth from "../firebase/Firebase";

export const AuthContext = createContext(null)

const Authprovider = ({ children }) => {

  const createuser=(email,password)=>{
    // setloading(true)
  return createUserWithEmailAndPassword(auth,email,password)
  }
  
  const Loggeduser = (email,password)=>{
    // setloading(true)
    return signInWithEmailAndPassword(auth,email,password)
  }
  
  const logOut =()=>{
    // setloading(true)
  return signOut(auth)
  
  }


  const authInfo = {
    createuser,
    Loggeduser,
    logOut,
    // user ,
    // googleAuth,
    // loading,
    // FacebookAuth 
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