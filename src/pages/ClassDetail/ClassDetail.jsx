import { useParams } from 'react-router-dom';
import useAuth from '../../hooks/useAuth';
import Container from '../../components/Shared/Container';
import SectionHeader from '../../components/Shared/SectionHeader/SectionHeader';
import { getSingleUsers, singleClass } from '../../api/auth';
import { useQuery } from '@tanstack/react-query';
import { useEffect, useState } from 'react';
import PayModal from '../../components/Modal/PayModal';

const ClassDetail = () => {
  const { user } = useAuth();
  let [isOpen, setIsOpen] = useState(false);
  const params = useParams();
  const [payInfo, setPayInfo] = useState({});

  const { data: myInfo = [] } = useQuery({
    queryKey: ['myInfo'],
    queryFn: async () => await getSingleUsers({ email: user?.email }),
  });

  const { data: classInfo = {}, refetch } = useQuery({
    queryKey: ['getSingleClass'],
    queryFn: async () => await singleClass(params?.id),
  });

  useEffect(() => {
    const allInfo = {
      student: {
        name: myInfo?.name,
        email: myInfo?.email,
        phone: myInfo?.phone,
        image: myInfo?.image,
      },
      author: {
        name: classInfo?.name,
        email: classInfo?.email,
      },
      class: {
        title: classInfo?.classTitle,
        image: classInfo?.image,
        classId: classInfo?._id,
        price: classInfo?.price,
      },
    };
    setPayInfo(allInfo);
  }, [myInfo, classInfo]);

  const closeModal = () => {
    setIsOpen(false);
  };
  return (
    <div className='min-h-[calc(100vh-167px)] h-full py-8'>
      <Container>
        <SectionHeader
          heading={'Class'}
          headingSpan={'Details'}
          headingDescription={
            'Discover comprehensive information about our classes, accessible to all users for an insightful overview'
          }
        />
        <div className='flex gap-6 flex-col md:flex-row'>
          <figure className='flex-1'>
            <img className='w-full' src={classInfo?.image} alt='' />
          </figure>
          <div className='flex-1 flex flex-col'>
            <div className='flex-grow mb-6 md:mb-0'>
              <h2 className='line-clamp-2	text-xl font-bold mb-6'>
                {classInfo?.classTitle}
              </h2>

              <div className='flex flex-col justify-between'>
                <span className='font-bold text-gray-600'>
                  Author : {classInfo?.name}
                </span>
              </div>
              <div className='divider m-0 after:bg-[#03b97c] before:bg-[#03b97c]'></div>
              <p className='text-lg font-bold'>Price : ${classInfo?.price}</p>
              <div className='divider m-0 after:bg-[#03b97c] before:bg-[#03b97c]'></div>

              <div>
                <span className='text-lg font-bold'>Description : </span>
                {classInfo?.description?.length > 500
                  ? `${classInfo?.description.slice(0, 500)}...`
                  : classInfo?.description}
              </div>
              <div className='divider m-0 after:bg-[#03b97c] before:bg-[#03b97c]'></div>
            </div>
            <button
              onClick={() => setIsOpen(true)}
              className='text-md block text-center rounded-sm font-bold bg-[#03b97c] px-3 py-2 sm:px-4 sm:py-3 text-white truncate w-full'
            >
              Pay Now
            </button>
          </div>
        </div>
      </Container>
      <PayModal isOpen={isOpen} payInfo={payInfo} closeModal={closeModal} />
    </div>
  );
};

export default ClassDetail;
