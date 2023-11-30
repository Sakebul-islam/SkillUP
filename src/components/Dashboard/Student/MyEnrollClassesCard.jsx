import React from 'react';
import { Link } from 'react-router-dom';

const MyEnrollClassesCard = ({ myClass }) => {
  return (
    <div className='flex flex-col rounded-md bg-neutral-100'>
      <figure>
        <img
          className='min-h-[162px] sm:max-h-96 w-full rounded-t-md'
          draggable='false'
          src={myClass?.image}
          alt={myClass?.classTitle}
          title={myClass?.classTitle}
        />
      </figure>
      <div className='p-4 flex-grow'>
        <h3 className='line-clamp-2	text-lg font-bold min-h-[56px]'>
          {myClass?.classTitle}
        </h3>
        <div className='divider m-0'></div>
        <div className=''>
          <span>Author : {myClass?.name}</span>
        </div>
        <div className='divider m-0'></div>
        <div>
          <Link
            to={`/dashboard/myenroll-class/${myClass?._id}`}
            className='text-md rounded-sm font-bold bg-[#03b97c] px-3 py-2 sm:px-4 sm:py-3 text-white truncate w-full block text-center'
          >
            Continue
          </Link>
        </div>
      </div>
    </div>
  );
};

export default MyEnrollClassesCard;
