import { useQuery } from '@tanstack/react-query';
import { useState } from 'react';
import { Helmet } from 'react-helmet-async';
import SectionHeader from '../../../components/Shared/SectionHeader/SectionHeader';
import { getMyClasses } from '../../../api/auth';
import useAuth from '../../../hooks/useAuth';
import MyEnrollClassesCard from '../../../components/Dashboard/Student/MyEnrollClassesCard';

const MyEnrollClass = () => {
  const { user } = useAuth();
  const {
    data: myClasses,
    isLoading,
    refetch,
  } = useQuery({
    queryKey: ['myClasses', user?.email],
    queryFn: async () => await getMyClasses(user?.email),
  });
  console.log(myClasses);

  if (isLoading) return;
  return (
    <div>
      <Helmet>
        <title>My Enroll Class || SkillUP</title>
      </Helmet>
      <SectionHeader
        heading={'Explore Your'}
        headingSpan={'Enrollments'}
        headingDescription={
          'Discover, revisit, and thrive in your enrolled courses—empowering continuous learning'
        }
      />
      <div className='grid gap-4 md:gap-6 grid-cols-1 sm:grid-cols-2 md:grid-cols-1 lg:grid-cols-2 xl:grid-cols-3'>
        {myClasses.map((myClass) => (
          <MyEnrollClassesCard key={myClass?._id} myClass={myClass} />
        ))}
      </div>
    </div>
  );
};

export default MyEnrollClass;
