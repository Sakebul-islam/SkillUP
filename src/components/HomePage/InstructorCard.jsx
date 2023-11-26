import { BsFillPersonFill } from 'react-icons/bs';

const InstructorCard = () => {
  return (
    <div className=' bg-neutral-100'>
      <figure className='p-2'>
        <img
          className='w-full'
          src='https://demoapus1.com/skillup/wp-content/uploads//learn-press-profile/5/163bc32b5bd142be912f4d04a98845f4.jpeg'
          alt=''
        />
      </figure>
      <div className='flex flex-col justify-center items-center gap-1 py-4'>
        <p className='text-lg font-bold'>Name : Engelio Rita</p>
        <div className='flex flex-row justify-center items-center gap-3 text-lg'>
          <BsFillPersonFill color='#03b97c' />
          <span>475 Enrolled</span>
        </div>
      </div>
    </div>
  );
};

export default InstructorCard;
