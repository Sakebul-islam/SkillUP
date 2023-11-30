import { useParams } from 'react-router-dom';
import SectionHeader from '../../../components/Shared/SectionHeader/SectionHeader';
import useAuth from '../../../hooks/useAuth';
import { useQuery } from '@tanstack/react-query';
import { checkAssignment, singleClass } from '../../../api/auth';
import Container from '../../../components/Shared/Container';
import ClassDataRow from '../../../components/Dashboard/Student/ClassDataRow';
import FeedBackModal from '../../../components/Modal/FeedBackModal';
import { HiOutlinePlusSm } from 'react-icons/hi';
import { useState } from 'react';
import { Helmet } from 'react-helmet-async';

const MyClassDetails = () => {
  let [isOpen, setIsOpen] = useState(false);
  const params = useParams();

  const { data: classInfo = {} } = useQuery({
    queryKey: ['getSingleClasss'],
    queryFn: async () => await singleClass(params?.id),
  });

  const { user } = useAuth();

  const { data: assignmentStatus = [] } = useQuery({
    queryKey: ['assignmentStatus'],
    queryFn: async () =>
      await checkAssignment(`email=${user?.email}&classId=${params?.id}`),
  });

  return (
    <div>
      <Helmet>
        <title>Assignment || Dashboard</title>
      </Helmet>
      <div
        onClick={() => setIsOpen(true)}
        className='bg-gray-200 -mt-5 -ml-5 -mr-5 flex justify-center items-center'
      >
        <span className='flex gap-2 cursor-pointer select-none justify-center items-center bg-[#03b97c] text-white rounded-full px-5 m-2'>
          <HiOutlinePlusSm size={40} />
          <span className='inline-block text-xl font-bold'>TER</span>
        </span>
      </div>
      <div className='mt-10'>
        <SectionHeader
          heading={'Your Enrolled'}
          headingSpan={'Class Assignment'}
          headingDescription={
            'Explore assignments, submit tasks, and track your class progress seamlessly'
          }
        />
      </div>
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
                      Assignment Title
                    </th>
                    <th
                      scope='col'
                      className='px-5 py-3 bg-white  border-b border-gray-200 text-gray-800  text-left text-sm uppercase font-normal truncate'
                    >
                      Description
                    </th>
                    <th
                      scope='col'
                      className='px-5 py-3 bg-white  border-b border-gray-200 text-gray-800  text-left text-sm uppercase font-normal truncate'
                    >
                      Deadline
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
                  {classInfo?.assignment?.map((assignment, index) => (
                    <ClassDataRow
                      key={index}
                      assignment={assignment}
                      classInfo={classInfo}
                      assignmentStatus={assignmentStatus[index]}
                    />
                  ))}
                </tbody>
              </table>
            </div>
          </div>
        </div>
      </Container>
      <FeedBackModal
        setIsOpen={setIsOpen}
        isOpen={isOpen}
        classInfo={classInfo}
      />
    </div>
  );
};

export default MyClassDetails;
