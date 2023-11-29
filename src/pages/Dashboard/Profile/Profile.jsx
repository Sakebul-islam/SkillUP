import { useQuery } from '@tanstack/react-query';
import useAuth from '../../../hooks/useAuth';
import { Helmet } from 'react-helmet-async';
import { getSingleUsers } from '../../../api/auth';

const Profile = () => {
  const { user } = useAuth();

  const { data: userProfile } = useQuery({
    queryKey: ['profile'],
    queryFn: async () => await getSingleUsers({ email: user?.email }),
  });

  return (
    <div className='flex justify-center items-center h-screen'>
      <Helmet>
        <title>Profile || Dashboard</title>
      </Helmet>
      <div className='bg-white shadow-lg rounded-md w-11/12 md:w-3/5'>
        <div className='bg-[#03b97c] w-full h-[150px] rounded-t-md'></div>
        <div className='flex flex-col items-center justify-center p-4 -mt-16'>
          <span className='relative block'>
            <img
              alt='profile'
              src={userProfile?.image}
              className='mx-auto object-cover rounded-full h-24 w-24 border-t-white border-2 border-[#03b97cb4] '
            />
          </span>

          <p className='p-2 px-4 text-xs text-white bg-[#03b97cb4] rounded-full mt-4 uppercase'>
            {userProfile?.role}
          </p>
          <p className='mt-2 text-xl font-medium text-gray-800 '>
            <span className='inline-block text-base sm:text-lg'>User Id:</span>
            <span className='inline-block text-base sm:text-lg'>
              {userProfile?._id}
            </span>
          </p>
          <div className='w-full p-2 mt-4 rounded-lg'>
            <div className='flex flex-col sm:flex-row gap-4 sm:flex-wrap sm:items-center sm:justify-between text-sm text-gray-600 '>
              <p className='flex flex-col'>
                Name
                <span className='font-bold text-black '>
                  {userProfile?.name}
                </span>
              </p>
              <p className='flex flex-col'>
                Email
                <span className='font-bold text-black '>
                  {userProfile?.email}
                </span>
              </p>
              <p className='flex flex-col'>
                Phone Number
                <span className='font-bold text-black '>
                  {userProfile?.phone}
                </span>
              </p>
            </div>
          </div>
        </div>
      </div>
    </div>
  );
};

export default Profile;
