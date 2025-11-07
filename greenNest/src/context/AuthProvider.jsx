import React, { createContext, useEffect, useState } from "react";
import {
    getAuth,
    onAuthStateChanged,
    signOut,
    signInWithEmailAndPassword,
    createUserWithEmailAndPassword,
    signInWithPopup,
    GoogleAuthProvider,
    updateProfile
} from "firebase/auth";
import app from "../firebase.config";
import Loading from "../pages/Loading";
export const AuthContext = createContext({
    
    logOut: () => {},
    user: null,
});

const auth = getAuth(app);
const googleProvider = new GoogleAuthProvider();

const AuthProvider = ({ children }) => {
  const [user, setUser] = useState(null);
  const [loading, setLoading] = useState(true);

  const signUp = (email, password) => createUserWithEmailAndPassword(auth, email, password);
  const logIn = (email, password) => signInWithEmailAndPassword(auth, email, password);
  const googleLogin = () => signInWithPopup(auth, googleProvider);
  const logOut = () => signOut(auth);

  const updateUserProfile = (Profile) =>{
    return updateProfile(auth.currentUser, Profile );
  }
   

  useEffect(() => {
    const unsubscribe = onAuthStateChanged(auth, currentUser => {
      setUser(currentUser);
      setLoading(false);
    });
    return () => unsubscribe();
  }, []);

  const value = { user, loading, signUp, logIn, googleLogin, logOut, updateUserProfile };
  return <AuthContext.Provider value={value}>{children}
  
  {loading && <Loading></Loading>}

  </AuthContext.Provider>;
};

export default AuthProvider;
