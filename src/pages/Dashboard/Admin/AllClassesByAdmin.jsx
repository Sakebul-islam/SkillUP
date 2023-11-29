import { useQuery } from '@tanstack/react-query';
import AllClassesDataRow from '../../../components/Dashboard/Admin/AllClassesDataRow';
import Container from '../../../components/Shared/Container';
import { getAllClassesByAdmin } from '../../../api/auth';

const AllClassesByAdmin = () => {
  const { data: teacherClasses = [] } = useQuery({
    queryKey: ['teacherClasses'],
    queryFn: async () => await getAllClassesByAdmin(),
  });

  return (
    <Container>
      <div className='py-8'>
        <div className='-mx-4 sm:-mx-8 px-4 sm:px-8 py-4 !overflow-x-auto'>
          <div className='inline-block min-w-full shadow !overflow-hidden'>
            <table className='min-w-full leading-normal'>
              <thead>
                <tr>
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
                    Image
                  </th>
                  <th
                    scope='col'
                    className='px-5 py-3 bg-white  border-b border-gray-200 text-gray-800  text-left text-sm uppercase font-normal truncate'
                  >
                    Email
                  </th>
                  <th
                    scope='col'
                    className='px-5 py-3 bg-white  border-b border-gray-200 text-gray-800  text-left text-sm uppercase font-normal truncate'
                  >
                    Short Description
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
                {teacherClasses.map((item) => (
                  <AllClassesDataRow key={item?._id} item={item} />
                ))}
              </tbody>
            </table>
          </div>
        </div>
      </div>
    </Container>
  );
};

export default AllClassesByAdmin;
