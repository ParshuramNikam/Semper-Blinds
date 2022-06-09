import { UserIcon } from "@heroicons/react/outline";
import React from "react";
import { useState } from "react";
import { Link, useHistory } from "react-router-dom";

export const Login = ({userName,setUserName}) => {
  const [loading, setLoading] = useState(false);

  const history = useHistory();

  const loginUser = (e) => {
    e.preventDefault();

    setLoading(true);

    if (!userName) {
      alert("username required!");
    } else {
        history.push("/QuotationTool")
    }

    setTimeout(() => {
      setLoading(false);
    }, 200);
  };

  return (
    <div className="h-screen flex">
      <div className="bg-image bg-black hidden md:flex w-1/2  justify-around items-center">
        <div>
          <div className="text-white flex flex-col items-center justify-start gap-3  lg:mb-5">
            <p className="text-4xl lg:text-5xl font-bold leading-4 text-lime-600 ">
              Semper Blinds
            </p>
          </div>
          {/* <h1 className="text-white font-bold text-4xl font-sans">Expense Tracker</h1> */}
          <p className="text-white text-base font-normal mt-5 lg:mt-2">
          Specialise in all blinds that are pleated or cellular
          </p>
        </div>
      </div>
      <div className="flex w-full md:w-1/2 justify-center items-center bg-gray-100 ">
        <form className="bg-gray-100">
          {/* <p className="text-center text-3xl  text-bold text-green-500 mb-2">
            Welcome back!
          </p> */}
          <div className="flex justify-center items-center mb-2">
              <img className="w-16 h-16" src="/images/logo.jpeg" alt="semper blinds"/>
          </div>
          <p className="text-center text-lg text-semibold text-gray-500 mb-4">
            Login Your Account
          </p>
          {/* <h1 className="text-indigo-800 font-bold text-2xl mb-5 text-center">Login</h1> */}
          <div className="flex items-center border-2 border-gray-400 py-2 px-3 rounded-2xl mb-4">
            <UserIcon className="w-4 h-4 text-gray-600 "/>
            <input
              className="pl-2 outline-none bg-gray-100"
              type="text"
              name=""
              id=""
              placeholder="username"
              value={userName}
              onChange={(e) => {
                sessionStorage.setItem('userName',e.target.value);  
                setUserName(e.target.value)}}
            />
          </div>
          
          <button
            type="submit"
            className="block w-full bg-lime-600 mt-4 py-2 rounded-2xl text-white font-semibold mb-2"
            onClick={loginUser}
          >
            <div className="flex justify-center items-center">
              {loading ? (
                <svg
                  className="animate-spin -ml-1 mr-3 h-5 w-5 text-white"
                  xmlns="http://www.w3.org/2000/svg"
                  fill="none"
                  viewBox="0 0 24 24"
                >
                  <circle
                    className="opacity-25"
                    cx="12"
                    cy="12"
                    r="10"
                    stroke="currentColor"
                    strokeWidth="4"
                  ></circle>
                  <path
                    className="opacity-75"
                    fill="currentColor"
                    d="M4 12a8 8 0 018-8V0C5.373 0 0 5.373 0 12h4zm2 5.291A7.962 7.962 0 014 12H0c0 3.042 1.135 5.824 3 7.938l3-2.647z"
                  ></path>
                </svg>
              ) : (
                ""
              )}
              <div>Login</div>
            </div>
          </button>
         
          
        </form>
      </div>
    </div>
  );
};
