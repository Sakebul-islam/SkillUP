import SectionHeader from '../../../components/Shared/SectionHeader/SectionHeader';
import Container from '../../../components/Shared/Container';
import { useState } from 'react';
import AssignmentModal from '../../../components/Modal/AssignmentModal';
import { MdAddCircle } from 'react-icons/md';
import { useQuery } from '@tanstack/react-query';
import { singleClass } from '../../../api/auth';
import { useParams } from 'react-router-dom';
import { Helmet } from 'react-helmet-async';
import axiosSecure from '../../../api/axiosFunc';

const ClassDetails = () => {
  let [isOpen, setIsOpen] = useState(false);
  const params = useParams();

  const { data: classInfo = [], refetch } = useQuery({
    queryKey: ['getSingleClass'],
    queryFn: async () => await singleClass(params?.id),
  });
  const { data: todayTotalAssignment } = useQuery({
    queryKey: ['TotalAssignment'],
    queryFn: async () => {
      const { data } = await axiosSecure(
        `/submitted-assignments/${params?.id}`
      );
      return data;
    },
  });

  const { assignment } = classInfo;

  return (
    <div>
      <Helmet>
        <title>Class Progress || Dashboard</title>
      </Helmet>
      <Container>
        <div className='my-6'>
          <SectionHeader
            heading={'Class'}
            headingSpan={'Progress'}
            headingDescription={
              'Effortlessly track student progress with our exclusive Progress Section, tailored for teachers.'
            }
          />
          <div className='flex gap-6 flex-col sm:flex-row justify-evenly mt-8'>
            <div className='bg-[#03b97c] text-white p-6 flex flex-col items-center text-lg font-bold'>
              <span className='mb-2 border-b capitalize'>Total enrollment</span>
              <span className='text-4xl'>{classInfo?.enroll || 0}</span>
            </div>
            <div className='bg-[#03b97c] text-white p-6 flex flex-col items-center text-lg font-bold'>
              <span className='mb-2 border-b capitalize'>Total assignment</span>
              <span className='text-4xl'>
                {assignment?.length ? assignment?.length + 1 : '0'}
              </span>
            </div>
            <div className='bg-[#03b97c] text-white p-6 flex flex-col items-center text-lg font-bold'>
              <span className='mb-2 border-b capitalize'>
                Today Assignment Submitted
              </span>
              <span className='text-4xl'> {todayTotalAssignment} </span>
            </div>
          </div>
        </div>
        <div className='my-16'>
          <SectionHeader
            heading={'Class'}
            headingSpan={'Assignment'}
            headingDescription={
              'Effortlessly track student progress with our exclusive Progress Section, tailored for teachers.'
            }
          />
          <h2 className='text-center text-xl font-bold mb-4'>
            Class Title : {classInfo?.classTitle}
          </h2>
          <div className='flex justify-center items-center'>
            <span
              onClick={() => setIsOpen(true)}
              className='bg-[#03b97c] text-white p-6 flex flex-col items-center cursor-pointer'
            >
              <span className='mb-2 text-lg font-bold'>Create Assignment</span>
              <span className='text-4xl'>
                <MdAddCircle size={50} />
              </span>
            </span>
          </div>
          <AssignmentModal setIsOpen={setIsOpen} isOpen={isOpen} />
        </div>
      </Container>
    </div>
  );
};

export default ClassDetails;
