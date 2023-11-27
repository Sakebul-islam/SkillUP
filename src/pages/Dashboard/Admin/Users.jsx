import { useQuery } from '@tanstack/react-query';
import Container from '../../../components/Shared/Container';
import { getAllUsers } from '../../../api/auth';
import Loader from '../../../components/Shared/Loader';
import UserDataRow from '../../../components/Dashboard/Admin/UserDataRow';

const Users = () => {
  const {
    data: users = [],
    refetch,
    isLoading,
  } = useQuery({
    queryKey: ['users'],
    queryFn: async () => await getAllUsers(),
  });

  if (isLoading) return <Loader />;

  return (
    <div>
      <Container>
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
    </div>
  );
};

export default Users;
