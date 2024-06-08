import CurrentDate from "@/components/CurrentDate";
import Navbar from "@/components/Navbar";
import SunRiseSunSet from "@/components/SunRiseSunSet";
import Weather from "@/components/Weather";
import { Block, Input } from "landing-page-ui";
import { Poppins } from "next/font/google";
const poppinsT = Poppins({ weight: "100", style: "normal", subsets: ["latin"] });

export default function Home() {
  const data = {
    "coord": {
      "lon": 90.4074,
      "lat": 23.7104
    },
    "weather": [
      {
        "id": 721,
        "main": "Haze",
        "description": "haze",
        "icon": "50n"
      },
      {
        "id": 502,
        "main": "Rain",
        "description": "heavy intensity rain",
        "icon": "10n"
      }
    ],
    "base": "stations",
    "main": {
      "temp": 26.99,
      "feels_like": 30.6,
      "temp_min": 26.99,
      "temp_max": 26.99,
      "pressure": 1002,
      "humidity": 89
    },
    "visibility": 3500,
    "wind": {
      "speed": 2.06,
      "deg": 160
    },
    "rain": {
      "1h": 5.62
    },
    "clouds": {
      "all": 75
    },
    "dt": 1717769735,
    "sys": {
      "type": 1,
      "id": 9145,
      "country": "BD",
      "sunrise": 1717715453,
      "sunset": 1717764233
    },
    "timezone": 21600,
    "id": 1185241,
    "name": "Dhaka",
    "cod": 200
  }
  return (
    <Block tagName="main" styles=" h-screen pb-4  items-center md:w-[500px] md:mx-auto md:mt-[2.5vh] md:h-[95vh] md:border md:rounded-lg md:overflow-hidden ">
      <Navbar />
      <div className="flex items-center justify-center h-[calc(100%-5vh)]">
        <Block tagName="div" styles="mx-auto flex items-center justify-center w-[95vw] md:w-[calc(100%-5vw)] rounded-lg shadow-lg drop-shadow-lg border " >
          <Weather />
        </Block>
      </div>
    </Block>
  );
}
