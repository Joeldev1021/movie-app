/* eslint-disable no-undef */
/* eslint-disable no-unused-vars */
import React, { createContext, useEffect, useState } from "react";
import { app, auth } from "../fireabaseConfig";
import { GoogleAuthProvider, signInWithPopup, signInWithEmailAndPassword, createUserWithEmailAndPassword, signOut } from "firebase/auth";
import { getInfoUser } from "../helper/getInfoUser";
export const Auth = createContext();

const AuthContext = ({ children }) => {
  const [user, setUser] = useState(null);
  const [showChild, setShowChild] = useState(false);

  const provider = new GoogleAuthProvider();

  const loginWithGoogle = async () => {
    try {
      const googleProvider = new GoogleAuthProvider();
      const result = await signInWithPopup(auth, googleProvider);
      const { displayName, photoURL, email, stsTokenManager } = result.user;
      const { refreshToken, accessToken } = stsTokenManager;
      const user = { displayName, photoURL, email, refreshToken, accessToken };
      setUser(user);
    } catch (error) {
      console.log(error);
    }
  };
  const loginWithEmailAndPassword = async (email, password) => {
    try {
      const result = await signInWithEmailAndPassword(auth, email, password);
      const resUser = getInfoUser(result.user);
      setUser(resUser);
    } catch (error) {
      console.log(error);
    }
  };
  const signUp = async (email, password) => {
    try {
      const result = await createUserWithEmailAndPassword(auth, email, password);
      console.log(result);
    } catch (error) {
      console.log(error);
    }
  };

  const logoutAuth = () => {
    signOut(auth);
    setUser(null);
  };
  return (
    <Auth.Provider value={{
      loginWithGoogle,
      loginWithEmailAndPassword,
      logoutAuth,
      signUp,
      user

    }}>
          {children}
      </Auth.Provider>
  );
};

export default AuthContext;
