import { Block, Icon, Text } from 'landing-page-ui';
import React from 'react';

interface SunTimeProps {
  sunRise: string;
  sunSet: string;
}

const SunRiseSunSet: React.FC<SunTimeProps> = ({ sunRise, sunSet }) => {
  return (
    <Block tagName="div" styles="w-full flex gap-8 justify-center items-center">
      <Block tagName="div" styles="flex items-center gap-3">
        <Icon icon="fa-sun" iconLibrary="font-awesome" styles="h-10 w-10 flex items-center justify-center border border-gray-500/40 rounded-full drop-shadow-lg shadow-xl hover:shadow-none hover:drop-shadow-none hover:border-gray-500/80 transition-all duration-300 ease-in-out text-xl " title='Sun Rise' />
        <Text tagName="span" styles="" title="SunRise">{sunRise}</Text>
      </Block>
      <Block tagName="div" styles="flex items-center gap-3">
        <Icon icon="fa-moon" iconLibrary="font-awesome" styles="h-10 w-10 flex items-center justify-center border border-gray-500/40 rounded-full drop-shadow-lg shadow-xl hover:shadow-none hover:drop-shadow-none hover:border-gray-500/80 transition-all duration-300 ease-in-out text-xl " title='Sun Set' />
        <Text tagName="span" styles="" title="Sun Set">{sunSet}</Text>
      </Block>
    </Block>
  );
};

export default SunRiseSunSet;
