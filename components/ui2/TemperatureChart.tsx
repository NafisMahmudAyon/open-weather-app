import { Block, Text } from 'landing-page-ui';
import { Line } from 'react-chartjs-2';
import React from 'react';

interface TemperatureChartProps {
  data: {
    temp: number;
    feelsLike: number;
    tempMin: number;
    tempMax: number;
  };
}

const TemperatureChart: React.FC<TemperatureChartProps> = ({ data }) => {
  return (
    <Block tagName="div" styles="p-4">
      <Text tagName="p" styles="text-center text-lg mb-4">Temperature Chart</Text>
      <Line
        data={{
          labels: ['Temp', 'Feels Like', 'Min Temp', 'Max Temp'],
          datasets: [
            {
              label: 'Temperature (°C)',
              data: [data.temp, data.feelsLike, data.tempMin, data.tempMax],
              fill: true,
              backgroundColor: 'rgba(75,192,192,0.2)',
              borderColor: 'rgba(75,192,192,1)',
            },
          ],
        }}
      />
    </Block>
  );
};

export default TemperatureChart;
