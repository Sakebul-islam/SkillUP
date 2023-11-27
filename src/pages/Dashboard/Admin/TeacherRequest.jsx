import { Helmet } from 'react-helmet-async';
import { useQuery } from '@tanstack/react-query';
import TeacherRequestDataRow from '../../../components/Dashboard/Admin/TeacherRequestDataRow';
import Loader from '../../../components/Shared/Loader';
import { getAllTeacherRequest } from '../../../api/auth';

const TeacherRequest = () => {
  const {
    data: teacherRequests = [],
    refetch,
    isLoading,
  } = useQuery({
    queryKey: ['teacherRequests'],
    queryFn: async () => await getAllTeacherRequest(),
  });
  console.log(teacherRequests);
  if (isLoading) return <Loader />;
  if (teacherRequests?.length < 0)
    return (
      <div className='text-2xl font-bold h-screen flex justify-center items-center'>
        😥 No Request Found!
      </div>
    );

  return (
    <div className='container mx-auto px-4 sm:px-8'>
      <Helmet>
        <title>Teacher Request || Dashboard</title>
      </Helmet>

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
                      Name
                    </th>
                    <th
                      scope='col'
                      className='px-5 py-3 bg-white  border-b border-gray-200 text-gray-800  text-left text-sm uppercase font-normal truncate'
                    >
                      Image
                    </th>
                    <th
                      scope='col'
                      className='px-5 py-3 bg-white  border-b border-gray-200 text-gray-800  text-left text-sm uppercase font-normal truncate'
                    >
                      Experience
                    </th>
                    <th
                      scope='col'
                      className='px-5 py-3 bg-white  border-b border-gray-200 text-gray-800  text-left text-sm uppercase font-normal truncate'
                    >
                      Title
                    </th>
                    <th
                      scope='col'
                      className='px-5 py-3 bg-white  border-b border-gray-200 text-gray-800  text-left text-sm uppercase font-normal truncate'
                    >
                      Category
                    </th>
                    <th
                      scope='col'
                      className='px-5 py-3 bg-white  border-b border-gray-200 text-gray-800  text-left text-sm uppercase font-normal truncate'
                    >
                      Status
                    </th>
                    <th
                      scope='col'
                      className='px-5 py-3 bg-white  border-b border-gray-200 text-gray-800  text-left text-sm uppercase font-normal truncate'
                    >
                      Action
                    </th>
                  </tr>
                </thead>
                <tbody>
                  {teacherRequests &&
                    teacherRequests.map((user) => (
                      <TeacherRequestDataRow
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
    </div>
  );
};

export default TeacherRequest;
