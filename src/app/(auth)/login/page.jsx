"use client";
import React from "react";
import { Input } from "@nextui-org/react";
import { EyeFilledIcon } from "@/icons/EyeFilledIcon ";
import { EyeSlashFilledIcon } from "@/icons/EyeFilledIcon";


const page = () => {
  const variant = "underlined";
  const [isVisible, setIsVisible] = React.useState(false);

  const toggleVisibility = () => setIsVisible(!isVisible);
  return (
    <>
      <h1 className="text-[40px] font-bold pb-[50px] text-center text-white">
        {" "}
        Login
      </h1>
      <div key={variant} className="flex w-full pb-[23px]">
        <Input type="email" variant={variant} label="Email" color="default" isClearable={true} isRequired={true} />
      </div>
      <div className="flex w-full ">
        <Input
          label="Password"
          variant={variant}
          isRequired={true}
          endContent={
            <button
              className="focus:outline-none"
              type="button"
              onClick={toggleVisibility}
            >
              {isVisible ? (
                <EyeSlashFilledIcon className="text-2xl text-default-400 pointer-events-none" />
              ) : (
                <EyeFilledIcon className="text-2xl text-default-400 pointer-events-none" />
              )}
            </button>
          }
          type={isVisible ? "text" : "password"}
        />
      </div>
      <div className="text-end pt-[8px] pb-[32px] text-sm text-white ">
        Forgot Password?
      </div>
      <button className="w-full bg-indigo-500 opacity-100 text-white rounded-full py-[10px] ">
        Login
      </button>
      <div className="flex w-full h-[20%] md:h-[50%] mt-2 justify-end items-end">
        <div className="w-full text-center  text-gray-300 rounded-full py-[10px] ">
          Don't have an Account?{" "}
          <span className=" cursor-pointer text-white">
            Signup
          </span>
        </div>
      </div>
    </>
  );
};

export default page;
