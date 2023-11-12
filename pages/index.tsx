import React, { useEffect } from "react";
import { useUser } from "@auth0/nextjs-auth0/client";

export default function landing() {
  const { user, error, isLoading } = useUser();
  useEffect(()=> {
    //redirect func
    console.log(user)
    if (user!==undefined) {
      window.location.href = "http://localhost:3000/profileForm";
    }
  }, [user])
  return (
      <div style={{fontSize:'100px', textAlign:'center'}}>
        <h1>Welcome!</h1>
        <a href="/api/auth/login" type="onClick">
          Login
        </a>
      </div>
    );
}
