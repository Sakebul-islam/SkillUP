import { BsFillPersonFill } from 'react-icons/bs';

const InstructorCard = ({ teacher }) => {
  return (
    <div className=' bg-neutral-100'>
      <figure className='p-2'>
        <img className='w-full' src={teacher?.image} alt='' />
      </figure>
      <div className='flex flex-col justify-center items-center gap-1 py-4'>
        <p className='text-lg font-bold capitalize'>{teacher?.name}</p>
        <div className='flex flex-row justify-center items-center gap-3 text-lg'>
          <BsFillPersonFill color='#03b97c' />
          <span>{teacher?.totalEnrollment} Enrolled</span>
        </div>
      </div>
    </div>
  );
};

export default InstructorCard;
