import { Navigate } from 'react-router-dom';
import Loader from '../components/Shared/Loader';
import useRole from '../hooks/useRole';

// eslint-disable-next-line react/prop-types
const TeacherRoute = ({ children }) => {
  const [role, isLoading] = useRole();

  if (isLoading) {
    return <Loader />;
  }

  if (role === 'teacher') {
    return children;
  }

  return <Navigate to='/dashboard' />;
};

export default TeacherRoute;
