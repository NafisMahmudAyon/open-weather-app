'use client'
import { Block, Text, Icon, Input } from 'landing-page-ui';
import React, { useEffect, useState } from 'react';
import { Line } from 'react-chartjs-2';
import 'chart.js/auto';
import CurrentDate from './CurrentDate';
import Location from './Location';
import SunRiseSunSet from './SunRiseSunSet';

interface CityData {
  name: string;
  local_names?: Record<string, string>;
  lat: number;
  lon: number;
  country: string;
  state?: string;
}

interface WeatherData {
  coord: {
    lon: number;
    lat: number;
  };
  weather: {
    id: number;
    main: string;
    description: string;
    icon: string;
  }[];
  base: string;
  main: {
    temp: number;
    feels_like: number;
    temp_min: number;
    temp_max: number;
    pressure: number;
    humidity: number;
  };
  visibility: number;
  wind: {
    speed: number;
    deg: number;
  };
  clouds: {
    all: number;
  };
  dt: number;
  sys: {
    type: number;
    id: number;
    country: string;
    sunrise: number;
    sunset: number;
  };
  timezone: number;
  id: number;
  name: string;
  cod: number;
  rain?: {
    '1h': number;
    '3h'?: number;
  };
}

const Weather = () => {
  const [city, setCity] = useState('');
  const [cityData, setCityData] = useState<CityData[]>([]);
  const [open, setOpen] = useState(false);
  const [weatherData, setWeatherData] = useState<WeatherData | null>(null);
  const [selectedCity, setSelectedCity] = useState<CityData | null>(null);

  const apiKey = process.env.WEATHER_API_KEY;
  console.log(apiKey);
  // const apiKey = 'fc3a7ec419e13cbd0d81899ef1e0e72c';

  useEffect(() => {
    if (selectedCity !== null) {
      setOpen(false);
    }
  }, [selectedCity]);

  const handleCityChange = (e: React.ChangeEvent<HTMLInputElement>) => {
    setCity(e.target.value);
  };

  const fetchCityData = async () => {
    const response = await fetch(`http://api.openweathermap.org/geo/1.0/direct?q=${city}&limit=5&appid=${apiKey}`);
    const data: CityData[] = await response.json();
    setCityData(data);
    if (data.length > 0) {
      setOpen(true);
    }
  };

  const fetchWeatherData = async (lat: number, lon: number) => {
    const response = await fetch(`https://api.openweathermap.org/data/2.5/weather?lat=${lat}&lon=${lon}&units=Metric&appid=${apiKey}`);
    const data: WeatherData = await response.json();
    setWeatherData(data);
  };

  const handleCitySelect = (city: CityData) => {
    setSelectedCity(city);
    fetchWeatherData(city.lat, city.lon);
  };

  return (
    <Block tagName="div" styles="p-4 flex flex-col gap-6">
      <Block tagName='div' styles='relative pb-2'>
        <Input
          placeholder="Enter your City"
          value={city}
          onChange={handleCityChange}
          iconEnable={true}
          icon="fa-search"
          onKeyPress={(e) => e.key === 'Enter' && fetchCityData()}
        />
        {cityData.length > 0 && open && (
          <Block tagName='div' styles='absolute top-full w-full h-32 bg-slate-500 z-20 rounded-md shadow-lg drop-shadow-lg'>
            {cityData.map((city, index) => (
              <Text tagName='div' styles='' key={index} onClick={() => handleCitySelect(city)}>
                {city?.name}, {city?.country}
              </Text>
            ))}
          </Block>
        )}
      </Block>
      {weatherData ? (
        <Block tagName="div">
          <Block tagName="div" styles="flex items-center flex-col gap-3">
            <CurrentDate />
            <Location location={weatherData.name} />
            <SunRiseSunSet sunRise={new Date(weatherData.sys.sunrise * 1000).toLocaleTimeString()} sunSet={new Date(weatherData.sys.sunset * 1000).toLocaleTimeString()} />
            <Block tagName="div" styles="flex items-center justify-center gap-3">
              <Icon icon='fa-temperature-full' iconLibrary='font-awesome' styles='h-10 w-10 flex items-center justify-center border border-gray-500/40 rounded-full drop-shadow-lg shadow-xl hover:shadow-none hover:drop-shadow-none hover:border-gray-500/80 transition-all duration-300 ease-in-out text-xl' title="Temperature" />
              <Text tagName="p" styles="text-lg">{weatherData.main.temp}°C</Text>
            </Block>
            <Block tagName="div" styles="flex justify-center gap-3 mt-6 ">
              {/* Humidity */}
              <Block tagName="div" styles="flex flex-col items-center text-center gap-2">
                <Icon icon="fa-tint" iconLibrary="font-awesome" styles="h-10 w-10 flex items-center justify-center border border-gray-500/40 rounded-full drop-shadow-lg shadow-xl hover:shadow-none hover:drop-shadow-none hover:border-gray-500/80 transition-all duration-300 ease-in-out text-xl" />
                <Text tagName="p">{weatherData.main.humidity}%</Text>
              </Block>
              {/* Wind */}
              <Block tagName="div" styles="flex flex-col items-center text-center gap-2">
                <Icon icon="fa-wind" iconLibrary="font-awesome" styles="h-10 w-10 flex items-center justify-center border border-gray-500/40 rounded-full drop-shadow-lg shadow-xl hover:shadow-none hover:drop-shadow-none hover:border-gray-500/80 transition-all duration-300 ease-in-out text-xl" />
                <Text tagName="p" styles='flex flex-col items-center'><span>{weatherData.wind.speed} m/s</span> <span>at {weatherData.wind.deg}°</span></Text>
              </Block>
              {/* Pressure */}
              <Block tagName="div" styles="flex flex-col items-center text-center gap-2">
                <Icon icon="fa-eye" iconLibrary="font-awesome" styles="h-10 w-10 flex items-center justify-center border border-gray-500/40 rounded-full drop-shadow-lg shadow-xl hover:shadow-none hover:drop-shadow-none hover:border-gray-500/80 transition-all duration-300 ease-in-out text-xl" />
                <Text tagName="p">{weatherData.visibility} m</Text>
              </Block>
              {/* Rain */}
              {weatherData.rain && (
                <Block tagName="div" styles="flex flex-col items-center text-center gap-2">
                  <Icon icon="fa-cloud-rain" iconLibrary="font-awesome" styles="h-10 w-10 flex items-center justify-center border border-gray-500/40 rounded-full drop-shadow-lg shadow-xl hover:shadow-none hover:drop-shadow-none hover:border-gray-500/80 transition-all duration-300 ease-in-out text-xl" />
                  <Text tagName="p">{weatherData.rain['1h']} mm</Text>
                </Block>
              )}
            </Block>
          </Block>
          <Block tagName="div" styles="mx-auto py-[10px]">
            <Line
              data={{
                labels: ['Temp', 'Feels Like', 'Min Temp', 'Max Temp'],
                datasets: [
                  {
                    label: 'Temperature (°C)',
                    data: [weatherData.main.temp, weatherData.main.feels_like, weatherData.main.temp_min, weatherData.main.temp_max],
                    fill: true,
                    backgroundColor: 'rgba(75,192,192,0.2)',
                    borderColor: 'rgba(75,192,192,1)',
                  },
                ],
              }}
            />
          </Block>
        </Block>
      ) : (
        <Block tagName="div" styles="flex items-center justify-center">
          <Text tagName="p" styles="text-lg">No weather data found. Please enter a city.</Text>
        </Block>
      )}
    </Block>
  );
};

export default Weather;
