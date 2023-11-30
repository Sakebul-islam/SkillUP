import { useQuery } from '@tanstack/react-query';
import Container from '../../../components/Shared/Container';
import { getAllUsers } from '../../../api/auth';
import Loader from '../../../components/Shared/Loader';
import UserDataRow from '../../../components/Dashboard/Admin/UserDataRow';
import { Helmet } from 'react-helmet-async';
import { useState } from 'react';

const Users = () => {
  const [search, setSearch] = useState(null);
  const {
    data: users = [],
    refetch,
    isLoading,
  } = useQuery({
    queryKey: ['users', search],
    queryFn: async () => await getAllUsers(search),
  });

  const handleSearch = (e) => {
    setSearch(e.target.value);
  };

  if (isLoading) return <Loader />;

  return (
    <>
      <Helmet>
        <title>All Users & Role || Dashboard</title>
      </Helmet>
      <Container>
        <form className='flex justify-center items-center'>
          <span
            onClick={() => setSearch(null)}
            className='p-3 bg-[#03b97c] inline-block truncate cursor-pointer z-10'
          >
            All
          </span>
          <input
            onBlur={(e) => handleSearch(e)}
            type='text'
            placeholder='Type here'
            className='input focus:outline input-bordered rounded-none input-accent w-full max-w-xs'
          />
          <span className='p-3 bg-[#03b97c] inline-block truncate cursor-pointer z-10'>
            Search User
          </span>
        </form>
        <div className='py-8'>
          <div className='-mx-4 sm:-mx-8 px-4 sm:px-8 py-4 overflow-x-auto'>
            <div className='inline-block min-w-full shadow  overflow-hidden'>
              <table className='min-w-full leading-normal'>
                <thead>
                  <tr>
                    <th
                      scope='col'
                      className='px-5 py-3 bg-white  border-b border-gray-200 text-gray-800  text-left text-sm uppercase font-normal truncate'
                    >
                      User name
                    </th>
                    <th
                      scope='col'
                      className='px-5 py-3 bg-white  border-b border-gray-200 text-gray-800  text-left text-sm uppercase font-normal truncate'
                    >
                      User Email
                    </th>
                    <th
                      scope='col'
                      className='px-5 py-3 bg-white  border-b border-gray-200 text-gray-800  text-left text-sm uppercase font-normal truncate'
                    >
                      User image
                    </th>
                    <th
                      scope='col'
                      className='px-5 py-3 bg-white  border-b border-gray-200 text-gray-800  text-left text-sm uppercase font-normal truncate'
                    >
                      User Role
                    </th>
                    <th
                      scope='col'
                      className='px-5 py-3 bg-white  border-b border-gray-200 text-gray-800  text-left text-sm uppercase font-normal truncate'
                    >
                      Make admin
                    </th>
                  </tr>
                </thead>
                <tbody>
                  {users &&
                    users.map((user) => (
                      <UserDataRow
                        key={user?._id}
                        user={user}
                        refetch={refetch}
                      />
                    ))}
                </tbody>
              </table>
            </div>
          </div>
        </div>
      </Container>
    </>
  );
};

export default Users;
