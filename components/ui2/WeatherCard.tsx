import { Block, Text, Icon } from 'landing-page-ui';
import React from 'react';

interface WeatherCardProps {
  icon: string;
  value: string;
  label: string;
}

const WeatherCard: React.FC<WeatherCardProps> = ({ icon, value, label }) => {
  return (
    <Block tagName="div" styles="flex flex-col items-center text-center gap-2 p-4 border border-gray-300 rounded-lg shadow-md">
      <Icon icon={icon} iconLibrary="font-awesome" styles="h-10 w-10" />
      <Text tagName="p" styles="text-xl">{value}</Text>
      <Text tagName="p" styles="text-sm text-gray-500">{label}</Text>
    </Block>
  );
};

export default WeatherCard;
