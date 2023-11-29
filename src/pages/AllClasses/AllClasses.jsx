import { Helmet } from 'react-helmet-async';
import Container from '../../components/Shared/Container';
import SectionHeader from '../../components/Shared/SectionHeader/SectionHeader';
import Card from '../../components/Dashboard/Student/Card';
import { allClasses } from '../../api/auth';
import { useQuery } from '@tanstack/react-query';

const AllClasses = () => {
  const { data, isLoading } = useQuery({
    queryKey: ['allClasses'],
    queryFn: async () => await allClasses(),
  });

  const classesData = data?.filter((item) => item.status === 'approve');

  if (isLoading) return;
  return (
    <div className='min-h-[calc(100vh-167px)] h-full py-8'>
      <Helmet>
        <title>All Classes || SkillUP</title>
      </Helmet>
      <Container>
        <SectionHeader
          heading={'Explore Our'}
          headingSpan={'Classes'}
          headingDescription={
            'Embark on a learning journey with our rich selection of diverse and engaging Classes'
          }
        />
        <div className='grid gap-6 grid-cols-2 sm:grid-cols-2 md:grid-cols-3 lg:grid-cols-4'>
          {classesData.map((item) => (
            <Card key={item?._id} data={item} />
          ))}
        </div>
      </Container>
    </div>
  );
};

export default AllClasses;
