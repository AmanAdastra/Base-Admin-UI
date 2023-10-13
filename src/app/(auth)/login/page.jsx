"use client";
import React from "react";
import LoginComponent from "@/components/Auth/LoginComponent";
import AuthCaorusalComponent from "@/components/Auth/AuthCaorusalComponent";

const Page = () => {
  
  return (
    <>
      <div className="w-full h-full flex items-center justify-between p-4">
        <div className=" w-[100%]  md:w-[50%] h-full flex justify-center items-center ">
          <div className="w-[80%] md:w-[50%]  ">
            <LoginComponent/>
          </div>
        </div>
        <AuthCaorusalComponent/>
      </div>
    </>
  );
};

export default Page;
