"use client";
import React from "react";
import { MenuOutlined } from "@ant-design/icons";
import { sideToggle } from "@/store/GolbalStore";
import { useAtom } from "jotai";
import { ThemeSwitcher } from "../core/ThemeSwitcher";

const TopBar = () => {
  const [toggle, setToggle] = useAtom(sideToggle);

  const toggleHandler = () => {
    setToggle((previosState) => !previosState);
  };

  return (
    <>
      <div
        className={
          "w-0 md:w-[250px] h-full items-center justify-center border-gray-200 border-1 dark:border-0 " +
          (toggle ? "hidden" : "flex")
        }
      >
        <img
          src="https://dashui.codescandy.com/dashuipro/assets/images/brand/logo/logo-2.svg"
          alt="LOGO"
          className="inline-block px-[20px] py-[10px]"
        />
      </div>
      <div
        className={
          "h-full flex items-center justify-between " +
          (toggle ? "w-screen" : "w-screen  md:w-[calc(100vw-250px)]")
        }
      >
        <div
          className="h-[60px] w-[60px] flex items-center justify-center "
          onClick={toggleHandler}
        >
          <MenuOutlined style={{ fontSize: "18px", padding: "12px" }} />
        </div>
        <div className="flex w-[80%]  justify-end pr-8">
          <ThemeSwitcher />
        </div>
      </div>
    </>
  );
};

export default TopBar;
