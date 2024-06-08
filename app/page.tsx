import CurrentDate from "@/components/CurrentDate";
import Navbar from "@/components/Navbar";
import SunRiseSunSet from "@/components/SunRiseSunSet";
// import Weather from "@/components/ui2/Weather2";
import Weather from "@/components/Weather";
import { Block, Input } from "landing-page-ui";
import { Poppins } from "next/font/google";
const poppinsT = Poppins({ weight: "100", style: "normal", subsets: ["latin"] });

export default function Home() {
  
  return (
    <Block tagName="main" styles=" h-screen pb-4  items-center md:w-[500px] md:mx-auto md:mt-[2.5vh] md:h-[95vh] md:border md:border-gray-500 dark:md:border-gray-200 md:rounded-lg md:overflow-hidden ">
      <Navbar />
      <div className="flex items-center justify-center h-[calc(100%-5vh)]">
        <Block tagName="div" styles="mx-auto flex items-center justify-center w-[95vw] md:w-[calc(100%-5vw)] rounded-lg shadow-lg drop-shadow-lg border border-gray-500 dark:border-gray-200 " >
          <Weather />
          {/* <Weather /> */}
        </Block>
      </div>
    </Block>
  );
}
