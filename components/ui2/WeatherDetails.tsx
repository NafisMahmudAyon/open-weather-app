import { Block } from 'landing-page-ui';
import React from 'react';
import WeatherCard from './WeatherCard';

interface WeatherDetailsProps {
  humidity: number;
  windSpeed: number;
  windDeg: number;
  visibility: number;
  rain?: number;
}

const WeatherDetails: React.FC<WeatherDetailsProps> = ({ humidity, windSpeed, windDeg, visibility, rain }) => {
  return (
    <Block tagName="div" styles="flex flex-wrap gap-4 justify-center mt-6">
      <WeatherCard icon="fa-tint" value={`${humidity}%`} label="Humidity" />
      <WeatherCard icon="fa-wind" value={`${windSpeed} m/s`} label="Wind Speed" />
      <WeatherCard icon="fa-compass" value={`${windDeg}°`} label="Wind Direction" />
      <WeatherCard icon="fa-eye" value={`${visibility} m`} label="Visibility" />
      {rain !== undefined && <WeatherCard icon="fa-cloud-rain" value={`${rain} mm`} label="Rainfall" />}
    </Block>
  );
};

export default WeatherDetails;
