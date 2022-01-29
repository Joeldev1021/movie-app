import React, { useContext } from "react";
import { Auth } from "../context/AuthContext";

const Profile = () => {
  const { user } = useContext(Auth);
  console.log(user);
  return (
      <h1 className="pt-32">{user ? user.displayName : "is not Login"}</h1>
  );
};

export default Profile;
