'use client'
import { Block, Icon, Text } from 'landing-page-ui';
import React, { useState, useEffect } from 'react';

interface CurrentTimeProps {
  date: Date;
}

const CurrentTime: React.FC<CurrentTimeProps> = ({ date }) => {
  const [currentTime, setCurrentTime] = useState(date);
  const [isMounted, setIsMounted] = useState(false);

  useEffect(() => {
    setIsMounted(true);
    const intervalId = setInterval(() => {
      setCurrentTime(new Date());
    }, 1000);
    return () => clearInterval(intervalId);
  }, []);

  if (!isMounted) {
    return null;
  }

  const hours = currentTime.getHours() % 12 || 12;
  const minutes = String(currentTime.getMinutes()).padStart(2, '0');
  const seconds = String(currentTime.getSeconds()).padStart(2, '0');
  const amPm = currentTime.getHours() < 12 ? 'AM' : 'PM';

  return (
    <Block tagName='div' styles='flex gap-3 items-center'>
      <Icon
        icon='fa-clock'
        iconLibrary='font-awesome'
        styles='h-10 w-10 flex items-center justify-center border border-gray-500/40 rounded-full drop-shadow-lg shadow-xl hover:shadow-none hover:drop-shadow-none hover:border-gray-500/80 transition-all duration-300 ease-in-out'
        title="Time"
      />
      <Text tagName="p" styles='min-w-[95px]'>
        {hours}:{minutes}:{seconds} {amPm}
      </Text>
    </Block>
  );
};

export default CurrentTime;
