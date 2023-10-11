"use client";
import { useSession } from "next-auth/react";

import React from "react";
import NavigationLayout from "./NavigationLayout/NavigationLayout";
import { usePathname,useRouter } from "next/navigation";
import { useEffect } from "react";
const Layout = ({ children }) => {
  const path = usePathname();
  const router = useRouter()
  const { data: session, status } = useSession();


  useEffect(() => {
    console.log("Use Effect ran")
    if (status != "authenticated") return router.push("/login");
  },[]);

  console.log(status, session);

  if (["/login"].includes(path)) return <>{children}</>
  return (
    <>
      <NavigationLayout>{children}</NavigationLayout>;
    </>
  );
};

export default Layout;
