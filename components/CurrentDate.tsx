import { Block, Icon } from 'landing-page-ui';
import CurrentTime from './CurrentTime';



const CurrentDate = () => {
  const date = new Date();
  console.log(date)
  const dateString = date.toDateString();

  return (
    <Block tagName='div' styles='mt-3 flex flex-col items-center'>
      <Block tagName='div' styles='flex gap-8 items-center justify-center'>
        <Block tagName='div' styles='flex gap-3 items-center'>
          <Icon icon='fa-calendar-day' iconLibrary='font-awesome' styles='h-10 w-10 flex items-center justify-center border border-gray-500/40 rounded-full drop-shadow-lg shadow-xl hover:shadow-none hover:drop-shadow-none hover:border-gray-500/80 transition-all duration-300 ease-in-out text-xl ' title="Date" />
          {dateString}
        </Block>
        <CurrentTime date={date} />
      </Block>
    </Block>
  );
};

export default CurrentDate;
