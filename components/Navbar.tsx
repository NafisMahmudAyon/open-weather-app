import { Block, Text } from 'landing-page-ui'
import React from 'react'
import { Poppins } from "next/font/google";
import ThemeSwitcher from './ThemeSwitcher';

const poppinsS = Poppins({ weight: "600", style: "normal", subsets: ["latin"] });

const Navbar = () => {
  return (
    <Block tagName='nav' styles={`flex justify-between items-center h-[6vh] px-6 border-b border-gray-500 dark:border-gray-200 w-full text-xl ${poppinsS.className}`}>
      <Text>OpenWeather</Text>
      <ThemeSwitcher />
    </Block>
  )
}

export default Navbar