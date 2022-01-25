/* eslint-disable no-unused-vars */
import React, { useContext } from "react";
import { useNavigate } from "react-router-dom";
import BarnerLogin from "../components/BarnerLogin";
import FormLogin from "../components/FormLogin";
import { Auth } from "../context/AuthContext";

const Login = function () {
  const { loginAuth, user } = useContext(Auth);
  const navigation = useNavigate();

  if (user) {
    navigation("/");
  }

  return (
    <section className="min-h-screen flex items-stretch text-white ">
      <BarnerLogin/>
      <div className="lg:w-1/2 w-full flex items-center justify-center text-center md:px-16 px-0 z-0" style={{ backgroundColor: "#161616" }}>
        <div
          className="absolute lg:hidden z-10 inset-0 bg-gray-500 bg-no-repeat bg-cover items-center"
          style={{ backgroundImage: "url(https://images.unsplash.com/photo-1577495508048-b635879837f1?ixid=MXwxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHw%3D&ixlib=rb-1.2.1&auto=format&fit=crop&w=675&q=80)" }}
        >
          <div className="absolute bg-black opacity-60 inset-0 z-0" />
        </div>
        <div className="w-full py-6 z-20">
          <h1>Tools-Movie-App</h1>
          <div className="py-6 space-x-2">
            <span className="w-10 h-10 items-center justify-center inline-flex rounded-full font-bold text-lg border-2 border-white">G+</span>
          </div>
          <button onClick={() => loginAuth()}>authenticacion google</button>
          <FormLogin />
        </div>
      </div>
    </section>
  );
};

export default Login;
