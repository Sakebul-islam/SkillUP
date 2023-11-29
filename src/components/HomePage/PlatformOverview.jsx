import Container from '../Shared/Container';
import SectionHeader from '../Shared/SectionHeader/SectionHeader';

import platform_overview from '../../assets/images/platform_overview.png';
import { getSiteStats } from '../../api/auth';
import { useQuery } from '@tanstack/react-query';

const PlatformOverview = () => {
  const { data: siteStats = {} } = useQuery({
    queryKey: ['siteStats'],
    queryFn: async () => await getSiteStats(),
  });

  return (
    <div className='my-6'>
      <Container>
        <SectionHeader
          heading={'Dive into our'}
          headingSpan={'Platform Overview'}
          headingDescription={`Quick stats on total users, classes, and student enrollments. Experience the pulse of our dynamic learning environment`}
        />
        <div className='flex flex-col md:flex-row gap-4'>
          <div className='flex gap-4 flex-col justify-center items-center flex-1'>
            <div className='flex flex-row gap-4'>
              <div className='bg-neutral-100 grid place-content-center text-center min-w-[150px] sm:min-w-[180px] min-h-[100px] sm:min-h-[180px] space-y-4'>
                <h4 className='text-lg sm:text-xl font-bold'>Total User</h4>
                <span className='text-3xl sm:text-5xl font-bold text-[#03b97c]'>
                  {siteStats?.totalUsers}
                </span>
              </div>
              <div className='bg-neutral-100 grid place-content-center text-center min-w-[150px] sm:min-w-[180px] min-h-[100px] sm:min-h-[180px] space-y-4'>
                <h4 className='text-lg sm:text-xl font-bold'>
                  Total Enrollment
                </h4>
                <span className='text-3xl sm:text-5xl font-bold text-[#03b97c]'>
                  {siteStats?.totalEnrollment}
                </span>
              </div>
            </div>
            <div className='flex justify-center items-center'>
              <div className='bg-neutral-100 grid place-content-center text-center min-w-[150px] sm:min-w-[180px] min-h-[100px] sm:min-h-[180px] space-y-4'>
                <h4 className='text-lg sm:text-xl font-bold'>Total Classes</h4>
                <span className='text-3xl sm:text-5xl font-bold text-[#03b97c]'>
                  {siteStats?.totalClasses}
                </span>
              </div>
            </div>
          </div>
          <div className='flex-1'>
            <img src={platform_overview} alt='' />
          </div>
        </div>
      </Container>
    </div>
  );
};

export default PlatformOverview;
