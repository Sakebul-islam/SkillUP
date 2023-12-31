import { Link } from 'react-router-dom';

import err404 from '../../assets/images/404-Error.svg';

import { FcHome } from 'react-icons/fc';
import { Helmet } from 'react-helmet-async';
const ErrorPage = () => {
  return (
    <>
      <Helmet>
        <title>Skill Up || 404 Error </title>
      </Helmet>
      <div
        id='error-page'
        className='w-full min-h-screen flex flex-col justify-center items-center bg-gray-300 space-y-7'
      >
        <figure className='w-full sm:w-1/3 mb-4'>
          <img src={err404} alt='Error 404' />
        </figure>
        <Link
          to={'/'}
          className='px-8 py-2 bg-[#03b97c] rounded text-2xl font-bold flex flex-col justify-center items-center text-white gap-2'
        >
          <FcHome className='text-6xl' />
          <span>Back To Home</span>
        </Link>
      </div>
    </>
  );
};

export default ErrorPage;
