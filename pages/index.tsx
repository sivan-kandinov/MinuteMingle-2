import React from "react";

export default function landing() {
    return (
      
      <div style={{fontSize:'100px', textAlign:'center'}}>
        <h1>Welcome!</h1>
        <a href="/api/auth/login" type="onClick">
          Login
        </a>
      </div>
    );
}

// 