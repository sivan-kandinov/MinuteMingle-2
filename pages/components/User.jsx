"use client";

import React from "react";
import Image from "next/image";
import { useUser } from "@auth0/nextjs-auth0/client";
import CircularProgress from "@mui/material/CircularProgress";
import Popover from "@mui/material/Popover";
import Typography from "@mui/material/Typography";
import Button from "@mui/material/Button";
import { styled } from "@mui/material/styles";

function userItem({ user, error, isLoading }) {
  if (error) {
    console.error(error);
  }
  if (user) {
    return (
      <Image
        src={user.picture}
        alt="user"
        width={45}
        height={45}
        className="object-contain rounded-full"
      />
    );
  } else if (isLoading) {
    return <CircularProgress />;
  } else {
    return (
      <Image
        src={"/images/blank_profile.png"}
        alt="blank profile picture"
        width={45}
        height={45}
        className="object-contain rounded-full"
      />
    );
  }
}

export default function User() {
  const { user, error, isLoading } = useUser();
  const [anchorEl, setAnchorEl] = React.useState(null);

  const handleClick = (event) => {
    setAnchorEl(event.currentTarget);
  };

  const handleClose = () => {
    setAnchorEl(null);
  };

  const open = Boolean(anchorEl);
  const id = open ? "simple-popover" : undefined;
  return (
    <>
      <div
        className="flex items-center justify-self-end pr-4"
        id="authentication-item"
      >
        <Button aria-describedby={id} variant="contained" onClick={handleClick}>
          {userItem({ user, error, isLoading })}
        </Button>
        <Popover
          id={id}
          open={open}
          anchorEl={anchorEl}
          onClose={handleClose}
          anchorOrigin={{
            vertical: "bottom",
            horizontal: "left",
          }}
          sx={{ p: 2 }}
        >
          {user ? (
            <Typography sx={{ p: 2 }}>
              <a href="/profile">Profile</a>
            </Typography>
          ) : null}
          <Typography sx={{ p: 2 }}>
            <span className="transition-all duration-500 bg-gradient-to-t to-white via-black from-red-500 bg-size-200 bg-pos-0 hover:bg-pos-100">
              {user ? (
                <a href="/api/auth/logout">Logout</a>
              ) : (
                <a href="/api/auth/login">Login</a>
              )}
            </span>
          </Typography>
        </Popover>
      </div>
    </>
  );
}
