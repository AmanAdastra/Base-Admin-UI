"use client";

import { useTheme } from "next-themes";
import { useState } from "react";
import React from "react";
import { MoonIcon } from "@/icons/MoonIcon";
import { SunIcon } from "@/icons/SunIcon";

export const ThemeSwitcher = () => {
  const { theme, setTheme } = useTheme();
  const [icon, setIcon] = useState(true);

  const currentTheme = theme == "dark" || theme == undefined ? "light" : "dark";
  const themeChangeHandler = () => {
    setTheme(currentTheme);
    setIcon((prevState) => !prevState);
  };

  return (
    <>
      <div
        className="bg-gray-100 hover:bg-gray-200 dark:bg-transparent h-10 w-10 flex items-center justify-center rounded-full"
        onClick={themeChangeHandler}
      >
        {icon ? <MoonIcon /> : <SunIcon />}
      </div>
    </>
  );
};
