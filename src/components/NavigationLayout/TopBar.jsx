"use client";
import React from "react";
import { MenuOutlined } from "@ant-design/icons";
import { sideToggle } from "@/store/GolbalStore";
import { useAtom } from "jotai";
import { ThemeSwitcher } from "../core/ThemeSwitcher";
import { Avatar } from "@nextui-org/react";
import { signOut } from "next-auth/react";

const TopBar = () => {
  const [toggle, setToggle] = useAtom(sideToggle);

  const signOutHandler = () => {
    signOut({ callbackUrl: "/login" });
  };

  const toggleHandler = () => {
    setToggle((previosState) => !previosState);
  };

  return (
    <>
      <div
        className={
          "w-0 md:w-[250px] h-full items-center  border-gray-200 border-1 dark:border-0 " +
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
        <div className="flex w-[80%]  justify-end items-center pr-8">
          <ThemeSwitcher />
          <Avatar
            src="https://i.pravatar.cc/150?u=a042581f4e29026024d"
            className="mx-2 cursor-pointer"
            size="md"
            onClick={signOutHandler}
          />
        </div>
      </div>
    </>
  );
};

export default TopBar;
