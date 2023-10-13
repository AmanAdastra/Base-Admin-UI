"use client";
import React from "react";
import { usePathname } from "next/navigation";
import NavigationLayout from "./NavigationLayout/NavigationLayout";
import { useSession } from "next-auth/react";
import LoadingComponent from "./core/LoadingComponent";
const Layout = ({ children }) => {
  const path = usePathname();
  const { status } = useSession();

  if(status == "loading") return <LoadingComponent/>

  if (["/login"].includes(path) || status!="authenticated") return <>{children}</>;
  return (
    <>
      <NavigationLayout>{children}</NavigationLayout>
    </>
  );
};

export default Layout;
