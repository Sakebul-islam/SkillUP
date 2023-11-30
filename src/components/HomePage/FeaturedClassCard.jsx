import { Link } from 'react-router-dom';
import { useEffect } from 'react';
import AOS from 'aos';
import 'aos/dist/aos.css';

const ClassCard = ({ course }) => {
  useEffect(() => {
    AOS.init({
      duration: 3000,
    });
  }, []);

  return (
    <div className='flex flex-col rounded-md bg-neutral-100' data-aos='zoom-in'>
      <figure className=''>
        <img
          className='min-h-[162px] sm:max-h-96 w-full rounded-t-md'
          draggable='false'
          src={course?.image}
          alt={course?.name}
          title={course?.name}
        />
      </figure>
      <div className='p-4 flex-grow'>
        <h3 className='line-clamp-2	text-lg font-bold min-h-[56px]'>
          {course?.classTitle}
        </h3>
        <div className='divider m-0'></div>
        <div className='flex flex-col justify-between'>
          <span>Author : {course?.name}</span>
        </div>
        <p className='text-lg font-bold'>Price : ${course?.price}</p>
        <div className='divider m-0 after:bg-[#03b97c] before:bg-[#03b97c]'></div>
        <p className='text-lg font-bold'>Total Enroll : {course?.enroll}</p>
        <div className='divider m-0 after:bg-[#03b97c] before:bg-[#03b97c]'></div>
        <div>
          {course?.description?.length > 150
            ? `${course?.description.slice(0, 80)}...`
            : course?.description}
        </div>
      </div>
      <div className='p-4 w-full select-none'>
        <Link
          to={`/class/${course?._id}`}
          className='text-md block text-center rounded-sm font-bold bg-[#03b97c] px-3 py-2 sm:px-4 sm:py-3 text-white truncate w-full'
        >
          Enroll
        </Link>
      </div>
    </div>
  );
};

export default ClassCard;
