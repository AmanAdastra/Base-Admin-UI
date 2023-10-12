"use client";
import React from "react";
import { Input } from "@nextui-org/react";
import { EyeFilledIcon } from "@/icons/EyeFilledIcon ";
import { EyeSlashFilledIcon } from "@/icons/EyeFilledIcon";
import { signIn } from "next-auth/react";
import { useState } from "react";
import { useRouter } from "next/navigation";
import { useAtom } from "jotai";
import { isAuthenticated } from "@/store/GolbalStore";

const Page = () => {
  const variant = "underlined";
  const router = useRouter();
  const [isVisible, setIsVisible] = useState(false);
  const [credentials, setCredentials] = useState({ email: "", password: "" });
  const [isAuthorized, setIsAuthorized] = useAtom(isAuthenticated);
  const credentialsHandler = (event) => {
    setCredentials((previosState) => {
      const stateDict = {
        ...previosState,
        [event.target.type]: event.target.value,
      };
      return stateDict;
    });
  };

  const submitHandler = (e) => {
    e.preventDefault();
    console.log(credentials);
    signIn("credentials", {
      email: credentials.email,
      password: credentials.password,
      redirect: false,
      callbackUrl: "/",
    }).then((res) => {
      if (res?.error) {
        console.log(res.error);
      } else {
        setIsAuthorized(true);
        router.push("/dashboard");
      }
    });
  };

  const toggleVisibility = () => setIsVisible(!isVisible);
  return (
    <>
      <div className="w-full h-full flex items-center justify-between p-4">
        <div className=" w-[50%] h-full flex justify-center items-center ">
          <div className="w-[50%]  ">
            <h1 className="text-[40px] font-bold pb-[50px] text-center">
              Welcome Back
            </h1>
            <form onSubmit={submitHandler}>
              <div key={variant} className="flex w-full pb-[23px]">
                <Input
                  type="email"
                  variant={variant}
                  label="Email"
                  color="default"
                  isClearable={true}
                  isRequired={true}
                  onChange={credentialsHandler}
                />
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
                  onChange={credentialsHandler}
                />
              </div>
              <div className="text-end pt-[8px] pb-[32px] text-sm text-white ">
                Forgot Password?
              </div>
              <button
                type="submit"
                className="w-full bg-indigo-500 opacity-100 text-white rounded-full py-[10px] "
              >
                Login
              </button>
            </form>
            <div className="flex w-full h-[20%] md:h-[50%] mt-2 justify-end items-end">
              <div className="w-full text-center  text-gray-300 rounded-full py-[10px] ">
                Dont have an Account?
                <span className=" cursor-pointer mx-2">Signup</span>
              </div>
            </div>
          </div>
        </div>
        <div className="bg-auth-bg-image bg-cover w-[45%] h-full rounded-[2.5rem] mx-2"></div>
      </div>
    </>
  );
};

export default Page;
