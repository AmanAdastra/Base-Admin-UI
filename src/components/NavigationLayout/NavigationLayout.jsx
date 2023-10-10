"use client";
import React from "react";
import TopBar from "./TopBar";
import { useAtom } from "jotai";
import { sideToggle } from "@/store/GolbalStore";
import SideBar from "./SideBar";

const NavigationLayout = ({ children }) => {
  const [toggle, setToggle] = useAtom(sideToggle);

  return (
    <div className="h-[100vh] bg-[#f7f7fb] dark:bg-[#1a1c32]">
      <div className="h-[60px] bg-white flex dark:bg-[#272d48] ">
        <TopBar />
      </div>
      <div className="flex ">
        <div
          className={
            "h-[calc(100vh-60px)] bg-white dark:bg-[#272d48] " +
            (toggle ? "hidden" : "hidden md:block md:w-[250px]")
          }
        >
          {/* Sidbar */}
          <SideBar />
        </div>
        <div
          className={
            "h-[calc(100vh-60px)] p-4 overflow-y-auto  " +
            (toggle ? "w-[100vw]" : "w-[100vw] md:w-[calc(100vw-250px)]")
          }
        >
          {children}
        </div>
      </div>
    </div>
  );
};

export default NavigationLayout;
