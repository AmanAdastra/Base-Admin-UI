"use client";
import React from "react";
import { useSession } from "next-auth/react";
const AuthLayout = ({ children }) => {
  const { status } = useSession();
  return (
    <>
      {status == "loading" ? (
        <>{children}</>
      ) : (
        <div className="bg-gradient-to-r from-[#205e7f] to-[#76b4b9] h-[100vh] py-2 px-2 md:py-16 md:px-16">
          <main className="h-full flex  bg-white dark:bg-black rounded-[2.5rem] w-[100%] md:w-[80%] mx-auto">
            {children}
          </main>
        </div>
      )}
    </>
  );
};

export default AuthLayout;
