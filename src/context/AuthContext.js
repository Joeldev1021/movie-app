/* eslint-disable no-undef */
/* eslint-disable no-unused-vars */
import React, { createContext, useEffect, useState } from "react";
import { GoogleAuthProvider, app, signInWithPopup, getAuth } from "../fireabaseConfig";

export const Auth = createContext();

const AuthContext = ({ children }) => {
  const [user, setUser] = useState(null);
  const [showChild, setShowChild] = useState(false);

  const auth = getAuth();
  const provider = new GoogleAuthProvider();

  const loginAuth = () => {
    signInWithPopup(auth, provider)
      .then((result) => {
        const credential = GoogleAuthProvider.credential(result);
        const token = credential.accessToken;
        const { displayName, photoURL, email, stsTokenManager } = result.user;
        const { refreshToken, accessToken } = stsTokenManager;
        const user = { displayName, photoURL, email, refreshToken, accessToken };
        setUser(user);
      }).catch((error) => {
        const errorCode = error.code;
        const errorMessage = error.message;
        const email = error.email;
        const credential = GoogleAuthProvider.credentialFromError(error);
      });
  };

  return (
      <Auth.Provider value={{
        loginAuth,
        user
      }}>
          {children}
      </Auth.Provider>
  );
};

export default AuthContext;
