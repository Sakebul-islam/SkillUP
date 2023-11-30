import { BsFillPersonFill } from 'react-icons/bs';
import { useEffect } from 'react';
import AOS from 'aos';
import 'aos/dist/aos.css';

const InstructorCard = ({ teacher }) => {
    useEffect(() => {
      AOS.init({
        duration: 3000,
      });
    }, []);

  return (
    <div
      className=' bg-neutral-100'
      data-aos='fade-up'
      data-aos-duration='3000'
    >
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
