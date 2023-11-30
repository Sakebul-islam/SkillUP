import { Outlet, useLocation } from 'react-router-dom';
import Sidebar from '../components/Dashboard/Sidebar/Sidebar';
import { Helmet } from 'react-helmet-async';
import useAuth from '../hooks/useAuth';
import { useQuery } from '@tanstack/react-query';
import { getSingleUsers } from '../api/auth';
import StudentDashboard from '../pages/Dashboard/Student/StudentDashboard';

const DashboardLayout = () => {
  const location = useLocation();
  const { user } = useAuth();

  const { data: myInfo = [] } = useQuery({
    queryKey: ['myInfo'],
    queryFn: async () => await getSingleUsers({ email: user?.email }),
  });

  return (
    <div className='relative min-h-screen md:flex'>
      <Helmet>
        <title>Dashboard || SkillUP</title>
      </Helmet>
      <Sidebar />
      <div className='flex-1 md:ml-64 overflow-x-auto'>
        <div className='p-5'>
          <Outlet />
          {myInfo?.role === 'student' && location?.pathname === '/dashboard' ? (
            <StudentDashboard />
          ) : (
            ''
          )}
        </div>
      </div>
    </div>
  );
};

export default DashboardLayout;
