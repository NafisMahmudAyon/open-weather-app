'use client';

import { Block, Text, Input } from 'landing-page-ui';
import React, { useEffect, useState } from 'react';
import CurrentDate from '../CurrentDate';
import Location from '../Location';
import SunRiseSunSet from '../SunRiseSunSet';
import WeatherCard from './WeatherCard';
import TemperatureChart from './TemperatureChart';
import WeatherDetails from './WeatherDetails';

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
  const [focusedIndex, setFocusedIndex] = useState(0);

  const apiKey = process.env.NEXT_PUBLIC_WEATHER_API_KEY;

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
      setFocusedIndex(0);
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
    setOpen(false);
  };

  const handleKeyDown = (e: React.KeyboardEvent) => {
    if (!open) return;

    if (e.key === 'ArrowDown') {
      setFocusedIndex((prevIndex) => (prevIndex + 1) % cityData.length);
    } else if (e.key === 'ArrowUp') {
      setFocusedIndex((prevIndex) => (prevIndex - 1 + cityData.length) % cityData.length);
    } else if (e.key === 'Enter') {
      handleCitySelect(cityData[focusedIndex]);
      setOpen(false);
    }
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
          onKeyDown={handleKeyDown}
        />
        {weatherData == null && open && (
          <Block tagName='div' styles='absolute top-full w-full bg-slate-500 z-20 rounded-md shadow-lg drop-shadow-lg'>
            {cityData.map((city, index) => (
              <Text
                tagName='div'
                styles={`px-3 py-2 ${focusedIndex === index ? 'bg-blue-500 text-white' : ''}`}
                key={index}
                onClick={() => handleCitySelect(city)}
              >
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
            <WeatherCard icon='fa-temperature-full' value={`${weatherData.main.temp}°C`} label="Temperature" />
            {/* <TemperatureChart data={{ temp: weatherData.main.temp, feelsLike: weatherData.main.feels_like, tempMin: weatherData.main.temp_min, tempMax: weatherData.main.temp_max }} /> */}
            <WeatherDetails humidity={weatherData.main.humidity} windSpeed={weatherData.wind.speed} windDeg={weatherData.wind.deg} visibility={weatherData.visibility} rain={weatherData.rain?.['1h']} />
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
