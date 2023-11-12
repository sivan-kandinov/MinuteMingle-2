import React, { useEffect } from "react";
import { useUser } from "@auth0/nextjs-auth0/client";

export default function landing() {
  const { user, error, isLoading } = useUser();
  console.log("hello")
  console.log(user)
  useEffect(()=> {
    //redirect func
    console.log(user)
    if (user!==undefined) {
      window.location.href = "http://localhost:3000/profileForm";
    }
  }, [user])
  return (

    <main className="h-screen bg-gray-200 flex-col">
        <div className="h-5/6 flex justify-center items-center">
          <div className="inline-block max-w-md p-8 bg-white border border-gray-200 rounded-lg shadow dark:bg-gray-800 dark:border-gray-700 dark:hover:bg-gray-700">
            <h5 className="flex justify-center mb-2 text-2xl font-bold tracking-tight text-gray-900 dark:text-white">Welcome to MinuteMingle!</h5>
            <div className="bg-[#881c1d] w-[80%] translate-x-[12.5%] flex justify-center rounded-md p-1">
              <a href="/api/auth/login" className="font-normal justify-center text-white dark:text-gray-400">Login</a>
            </div>
          </div>
        </div>
      </main>
      /*
      <div style={{fontSize:'100px', textAlign:'center'}}>
        <h1>Welcome!</h1>
        <a href="/api/auth/login" type="onClick">
          Login
        </a>
      </div>*/
    );
}