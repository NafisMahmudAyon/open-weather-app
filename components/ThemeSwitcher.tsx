'use client'
import { UseThemeSwitcher } from 'landing-page-ui';
import React from 'react'
import { MoonIcon, SunIcon } from './Icons';

const ThemeSwitcher = () => {
  const [mode, setMode] = UseThemeSwitcher();
  return (
    <button
          onClick={() => setMode(mode === "light" ? "dark" : "light")}
          className={`ml-3 flex items-center justify-center rounded-full p-1 ${mode === "light"
            ? "bg-darkBgColor text-darkTextColor"
            : "bg-bgColor text-textColor"
            }`}>
          {mode === "dark" ? (
            <SunIcon className={"fill-darkBgColor"} />
          ) : (
            <MoonIcon className={"fill-darkBgColor"} />
          )}
        </button>
  )
}

export default ThemeSwitcher