import { Block, Icon } from 'landing-page-ui';

interface LocationProps {
  location: string;
}

const Location: React.FC<LocationProps> = ({location}) => {
  return (
    <Block tagName='div' styles='flex flex-col items-center'>
      <Block tagName='span' styles='flex items-center gap-3'>
        <Icon icon='fa-location-dot' iconLibrary='font-awesome' styles='h-10 w-10 flex items-center justify-center border border-gray-500/40 rounded-full drop-shadow-lg shadow-xl hover:shadow-none hover:drop-shadow-none hover:border-gray-500/80 transition-all duration-300 ease-in-out ' title="location" />
        {location}
      </Block>
    </Block>
  );
};

export default Location;
