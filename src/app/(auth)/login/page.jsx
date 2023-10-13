"use client";
import React from "react";
import LoginComponent from "@/components/Auth/LoginComponent";
import AuthCaorusalComponent from "@/components/Auth/AuthCaorusalComponent";
import { useSession } from "next-auth/react";
import { useEffect } from "react";
import { useRouter } from "next/navigation";
import LoadingComponent from "@/components/core/LoadingComponent";

const Page = () => {
  const {status} = useSession()
  const router = useRouter()

  useEffect(()=>{
    console.log("Inside Use Effect")
    if(status=="authenticated") router.push("/dashboard")
  },[status])

  if(status=="loading")return <LoadingComponent/>
  console.log("Inside login components")
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
