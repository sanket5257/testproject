"use client";
import Signin from "../components/Signin";
import React from "react";

const page = () => {
  const handleClose = () => {
    console.log("Signin closed"); 
  };

  return (
    <div>
      <Signin onClose={handleClose} />
    </div>
  );
};

export default page;
