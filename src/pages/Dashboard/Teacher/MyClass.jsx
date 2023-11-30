import { getSingleUsers, getTeacherClasses } from '../../../api/auth';
import useAuth from '../../../hooks/useAuth';
import ClassCard from '../../../components/Dashboard/Teacher/ClassCard';
import SectionHeader from '../../../components/Shared/SectionHeader/SectionHeader';
import { useQuery } from '@tanstack/react-query';
import { Helmet } from 'react-helmet-async';

const MyClass = () => {
  const { user } = useAuth();
  const { data: myInfo = [] } = useQuery({
    queryKey: ['myInfo'],
    queryFn: async () => await getSingleUsers({ email: user?.email }),
  });
  console.log(myInfo);
  const { data: classes = [] } = useQuery({
    queryKey: ['classes'],
    enabled: !!myInfo?.email,
    queryFn: async () => await getTeacherClasses(myInfo?.email),
  });
  if (classes.length <= 0)
    return (
      <div className='w-full h-screen flex justify-center items-center text-3xl font-bold'>
        No Data Found !
      </div>
    );

  return (
    <div>
      <Helmet>
        <title>My all Classes || Dashboard</title>
      </Helmet>
      <SectionHeader heading={'My all'} headingSpan={'Classes'} />
      <div className='grid gap-4 md:gap-6 grid-cols-1 sm:grid-cols-2 md:grid-cols-1 lg:grid-cols-2 xl:grid-cols-3'>
        {classes.map((item, ind) => (
          <ClassCard key={ind} myClass={item} />
        ))}
      </div>
    </div>
  );
};

export default MyClass;
